import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white border-b z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-green-600">
          ServiNow
        </Link>

        <nav className="flex items-center gap-6">
          <Link to="/" className="text-slate-600 hover:text-slate-900">Home</Link>
          <a href="/#services" className="text-slate-600 hover:text-slate-900">Services</a>
          <Link to="/how-it-works" className="text-slate-600 hover:text-slate-900">How it works</Link>
          <Link to="/pro" className="text-slate-600 hover:text-slate-900">For pros</Link>
          <Link to="/login" className="primary-btn text-sm">Login / Sign up</Link>
        </nav>
      </div>
    </header>
  );
}
