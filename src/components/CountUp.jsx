import { useEffect, useRef, useState } from "react";

export default function CountUp({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const frameRef = useRef(null);

  // 1. Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 2. Animation logic
  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // Easing function (Power2 Out) for a smoother finish
      const progressRatio = Math.min(progress / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progressRatio, 2); 

      const value = easedProgress * end;
      
      // Handle decimals (like 99.9%) or integers
      const formattedValue = end % 1 === 0 
        ? Math.round(value) 
        : value.toFixed(1);

      setCount(formattedValue);

      if (progress < duration) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [end, duration, isVisible]);

  return (
    <span ref={containerRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}