import React from "react";

interface Props {
  text: string;
}

const Divider: React.FC<Props> = ({ text }) => {
  return (
    <div className="relative flex py-5 items-center">
      <span className="border-gray-300 flex-grow border-t"></span>
      <span className="font-bold text-slate-700 mx-4 flex-shrink">
        PROJECTS
      </span>
      <span className="border-gray-300 flex-grow border-t"></span>
    </div>
  );
};

export default Divider;
