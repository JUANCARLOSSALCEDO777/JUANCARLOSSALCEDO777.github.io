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

camara.position.set(15,15,15);

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
mallaV1.position.set(3,0,0);

escena.add( mallaV2 );
mallaV2.position.set(1,0,0);

//personajes    

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
                      
  

                      
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


