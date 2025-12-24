export default function LocationSelector({ location, setLocation }) {
  const locations = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Pune"
  ];

  return (
    <select
      value={location}
      onChange={e => setLocation(e.target.value)}
      className="border px-4 py-3 rounded-xl w-full md:w-64"
    >
      {locations.map(city => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
}
