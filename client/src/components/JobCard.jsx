export default function JobCard({ job, onAccept, onReject }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h3 className="font-semibold capitalize">{job.service}</h3>
      <p className="text-sm text-slate-500">{job.description}</p>
      <p className="mt-2 text-sm">Customer: {job.customerName}</p>
      <p className="text-sm">Phone: {job.customerPhone}</p>
      <p className="mt-2 font-semibold">₹{job.price}</p>

      {job.status === "assigned" && (
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => onAccept(job._id)}
            className="flex-1 bg-green-600 text-white py-2 rounded"
          >
            Accept
          </button>
          <button
            onClick={() => onReject(job._id)}
            className="flex-1 bg-red-500 text-white py-2 rounded"
          >
            Reject
          </button>
        </div>
      )}

      {job.status === "accepted" && (
        <p className="mt-4 text-green-600 font-semibold">
          Job Accepted
        </p>
      )}
    </div>
  );
}
