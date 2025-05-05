import { cloneElement, useEffect, useState, Children, useRef } from "react";
import { PropTypes } from "prop-types";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import styles from "./Carousel.module.css";

// const PAGE_WIDTH = 500;

function Carousel({ children }) {
  const containerRef = useRef(null);
  const [slides, setSlides] = useState("");
  const [offset, setOffset] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setPageWidth(containerRef.current.offsetWidth);
      }
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(
    () => setSlides(Children.map(children, (child) => cloneElement(child))),
    []
  );

  function handleOffsetRight() {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - pageWidth;
      const maxOffset = -(pageWidth * (slides.length - 1));

      return Math.max(newOffset, maxOffset);
    });
  }

  function handleOffsetLeft() {
    setOffset((currentOffset) => {
      let newOffset = currentOffset + pageWidth;

      return Math.min(newOffset, 0);
    });
  }

  return (
    <div className={styles.main}>
      <SlArrowLeft
        onClick={handleOffsetLeft}
        className={styles.arrow}
      ></SlArrowLeft>
      <div className={styles.carouselContainer} ref={containerRef}>
        <div className={styles.carouselWindow}>
          <ul
            className={styles.carousel}
            style={{
              transform: `translateX(${offset}px)`,
            }}
          >
            {slides}
          </ul>
        </div>
      </div>
      <SlArrowRight
        onClick={handleOffsetRight}
        className={styles.arrow}
      ></SlArrowRight>
    </div>
  );
}

Carousel.propTypes = {
  children: PropTypes.arr,
};
export default Carousel;
