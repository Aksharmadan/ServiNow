import { useState } from "react";
import { Link } from "react-router-dom";
import services from "../data/services";
import { workers } from "../data/workers";
import ServiceCard from "../components/ServiceCard";
import LocationSelector from "../components/LocationSelector";

export default function Home() {
  const [location, setLocation] = useState("Delhi");
  const nearbyWorkers = workers.filter((w) => w.available).slice(0, 4);

  return (
    <main className="pt-24 bg-gradient-to-b from-white via-slate-50 to-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            ✨ New: Instant pros under 30 mins
          </span>
          <h1 className="text-5xl font-bold leading-tight">
            Book trusted home services, beautifully faster.
          </h1>
          <p className="text-lg text-slate-600">
            Salon, cleaning, repairs, and more — verified professionals with upfront pricing, instant booking, and live status.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#services" className="primary-btn text-center">
              Explore services
            </a>
            <Link to="/how-it-works" className="text-green-700 font-semibold flex items-center justify-center gap-2">
              See how it works →
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white shadow-sm border rounded-2xl p-4">
              <p className="text-2xl font-bold">4.8★</p>
              <p className="text-sm text-slate-500">Average customer rating</p>
            </div>
            <div className="bg-white shadow-sm border rounded-2xl p-4">
              <p className="text-2xl font-bold">30 mins</p>
              <p className="text-sm text-slate-500">Fastest arrival</p>
            </div>
            <div className="bg-white shadow-sm border rounded-2xl p-4">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm text-slate-500">Background verified</p>
            </div>
          </div>

          <div className="bg-white border rounded-2xl shadow-sm p-4 flex flex-col sm:flex-row gap-3 items-center">
            <div className="flex-1 w-full">
              <p className="text-sm text-slate-500 mb-2">Service location</p>
              <LocationSelector location={location} setLocation={setLocation} />
            </div>
            <div className="w-full sm:w-auto">
              <button className="primary-btn w-full">Update</button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-green-100 blur-3xl opacity-60 rounded-full" />
          <div className="relative bg-white border shadow-xl rounded-3xl overflow-hidden">
            <img
              src={services.find((s) => s.slug === "cleaning")?.img}
              alt="Home services"
              className="w-full h-80 object-cover"
            />
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Live</span>
                <p className="text-sm text-slate-600">Pros near {location}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="font-semibold">Ramesh</p>
                  <p className="text-slate-500">Plumber • 1.2 km</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="font-semibold">Priya</p>
                  <p className="text-slate-500">Electrician • 1.6 km</p>
                </div>
              </div>
              <p className="text-sm text-green-700 font-semibold">No surge pricing · Pay after service</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-6xl mx-auto px-6 mt-16 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-green-700 font-semibold">Top picks</p>
            <h2 className="text-3xl font-bold">Book a service</h2>
            <p className="text-slate-600">Curated categories with upfront pricing.</p>
          </div>
          <Link to="/how-it-works" className="text-sm text-green-700 font-semibold">Need help choosing?</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              name={s.name}
              image={s.img}
              slug={s.slug}
            />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-16">
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-3">
            <p className="text-sm uppercase tracking-wide text-green-200">Why ServiNow</p>
            <h3 className="text-3xl font-bold">Real pros. Real-time availability. Zero surprises.</h3>
            <ul className="grid sm:grid-cols-3 gap-3 text-sm text-slate-200">
              <li className="bg-white/5 border border-white/10 rounded-2xl p-4">Upfront pricing — no hidden charges</li>
              <li className="bg-white/5 border border-white/10 rounded-2xl p-4">ID & background verification</li>
              <li className="bg-white/5 border border-white/10 rounded-2xl p-4">Live tracking & support during jobs</li>
            </ul>
            <Link to="/booking" className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-3 rounded-xl font-semibold w-fit">
              Book now
            </Link>
          </div>
          <div className="bg-white text-slate-900 rounded-2xl p-5 shadow-lg space-y-4">
            <p className="text-sm font-semibold text-green-700">Trending today</p>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>AC gas refill</span>
                <span className="font-semibold">₹699</span>
              </div>
              <div className="flex justify-between">
                <span>Deep home cleaning</span>
                <span className="font-semibold">₹499</span>
              </div>
              <div className="flex justify-between">
                <span>Salon at home</span>
                <span className="font-semibold">₹299</span>
              </div>
            </div>
            <p className="text-xs text-slate-500">24/7 support · Pay after service · Free rework if unhappy</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-16 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-green-700 font-semibold">Instant pros</p>
            <h2 className="text-3xl font-bold">Available near you</h2>
            <p className="text-slate-600">Book instantly with live availability.</p>
          </div>
          <Link to="/booking" className="text-sm text-green-700 font-semibold">Book instantly</Link>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {nearbyWorkers.map((worker) => (
            <div key={worker.id} className="bg-white rounded-2xl p-5 shadow border flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-lg">{worker.name}</p>
                  <p className="text-sm text-slate-500 capitalize">{worker.service}</p>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Available</span>
              </div>
              <p className="text-sm text-slate-600">{worker.speciality}</p>
              <div className="flex items-center justify-between text-sm mt-2">
                <span>₹{worker.price}/hr</span>
                <span>⭐ {worker.rating}</span>
              </div>
              <button className="primary-btn w-full">Book now</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
