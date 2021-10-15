import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { view, onClickClose } = props;
  console.log("components re-render");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("a");
  });

  return (
    <>
      {view ? (
        <div style={style}>
          <p>コンポーネント</p>
          <button onClick={onClickClose}>close</button>
        </div>
      ) : null}
    </>
  );
});
