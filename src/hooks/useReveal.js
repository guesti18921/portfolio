import { useEffect, useRef, useState } from "react";

export function useReveal(options) {
  const ref = useRef(null);
  const supported = typeof IntersectionObserver !== "undefined";
  const [isVisible, setIsVisible] = useState(!supported);

  useEffect(() => {
    if (!supported) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options, supported]);

  return [ref, isVisible];
}