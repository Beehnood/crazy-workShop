import React from 'react';

const checkVariant = (variant:any) => {
  if (variant === "primary") {
    return { backgroundColor: "#0443fa", color: "white" };
  } else if (variant === "secondary") {
    return { backgroundColor: "gray", color: "black" };
  } else if (variant === "danger") {
    return { backgroundColor: "#c00303", color: "white" };
  } else if (variant === "success") {
    return { backgroundColor: "green", color: "white" };
  } else if (variant === "warning") {
    return { backgroundColor: "yellow", color: "white" };
  }
  return {};
};

export default function Button({ children, variant, style, ...rest }) {
  return (
    <button
      {...rest}
      style={{ borderRadius: "8px", ...style, ...checkVariant(variant) }}
      className="p-2 m-1"
    >
      {children}
    </button>
  );
}
