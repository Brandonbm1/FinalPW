import React, { Fragment, useReducer } from "react";
import types from "../../Components/types";
import deliverReducer, { initialDeliverState } from "../../Reducers/deliverReducer";

const Deliver = () => {
    const [deliverState, dispatch] = useReducer(deliverReducer, initialDeliverState)
    return (
        <Fragment>
            <div className="pb-3">
                <div className="col-3 float-end">
                    <button type="button" className="btn btn-primary">+ Agregar Domicilio</button>
                </div>
            </div>
            <hr />
            <h3>Domicilios Solicitados</h3>
            <div className="row mb-4">
                <div className="col-8">
                    <button type="button" className="btn btn-secondary me-1" onClick={() => dispatch({
                        type: types.showAll,
                        payload: "asd"
                    })}>
                    Todos
                    </button>
                    <button type="button" className="btn btn-secondary me-1" onClick={() => dispatch({
                        type: types.showPending,
                        payload: "asd"
                    })}>Pendientes</button>
                    <button type="button" className="btn btn-secondary me-1" onClick={() => dispatch({
                        type: types.showClose,
                        payload: "asd"
                    
                    })}>Cerradas</button>
                </div>
                <div className="col-4">
                    <button type="button" className="btn btn-secondary float-end">Ver mapa</button>
                </div>
            </div>

            <div className="row">
                <div className="col-3 ">
                    <h5>#ID</h5>
                </div>
                <div className="col-5 ">
                    <h5>Solicitante</h5>
                </div>
                <div className="col-4 ">
                    <h5>Estado</h5>
                </div>
                <hr />
            </div>
            {/* <div className="row">
                    {deliverState.map(deliver => (
                        <div key={deliver.id}>
                            <h2>Hola</h2>
                        </div>
                    ))}
            </div> */}



        </Fragment>
    )

}

export default Deliver;