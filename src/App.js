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
              stock={item.stock}
              rate={item.rating}
              img={item.thumbnail}
              cat={item.category}
              brand={item.brand}
          />
  })

  return (
    <div className='relative font-[Outfit] text-white w-full h-screen border-2 border-white'>
      <h1 className='text-white font-bold text-3xl tracking-wider mt-[50px] ml-[30px] border-2 border-white'>TechBinge</h1>
      <h1 className='text-white font-bold text-2xl tracking-wider mt-[40px] ml-[30px] text-center underline underline-offset-8 border-2 border-white'>Products</h1>
      <div className='text-white flex items-center mt-[30px] px-[30px] space-x-4 py-2 overflow-auto scrollbar-hide scroll-smooth scroll-pl-[30px] snap-x'>
        {items}
      </div>
      {error!=="" && error}
    </div>
  );
}