import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeID = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeID);
  }, [list]);
  return (
    <>
      <p className={`alert alert-${type}`}>{msg}</p>
    </>
  );
};

export default Alert;
