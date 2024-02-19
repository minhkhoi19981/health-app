import { PropsWithChildren } from "react";
import Scrollbar from "~/components/scrollbar";
import { styles } from "./Content.stylex";

type ContentProps = PropsWithChildren;

const Content: React.FC<ContentProps> = ({ children }) => {
  return <Scrollbar style={styles.content}>{children}</Scrollbar>;
};

export default Content;
