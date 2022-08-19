import React, { useState, useEffect } from "react";
import Main from "./screens/Main";
import Spinner from "./Spinner";

function Loading() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Spinner />
    </div>
  );
}

function Splash() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  return <div>{loading ? <Loading /> : <Main />}</div>;
}

export default Splash;
