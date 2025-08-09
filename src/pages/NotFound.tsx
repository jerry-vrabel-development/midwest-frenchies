import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-4">
      <h1 className="text-5xl font-extrabold text-red-600 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-4">Page Not Found</p>
      <p className="text-lg text-gray-700 mb-8">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
