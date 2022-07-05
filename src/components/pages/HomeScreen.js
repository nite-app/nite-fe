import React, { lazy, Suspense } from "react";
import Spinner from "../Spinner";
const Home = React.lazy(() => import("../screens/Home"));

function HomeScreen({ active, setActive }) {
  return (
    <div className="w-full h-full min-h-full box-border overflow-y-scroll rounded-3xl bg-backpanel p-8 relative 2xl:p-12">
      <Suspense fallback={<Spinner />}>
        <Home active={active} setActive={setActive} />
      </Suspense>
    </div>
  );
}

export default HomeScreen;
