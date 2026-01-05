// useState → manage form, loading, error state
import { useState } from "react";

// useNavigate → redirect user after login
import { useNavigate, Link } from "react-router-dom";

// Custom axios instance (with interceptors)
import api from "../api/axios";

// Reusable UI components
/*import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";*/

function Login() {
  // Used to navigate user programmatically
  const navigate = useNavigate();

  /*
    Form state
    We keep email & password in one object
    This is scalable for future fields
  */
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Loading state → disables button during API call
  const [loading, setLoading] = useState(false);

  // Error message from backend or validation
  const [error, setError] = useState("");

  /*
    Handle input changes
    name attribute decides which field updates
  */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /*
    Handle form submit
    This is where login API is called
  */
  const handleLogin = async (e) => {
    e.preventDefault(); // prevent page reload
    setError("");
    setLoading(true);

    try {
      /*
        Send login request
        refreshToken is set automatically as HttpOnly cookie
      */
      const response = await api.post("/auth/signIn", {
        email: formData.email,
        password: formData.password,
      });

      /*
        Backend response example:
        {
          accessToken: "...",
          refreshToken: "... (ignored in frontend)"
        }
      */
      const { accessToken } = response.data;

      // Store ONLY access token
      localStorage.setItem("accessToken", accessToken);

      // Redirect user after successful login
      navigate("/dashboard");
    } catch (err) {
      /*
        Safe error handling
        Optional chaining prevents app crash
      */
      setError(
        err.response?.data?.message ||
          "Login failed. Please try again."
      );
    } finally {
      // Stop loader in all cases
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Login
        </h2>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mb-3">
            {error}
          </p>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Password */}
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            loading={loading}
            disabled={loading}
          >
            Login
          </Button>
        </form>

        {/* Extra Links */}
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
       
      </Card>
    </div>
  );
}

export default Login;