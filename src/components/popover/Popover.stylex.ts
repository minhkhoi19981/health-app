// .apps-popover {
//     position: absolute;
//     border-radius: 10px;
//     width: 300px;
//     right: 0;
//     top: 50px;
//     display: flex;
//     padding: 5px 0;
//     flex-direction: column;
//     align-items: flex-start;
//     /* background: #f8fafd; */
//     background: #fff;
//     box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
//     overflow: hidden;
//   }

import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  container: {
    position: "relative",
  },
  popover: {
    position: "absolute",
    minWidth: "270px",
    insetInlineEnd: "2px",
  },
});
