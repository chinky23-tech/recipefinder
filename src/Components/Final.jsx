//final code
/*import React, { useEffect, useState } from "react";
import axios from "axios";

// Configuration
const BASE_URL = "http://localhost:8080";

// Helper functions
const getAuthToken = () => {
  try {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsed = JSON.parse(userData);
      return parsed.token || null;
    }
  } catch (e) {
    console.error("Error reading token:", e);
  }
  return null;
};

const getCompanyId = () => {
  try {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsed = JSON.parse(userData);
      return parsed.companyId || 1; // Default to 1
    }
  } catch (e) {
    console.error("Error reading companyId:", e);
  }
  return 1; // Fallback
};

const createApiClient = () => {
  const token = getAuthToken();
  if (!token) {
    console.error("No authentication token found!");
  }
  
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json"
    }
  });
};

export default function UserDashboard() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const companyId = getCompanyId();

  // Fetch documents on component mount
  useEffect(() => {
    fetchDocuments();
  }, []);

  // Fetch documents from API
  const fetchDocuments = async () => {
    console.log("Fetching documents for company:", companyId);
    setLoading(true);
    setError("");

    try {
      const api = createApiClient();
      
      // This API call WILL appear in Network tab
      const response = await api.get(`/api/companies/${companyId}/documents`);
      
      console.log("Documents API Response:", response);
      console.log("Response data:", response.data);
      
      if (response.data && Array.isArray(response.data)) {
        setDocuments(response.data);
      } else {
        console.warn("Unexpected response format:", response.data);
        setDocuments([]);
      }
    } catch (err) {
      console.error("❌ Failed to fetch documents:", err);
      console.error("Error details:", err.response?.status, err.response?.data);
      
      if (err.response?.status === 401) {
        setError("Session expired. Please login again.");
        // Redirect to login after 2 seconds
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else if (err.response?.status === 403) {
        setError("Access denied. You don't have permission.");
      } else if (err.response?.status === 404) {
        setError("Documents not found. API endpoint might be incorrect.");
      } else {
        setError(err.response?.data?.message || "Failed to load documents");
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle file upload
  const handleFileUpload = async (files) => {
    if (!files || files.length === 0) return;
    
    setUploading(true);
    setError("");

    try {
      const api = createApiClient();
      
      for (const file of Array.from(files)) {
        // Check file size
        if (file.size > 50 * 1024 * 1024) {
          alert(`❌ ${file.name} is too large (max 50MB)`);
          continue;
        }

        const formData = new FormData();
        formData.append("file", file);
        
        console.log("Uploading file:", file.name);
        
        // This upload API call WILL appear in Network tab
        await api.post(`/api/companies/${companyId}/documents`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        
        console.log("✅ Upload successful:", file.name);
      }

      // Refresh documents list
      await fetchDocuments();
      alert("✅ Files uploaded successfully!");
      
    } catch (err) {
      console.error("❌ Upload failed:", err);
      console.error("Upload error details:", err.response?.data);
      setError(err.response?.data?.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  // Delete document
  const deleteDocument = async (id) => {
    if (!window.confirm("Are you sure you want to delete this document?")) return;
    
    setError("");

    try {
      const api = createApiClient();
      console.log("Deleting document ID:", id);
      
      // This delete API call WILL appear in Network tab
      await api.delete(`/api/companies/${companyId}/documents/${id}`);
      
      // Remove from local state
      setDocuments(prev => prev.filter(doc => doc.id !== id));
      console.log("✅ Document deleted");
      
    } catch (err) {
      console.error("❌ Delete failed:", err);
      console.error("Delete error:", err.response?.data);
      setError(err.response?.data?.message || "Delete failed");
    }
  };

  // Preview document
  const previewDocument = async (doc) => {
    setPreview(null);
    setError("");

    try {
      const api = createApiClient();
      console.log("Previewing document:", doc.id);
      
      // This preview API call WILL appear in Network tab
      const response = await api.get(`/api/companies/${companyId}/documents/${doc.id}`, {
        responseType: "blob"
      });

      const blob = response.data;
      const fileType = blob.type || doc.type || "application/octet-stream";
      const url = URL.createObjectURL(blob);
      
      setPreview({
        name: doc.name,
        url: url,
        type: fileType
      });
      
      console.log("✅ Preview loaded");
      
    } catch (err) {
      console.error("❌ Preview failed:", err);
      console.error("Preview error:", err.response?.data);
      setError(err.response?.data?.message || "Preview failed");
    }
  };

  // Download document
  const downloadDocument = async (doc) => {
    setError("");

    try {
      const api = createApiClient();
      console.log("Downloading document:", doc.id);
      
      // This download API call WILL appear in Network tab
      const response = await api.get(`/api/companies/${companyId}/documents/${doc.id}`, {
        responseType: "blob"
      });

      const blob = response.data;
      const url = window.URL.createObjectURL(blob);
      
      // Create download link
      const link = document.createElement("a");
      link.href = url;
      link.download = doc.name || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up
      setTimeout(() => window.URL.revokeObjectURL(url), 100);
      
      console.log("✅ Download started");
      
    } catch (err) {
      console.error("❌ Download failed:", err);
      console.error("Download error:", err.response?.data);
      setError(err.response?.data?.message || "Download failed");
    }
  };

  // Format file size
  const formatFileSize = (bytes) => {
    if (!bytes) return "0 B";
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i)) + " " + sizes[i];
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  // Refresh documents
  const handleRefresh = () => {
    fetchDocuments();
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header *
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800"> Document Manager</h1>
          
        </div>
        
        <div className="flex items-center gap-4">
        
          
          <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
           Upload
            <input
              type="file"
              multiple
              className="hidden"
              onChange={(e) => handleFileUpload(e.target.files)}
              onClick={(e) => e.target.value = null} // Allow re-uploading same file
            />
          </label>
          
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>

      

      // Error Message 
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          <div className="flex justify-between items-center">
            <span>❌ {error}</span>
            <button 
              onClick={() => setError("")}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      //Loading State 
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Fetching documents from API...</p>
          <p className="text-sm text-gray-500 mt-2">Check Network tab in DevTools</p>
        </div>
      )}

      // Uploading State 
      {uploading && (
        <div className="mb-6 p-4 bg-blue-50 text-blue-700 rounded-lg">
          ⏳ Uploading files... Please wait.
        </div>
      )}

      // Documents List 
      {!loading && documents.length > 0 && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Document
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Uploaded
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {documents.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{doc.name}</div>
                      <div className="text-sm text-gray-500">ID: {doc.id}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
                        {doc.contentType || "Unknown"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {formatFileSize(doc.size)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {doc.uploadedAt ? new Date(doc.uploadedAt).toLocaleString() : "—"}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => previewDocument(doc)}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm"
                        >
                          View
                        </button>
                        <button
                          onClick={() => downloadDocument(doc)}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 text-sm"
                        >
                          Download
                        </button>
                        <button
                          onClick={() => deleteDocument(doc.id)}
                          className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      // Empty State 
      {!loading && documents.length === 0 && (
        <div className="text-center py-16 bg-white rounded-lg shadow">
          <div className="text-gray-400 mb-6">
            <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 13h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-3">No documents found</h3>
          <p className="text-gray-500 mb-6">Upload your first document to get started</p>
          <label className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-flex items-center gap-2">
            📤 Upload First Document
            <input
              type="file"
              className="hidden"
              onChange={(e) => handleFileUpload(e.target.files)}
            />
          </label>
          <p className="mt-6 text-sm text-gray-500">
            API Endpoint: <code className="bg-gray-100 px-2 py-1 rounded">{BASE_URL}/api/companies/{companyId}/documents</code>
          </p>
        </div>
      )}

      // Preview Modal 
      {preview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-medium truncate">{preview.name}</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = preview.url;
                    link.download = preview.name;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                >
                  Download
                </button>
                <button
                  onClick={() => {
                    if (preview.url) URL.revokeObjectURL(preview.url);
                    setPreview(null);
                  }}
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm"
                >
                   Close
                </button>
              </div>
            </div>
            
            <div className="p-4 max-h-[70vh] overflow-auto">
              {preview.type === "application/pdf" ? (
                <iframe
                  src={preview.url}
                  title={preview.name}
                  className="w-full h-[65vh] border-0"
                />
              ) : preview.type.startsWith("image/") ? (
                <img
                  src={preview.url}
                  alt={preview.name}
                  className="max-w-full max-h-[65vh] mx-auto"
                />
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">Preview not available for this file type</p>
                  <a
                    href={preview.url}
                    download={preview.name}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Download File
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

     
    </div>
  );
}
*/
