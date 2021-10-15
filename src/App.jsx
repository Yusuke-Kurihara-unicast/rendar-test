import React, { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [view, setView] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickView = () => {
    setView(!view);
  };

  const onClickClose = useCallback(() => setView(false), []);

  // const temp = useMemo(() => 1 + 3, []);

  return (
    <div className="App">
      <input onChange={onChangeText} value={text} />
      <br />
      <br />
      <button onClick={onClickView}>表示</button>
      <ChildArea view={view} onClickClose={onClickClose} />
    </div>
  );
}
