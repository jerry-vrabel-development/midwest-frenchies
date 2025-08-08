import { useNavigate } from "react-router-dom";

interface PuppyCardProps {
  id: string;
  name: string;
  age: string; // e.g., "2 weeks"
  image: string;
  isAvailable: boolean;
}

export const PuppyCard: React.FC<PuppyCardProps> = ({
  id,
  name,
  age,
  image,
  isAvailable,
}) => {
  const navigate = useNavigate();

  return (
    <article
      className={`relative rounded-lg shadow-md overflow-hidden ${
        !isAvailable ? "opacity-50" : ""
      }`}
    >
      <img
        src={image}
        alt={`${name} the French Bulldog puppy`}
        className="w-full h-56 object-cover"
      />
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{age}</p>
        <button
          className="mt-2 px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
          onClick={() => navigate(`/puppy/${id}`)}
          disabled={!isAvailable}
          aria-disabled={!isAvailable}
        >
          {isAvailable ? "View Details" : "Not Available"}
        </button>
      </div>
    </article>
  );
};
