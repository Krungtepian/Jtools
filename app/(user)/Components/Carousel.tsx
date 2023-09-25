import useEmblaCarousel, {EmblaOptionsType } from "embla-carousel-react"
import { PropsWithChildren, useState, useEffect} from 'react'
import Dots from "./DotsCarousel";
import React from "react";

type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);

    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi])

  const length = React.Children.count(children);

  return (
    <>
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex object-cover">{children}</div>
    </div>
    <Dots itemsLength={length} selectedIndex={selectedIndex} />
    </>
  );
};
export default Carousel;