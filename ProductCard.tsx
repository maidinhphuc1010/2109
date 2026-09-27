import { Product, useFavoritesStore } from "./favoritesStore";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore(
    (state) => state.toggleFavorite
  );

  const favorite = favorites.some(
    (item) => item.id === product.id
  );

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "10px",
        width: "220px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        width="200"
        height="150"
      />

      <h3>{product.name}</h3>

      <p>
        {product.price.toLocaleString("vi-VN")} đ
      </p>

      <button onClick={() => toggleFavorite(product)}>
        {favorite
          ? "❤️ Bỏ yêu thích"
          : "🤍 Thêm yêu thích"}
      </button>
    </div>
  );
}

export default ProductCard;