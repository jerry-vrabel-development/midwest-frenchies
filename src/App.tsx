import Logo from "./components/Logo";
import './App.css'

function App() {

  return (
     <main className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-12">
        <Logo />
        <nav className="space-x-6">
          <a href="#" className="text-brand-secondary hover:text-brand-primary">
            Home
          </a>
          <a href="#" className="text-brand-secondary hover:text-brand-primary">
            Puppies
          </a>
          <a href="#" className="text-brand-secondary hover:text-brand-primary">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        className="
          flex flex-col-reverse lg:flex-row items-center
          space-y-8 lg:space-y-0 lg:space-x-8
          mb-16
        "
      >
        {/* Text Block */}
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-5xl font-bold text-brand-primary">
            Meet Your New French‑Bulldog Buddy
          </h1>
          <p className="text-xl text-brand-text">
            We have adorable puppies ready for their forever homes. Reserve
            yours today!
          </p>
          <button className="btn-primary">Reserve Now</button>
        </div>

        {/* Image / Illustration Placeholder */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://placehold.co/600x400?text=Puppy+Image"
            alt="Cute French Bulldog Puppy"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Puppies Grid (Placeholder) */}
      <section>
        <h2 className="text-3xl font-semibold text-brand-primary mb-6">
          Our Puppies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-4 space-y-4"
            >
              <img
                src={`https://placehold.co/300x200?text=Puppy+${i + 1}`}
                alt={`Puppy ${i + 1}`}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="font-medium text-brand-primary">
                Puppy {i + 1}
              </h3>
              <p className="text-brand-text">Age: 3 weeks</p>
              <a
                href="#"
                className="
                  inline-block bg-brand-accent text-white px-4 py-2 rounded
                  hover:bg-brand-primary transition-colors
                "
              >
                More Info
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
