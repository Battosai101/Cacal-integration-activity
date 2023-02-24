import {useState,useEffect} from 'react'
import axios from 'axios'
import ProductCard from './components/ProductCard'

export default function App() {

  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts();
  },[]);

  async function getProducts(){
    try {
      const request = await axios.get("https://dummyjson.com/products?skip=0&limit=0");
      setProduct(request.data.products);
      
    } catch (error) {
      setError(error.message);
    }
  }

  const items = product.map((item) => {
    return <ProductCard 
              id={item.id}
              title={item.title}
              price={item.price}
          />
  })

  return (
    <div>
      {error!=="" && error}
      {items}
    </div>
  );
}