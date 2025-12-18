export default function PharmacyList({ pharmacies, onSelect, onAddNew }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        Select Pharmacy
      </label>

      {pharmacies.map((p) => (
        <button
          key={p.id}
          onClick={() => onSelect(p.id)}
          className="w-full border rounded p-2 mb-2 text-left hover:bg-gray-100"
        >
          {p.name}
        </button>
      ))}

      <button
        type="button"
        onClick={onAddNew}
        className="mt-3 text-blue-600 text-sm font-medium"
      >
        + Add New Pharmacy
      </button>
    </div>
  );
}
