import { Fragment } from "react";
import { Route } from "react-router-dom"
import Deliver from "../Pages/Delivers/Deliver";
import Login from "../Pages/Sign/Login";

function Routes(){
    return(
        <Fragment>
            <Route path="/" exact>
                <Deliver />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signin">
                Registrarse
            </Route>
            <Route path="/deliver/details">
                Detalles del domicilio
            </Route>
            <Route path="/deliver/map">
                Mapa
            </Route>
            <Route path="/delivery">
                Mensajeros
            </Route>
        </Fragment>
    )
}
export default Routes;