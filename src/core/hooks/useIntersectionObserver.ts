import React from "react";

const defaultOptions: IntersectionObserverInit = {
  threshold: 1,
};

const useIntersectionObserver = <T extends HTMLElement>(
  options: IntersectionObserverInit = defaultOptions
) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const ref: React.LegacyRef<T> = React.createRef();

  React.useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(
          entry.isIntersecting && entry.intersectionRatio === options.threshold
        );
      });
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return { ref, isIntersecting };
};

export default useIntersectionObserver;
