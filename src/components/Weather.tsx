import React, { createContext, ReactNode } from "react";

interface WeatherProps {
  type: string;
  children: ReactNode;
}

interface WeatherContextValue {
  type: string;
}

const WeatherContext = createContext<WeatherContextValue | undefined>(undefined);

function SmallBody({ children }: { children: ReactNode }) {
  return (
    <div className="px-6 py-6 text-slate-800 bg-indigo-100 rounded-lg mt-8 mr-10 mb-8 lg:text-[30px] md:text-[28px] sm:text-[26px] min-w-[420px] h-96 flex sm:w-max lg:w-max">
      {children}
    </div>
  );
}

function NextDays({ children }: { children: ReactNode }) {
  return (
    <div className="px-6 py-6 text-slate-800 bg-indigo-100 rounded-lg mt-8 mr-10 mb-8 lg:text-[30px] md:text-[28px] sm:text-[26px] min-w-[420px] h-96 flex sm:w-max lg:w-max">
      {children}
    </div>
  );
}

function Body({ children }: { children: ReactNode }) {
  return (
    <div className="px-6 py-6 text-slate-600 bg-indigo-100 rounded-lg mt-8 mr-10 mb-8 lg:text-[34px] md:text-[30px] sm:text-[28px] h-96 lg:w-full">
      {children}
    </div>
  );
}

function Weather({ type, children }: WeatherProps) {
  return (
    <WeatherContext.Provider value={{ type }}>
      <div className={`${type === "flex" && "flex"} lg:block w-full sm:block`}>
        {children}
      </div>
    </WeatherContext.Provider>
  );
}

Weather.Body = Body;
Weather.SmallBody = SmallBody;
Weather.NextDays = NextDays;

export default Weather;
