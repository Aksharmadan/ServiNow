export default function WorkerCard({ worker }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">{worker.name}</h3>
          <p className="text-sm text-slate-500 capitalize">
            {worker.service}
          </p>
        </div>
        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
          Available
        </span>
      </div>

      <div className="mt-4 flex justify-between text-sm">
        <span>₹{worker.price}/hr</span>
        <span>⭐ {worker.rating}</span>
      </div>

      <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
        Book Service
      </button>
    </div>
  );
}
