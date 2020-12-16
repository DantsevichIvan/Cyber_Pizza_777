import React, { useEffect, Suspense } from "react";
import Routes from "./Routes";
import "./style/App.css";
import Loading from "./component/Loading";

const App = () => {
  return (
    <div className="wrap">
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </div>
  );
};

export default App;
