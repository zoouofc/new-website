// TODO: Update styling to not use .css and use actual images

// Package Imports
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { useTheme, Box, Fab } from "@mui/material";

// Icon Imports
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Styling
import "keen-slider/keen-slider.min.css";
import "./styles.css";

// Image Import
import SocialMediaBanner from "../../assets/SocialMediaBanner.png";

export const Carousel = () => {
  const theme = useTheme();

  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      renderMode: "performance",
      slides: {
        origin: "center",
        perView: 3,
        spacing: 15,
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("slideChanged", () => {
          setCurrentSlide(slider.track.details.rel);
        });
        slider.on("created", () => {
          setLoaded(true);

          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <img
            className="keen-slider__slide number-slide2"
            src={SocialMediaBanner}
          />
          <div className="keen-slider__slide number-slide2">2</div>
          <div className="keen-slider__slide number-slide3">3</div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              isLeft
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              theme={theme}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              theme={theme}
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <Box
          sx={{
            display: "flex",
            padding: theme.spacing(2, 0, 0),
            justifyContent: "center",
          }}
        >
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <Fab
                key={idx}
                size="small"
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                sx={{
                  backgroundColor: "grey",
                  minHeight: "unset",
                  height: theme.spacing(1.5),
                  width: theme.spacing(1.5),
                  margin: theme.spacing(0, 1),
                  boxShadow: theme.shadows[2],
                  "&:hover": {
                    backgroundColor: "grey",
                  },
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            );
          })}
        </Box>
      )}
    </>
  );
};

const Arrow = ({ onClick, isLeft, theme }) => {
  return (
    <>
      {isLeft && (
        <ArrowBackIosNewIcon
          onClick={onClick}
          sx={{
            cursor: "pointer",
            fill: theme.palette.white.primary,
            width: theme.spacing(4),
            height: theme.spacing(4),
            position: "absolute",
            top: "50%",
            left: theme.spacing(0.5),
            transform: "translateY(-50%)",
          }}
        />
      )}
      {!isLeft && (
        <ArrowForwardIosIcon
          onClick={onClick}
          sx={{
            cursor: "pointer",
            fill: theme.palette.white.primary,
            width: theme.spacing(4),
            height: theme.spacing(4),
            position: "absolute",
            top: "50%",
            left: "auto",
            right: theme.spacing(0.5),
            transform: "translateY(-50%)",
          }}
        />
      )}
    </>
  );
};
