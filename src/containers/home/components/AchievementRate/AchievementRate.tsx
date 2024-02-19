import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInterval } from "usehooks-ts";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import dayjs from "dayjs";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./AchievementRate.stylex";
import { useImagesAchievement } from "../../hooks";

type AchievementRateProps = {};

const CURRENT_RATE = 75;

const AchievementRate: React.FC<AchievementRateProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images } = useImagesAchievement();

  useInterval(() => {
    setCurrentIndex((pre) => (pre === images.length - 1 ? 0 : currentIndex + 1));
  }, 5000);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div {...stylex.props(styles.box)}>
      <div {...stylex.props(styles.rate)}>
        <CircularProgressbarWithChildren
          styles={buildStyles({
            trailColor: "transparent",
            pathColor: "white",
            textColor: "white",
          })}
          strokeWidth={2}
          value={CURRENT_RATE}
        >
          <div>
            <span {...stylex.props(styles.currentDay)}>{dayjs().format("MM/YY")}</span>
            <span {...stylex.props(styles.valueRate)}>{`${CURRENT_RATE}%`}</span>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <AnimatePresence>
        <motion.img
          {...stylex.props(styles.image)}
          key={currentIndex}
          src={images[currentIndex]}
          initial="hiddenRight"
          animate="visible"
          exit="exit"
          variants={slideVariants}
        />
      </AnimatePresence>
    </div>
  );
};

export default AchievementRate;
