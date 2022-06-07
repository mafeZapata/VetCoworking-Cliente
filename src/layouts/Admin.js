import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";

import { Container } from "reactstrap";

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";

import routes from "../routes.js";
import routes2 from "../routes2.js";

import imagenes from "../components/Headers/imagenes.js";

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
  };



  return (
    <>
      <Sidebar
         logo={{
          innerLink: "/admin/index",
          imgSrc: <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                       src={imagenes.logo} 
                    />
                  </span>,
          imgAlt: "logo",
        }}
        {...props}
        routes={routes}
        
        
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(routes)}
          {getRoutes(routes2)}
          <Redirect from="*" to="/admin/index" />
        </Switch>
        <Container fluid>
          
        </Container>
      </div>
    </>
  );
};

export default Admin;
