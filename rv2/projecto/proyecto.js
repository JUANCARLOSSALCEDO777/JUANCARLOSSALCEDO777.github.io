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

camara.position.set(30,30,30);

//camara.position.z=-5; 
//camara.position.z=-5; 

console.log("estoy deseperado d D´:");
var w =camara.rotation;

camara.lookAt( escena.position );
camara.rotation.z +=Math.PI/2;
camara.rotation.z +=Math.PI*1/6;
console.log(w);


//camara.rotation.x -=Math.PI/4;
//--camara

//personajes
escena.add( mallaV1 );
mallaV1.position.set(-2,0,0);

escena.add( mallaV2 );
mallaV2.position.set(2,0,0);

escena.add( CaballoV1 );
CaballoV1.position.set(-10,0,0);
CaballoV1.rotateZ(Math.PI/2);
CaballoV1.rotateX(Math.PI/2);

escena.add( CaballoV2 );
CaballoV2.position.set(10,0,0);
CaballoV2.rotateZ(Math.PI);
CaballoV2.rotateX(Math.PI/2);

escena.add( EstrellaV1 );
EstrellaV1.position.set(-20,0,0);
EstrellaV1.rotateZ(Math.PI/2);
EstrellaV1.rotateX(Math.PI/2);

escena.add( EstrellaV2 );
EstrellaV2.position.set(17,0,0);
EstrellaV2.rotateZ(Math.PI);
EstrellaV2.rotateX(Math.PI/2);

escena.add( TorreV1 );
TorreV1.position.set(-10,15,0);
TorreV1.rotateX(Math.PI/2);

escena.add( TorreV2 );
TorreV2.position.set(10,15,0);
TorreV2.rotateX(Math.PI/2);
//personajes    

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
                      
  

                      
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


