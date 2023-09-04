import React from "react";

interface ConditionsPrivacyInfo {
  title: string;
  date: string;
  data: any;
}

export default function ConditionsPrivacyInfo({
  title,
  date,
  data,
}: ConditionsPrivacyInfo) {
  return (
    <main className="px-[20px] sm:px-[30px] md:px-[40px] lg:px-[100px] xl:px-[220px]">
      <div className="text-center my-[42px] lg:my-[132px]">
        <h1
          className={`${
            title === "Privacy" ? "text-7xl" : "text-6xl sm:text-7xl"
          } font-semibold gradient-container404`}
        >
          {title}
        </h1>
        <p className="text-lg font-normal mt-[24px] text-neutral6">{date}</p>
      </div>
      <div className="text-greenDark">
        {data.map((dataPoint: any, index: number) => {
          return (
            <div key={index}>
              <h2 className="mb-[24px] font-semibold text-2xl">
                {dataPoint.title}
              </h2>
              <p className="mb-[48px] text-lg font-normal">{dataPoint.text}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
