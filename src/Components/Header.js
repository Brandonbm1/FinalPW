import React, { Fragment } from 'react';
import { Link, Switch } from 'react-router-dom'
// import login from './login.svg'
import Routes from './Routes';


class Header extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="header row">
                    <div className="col-6 col-md-8">
                        <h2 className="mt-3 mx-3">Domicilios Santa Marta</h2>
                    </div>
                    <div className="float-end col-md-4 col-6 mt-3">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Domicilios</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/delivery" className="nav-link">Mensajeros</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link dropdown-toggle" href="#" id="loginMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Login
                                            </a>
                                            <form className="dropdown-menu p-4">
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">Correo Electronico</label>
                                                    <input type="email" className="form-control" id="email" placeholder="email@example.com" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                                    <input type="password" className="form-control" id="password" />
                                                </div>
                                                <div className="mb-3">
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="checker" />
                                                        <label className="form-check-label" htmlFor="checker">
                                                            Recordarme
                                                        </label>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Ingresar</button>
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <hr />
                    <Switch>
                        <Routes />
                    </Switch>
                    <div className="mt-2">
                        <div className="footer row pb-3">
                            <h6>Domicilios Santa Marta</h6>
                            <span className="col-8 ">
                                Copyright 2021 ©
                            </span>
                            <span className="col-4 text-muted fst-italic text-end">Made by Brandon Brito</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}
export default Header;