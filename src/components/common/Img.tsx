import useImgLazyLoding from 'modules/hooks/useImgLazyLoding';
import React from 'react';

export interface ImgProps {
  width: number | '100%';
  height: number | '100%';
  src: string;
  alt: string;
  lazy: boolean;
}

const Img = (props: ImgProps) => {
  const { src, alt, width, height, lazy } = props;

  const { elementRef, isLoaded } = useImgLazyLoding({
    options: { rootMargin: '0px 0px 1000px 0px' },
    lazy,
  });

  return (
    <img
      style={{ width, height }}
      ref={elementRef as React.RefObject<HTMLImageElement>}
      src={isLoaded ? src : 'images/carView.jpg'}
      alt={alt}
    />
  );
};

export default Img;
