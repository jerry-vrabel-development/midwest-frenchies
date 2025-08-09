import { PuppyCard } from "./PuppyCard";
import type { PuppyCardProps } from './PuppyCard';
import { useEffect, useState } from "react";

export const PuppyGallery: React.FC = () => {
  const [puppies, setPuppies] = useState<PuppyCardProps[]>([]);

  useEffect(() => {
    // Replace with real fetch logic
    fetch("/api/puppies")
      .then((res) => res.json())
      .then(setPuppies);
  }, []);

  return (
    <section id="gallery" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Litter</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {puppies.map((p) => (
          <PuppyCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
};
