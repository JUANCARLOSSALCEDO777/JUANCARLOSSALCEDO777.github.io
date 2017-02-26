var escena = new THREE.Scene();
escena.add( mallaV1 );

var camara = new THREE.PerspectiveCamera();
camara.position = new THREE.Vector3( 10, 10, 10 ); 

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
                      
                      
                      
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
