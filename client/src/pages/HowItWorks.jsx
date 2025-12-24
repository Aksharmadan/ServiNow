export default function HowItWorks() {
  return (
    <main className="pt-24 max-w-5xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-10">How ServiNow Works</h1>

      <div className="grid md:grid-cols-4 gap-8">
        <div className="border rounded-xl p-6">
          <h3 className="font-semibold mb-2">1. Choose Service</h3>
          <p className="text-slate-600 text-sm">
            Select the service you need — plumber, electrician, cleaning, salon, etc.
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="font-semibold mb-2">2. Compare Professionals</h3>
          <p className="text-slate-600 text-sm">
            View real professionals with ratings, prices, and live availability.
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="font-semibold mb-2">3. Book Instantly</h3>
          <p className="text-slate-600 text-sm">
            Choose the best option and book instantly — no middlemen.
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="font-semibold mb-2">4. Get the Job Done</h3>
          <p className="text-slate-600 text-sm">
            A verified professional arrives and completes the service.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-slate-900 text-white rounded-3xl p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-wide text-green-200">Safety-first</p>
          <h3 className="text-3xl font-bold mt-2 mb-2">Background verified pros. Pay after service.</h3>
          <p className="text-slate-200 max-w-2xl">We run ID checks, in-person onboarding, and quality audits for every professional. Dedicated support stays with your job until completion.</p>
        </div>
        <div className="flex gap-3">
          <a href="#services" className="bg-white text-slate-900 px-5 py-3 rounded-xl font-semibold">Book a service</a>
          <a href="mailto:support@servinow.app" className="bg-white/10 border border-white/20 px-5 py-3 rounded-xl font-semibold text-white">Talk to support</a>
        </div>
      </div>
    </main>
  );
}
