import { MainHeader } from "../components/headers/MainHeader";
import { MainHero } from "../components/heros/MainHero";
import { MainPageContent } from "../components/contents/MainPageContent";
export const MainPage = () => (
  <main>
    <MainHero>
      <MainHeader favoriteButtonColor="standart" />
    </MainHero>
    <MainPageContent />
  </main>
);
