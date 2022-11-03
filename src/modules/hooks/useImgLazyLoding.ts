import { useRef, useState, useEffect } from 'react';

interface Props {
  options?: IntersectionObserverInit;
  lazy?: boolean;
}

const useImgLazyLoding = ({ options, lazy }: Props) => {
  const elementRef = useRef<HTMLImageElement>();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(!lazy);

  const callback = ([entry]: IntersectionObserverEntry[]) => {
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    if (!lazy) return;

    const observer = new IntersectionObserver(callback, options);
    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [elementRef, options]);

  useEffect(() => {
    if (isLoaded || !isVisible) {
      return;
    }

    setIsLoaded(true);
  }, [isVisible]);

  return { elementRef, isLoaded };
};

export default useImgLazyLoding;
