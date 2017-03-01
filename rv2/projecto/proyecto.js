var escena = new THREE.Scene();
    
//ejes
    ejes = new THREE.AxisHelper( 50 );
    ejes.position.set( 0, 0, 0 );
    escena.add( ejes );
//ejes

//luz//
var luz = new THREE.PointLight( 0xFFFFFF, 1, 100 );
luz.position.set( 15, 15, 15 );
escena.add( luz );
//luz//

//--camara
var camara = new THREE.PerspectiveCamera();

camara.position.set(15,15,15);//REPONER C

//camara.position.z=-5; 


console.log("estoy deseperado d D´:");
var w =camara.rotation;

camara.lookAt( escena.position );
camara.rotation.z +=Math.PI/2; 
camara.rotation.z +=Math.PI*1/6;
console.log(w);



//--camara

//personajes
escena.add( mallaV1 );
mallaV1.position.set(10,0,0);

escena.add( mallaV2 );
mallaV2.position.set(-10,0,0);


escena.add( mallaRev1 );
mallaRev1.position.set(5,0,0);
mallaRev1.rotateX( Math.PI/2);

escena.add( mallaRev2 );
mallaRev2.position.set(-5,0,0);
mallaRev2.rotateX( Math.PI/2);

escena.add( malla2Rev1 );
malla2Rev1.position.set(1,0,0);
malla2Rev1.rotateX( Math.PI/2);

escena.add( malla2Rev2 );
malla2Rev2.position.set(-1,0,0);
malla2Rev2.rotateX( Math.PI/2);



//escena.add(helper); //visualizador de las nomales de el alfil creado en  FigRevolucion



//personajes    

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
                      
  

                      
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


