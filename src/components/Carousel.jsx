import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ imagesArr }) {
  // Slider settings for infinite carousel
  const sliderSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings} className="my-10 py-2 w-8xl">
      {imagesArr.map((img, index) => (
        <div key={index}>
          <h3>
            <img
              src={img.src}
              alt={img.alt || "Gallery image"}
              className="w-full h-[10rem]"
            />
          </h3>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
