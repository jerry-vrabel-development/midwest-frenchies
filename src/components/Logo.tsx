import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center gap-2">
        {/* 👇 Replace the emoji with your actual logo later */}
        <span className="text-3xl">🐾</span>
        <span className="font-bold text-2xl text-brand-primary">
          Midwest Frenchies
        </span>
      </div>
    </Link>
  );
}
