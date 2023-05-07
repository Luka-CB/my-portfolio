import { createContext, ReactNode, useState } from "react";

interface childrenIFace {
  children: ReactNode;
}

interface dataIFace {
  id: string;
  screenshotUrl: string;
}

interface carouselIface {
  isCarouselOpen: boolean;
  setIsCarouselOpen: any;
  images: dataIFace[];
  setImages: any;
}

export const CarouselContext = createContext({} as carouselIface);

const CarouselProvider = ({ children }: childrenIFace) => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [images, setImages] = useState<dataIFace[]>([]);

  const contextData = {
    isCarouselOpen,
    setIsCarouselOpen,
    images,
    setImages,
  };

  return (
    <CarouselContext.Provider value={contextData}>
      {children}
    </CarouselContext.Provider>
  );
};

export default CarouselProvider;
