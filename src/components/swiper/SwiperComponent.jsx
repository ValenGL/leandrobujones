// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Obra1 from "../../assets/img/paintings/1.jpg";
import Obra2 from "../../assets/img/paintings/2.jpg";
import Obra3 from "../../assets/img/paintings/3.jpg";
import Obra4 from "../../assets/img/paintings/4.jpg";
import Obra5 from "../../assets/img/paintings/5.jpg";
import Obra6 from "../../assets/img/paintings/6.jpg";
import Obra7 from "../../assets/img/paintings/7.jpg";
import Obra8 from "../../assets/img/paintings/8.jpg";
import Obra9 from "../../assets/img/paintings/9.jpg";
import Obra10 from "../../assets/img/paintings/10.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./_SwiperComponent.scss";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export function SwiperComponent() {
  return (
    <>
      <Swiper
        id="swipercomponent"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="painting" src={Obra1} alt="Obra 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="painting" src={Obra2} alt="Obra 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="painting" src={Obra3} alt="Obra 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="painting" src={Obra4} alt="Obra 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="painting" src={Obra5} alt="Obra 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="painting" src={Obra6} alt="Obra 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="painting" src={Obra7} alt="Obra 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="painting" src={Obra8} alt="Obra 8" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="painting" src={Obra9} alt="Obra 9" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="painting" src={Obra10} alt="Obra 10" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
