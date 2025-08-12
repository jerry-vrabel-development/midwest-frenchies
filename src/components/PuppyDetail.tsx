import { useParams } from 'react-router-dom';
import { dummyPuppies } from '../assets/puppies';


export default function PuppyDetail() {
  const { id } = useParams();
  const puppy = dummyPuppies.find(puppy => puppy.id === id);

  if (!puppy) return <div>Puppy not found</div>;

  return (
    <div>
      <h1>{puppy.name}</h1>
      <p>Age: {puppy.age}</p>
      <p>Breed: {puppy.breed}</p>
      <img src={puppy.image} alt={puppy.name} />
    </div>
  );
}
