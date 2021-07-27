import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPinterest,
  faLinkedinIn,
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";

export default {
  install: () => {
    library.add(
      faPinterest,
      faLinkedinIn,
      faInstagram,
      faFacebookF,
      faTwitter,
      faLongArrowAltLeft,
      faLongArrowAltRight
    );
  },
};
