import React, { useState, useEffect } from "react";
import Main from "./screens/Main";

function Loading() {
  return (
    <div>
      <div>Replace w gif</div>
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
