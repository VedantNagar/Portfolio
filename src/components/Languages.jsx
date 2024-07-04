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
          <div className="rounded-3xl border-4 p-3">
            <SiCoursera title="C" className="text-6xl text-blue-600" />
          </div>
          <div className="rounded-3xl border-4 p-3">
            <SiCplusplus title="C++" className="text-6xl text-blue-600" />
          </div>
          <div className="rounded-3xl border-4 p-3">
            <SiPython title="Python" className="text-6xl text-blue-600" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Languages;
