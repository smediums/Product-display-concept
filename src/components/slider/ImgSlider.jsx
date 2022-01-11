import { useState } from "react";
import { Link } from "react-router-dom";
import { lgImgs, thumbNails } from "./imgs";

const ImgSlider = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const handleNxtImg = () => {
    if (imgIndex < lgImgs.length - 1) {
      setImgIndex(imgIndex + 1);
    }
  };

  const handlePrvImg = () => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    }
  };

  return (
    <>
      <div className="lgImg">
        <div className="prv" data-testid="prv" onClick={handlePrvImg}>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="nxt" data-testid="nxt" onClick={handleNxtImg}>
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <img
          src={lgImgs[imgIndex].src}
          key={lgImgs[imgIndex].id}
          alt={lgImgs[imgIndex].alt}
        />
      </div>
      <div className="thumbNails">
        {thumbNails.map((thumb) => (
          <div
            className={`curThumb ${
              thumb === thumbNails[imgIndex] ? "clicked" : ""
            }`}
            key={thumb.id}
            onClick={() => setImgIndex(thumbNails.indexOf(thumb))}
          >
            <img src={thumb.src} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImgSlider;
