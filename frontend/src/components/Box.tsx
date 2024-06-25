import { useState } from "react";

const Box = ({ children, smallIcon }) => {
  const onMobile = window.innerWidth < 600;
  const [open, setOpen] = useState<boolean>(!onMobile);
  return (
    <>
      <div
        className={`closed-box ${!open && "showing"}`}
        onClick={() => setOpen(true)}
      >
        {smallIcon}
      </div>
      <div className={`open-box ${open && "showing"}`}>
        {onMobile && <div onClick={() => setOpen(false)}>x</div>}
        {children}
      </div>
    </>
  );
};

export default Box;
