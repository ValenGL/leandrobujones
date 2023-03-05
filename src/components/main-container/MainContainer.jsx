import "./_MainContainer.scss";

import { Header } from "../shared/header/Header";
import Footer from "../shared/footer/Footer";
import { AppRouter } from "../../routes/AppRouter";

export function MainContainer() {
  return (
    <div id="MainContainer">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}
