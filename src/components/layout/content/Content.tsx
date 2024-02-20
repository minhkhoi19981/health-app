import { PropsWithChildren, useCallback, useEffect, useRef, useState } from "react";
import { ScrollToTop, Scrollbar } from "~/components";
import { styles } from "./Content.stylex";

type ContentProps = PropsWithChildren;

const Content: React.FC<ContentProps> = ({ children }) => {
  const scrollRef = useRef<any>(null);
  const [visibleScrollTop, setVisibleScrollTop] = useState(true);

  const onHandleScrollTop = useCallback(
    () =>
      scrollRef.current.scroll({
        top: 0,
        behavior: "smooth",
      }),
    [scrollRef],
  );

  const scrollHandler = useCallback(
    (event: any) => {
      const { scrollTop } = event.target;
      if (scrollTop >= 200) {
        setVisibleScrollTop(false);
      } else {
        if (!visibleScrollTop) {
          setVisibleScrollTop(true);
        }
      }
    },
    [visibleScrollTop],
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", scrollHandler, { passive: true });
    }
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <Scrollbar ref={scrollRef} style={styles.content}>
      {children}
      {!visibleScrollTop && <ScrollToTop onTop={onHandleScrollTop} />}
    </Scrollbar>
  );
};

export default Content;
