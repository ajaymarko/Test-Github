import React, { forwardRef } from "react";

const RefComponent = ({ ...props }, ref) => {
  return (
    <div ref={ref} style={{ color: "red" }}>
      RefComponent
    </div>
  );
};

export default forwardRef(RefComponent);
