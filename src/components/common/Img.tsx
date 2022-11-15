import React from 'react';
import Image from 'next/image';

import useImgLazyLoding from '@src/modules/hooks/useImgLazyLoding';

export interface ImgProps {
  width: number | `${number}`;
  height: number | `${number}`;
  src: string;
  alt: string;
  lazy: boolean;
}

const Img = (props: ImgProps) => {
  const { src, alt, width, height, lazy } = props;

  const { elementRef, isLoaded } = useImgLazyLoding({
    options: { rootMargin: '0px 0px 300px 0px' },
    lazy,
  });

  return (
    <div ref={elementRef as React.RefObject<HTMLImageElement>}>
      <Image
        width={width}
        height={height}
        src={isLoaded ? src : '/images/carView.jpg'}
        alt={alt}
      />
    </div>
  );
};

export default Img;
