import { useState, useEffect } from "react";

import wishlistStorage from "./utilities/wishlistStorage";

import Header from "./components/Header";
import Wishlist from "./components/Wishlist";

export default function App() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const wishlist = wishlistStorage.get();
    setWishlist(wishlist);
  }, []);

  function handleAddWishlistItem(title) {
    setWishlist((current) => {
      const wishlistUpdated = [...current, { id: Date.now(), title }];
      wishlistStorage.set(wishlistUpdated);
      return wishlistUpdated;
    });
  }

  function handleRemoveWishlistItem(id) {
    setWishlist((current) => {
      const wishlistUpdated = current.filter((elm) => elm.id !== id);
      wishlistStorage.set(wishlistUpdated);
      return wishlistUpdated;
    });
  }

  return (
    <div className="container-small">
      <div className="app-wrapper">
        <Header onAddWishlistItem={handleAddWishlistItem} />
        <Wishlist
          wishlist={wishlist}
          onRemoveWishlistItem={handleRemoveWishlistItem}
        />
      </div>
    </div>
  );
}
