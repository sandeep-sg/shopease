"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };
  const images = [
    "https://img.freepik.com/free-photo/beautiful-smiling-blonde-woman-sunglasses-holding-shopping-bags-pink-wall_496169-1516.jpg?ga=GA1.1.250074556.1742207635&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/young-teen-woman-sunglasses-hat-looking-something-smartphone-holding-shopping-bags-her-hands-feeling-so-happiness-green-wall_231208-2685.jpg?ga=GA1.1.250074556.1742207635&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/pretty-young-stylish-woman-pink-luxury-dress-using-mobile-phone-holding-shopping-bags_285396-9673.jpg?ga=GA1.1.250074556.1742207635&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/friends-posing-with-paper-bags_23-2147688978.jpg?ga=GA1.1.250074556.1742207635&semt=ais_hybrid&w=740",
  ];
  return (
    <div className="container-cente">
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <div className="w-full h-[580px]">
              <img
                className="w-full h-full object-fill"
                src={image}
                alt=""
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
