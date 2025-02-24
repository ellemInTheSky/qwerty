import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
  EffectCube,
} from "swiper/modules";
import { useSelector } from "react-redux";

const Slider3 = () => {
  const { images, loading } = useSelector((state) => state.cats);
  return loading ? (
    <p>Loading...</p>
  ) : (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="w-full h-[350px]">
      {images.map((img) => (
        <SwiperSlide className="max-w-[300px]  bg-center" key={img.id}>
          <img 
            src={img.url }
            className="h-full object-cover rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Slider3;
