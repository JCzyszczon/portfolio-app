import React from "react";

function StandardButton({ children, isActive, ...props }) {
  return (
    <button
      className={`border border-textColor bg-textColor hover:bg-hoverButtonColor duration-200 text-backgroundColor px-4 text-nowrap py-2 rounded-lg flex-1 ${
        isActive ? "border-gradient" : "border-textColor"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

export default StandardButton;
