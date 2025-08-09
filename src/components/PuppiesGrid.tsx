import { PuppyCard } from "./PuppyCard";
import outputImg from "../assets/images/output.jpg";
import output2Img from "../assets/images/output2.jpg";
import output3Img from "../assets/images/output3.jpg";

interface Puppy {
  id: string;
  name: string;
  age: string;
  image: string;
  isAvailable: boolean;
}

const dummyPuppies: Puppy[] = [
  { id: "1", name: "Buddy", age: "3 weeks", image: outputImg, isAvailable: true },
  { id: "2", name: "Luna",  age: "3 weeks", image: output2Img,  isAvailable: true },
  { id: "3", name: "Max",   age: "3 weeks", image: output3Img,  isAvailable: true },
];

export const PuppiesGrid: React.FC = () => (
  <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {dummyPuppies.map((p) => (
      <PuppyCard key={p.id} {...p} />
    ))}
  </section>
);
