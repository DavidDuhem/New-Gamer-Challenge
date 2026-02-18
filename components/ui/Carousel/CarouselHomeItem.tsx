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

      {/* <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 hidden md:flex justify-between">
        <a
          href={prev}
          className="btn btn-circle w-8 h-8 bg-black/50 text-white hover:bg-black/70 transition border-0"
        >
          ❮
        </a>
        <a
          href={next}
          className="btn btn-circle w-8 h-8 bg-black/50 text-white hover:bg-black/70 transition border-0"
        >
          ❯
        </a>
      </div> */}
    </div>
  );
}
