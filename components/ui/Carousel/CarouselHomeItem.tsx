import Image from "next/image";

interface CarouselHomeItemProps {
  id: string;
  prev: string;
  next: string;
  src: string;
}

export default function CarouselHomeItem({
  id,
  prev,
  next,
  src,
}: CarouselHomeItemProps) {
  return (
    <div id={id} className="carousel-item relative w-full aspect-20/9">
      <Image
        src={src}
        alt="carousel-image"
        fill
        className="object-cover rounded-md"
      />

      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
        <a href={prev} className="btn btn-circle">
          ❮
        </a>
        <a href={next} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
}
