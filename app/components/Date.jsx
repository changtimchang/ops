import React from 'react'

const Date = ({dat}) => {
    

    return (
    <div className="w-11/12 max-w-5xl text-center mx-auto mt-40 flex flex-col items-center justify-center gap-4">
      <div className="text-3xl bg-[#F1F1F1] px-40 py-20 rounded-2xl shadow-slate-400 shadow-lg ">
        해석 데이터 최근 업데이트 : {dat}
      </div>
    </div>
  )
}

export default Date