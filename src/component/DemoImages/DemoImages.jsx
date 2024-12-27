/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { seaImage } from "../../assets/images";

const MyImage = ({ image }) => (
  <LazyLoadImage
    alt={image}
    effect="opacity"
    wrapperProps={
      {
        // If you need to, you can tweak the effect transition using the wrapper style.
        // style: { transitionDelay: "1s" },
      }
    }
    src={image}
  />
);

const DemoImages = (props) => {
  const { onInc, onDec } = props;

  return (
    <>
      <p>Demo Images in Child Component👇</p>

      <button
        onClick={() => {
          console.log("Button Cicked +");
          onInc();
        }}>
        +
      </button>

      <button
        onClick={() => {
          console.log("Button Cicked -");
          onDec();
        }}>
        -
      </button>
    </>
  );
};

export default DemoImages;
