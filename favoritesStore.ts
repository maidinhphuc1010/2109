import { create } from "zustand";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface FavoritesState {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: number) => void;
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: number) => boolean;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: [],

  addFavorite: (product) =>
    set((state) => {
      const existed = state.favorites.some((item) => item.id === product.id);

      if (existed) {
        return state;
      }

      return {
        favorites: [...state.favorites, product],
      };
    }),

  removeFavorite: (productId) =>
    set((state) => ({
      favorites: state.favorites.filter(
        (product) => product.id !== productId
      ),
    })),

  toggleFavorite: (product) => {
    const existed = get().favorites.some(
      (item) => item.id === product.id
    );

    if (existed) {
      get().removeFavorite(product.id);
    } else {
      get().addFavorite(product);
    }
  },

  isFavorite: (productId) =>
    get().favorites.some((product) => product.id === productId),
}));