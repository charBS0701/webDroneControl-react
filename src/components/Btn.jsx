import React from "react";

const Btn = React.forwardRef(({ value, onClick, onKeyDown }, ref) => {
  return (
    <button onClick={onClick} onKeyDown={onKeyDown} ref={ref}>
      {value}
    </button>
  );
});

export default Btn;
