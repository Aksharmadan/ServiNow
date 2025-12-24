export default function Login() {
  function handleLogin(e) {
    e.preventDefault();
    localStorage.setItem("loggedIn", "true");
    alert("Login successful (demo)");
    window.location.href = "/";
  }

  return (
    <main className="pt-24 max-w-md mx-auto px-6">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <form onSubmit={handleLogin} className="space-y-4">
        <input required placeholder="Email" className="w-full border p-3 rounded" />
        <input required type="password" placeholder="Password" className="w-full border p-3 rounded" />
        <button className="w-full bg-green-600 text-white py-3 rounded">
          Login
        </button>
      </form>
    </main>
  );
}
