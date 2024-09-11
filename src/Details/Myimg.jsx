import React, { useState } from "react";
const Myimg = ({ imgs = [{ image: "" }] }) => {
  const [mainImg, setMainImg] = useState(imgs[0]);
  return (
    <div className="flex items-center justify-center gap-5 ">
      <div>
        {imgs.map((theImg, i) => {
          return (
            <figure key={i}>
              <img
                src={theImg.image}
                alt=""
                className="w-32 h-32 border mt-1 rounded shadow-lg"
                onClick={() => setMainImg(theImg)}
              />
            </figure>
          );
        })}
      </div>
      <div>
        <img
          src={mainImg.image ? mainImg.image : imgs[0].image}
          alt="Main"
          className="h-72 w-72 md:w-80 md:96 border rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};
export default Myimg;
