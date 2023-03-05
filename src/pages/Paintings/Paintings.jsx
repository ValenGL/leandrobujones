import "./_Paintings.scss";
import { SwiperComponent } from "../../components/swiper/SwiperComponent";
import GradientContainer from "../../components/shared/gradientContainer/GradientContainer";

export default function Paintings() {
  return (
    <main id="PaintingsPage">
      <GradientContainer title="Obras" />
      <div className="animate__animated animate__fadeIn animate__slower">
        <SwiperComponent />
      </div>
    </main>
  );
}
