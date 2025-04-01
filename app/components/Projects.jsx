"use client";
import React, { useState } from "react";
import { PROCESS_DATA } from "../data";

const Projects = () => {

  const role1 = () => console.log("rol1 ok");
  const role2 = () => console.log("role2 실행");
  const role3 = () => console.log("role3 실행");
  const role4 = () => console.log("role4 실행");

  const roles = [role1, role2, role3, role4];
  return (
    <div className="grid grid-cols-4">
      {PROCESS_DATA.map((item, index) => (
        <div
          key={item.id}
          className="flex items-center justify-center h-full mt-30">
          <button
            onClick={roles[index]}
            className="bg-green-600 p-3 text-white border-0 rounded hover:bg-amber-600 h-50 w-50 ">
            {item.description}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Projects;
