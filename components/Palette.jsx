import React from "react";
import { sizes, colors } from "../DUMMY_DATA";
import Selector from "./Selector";

const Palette = ({ sizeHandler, colorHandler, swimHandler, buttonRef }) => {
  return (
    <div className="flex flex-col fixed bottom-10 bg-purple-600 px-5 py-2 rounded">
      <Selector name="size" data={sizes} handler={sizeHandler} />
      <Selector name="color" data={colors} handler={colorHandler} />
      <button
        ref={buttonRef}
        onClick={swimHandler}
        className="bg-purple-800 text-white p-2 m-2 rounded hover:scale-105 duration-500"
      >
        SWIM!
      </button>
    </div>
  );
};

export default Palette;
