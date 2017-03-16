var escena = new THREE.Scene();
    
//---ejes//
    var ejes = new THREE.AxisHelper( 50 );
    ejes.position.set( 0, 0, 0 );
    escena.add( ejes );
//---ejes//

//---luz//
var luz = new THREE.PointLight( 0xFFFFFF, 1, 100 );
luz.position.set( 15, 15, 15 );
escena.add( luz );
//---luz//



//--camara//
var camara = new THREE.PerspectiveCamera();
camara.position.set(15,15,15);
camara.lookAt( escena.position );
camara.rotation.z +=Math.PI/2; 
camara.rotation.z +=Math.PI*1/6;
//--camara//

//---personajes//
escena.add(FigFinal1);
FigFinal1.position.x=5;
FigFinal1.position.y=5;

//---personajes//   
escena.add(Trama);
Trama.position.x=-5;
Trama.position.y=5;
//Trama.position.z=0.5;
Trama.rotateX(Math.PI/2);
Trama.rotateY(Math.PI/2);

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
                      
  

                      
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


