import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import services from "../data/services";
import { workers } from "../data/workers";

export default function ServiceListing() {
  const { service } = useParams();
  const navigate = useNavigate();
  const [onlyAvailable, setOnlyAvailable] = useState(true);
  const [sortBy, setSortBy] = useState("rating");
  const [budget, setBudget] = useState(1000);

  const currentService = services.find((s) => s.slug === service);
  const heroTitle = currentService ? currentService.name : service.replace("-", " ");
  const heroImage = currentService?.img ?? services.find((s) => s.slug === "cleaning")?.img;

  const serviceWorkers = useMemo(
    () => workers.filter((w) => w.service === service),
    [service]
  );

  const maxPrice = useMemo(
    () => Math.max(...serviceWorkers.map((w) => w.price), 1000),
    [serviceWorkers]
  );

  const filteredWorkers = useMemo(() => {
    let list = [...serviceWorkers];
    if (onlyAvailable) list = list.filter((w) => w.available);
    list = list.filter((w) => w.price <= budget);

    if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      list.sort((a, b) => b.price - a.price);
    }
    return list;
  }, [serviceWorkers, onlyAvailable, budget, sortBy]);

  const handleBook = (worker) => {
    navigate("/booking", {
      state: {
        worker,
        service: heroTitle,
      },
    });
  };

  return (
    <main className="pt-24">
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(22,163,74,0.45), rgba(15,118,110,0.35)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "360px",
        }}
      >
        <div className="backdrop-brightness-90">
          <div className="max-w-6xl mx-auto px-6 py-14 text-white">
            <p className="text-sm font-semibold uppercase tracking-wide">ServiNow / {heroTitle}</p>
            <h1 className="text-4xl font-bold mt-2 mb-3">{heroTitle} services</h1>
            <p className="max-w-2xl text-slate-100">
              Compare verified professionals near you with live availability, transparent rates, and instant booking.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/15 border border-white/20 rounded-2xl p-4">
                <p className="font-semibold">Top-rated pros</p>
                <p className="text-slate-100">4.8★ average rating</p>
              </div>
              <div className="bg-white/15 border border-white/20 rounded-2xl p-4">
                <p className="font-semibold">Same-day slots</p>
                <p className="text-slate-100">Guaranteed arrival</p>
              </div>
              <div className="bg-white/15 border border-white/20 rounded-2xl p-4">
                <p className="font-semibold">Pay after service</p>
                <p className="text-slate-100">Digital or cash</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-10">
        <div className="bg-white shadow-xl border rounded-3xl p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={onlyAvailable}
                  onChange={(e) => setOnlyAvailable(e.target.checked)}
                  className="rounded border-slate-300"
                />
                Show only available now
              </label>
              <div className="hidden md:block h-8 w-px bg-slate-200" />
              <div className="text-sm text-slate-600">
                Budget up to <span className="font-semibold text-slate-900">₹{budget}</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
              <input
                type="range"
                min="300"
                max={maxPrice}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full md:w-48"
              />

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border px-4 py-2 rounded-xl"
              >
                <option value="rating">Sort by rating</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {filteredWorkers.length === 0 && (
            <div className="md:col-span-3 bg-slate-50 border rounded-2xl p-6 text-center">
              <p className="font-semibold mb-2">No professionals match these filters</p>
              <p className="text-slate-600 text-sm">Try increasing budget or disabling availability filter.</p>
            </div>
          )}

          {filteredWorkers.map((w) => (
            <div key={w.id} className="bg-white border rounded-2xl shadow-sm p-5 flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-lg">{w.name}</p>
                  <p className="text-sm text-slate-500 capitalize">{heroTitle}</p>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${w.available ? "bg-green-100 text-green-700" : "bg-slate-200 text-slate-600"}`}>
                  {w.available ? "Available" : "Booked"}
                </span>
              </div>

              <p className="text-sm text-slate-600">{w.speciality}</p>

              <div className="flex items-center justify-between text-sm">
                <span>₹{w.price}/hr</span>
                <span>⭐ {w.rating}</span>
                <span>{w.distance} km away</span>
              </div>

              <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-600">
                Completed {w.jobsCompleted}+ jobs with rework guarantee.
              </div>

              <button
                onClick={() => handleBook(w)}
                className="primary-btn w-full"
              >
                Book {w.available ? "now" : "next slot"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
