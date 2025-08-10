import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

export default function HomePage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Midwest Frenchies</h1>
        <p className="text-lg text-gray-700">
          Browse our adorable puppies and learn more about our rescue mission.
        </p>
      </div>
      
      <Hero />

      <div className="text-white text-center mt-12">
        <Link
          to="/about-breeder"
          className="inline-block px-8 py-3 bg-orange-600  rounded-md hover:bg-blue-700 transition"
        >
          Learn More About Our Breeders
        </Link>
      </div>
    </section>
  );
}
