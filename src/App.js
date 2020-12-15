import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {


  const [busqueda, guardarBusqueda] = useState({
    pais: '',
    ciudad:''
  })


  const {pais, ciudad} = busqueda;

  const [consultar, guardarConsultar] = useState(false);

  const [resultado, guardarResultado] = useState({});

  useEffect(() => {
    
    const consultarAPI = async () =>{

      if(consultar)
      {

        const appId = '27710f9ae0e59e54680025c662f8653e';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  
        const respuesta = await fetch(url);
  
        const resultado = await respuesta.json();
        
        guardarResultado(resultado)
        guardarConsultar(false);
        
        
      }

    }

    consultarAPI();

  },[consultar, ciudad, pais])

  let componente;

        if(resultado.cod === '404')
        {
          componente = <Error mensaje = "No Hay Resultados" />;
        }else{
          componente = <Clima 
                        resultado={resultado}
                      />
        }


  return (
    <Fragment>
      <Header 
        titulo = "Clima React App"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
