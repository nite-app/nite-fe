import React, { useState, useEffect } from "react";

function Loading() {
  return (
    <div>
      <div>Replace w gif</div>
    </div>
  );
}

function Splash() {
  const [loading, setLoading] = useState(true);

  return <div>{loading ? <Loading /> : <></>}</div>;
}

export default Splash;
