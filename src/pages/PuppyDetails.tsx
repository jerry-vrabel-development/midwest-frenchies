import { useParams, Link } from "react-router-dom";

export const PuppyDetails: React.FC = () => {
  const { id } = useParams();

  // In a real app you’d fetch the puppy by ID.
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Puppy #{id}</h2>
      <p>Details about the puppy would appear here.</p>
      <Link
        to="/"
        className="inline-block mt-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Back to list
      </Link>
    </div>
  );
};
