import './App.css';
import imgSG from './images/sg.svg';
import imgGithub from './images/github-logo-1.svg'
import imgLinkedin from './images/linkedin-3.svg'
import logo from './logo.svg';
import signoMas from './images/signo-mas.svg';
import signoFirebase from './images/firebase-logo.svg';
//importamos nuestros componentes
import Show from './components/Show';
import Create from './components/Create';
import Edit from './components/Edit';

//importamos el router
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App container">
      <div className='row'>
          
              <div className="col-12">

                  <div className="row ">

                    <div className='col-12 nav-config'>
                    <a  id="title-myname" className="navbar-brand font-s-title" href="https://github.com/Sebas-gatica-dev" target="_blank" rel="noreferrer">
                                          <img id="s-style" className="letter-title" src={imgSG}  alt="sg" />
                          </a>

                          <p id="dev" >.developer</p>                                

                    </div>
                            
                  </div>
                              
                
                </div>

                <div className='col-12 mt-4 mb-5'>
                
                
                <header className="App-header row ms-3 me-3">
                  <div className='col-12 text-white mt-5 mb-5'>
                     <h2>¡Esta aplicacion fue hecha con React & Firebase!</h2>
                  </div>
                  <div className='col-12 imgs-flex'>
                     
                         
                             <img src={logo} className="App-logo" alt="logo" />   
                          
                         
                        
                             <img src={signoMas} className="signo-mas mt-5 me-5" alt="signo mas" />

                          
                          
                             <img src={signoFirebase} className="signo-firebase" alt="firebase" />

                      

                 
                  </div>
                  <div className='col-12 mt-3 mb-3 '>
                      <div className='row ms-5 me-5 rounded-4 background-content p-3 text-white'>
                          <p className='col-12'>
                            Esta aplicacion CRUD, es una lista de productos, cuyo modelo sera implementado habiendo sido modificado, en la seccion "historial de compras", de un marketplace, el front es react y bootstrap, y funciona conectado a una base de datos en la nube llamada "Firestore", un servicio gratuito suministrado por google.
                          </p>
                          <p className='col-12'>
                            Trabajando con el paquete npm Firebase, se instancia la conexion, a la base de datos Firestore en el archivo "firebase.js", ese tipo de base de datos de la nube, esta basado en colecciones y documentos, cada unos de los de documentos seria el equivalente a una tabla de las bases de datos relacionales, y cada collecion un conjunto de documentos, dentro de nuestro proyecto pueden haber multiples colecciones. 
                          </p>
                  
              
                      </div>
                  </div>
                  <div className='col-12'>
                         <a href='https://github.com/Sebas-gatica-dev/front-react-backend' target="_blank" rel="noreferrer" type="button" className="btn btn-dark button-repo p-3 mb-4"><h3>¡Visita el repositorio!</h3></a>
                  </div>
                
                </header>
                    
                </div>



                <div className='col-12 mt-5'>
                <BrowserRouter>
                <Routes>
                  <Route path='/' element={ <Show /> } />
                  <Route path='/create' element={ <Create /> } />
                  <Route path='/edit/:id' element={ <Edit /> } />
                </Routes>
              </BrowserRouter> 
    
    
       </div>

       <div className="col-12 mt-5">
             
    
             <div className="row style-row-footer mt-5  p-3">
                   <div className="col-6 d-flex justify-content-end">
                       <a href="https://www.linkedin.com/in/sebastian-gatica-062985200/" target="_blank" rel="noreferrer"><img id="linkedin-img" src={imgLinkedin} alt="My Linkedin Sebastian Gatica"  /></a>
                   </div>
                   <div className="col-6 d-flex ">
                       <a href="https://github.com/Sebas-gatica-dev" target="_blank" rel="noreferrer"><img id="github-img" src={imgGithub} alt="My GitHub Sebas-gatica-dev" /></a>
                   </div>
             </div>
             

     </div>
        
      </div>
      
      

   
    
    </div>
  );
}

export default App;
