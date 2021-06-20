import React, {useRef, useEffect, useState} from "react";
import {useLocation, Switch} from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";
import {GlobalProvider} from "./context/GlobalState";
import {EthAccountInfo} from "./components/EthAccountInfo";
import Loading from "./components/Loading";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({page});
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const page = location.pathname;
  //   document.body.classList.add("is-loaded");
  //   childRef.current.init();
  //   trackPage(page);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  }, [loading]);
  //   const loading = () => {
  //     return (
  //         <div className="Loader-container">
  //             <img className="rotate"  src={Logo}/>
  //         </div>
  //     )
  // }
  return (
    <GlobalProvider>
      {/* <EthAccountInfo /> */}
      {/* {setTimeout(loading, 6000)} */}
      {loading ? (
        <Loading />
      ) : (
        <>
        <ScrollReveal
          ref={childRef}
          children={() => (
            <Switch>
              <AppRoute
                exact
                path="/"
                component={Home}
                layout={LayoutDefault}
              />
            </Switch>
           
          )}
        />
         </>
      )}
    </GlobalProvider>
  );
};

export default App;
