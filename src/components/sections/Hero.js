import React, {useState} from "react";
import classNames from "classnames";
import {SectionProps} from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import Timer from "../timer/Timer";
import {makeStyles} from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
import BuyModal from "./BuyModal";
import {useStore} from "../../context/GlobalState";
import {setModal} from "../../store/actions";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);
  // const [open, setOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const handleOpen = () => {
    dispatch(setModal(modalState));
  };

  const [
    {web3, accounts, web3LoadingErrorMessage, open},
    dispatch,
  ] = useStore();
  const [modalState, setValue] = useState(true);

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
              style={{fontFamily: "'Noto Sans JP', sans-serif",fontWeight:"1000"}}
            >
              Best Time To Become A Part Of{" "}
              <span className="text-color-primary">AREKANET</span>
            </h1>
            <div
              className="container-xs"
              style={{textAlign: "center", justifyContent: "center"}}
            >
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <Timer />

                  <button
                    wideMobile
                    onClick={handleOpen}
                    className="button-buy"
                    style={{fontFamily:"'Source Code Pro', monospace"}}
                  >
                    BUY AKA TOKENS
                  </button>
                {open ? <BuyModal value={open} /> : ""}
                <h1
              className="mt-10 mb-1 reveal-from-bottom"
              data-reveal-delay="200"
              style={{fontFamily: "'Noto Sans JP', sans-serif",fontWeight:"1000", marginBottom: "-30px"}}
            >
              What is  <span className="text-color-primary"> Arekanet</span> ?
            </h1>
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a
              data-video="https://player.vimeo.com/video/538330767"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              {/* <iframe src="https://player.vimeo.com/video/538139657?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="WhatsApp Video 2021-04-17 at 6.55.36 PM.mp4"></iframe> */}
              <Image
                className="has-shadow"
                src={require("./../../assets/images/newOne.jpg")}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/538330767"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
