import WishItem from "./WishItem";

export default function Wishlist({ wishlist, onRemoveWishlistItem }) {
  return (
    <div className="wishlist">
      {wishlist.length > 0 ? (
        <ul>
          {wishlist.map((item) => (
            <WishItem
              title={item.title}
              key={item.id}
              onRemoveWishlistItem={() => onRemoveWishlistItem(item.id)}
            />
          ))}
        </ul>
      ) : (
        <h2>Lista vuota 😥</h2>
      )}
    </div>
  );
}
