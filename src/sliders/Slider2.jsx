import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/effect-cards";

const Slider2 = () => {
  const { images, loading } = useSelector((state) => state.cats);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <Swiper
      effect="cards"
      grabCursor={true}
      modules={[EffectCards]}
      className="w-[290px] h-[320px]">
      {images.map((img) => (
        <SwiperSlide key={img.id} className=" flex justify-center items-center">
          <img
            src={img.url}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider2;
