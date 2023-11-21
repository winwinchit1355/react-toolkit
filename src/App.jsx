import {useSelector} from 'react-redux'
function App() {
  const products = useSelector(store=>store.products);
  console.log(products);
  return (
    <div>
      <h1>{products.length}</h1>
    </div>
  )
}

export default App
