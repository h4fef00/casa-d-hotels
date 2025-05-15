import Img1 from "../../assets/images/naples-marquee-1.jpg";
import Img2 from "../../assets/images/naples-marquee-2.jpg";
import Img3 from "../../assets/images/naples-marquee-3.jpg";
import Img4 from "../../assets/images/naples-marquee-4.jpg";
const images = [Img1, Img2, Img3, Img4];

function Slider() {
  return (
    <>
      <div className="slider-wrapper">
        <div className="slider-track">
          {images.concat(images).map((src, index) => (
            <div className="slider-item" key={index}>
              <img src={src} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Slider;
