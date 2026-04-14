import React from "react";

type InputProps = {
  label: string;
  type: string;
  value: string;
};

const Input = (props: InputProps) => {
  return (
    <div className="flex w-full flex-col rounded-lg bg-[#FAFAFA] p-2 shadow-sm">
      <label className="text-xs font-medium text-black/60">{props.label}</label>
      <input
        type={props.type}
        className="bg-transparent text-sm focus:outline-none"
        defaultValue={props.value}
      />
    </div>
  );
};

export default Input;
