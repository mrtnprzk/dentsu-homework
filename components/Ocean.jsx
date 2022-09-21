import React, { useEffect, useRef, useState } from "react";
import { changeColor, changeSize, swim } from "../animations";
import Palette from "./Palette";
import Fish from "./Fish";

const Ocean = () => {
  const [fishSize, setFishSize] = useState(250);
  const [fishColor, setFishColor] = useState("golden");
  const fishRef = useRef();
  const buttonRef = useRef();

  const sizeHandler = (e) => {
    setFishSize(e.target.value);
  };

  const colorHandler = (e) => {
    setFishColor(e.target.value);
  };

  const swimHandler = () => {
    swim(fishRef.current, buttonRef);
  };

  useEffect(() => {
    changeSize(fishRef.current);
  }, [fishSize]);

  useEffect(() => {
    changeColor(fishRef.current);
  }, [fishColor]);

  return (
    <>
      <Fish fishRef={fishRef} fishSize={fishSize} fishColor={fishColor} />
      <Palette
        buttonRef={buttonRef}
        sizeHandler={sizeHandler}
        colorHandler={colorHandler}
        swimHandler={swimHandler}
      />
    </>
  );
};

export default Ocean;
