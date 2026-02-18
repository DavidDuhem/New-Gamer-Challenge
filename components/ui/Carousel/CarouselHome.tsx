import CarouselHomeItem from "./CarouselHomeItem";

export default function CarouselHome() {
  return (
    <>
      <CarouselHomeItem
        id="slide1"
        prev="#slide4"
        next="#slide2"
        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      />
      <CarouselHomeItem
        id="slide2"
        prev="#slide1"
        next="#slide3"
        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      />
      <CarouselHomeItem
        id="slide3"
        prev="#slide2"
        next="#slide4"
        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      />
      <CarouselHomeItem
        id="slide4"
        prev="#slide3"
        next="#slide1"
        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      />
    </>
  );
}
