var escena = new THREE.Scene();
escena.add( mallaV1 );

var camara = new THREE.PerspectiveCamera();

camara.position =new THREE.Vector3( 15, 15, 15 );
camara.lookAt( escena.position );

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
                      
                      
                      
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
