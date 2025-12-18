import { useState } from "react";

export default function PharmacyForm({ onCancel, onSave }) {
  const [name, setName] = useState("");

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Add New Pharmacy</h3>

      <input
        className="w-full border rounded p-2 mb-4"
        placeholder="Pharmacy Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="flex gap-3">
        <button onClick={onCancel} className="border px-4 py-2 rounded">
          Cancel
        </button>

        <button
          onClick={() => {
            if (!name.trim()) return;
            onSave({ id: Date.now(), name });
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}
