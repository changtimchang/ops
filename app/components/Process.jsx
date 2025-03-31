import React from "react";
import { PROCESS_DATA } from "../data";
import Link from "next/link";

const Process = ({}) => {
  return (
    <section className="container mt-10 mx-auto px-12 py-4">
      <li className="grid grid-cols-4 gap-8">
        <div
          className="h-52 rounded-t-xl relative group border-amber-500"
          style={{
            backgroundImage: "../../public/logo.png",
            backgroundRepead: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}>
          데이터 가져오기
        </div>
        <span>AI모델 학습하기</span>
        <span>AI모델 적용하기</span>
        <span>AI예측 사용하기기</span>
      </li>
    </section>
  );
};

export default Process;
