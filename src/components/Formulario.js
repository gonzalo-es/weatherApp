import React, {useState} from 'react'

const Formulario = ({busqueda,guardarBusqueda, guardarConsultar}) => {

    

    const [error, guardarError] = useState(false);

    //Extraigo las variables

    const {pais, ciudad} = busqueda;

    const handleChange = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();

        if(pais.trim() === '' || ciudad.trim() === '')
        {
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarConsultar(true)
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error? <p className="red darken-4 error">Todos los Campos son Obligatorios</p> : null}
            
            <div className="input-field col s12">
                <input 
                    type="text" 
                    id="ciudad"
                    name="ciudad"
                    value={ciudad}
                    onChange={handleChange}    
                />
                <label htmlFor="ciudad">Ciudad</label>
            </div>

            <div className="input-field col s12">
                <select 
                    name="pais" 
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">--Seleccione un Pais--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">M&eacute;xico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Espa&ntilde;a</option>
                    <option value="PE">Per&uacute;</option>
                </select>
                <label htmlFor="pais">Pais</label>
            </div>

            <div className="input-field col s12">
                <input
                    type="submit" 
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
     );
}
 
export default Formulario;