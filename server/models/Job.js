const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      required: true, // plumber, electrician, carpenter
    },

    customerName: {
      type: String,
      required: true,
    },

    customerPhone: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    location: {
      lat: Number,
      lng: Number,
    },

    status: {
      type: String,
      enum: ["pending", "assigned", "accepted", "completed", "cancelled"],
      default: "pending",
    },

    assignedWorker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    price: {
      type: Number, // platform price
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
