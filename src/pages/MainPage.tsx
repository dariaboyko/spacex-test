import { MainHeader } from "../components/headers/MainHeader";
import { MainHero } from "../components/heros/MainHero";
import { MainPageContent } from "../components/contents/MainPageContent";
export const MainPage = () => (
  <div>
    <MainHero>
      <MainHeader />
    </MainHero>
    <MainPageContent />
  </div>
);
