import React from "react";

const Hero = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto mt-32 flex flex-col items-center justify-center gap-4">
      <div className="text-3xl">
        해석 데이터 최근 업데이트 :
        <span className="text-amber-500"> {formattedDate} </span>
      </div>
    </div>
  );
};

export default Hero;
