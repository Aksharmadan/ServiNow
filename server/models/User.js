const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
    },

    role: {
      type: String,
      enum: ["customer", "worker"],
      required: true,
    },

    // Worker-specific fields
    service: {
      type: String, // plumber, electrician, etc.
    },

    pricePerHour: {
      type: Number,
    },

    available: {
      type: Boolean,
      default: false,
    },

    location: {
      lat: Number,
      lng: Number,
    },

    rating: {
      type: Number,
      default: 4.5,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
