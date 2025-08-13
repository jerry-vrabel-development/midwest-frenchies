import outputImg from "../assets/images/breeder-walk.jpg";
import outputImg2 from "../assets/images/kennel-room.jpg";
import outputImg3 from "../assets/images/patio.jpg";
import outputImg4 from "../assets/images/frenchie5.jpg";

export default function AboutBreeder() {
  /* ------------------  STORY  ------------------ */
  const story = `
    At the heart of Midwest Frenchies lies a profound commitment to nurturing purebred puppies that embody vitality, charm, and unwavering health. Each litter is carefully bred to uphold the highest standards of genetic integrity, ensuring every puppy is a testament to the harmony of nature and care.

Our philosophy is rooted in the belief that a dog’s character is as vital as its health. From the moment a puppy is born, they are raised in an environment that fosters curiosity, confidence, and gentle socialization. This foundation ensures they grow into companions who thrive in family life, bringing joy with their playful spirit and loyal hearts.

Health is the cornerstone of our mission. Through rigorous breeding practices, meticulous health screenings, and a focus on long-term well-being, we prioritize the physical and emotional resilience of every puppy. Our goal is not just to breed dogs but to cultivate enduring bonds between pets and their families—where love, character, and health are inseparable.

Midwest Frenchies stands as a beacon of responsible breeding, dedicated to crafting companions who are as remarkable as the lives they enrich.
`;

  /* ------------------  PHOTOS  ------------------ */
  // Replace the `src` URLs with your real images.
  const galleryImages = [
    {
      src: outputImg4,
      alt: 'French Bulldog puppy at home',
    },
    {
      src: outputImg2,
      alt: 'Kennel room with two pups resting',
    },
    {
      src: outputImg3,
      alt: 'Puppies playing on a sunny patio',
    },
  ];

  /* ------------------  VALUES  ------------------ */
  const values = [
    'Transparency – every step of the breeding process is openly shared.',
    'Health First – rigorous veterinary checks and a commitment to genetic wellness.',
    'Ethics – we never breed for profit over the welfare of the animals.',
    'Community – building lasting relationships with dog lovers worldwide.',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
      {/* ---------- 1️⃣ Story ---------- */}
      <section id="story" className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg leading-relaxed whitespace-pre-line">{story}</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={outputImg}
            alt="Breeder with a puppy"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* ---------- 2️⃣ Photos ---------- */}
      <section id="photos" className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-md">
              <img
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-full transition-transform duration-200 ease-in-out transform
hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ---------- 3️⃣ Values ---------- */}
      <section id="values" className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Core Values</h2>
        <ul className="space-y-4">
          {values.map((value, i) => (
            <li key={i} className="flex items-start gap-3">
              {/* Optional icon – feel free to replace with your own */}
              <svg
                className="w-6 h-6 flex-shrink-0 text-indigo-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1
0 10-1.414 1.414L9 13.414l4.707-4.707z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-lg">{value}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
