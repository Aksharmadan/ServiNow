const express = require("express");
const router = express.Router();
const Job = require("../models/Job");
const User = require("../models/User");

// CREATE JOB + AUTO ASSIGN
router.post("/", async (req, res) => {
  try {
    const { service } = req.body;

    const worker = await User.findOne({
      role: "worker",
      service: service.toLowerCase(),
      available: true,
    }).sort({ rating: -1 });

    const job = await Job.create({
      ...req.body,
      status: worker ? "assigned" : "pending",
      assignedWorker: worker ? worker._id : null,
    });

    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// WORKER ACCEPT JOB
router.patch("/:jobId/accept", async (req, res) => {
  const job = await Job.findById(req.params.jobId);
  if (!job) return res.status(404).json({ message: "Job not found" });

  job.status = "accepted";
  await job.save();

  res.json({ message: "Job accepted", job });
});

// WORKER REJECT JOB → REASSIGN
router.patch("/:jobId/reject", async (req, res) => {
  const job = await Job.findById(req.params.jobId);
  if (!job) return res.status(404).json({ message: "Job not found" });

  // Find next best worker (excluding current)
  const newWorker = await User.findOne({
    role: "worker",
    service: job.service,
    available: true,
    _id: { $ne: job.assignedWorker },
  }).sort({ rating: -1 });

  job.assignedWorker = newWorker ? newWorker._id : null;
  job.status = newWorker ? "assigned" : "pending";

  await job.save();

  res.json({
    message: newWorker ? "Reassigned to another worker" : "No workers available",
    job,
  });
});


// GET JOBS FOR WORKER
router.get("/worker/:workerId", async (req, res) => {
  const jobs = await Job.find({ assignedWorker: req.params.workerId })
    .populate("assignedWorker");
  res.json(jobs);
});

// GET ALL JOBS
router.get("/", async (req, res) => {
  const jobs = await Job.find().populate("assignedWorker");
  res.json(jobs);
});

module.exports = router;
