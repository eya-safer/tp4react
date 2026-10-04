import { useMemo, useState } from 'react'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MenuSection from './components/MenuSection.jsx'

const products = [
  {
    id: 1,
    name: 'Le Smash Classic',
    category: 'Burgers',
    description: 'Double steak smashé, cheddar fondant, pickles & sauce maison.',
    price: 12.9,
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 2,
    name: 'Margherita fraîche',
    category: 'Pizza',
    description: 'Tomates mûries au soleil, mozzarella di bufala & basilic frais.',
    price: 13.5,
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 3,
    name: 'Pasta al tartufo',
    category: 'Pasta',
    description: 'Tagliatelles fraîches, crème légère & copeaux de truffe.',
    price: 16.9,
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 4,
    name: 'Bowl California',
    category: 'Burgers',
    description: 'Poulet croustillant, avocat, salade croquante & mayo citronnée.',
    price: 14.5,
    rating: '4.7',
    image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 5,
    name: 'Cookie cœur fondant',
    category: 'Desserts',
    description: 'Cookie tout juste sorti du four, chocolat noir & fleur de sel.',
    price: 6.5,
    rating: '5.0',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 6,
    name: 'Citronnade maison',
    category: 'Drinks',
    description: 'Citrons pressés, menthe fraîche et juste ce qu’il faut de douceur.',
    price: 4.5,
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85',
  },
]

const categories = ['All', 'Burgers', 'Pizza', 'Pasta', 'Desserts', 'Drinks']
const categoryLabels = {
  All: 'Tout',
  Burgers: 'Burgers',
  Pizza: 'Pizza',
  Pasta: 'Pasta',
  Desserts: 'Desserts',
  Drinks: 'Drinks',
}
function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [favorites, setFavorites] = useState([])
  const [isDark, setIsDark] = useState(false)
  const [cart, setCart] = useState({})

  const visibleProducts = useMemo(
    () =>
      products.filter((product) => {
        return selectedCategory === 'All' || product.category === selectedCategory
      }),
    [selectedCategory],
  )

  const cartCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0)

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  function changeQuantity(id, amount) {
    setCart((current) => {
      const quantity = (current[id] || 0) + amount
      if (quantity <= 0) {
        const next = { ...current }
        delete next[id]
        return next
      }
      return { ...current, [id]: quantity }
    })
  }

  return (
    <main id="top" className={isDark ? 'app dark' : 'app'}>
      <Header
        isDark={isDark}
        cartCount={cartCount}
        onToggleTheme={() => setIsDark((current) => !current)}
      />
      <Hero />
      <MenuSection
        products={visibleProducts}
        categories={categories}
        categoryLabels={categoryLabels}
        selectedCategory={selectedCategory}
        favorites={favorites}
        onSelectCategory={setSelectedCategory}
        onToggleFavorite={toggleFavorite}
        onAddToCart={(id) => changeQuantity(id, 1)}
      />
      <Footer />
    </main>
  )
}

export default App
