import { FavoritesHero } from "../components/heros/FavoritesHero";
import { MainHeader } from "../components/headers/MainHeader";
import { FavouritesContent } from "../components/contents/FavouritesContent";
export const FavoritesPage = () => (
  <main>
    <FavoritesHero>
      <MainHeader favoriteButtonColor="pink" />
    </FavoritesHero>
    <FavouritesContent />
  </main>
);
