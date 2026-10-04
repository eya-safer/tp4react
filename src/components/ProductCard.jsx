import Card from 'react-bootstrap/Card'

function ProductCard({ product, isFavorite, onToggleFavorite, onAddToCart }) {
  return (
    <Card className="product-card">
      <div className="product-image-wrap">
        <Card.Img className="product-image" src={product.image} alt={product.name} loading="lazy" />
        <button
          className={`favorite-button ${isFavorite ? 'liked' : ''}`}
          onClick={() => onToggleFavorite(product.id)}
          aria-label={isFavorite ? `Retirer ${product.name} des favoris` : `Ajouter ${product.name} aux favoris`}
          aria-pressed={isFavorite}
        >
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.8 8.8c0 5.1-8.8 10.4-8.8 10.4S3.2 13.9 3.2 8.8A4.7 4.7 0 0 1 12 6.1a4.7 4.7 0 0 1 8.8 2.7Z" />
          </svg>
        </button>
      </div>
      <Card.Body className="product-info">
        <div className="product-meta">
          <span>{product.category}</span>
          <span className="product-rating">
            <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
              <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
            </svg>
            {product.rating}
          </span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-footer">
          <strong className="product-price">{product.price} DT</strong>
          <button
            className="add-button"
            onClick={() => onAddToCart(product.id)}
            aria-label={`Ajouter ${product.name} au panier`}
          >
            <span>+</span> Ajouter
          </button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
