import ProductCard from './ProductCard.jsx'

function MenuSection({
  products,
  categories,
  categoryLabels,
  selectedCategory,
  favorites,
  onSelectCategory,
  onToggleFavorite,
  onAddToCart,
}) {
  return (
    <section className="menu-section" id="menu">
      <div className="filter-row">
        <div className="category-filters" aria-label="Filtrer par catégorie">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'selected' : ''}`}
              onClick={() => onSelectCategory(category)}
              aria-pressed={selectedCategory === category}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favorites.includes(product.id)}
            onToggleFavorite={onToggleFavorite}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

    </section>
  )
}

export default MenuSection
