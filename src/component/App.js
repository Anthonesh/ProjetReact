import { Route, Routes } from 'react-router-dom';
import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Nav from './NavBar';
import Header from './Header';
import Panier from './Panier';
import PagePanier from './PagePanier';



function App() {
  return (

    <div className="App">
      <>
      <Nav />
      <Header/>


      <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/:productId" element={<ProductDetail />} />
      <Route path="/panier" element={<PagePanier />} />
      </Routes>
      </>
      
    </div>
  );
}

export default App;
