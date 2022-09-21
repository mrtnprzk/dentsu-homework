import Image from "next/image";
import React from "react";

const Fish = ({ fishSize, fishColor, fishRef }) => {
  return (
    <div className="fish fixed" ref={fishRef}>
      <Image
        src={`/images/${fishColor}-fish.svg`}
        alt="fish"
        width={fishSize}
        height={fishSize}
      />
    </div>
  );
};

export default Fish;
