import "./_Home.scss";
import LeandroBujones from "../../assets/img/bg-lean.jpg";
import "animate.css";
import GradientContainer from "../../components/shared/gradientContainer/GradientContainer";

export default function Home() {
  return (
    <main id="HomePage">
      <GradientContainer title="Leandro Bujones" />
      <div className="animate__animated animate__fadeIn animate__slower img-wrapper">
        <img
          className="img-wrapper__img"
          src={LeandroBujones}
          alt="Leandro Bujones"
        />
      </div>
    </main>
  );
}
