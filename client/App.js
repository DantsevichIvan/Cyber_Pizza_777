import React, { useEffect, Suspense } from "react";
import Routes from "./Routes";
import s from "./App.module.css";
import Loading from "./component/common/Loading/Loading";

const App = () => {
  return (
    <div className={s.wrap}>
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </div>
  );
};

export default App;
