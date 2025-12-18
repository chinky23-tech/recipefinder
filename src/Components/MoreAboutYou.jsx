export default function MoreAboutYou({ pharmacyId, onLogout }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">More About You</h2>

      <input className="w-full border p-2 mb-3" placeholder="First Name*" />
      <input className="w-full border p-2 mb-3" placeholder="Last Name*" />
      <input className="w-full border p-2 mb-3" placeholder="Registration Number*" />

      <button className="w-full bg-blue-600 text-white py-2 rounded mb-3">
        Next
      </button>

      <button
        onClick={onLogout}
        className="w-full border py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
