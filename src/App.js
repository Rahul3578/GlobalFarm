import ProductList from "./components/ProductList";
import Header from "./components/Header";
import CartList from "./components/CartList";
import "./App.css";
import { useState } from "react";

function App() {
  const product = [
    {
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1e1aba59255963.5a1be06fbcca8.jpg",
      name: "Nitrogen fertilizer",
      category: "Fertilizer",
      seller: "Global Farm",
      price: 999,
    },
    {
      url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/31MtM5O4rPL.jpg",
      name: "P-virus repeleant",
      category: "Antibacterial",
      seller: "Global Farm",
      price: 599,
    },
    {
      url: "https://image.made-in-china.com/44f3j00NOwfinRCZarT/Self-Operated-Agricultural-Bio-Compost-Organic-Fertilizer-Factory.webp",
      name: "Organic fertilizer",
      category: "Fertilizer",
      seller: "Global farm",
      price: 1000,
    },
    {
      url: "https://i.pinimg.com/474x/86/0e/dd/860edd752961a8fb4389c3735383ba4d.jpg",
      name: "PH balancer for soil",
      category: "Fertilizer",
      seller: "Global Farm",
      price: 700,
    },
    {
      url: "https://5.imimg.com/data5/SELLER/Default/2023/9/347863918/LQ/HT/AW/23752951/agricultural-fertilizer-capsules-grow-azoto.jpg",
      name: "GrowMore antibacterial",
      category: "Fertilizer",
      seller: "Global Farm",
      price: 1500,
    },
    {
      url: "https://static.wixstatic.com/media/4c2df0_c895b976e6604277a136d84b20dd1e20~mv2.png/v1/fill/w_480,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4c2df0_c895b976e6604277a136d84b20dd1e20~mv2.png",
      name: "Liquid Soil",
      category: "Fertilizer",
      seller: "Global farm",
      price: 600,
    },

  ];

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const BuyNow = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div>
      <Header count={cart.length} handleShow={handleShow}></Header>

      {showCart ? (
        <CartList cart={cart}></CartList>
      ) : (
        <ProductList product={product} BuyNow={BuyNow}></ProductList>
      )}
    </div>
  );
}

export default App;
