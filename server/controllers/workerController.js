const User = require("../models/User");

// GET nearby workers
exports.getNearbyWorkers = async (req, res) => {
  try {
    const { service, sort } = req.query;

    let query = {
      role: "worker",
      available: true,
    };

    if (service) {
      query.service = service;
    }

    let workers = await User.find(query);

    // Sorting logic
    if (sort === "price") {
      workers.sort((a, b) => a.pricePerHour - b.pricePerHour);
    }

    if (sort === "rating") {
      workers.sort((a, b) => b.rating - a.rating);
    }

    res.json(workers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Toggle worker availability
exports.toggleAvailability = async (req, res) => {
  try {
    const { workerId } = req.params;

    const worker = await User.findById(workerId);

    if (!worker || worker.role !== "worker") {
      return res.status(404).json({ message: "Worker not found" });
    }

    worker.available = !worker.available;
    await worker.save();

    res.json({
      message: "Availability updated",
      available: worker.available,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
