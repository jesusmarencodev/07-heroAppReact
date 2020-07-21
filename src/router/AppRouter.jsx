import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PriveteRoute } from "./PriveteRoute";
import { AuthContext } from "../components/auth/AuthContext";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

	const {user} = useContext(AuthContext);

	console.log(user.logged)

  return (
    <Router>
      <div>
        <Switch>
					<PublicRoute
						path='/login'
						component={LoginScreen}
						isAuthenticated={user.logged}
					/>
					
					<PriveteRoute
						path='/'
						component={DashboardRoutes}
						isAuthenticated={user.logged}  
					/>
        </Switch>
      </div>
    </Router>
  );
};
