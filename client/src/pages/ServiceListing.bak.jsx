import { useParams, useNavigate } from "react-router-dom";

const workers = [
  { name: "Ramesh Kumar", rating: 4.8, price: 399 },
  { name: "Amit Sharma", rating: 4.6, price: 349 },
  { name: "Suresh Yadav", rating: 4.9, price: 449 }
];

export default function ServiceListing() {
  const { service } = useParams();
  const navigate = useNavigate();

  return (
    <main className="pt-24 max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        Available {service} professionals
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {workers.map(w => (
          <div key={w.name} className="border rounded-xl p-6">
            <h3 className="font-semibold text-lg">{w.name}</h3>
            <p>⭐ {w.rating}</p>
            <p className="font-bold mt-2">₹{w.price}/hr</p>

            <button
              onClick={() => navigate("/booking", { state: w })}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded"
            >
              Book Service
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
