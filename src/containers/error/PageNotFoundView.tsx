import * as stylex from "@stylexjs/stylex";
import { Icon404 } from "~/assets/icons";
import { styles } from "./PageNotFoundView.stylex";
import { Button, Space } from "~/components";
import { useNavigate } from "react-router-dom";

type PageNotFoundViewProps = {};

const PageNotFoundView: React.FC<PageNotFoundViewProps> = () => {
  const navigation = useNavigate();

  const onHandleGoToHome = () => {
    navigation("/", {
      replace: true,
    });
  };

  return (
    <div {...stylex.props(styles.container)}>
      <Space direction="vertical" size={4}>
        <h3 {...stylex.props(styles.title)}>Sorry, Page Not Found!</h3>
        <span>Sorry, we couldn’t find the page you’re looking for.</span>
      </Space>
      <img src={Icon404} alt="not-found" {...stylex.props(styles.gif)} />
      <Button onClick={onHandleGoToHome}>Go to Home</Button>
    </div>
  );
};

export default PageNotFoundView;
