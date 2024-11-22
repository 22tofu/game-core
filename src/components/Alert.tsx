import { useState } from "react";

interface AlertProps {
  text: string;
  onClose: () => void;
}

function Alert({ text, onClose }: AlertProps) {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* <div className="alert alert-primary">{text}</div>; */}
      <div
        className="alert alert-warning alert-dismissable fade show"
        role="alert"
      >
        <strong>{text}</strong>
        <button
          type="button"
          className="btn-close float-end"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        />
      </div>
    </>
  );
}

export default Alert;
