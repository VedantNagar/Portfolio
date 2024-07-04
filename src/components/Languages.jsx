import { IoLogoJavascript } from "react-icons/io5";
import { SiCoursera } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiPython } from "react-icons/si";
const Languages = () => {
  return (
    <>
      <div className=" flex flex-wrap p-4 my-10">
        <div className="text-center my-auto ml-16">
          <h2 className="text-white text-2xl">Programming Languages : </h2>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center ml-10">
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <SiCoursera
              title="C"
              className="text-6xl text-blue-600 hover:shadow-lg"
            />
          </div>
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <SiCplusplus title="C++" className="text-6xl text-blue-800" />
          </div>
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <SiPython title="Python" className="text-6xl text-blue-400" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Languages;
