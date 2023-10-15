// import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from 'react-spring';
import sport from './images/sport.jpg'

function App() {
  const shoes = [
    {
      id: 1,
      name: 'Running Shoes',
      price: 99.99,
      image: sport,
    },
    {
      id: 2,
      name: 'Casual Shoes',
      price: 59.99,
      image: sport,
    },
    {
      id: 3,
      name: 'Normal Shoe',
      price: 59.99,
      image: sport,
    },
    {
      id: 4,
      name: 'College Shoe',
      price: 59.99,
      image: sport,
    },
    {
      id: 5,
      name: 'College Shoe',
      price: 59.99,
      image: sport,
    },
    {
      id: 6,
      name: 'College Shoe',
      price: 59.99,
      image: sport,
    }
  ];

  const cardAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Shoe Store</h1>
      </header>
      <div className="shoe-container">
        {shoes.map((shoe) => (
          <animated.div className="shoe-card" key={shoe.id} style={cardAnimation}>
            <img src={shoe.image} alt={shoe.name} style={{height:300+"px", width: 300+'px'}} />
            <h2>{shoe.name}</h2>
            <p>${shoe.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default App;
