import { useCallback, useEffect, useState } from "react";
import { genDataDirectories } from "~/utils";

const useDirectories = () => {
  const dataDirectories = genDataDirectories();
  const [directories, setDirectories] = useState<Directory[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [size, setSize] = useState(8);

  useEffect(() => {
    setDirectories(dataDirectories.splice(0, size));
  }, [size]);

  const onLoadMore = useCallback(async () => {
    try {
      setLoading(true);
      await new Promise((resolve) =>
        setTimeout(() => {
          setSize((value) => value + 4);
          setLoading(false);
          return resolve;
        }, 1000),
      );
    } catch (error) {}
  }, [directories]);

  return { directories, onLoadMore, loading, size };
};

export default useDirectories;
