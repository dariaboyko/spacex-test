import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { RecoilRoot, atom } from "recoil";
import "./global.scss";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
]);

function App() {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default App;
