import React from "react";

function ButtonComponent({name, color}) {
  return (
    <>
      <button style={{backgroundColor: color}} className="px-5 py-2 mx-2 rounded-3xl font-bold text-lg text-black">{name}</button>
    </>
  );
}

export default ButtonComponent;
