import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

export default {
  install: () => {
    SwiperCore.use([Navigation, Pagination]);
  },
};
