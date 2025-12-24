import { useNavigate } from "react-router-dom";

export default function ServiceCard({ name, image, slug }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/services/${slug}`)}
      className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition cursor-pointer"
    >
      <img
        src={image}
        alt={name}
        className="h-40 w-full object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-slate-500 mt-1">
          Verified professionals near you
        </p>
      </div>
    </div>
  );
}
