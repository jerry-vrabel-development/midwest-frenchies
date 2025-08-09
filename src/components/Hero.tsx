import heroImg from "../assets/images/hero-image.jpg";

export default function Hero() {
  return (
    <section
      className="
        flex flex-col-reverse lg:flex-row items-center
        space-y-8 lg:space-y-0 lg:space-x-8
        mb-16
      "
    >
      {/* Text block */}
      <div className="lg:w-1/2 space-y-4">
        <h1 className="text-5xl font-bold text-brand-primary">
          Meet Your New French‑Bulldog Buddy
        </h1>
        <p className="text-xl text-brand-text">
          We have adorable puppies ready for their forever homes. Reserve
          yours today!
        </p>
        <a
          href="#"
          className="
            inline-block bg-brand-accent text-white px-8 py-3 rounded-full
            hover:bg-brand-primary transition-colors
          "
        >
          Reserve Now
        </a>
      </div>

      {/* Image placeholder */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={heroImg}
          alt="Cute French Bulldog Puppy"
          loading="lazy"
          className="rounded-lg shadow-xl w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
