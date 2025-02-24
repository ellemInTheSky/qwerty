import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSelector } from "react-redux";

const Slider1 = () => {
  const { images, loading } = useSelector((state) => state.cats);
  return loading ? (
    <p>Loading...</p>
  ) : (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="w-[500px] h-96">
      {images.map((img) => (
        <SwiperSlide key={img.id}>
          <img src={img.url} className="w-full h-96 object-cover rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Slider1;
