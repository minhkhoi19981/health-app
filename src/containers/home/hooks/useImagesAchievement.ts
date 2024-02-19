import { useEffect, useState } from "react";
import { IMAGES } from "../_defaultProps";

const useImagesAchievement = () => {
  const [images, setImage] = useState<string[]>([]);

  useEffect(() => {
    setImage(IMAGES);
  }, []);

  return { images };
};

export default useImagesAchievement;
