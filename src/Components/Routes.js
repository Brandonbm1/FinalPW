import { Fragment } from "react";
import { Route } from "react-router-dom"
import Login from "../Pages/Sign/Login";

function Routes(){
    return(
        <Fragment>
            <Route path="/" exact>
                Inicio
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                Registrarse
            </Route>
            <Route path="/deliver" exact>
                Domicilios
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