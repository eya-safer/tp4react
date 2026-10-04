function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow">DU BON, DU FRAIS, DU FAIT MAISON</div>
        <h1>On met du <span>miam</span><br />dans votre journée<span className="period">.</span></h1>
        <p>Des bons petits plats faits avec amour, livrés tout chaud jusque chez vous.</p>
      </div>
      <div className="hero-art" aria-label="Burger et frites">
        <img
          className="hero-side-image hero-side-image-left"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=400&q=80"
          alt=""
          aria-hidden="true"
        />
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=90"
          alt="Burger gourmand au fromage, salade et tomate"
        />
        <img
          className="hero-side-image hero-side-image-right"
          src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80"
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  )
}

export default Hero
