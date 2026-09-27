import { useFavoritesStore } from "./favoritesStore";

function FavoritesPage() {
  const favorites = useFavoritesStore(
    (state) => state.favorites
  );

  const removeFavorite = useFavoritesStore(
    (state) => state.removeFavorite
  );

  return (
    <div>
      <h2>Sản phẩm yêu thích</h2>

      {favorites.length === 0 && (
        <p>Chưa có sản phẩm yêu thích.</p>
      )}

      {favorites.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "15px",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            width="80"
          />

          <div>
            <h3>{product.name}</h3>

            <p>
              {product.price.toLocaleString("vi-VN")} đ
            </p>

            <button
              onClick={() =>
                removeFavorite(product.id)
              }
            >
              Xóa khỏi yêu thích
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FavoritesPage;