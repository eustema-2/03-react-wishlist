export default function WishItem({ title, onRemoveWishlistItem }) {
  return (
    <li>
      {title} <button onClick={onRemoveWishlistItem}>❌</button>
    </li>
  );
}
