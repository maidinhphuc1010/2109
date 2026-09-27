import ProductCard from "./ProductCard";
import FavoritesPage from "./FavoritesPage";
import { products } from "./products";
import { useFavoritesStore } from "./FavoritesPage";

function App() {
  const favorites = useFavoritesStore(
    (state) => state.favorites
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1>Danh sách sản phẩm</h1>

      <p>
        Sản phẩm yêu thích: {favorites.length}
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <hr style={{ margin: "40px 0" }} />

      <FavoritesPage />
    </div>
  );
}

export default App;