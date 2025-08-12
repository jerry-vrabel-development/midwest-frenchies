import { useParams } from 'react-router-dom';
import '../styles/PuppyDetail.css'; // Ensure this CSS file is linked
import { dummyPuppies } from '../assets/puppies';

export default function PuppyDetail() {
  const { id } = useParams();
  const puppy = dummyPuppies.find(p => p.id === id);

  if (!puppy) return <div className="not-found">Puppy not found</div>;

  // Generate QR code for the reserve page (or Venmo link)

  return (
    <div className="puppy-detail">
      <div className="puppy-header">
        <h1>{puppy.name}</h1>
        <p>Age: {puppy.age}</p>
        <p>Breed: {puppy.breed}</p>
      </div>
      <div className="puppy-image">
        <img src={puppy.image} alt={puppy.name} />
      </div>
      <div className="puppy-info">
        <h2>Availability</h2>
        <p>Available on: {puppy.availabilityDate}</p>
        <h2>Health Status</h2>
        <p>Health: {puppy.health}</p>
        <p>Vaccinations: {puppy.shots.join(', ')}</p>
        <p>Microchipped: {puppy.microchipped ? 'Yes' : 'No'}</p>
        <p>Additional Notes: {puppy.additionalNotes}</p>
      </div>
      <div className="qr-code-section">
        <h2>Reserve This Puppy</h2>
        <p>Scan the QR code to reserve {puppy.name}:</p>
      </div>
    </div>
  );
}
