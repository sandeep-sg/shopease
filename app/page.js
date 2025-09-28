import Carousel from "./components/Carousel";
import PopularProduct from "./components/BestSeller";
import ShopByCategory from "./components/ShopByCategory";

export default function Home() {
  return (
    <>
      <Carousel />
      <ShopByCategory />
      <PopularProduct />
    </>
  );
}
