import React from "react";
import { useInView } from "react-intersection-observer";
import "./FadeInSection.css";

const FadeInSection = ({ children }) => {
  const [ref, inView] = useInView({
    // triggerOnce: true, // 한 번만 실행
    threshold: 0.3,    // 화면에 30% 들어왔을 때
  });

  return (
    <div
      ref={ref}
      className={`fade-section ${inView ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
