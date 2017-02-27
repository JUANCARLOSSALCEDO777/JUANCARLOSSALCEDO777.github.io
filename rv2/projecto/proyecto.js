var escena = new THREE.Scene();
    
//ejes
    ejes = new THREE.AxisHelper( 50 );
    ejes.position.set( 0, 0, 0 );
    escena.add( ejes );
//ejes
//camara
var camara = new THREE.PerspectiveCamera();

camara.position.set(5,5,5);
//camara.position.z=-5; 
camara.lookAt( escena.position );
//camara
escena.add( mallaV1 );

    

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
                      
  

                      
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


