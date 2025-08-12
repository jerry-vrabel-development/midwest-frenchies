import { useNavigate } from "react-router-dom";

export interface PuppyCardProps {
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
      className={`relative rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 ${
        !isAvailable ? "opacity-50" : ""
      }`}
    >
    <div className="relative">
      <img
        src={image}
        alt={`${name} the French Bulldog puppy`}
        className="object-cover"
        />
    </div>  
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{age}</p>
        <button
          className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
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
