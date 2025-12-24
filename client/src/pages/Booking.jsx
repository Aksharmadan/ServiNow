import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import services from "../data/services";

export default function Booking() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const worker = state?.worker;
  const [form, setForm] = useState({
    name: state?.worker?.name || "",
    phone: "",
    address: "",
    date: "",
    time: "",
    notes: "",
    payment: "pay-after-service",
    service: state?.service || "plumber",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking confirmed! A pro will reach out shortly.");
    navigate("/");
  };

  return (
    <main className="pt-24 max-w-5xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">Confirm your booking</h1>
          <p className="text-slate-600 mb-6">Schedule your slot, share address, and choose payment.</p>

          {!worker && (
            <div className="mb-6 bg-yellow-50 border border-yellow-100 text-sm rounded-2xl p-4">
              <p className="font-semibold text-yellow-800">No professional selected</p>
              <p className="text-yellow-700">Choose a service to see curated professionals.</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {services.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="text-sm text-green-700 font-semibold underline">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-600 mb-1">Your name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full border rounded-xl px-4 py-3"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Phone</label>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full border rounded-xl px-4 py-3"
                  placeholder="10-digit mobile"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-600 mb-1">Complete address</label>
              <textarea
                required
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className="w-full border rounded-xl px-4 py-3"
                rows="3"
                placeholder="House/Flat, Area, City"
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-slate-600 mb-1">Preferred date</label>
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Time window</label>
                <select
                  required
                  value={form.time}
                  onChange={(e) => handleChange("time", e.target.value)}
                  className="w-full border rounded-xl px-4 py-3"
                >
                  <option value="">Choose</option>
                  <option value="8-10am">8-10 AM</option>
                  <option value="10-12pm">10-12 PM</option>
                  <option value="12-2pm">12-2 PM</option>
                  <option value="2-4pm">2-4 PM</option>
                  <option value="4-7pm">4-7 PM</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Payment</label>
                <select
                  value={form.payment}
                  onChange={(e) => handleChange("payment", e.target.value)}
                  className="w-full border rounded-xl px-4 py-3"
                >
                  <option value="pay-after-service">Pay after service</option>
                  <option value="upi-on-completion">UPI on completion</option>
                  <option value="card-on-completion">Card on completion</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-600 mb-1">Service</label>
                <select
                  value={form.service}
                  onChange={(e) => handleChange("service", e.target.value)}
                  className="w-full border rounded-xl px-4 py-3"
                >
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Add notes (optional)</label>
                <input
                  value={form.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  className="w-full border rounded-xl px-4 py-3"
                  placeholder="Landmark / specific issue"
                />
              </div>
            </div>

            <button className="primary-btn w-full sm:w-auto">Confirm booking</button>
          </form>
        </div>

        <aside className="space-y-4">
          <div className="bg-white border rounded-2xl p-5 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-green-700 font-semibold mb-3">Booking summary</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Service</span>
                <span className="font-semibold capitalize">{state?.service || "Select service"}</span>
              </div>
              <div className="flex justify-between">
                <span>Professional</span>
                <span className="font-semibold">{worker?.name || "To be assigned"}</span>
              </div>
              <div className="flex justify-between">
                <span>Visit fee</span>
                <span className="font-semibold">₹{worker?.price || "299"} </span>
              </div>
              <div className="flex justify-between">
                <span>Safety & support</span>
                <span className="font-semibold">₹49</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span>Total (approx)</span>
                <span className="font-bold text-lg">₹{(worker?.price || 299) + 49}</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2">Final amount may vary after on-site assessment. No hidden charges.</p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-sm text-slate-700 space-y-2">
            <p className="font-semibold">What happens next?</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Pro calls you to confirm requirements</li>
              <li>Arrives in the chosen time window</li>
              <li>Pay only after completion</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
