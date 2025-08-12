import { PuppyCard } from "./PuppyCard";
import lyla from "../assets/images/lyla.jpg";
import nala from "../assets/images/nala.jpg";
import panda from "../assets/images/panda.jpg";
import rocky from "../assets/images/rocky.jpg";
import tiger from "../assets/images/tiger.jpg";
import bear from "../assets/images/bear.jpg";
import daisy from "../assets/images/daisy.jpg";

interface Puppy {
  id: string;
  name: string;
  age: string;
  image: string;
  isAvailable: boolean;
}

const dummyPuppies: Puppy[] = [
  { id: "1", name: "Lyla", age: "3 weeks", image: lyla, isAvailable: true },
  { id: "2", name: "Nala",  age: "3 weeks", image: nala,  isAvailable: true },
  { id: "3", name: "Panda", age: "3 weeks", image: panda, isAvailable: true },
  { id: "4", name: "Rocky", age: "3 weeks", image: rocky, isAvailable: true },
  { id: "5", name: "Tiger", age: "3 weeks", image: tiger, isAvailable: true },
  { id: "6", name: "Bear", age: "3 weeks", image: bear, isAvailable: true },
  { id: "7", name: "Daisy", age: "3 weeks", image: daisy, isAvailable: true },
];

export const PuppiesGrid: React.FC = () => (
  <section className="pt-20 pl-10 pr-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {dummyPuppies.map((p) => (
      <PuppyCard key={p.id} {...p} />
    ))}
  </section>
);
