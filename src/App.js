import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    // fetch("https://61041af03356ea001748f6b1.mockapi.io/items")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //   });

    axios
      .get("https://61041af03356ea001748f6b1.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://61041af03356ea001748f6b1.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("https://61041af03356ea001748f6b1.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://61041af03356ea001748f6b1.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61041af03356ea001748f6b1.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorites = (obj) => {
    axios.post("https://61041af03356ea001748f6b1.mockapi.io/favorites", obj);
    setFavorites((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorites={onAddToFavorites}
          onAddToCart={onAddToCart}
        />
      </Route>
      <Route path="/favorites" exact>
        <Favorites items={favorites} />
      </Route>
    </div>
  );
}

export default App;
