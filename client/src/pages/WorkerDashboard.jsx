import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";

export default function WorkerDashboard() {
  const workerId = localStorage.getItem("workerId"); // temporary

  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await fetch(
      `http://localhost:5001/api/jobs/worker/${workerId}`
    );
    const data = await res.json();
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const acceptJob = async (jobId) => {
    await fetch(`http://localhost:5001/api/jobs/${jobId}/accept`, {
      method: "PATCH",
    });
    fetchJobs();
  };

  const rejectJob = async (jobId) => {
    await fetch(`http://localhost:5001/api/jobs/${jobId}/reject`, {
      method: "PATCH",
    });
    fetchJobs();
  };

  return (
    <div className="container mt-20 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Worker Dashboard</h1>

      {jobs.length === 0 ? (
        <p>No assigned jobs</p>
      ) : (
        jobs.map(job => (
          <JobCard
            key={job._id}
            job={job}
            onAccept={acceptJob}
            onReject={rejectJob}
          />
        ))
      )}
    </div>
  );
}
