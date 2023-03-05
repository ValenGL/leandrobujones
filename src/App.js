import { MainContainer } from "./components/main-container/MainContainer";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./normalize.css";

export default function App() {
  return (
    <Scrollbars
      // This will activate auto hide
      autoHide
      // Hide delay in ms
      autoHideTimeout={1000}
      // Duration for hide animation in ms.
      autoHideDuration={200}
      autoHeight
      autoHeightMin={"100vh"}
      universal
    >
      <MainContainer />
    </Scrollbars>
  );
}
