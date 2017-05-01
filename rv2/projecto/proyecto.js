function setup(){
 escena = new THREE.Scene();
    
//---ejes//
    var ejes = new THREE.AxisHelper( 50 );
    ejes.position.set( 0, 0, 0 );
    escena.add( ejes );
//---ejes//

//---luz//
 luz = new THREE.PointLight( 0xFFFFFF, 1, 100 );
luz.position.set( 15, 15, 15 );
escena.add( luz );
//---luz//

//---plano//
var PlanoGeo= new THREE.PlaneGeometry(30,30,2,6);
var PlanoMat=new THREE.MeshLambertMaterial({color: 0x67EE0F,side: THREE.DoubleSide});
var Plano = new THREE.Mesh(PlanoGeo,PlanoMat);
escena.add(Plano);
//---plano//

//--camara//
 camara = new THREE.PerspectiveCamera();
camara.position.set(20,20,20);
camara.lookAt( escena.position );
camara.rotation.z +=Math.PI/2; 
camara.rotation.z +=Math.PI*1/6;
camara.up.set( 0, 0, 1 );//colocando el top de la camara en el eje z+ cuestiones de orbit control
//--camara//

//---personajes//
escena.add( mallaV1 );
mallaV1.position.set(3,12.5,0);

escena.add( mallaV2 );
mallaV2.position.set(-3,12.5,0);


escena.add( mallaRev1 );
mallaRev1.position.set(3,7.5,0);
mallaRev1.rotateX( Math.PI/2);

escena.add( mallaRev2 );
mallaRev2.position.set(-3,7.5,0);
mallaRev2.rotateX( Math.PI/2);

escena.add( malla2Rev1 );
malla2Rev1.position.set(3,2.5,0);
malla2Rev1.rotateX( Math.PI/2);

escena.add( malla2Rev2 );
malla2Rev2.position.set(-3,2.5,0);
malla2Rev2.rotateX( Math.PI/2);

escena.add( CaballoV1 );
CaballoV1.position.set(-3,-2.5,2);
CaballoV1.rotateZ(Math.PI/2);
CaballoV1.rotateX(Math.PI/2);

escena.add( CaballoV2 );
CaballoV2.position.set(3,-2.5,2);
CaballoV2.rotateZ(Math.PI/2);
CaballoV2.rotateX(Math.PI/2);

escena.add( EstrellaV1 );
EstrellaV1.position.set(-3,-7.5,2);
EstrellaV1.rotateZ(Math.PI/2);
EstrellaV1.rotateX(Math.PI/2);

escena.add( EstrellaV2 );
EstrellaV2.position.set(3,-7.5,2);
EstrellaV2.rotateZ(Math.PI/2);
EstrellaV2.rotateX(Math.PI/2);

escena.add( TorreV1 );
TorreV1.position.set(-3,-12.5,0.5);
TorreV1.rotateX(Math.PI/2);

escena.add( TorreV2 );
TorreV2.position.set(3,-12.5,0.5);
TorreV2.rotateX(Math.PI/2);
//escena.add(helper); //visualizador de las nomales de el alfil creado en  FigRevolucion

//---personajes//    
//--controles//
controls = new THREE.OrbitControls( camara );
//--controles//

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
                      
  

                      
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );

}

function loop(){
    requestAnimationFrame( loop);

    controls.update();
    renderizador.render(escena,camara);
    
}
var escena,camara,renderizador;
setup();
loop();