import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
  EffectCube,
} from "swiper/modules";
import { useSelector } from "react-redux";

const Slider5 = () => {
  const { images, loading } = useSelector((state) => state.cats);
  return loading ? (
    <p>Loading...</p>
  ) : (
    <Swiper effect="cube" modules={[EffectCube]} className="w-[500px] h-96">
      {images.map((img) => (
        <SwiperSlide className="w-[500x]" key={img.id}>
          <img src={img.url} className="w-full h-96 object-cover rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Slider5;
