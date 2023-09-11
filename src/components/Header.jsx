import Form from "./Form";

export default function Header({ onAddWishlistItem }) {
  return (
    <header>
      <h1>🎄 Wishlist di natale 🎅🏻</h1>
      <Form onAddWishlistItem={onAddWishlistItem} />
    </header>
  );
}
