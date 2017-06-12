function setup(){
 escena = new THREE.Scene();
    
//---ejes//
    var ejes = new THREE.AxisHelper( 50 );
    ejes.position.set( 0, 0, 0 );
    escena.add( ejes );
//---ejes//

//---luz//
 luz1 = new THREE.PointLight( 0x00FFFF, 1, 100 );
luz1.position.set( 25, 25, 20 );
escena.add( luz1 );
luz2 = new THREE.PointLight( 0xFF0F00, 1, 100 );
luz2.position.set( -25, 25, 20 );
escena.add( luz2 );
luz3 = new THREE.PointLight( 0xFFF000, 1, 100 );
luz3.position.set( 0, -25, 20 );
escena.add( luz3 );
//---luz//

//---plano//
//var PlanoGeo= new THREE.PlaneGeometry(40,40,2,6);
//var PlanoMat=new THREE.MeshLambertMaterial({color: 0xFFFFFF,side: THREE.DoubleSide});
//var Plano = new THREE.Mesh(PlanoGeo,PlanoMat);
//escena.add(Plano);
    
var Piezatablero;
var color = new Array();
    var textura1=THREE.ImageUtils.loadTexture('source/whitemarble.jpg');
var textura2=THREE.ImageUtils.loadTexture('source/douka_quilt.jpg');
color[1]=new THREE.MeshLambertMaterial({map:textura1,side: THREE.DoubleSide});
color[2]=new THREE.MeshLambertMaterial({map:textura2,side: THREE.DoubleSide});
var colorTemp=color[1];

for (var i=-37.5;i<65;i=i+5){
   //console.log("cambio de columna");
    for(var j=-37.5;j<65;j=j+5){
       // console.log("cambio de fila")
    
       if (colorTemp===color[2]){
            colorTemp=color[1];
            //console.log("se cambio a color 1");
       }
        
        else if (colorTemp===color[1]){
            colorTemp=color[2];
            //console.log("se cambio a color 2");
       }
        Piezatablero=new THREE.Mesh(new THREE.PlaneGeometry(5,5,1,1),colorTemp);
        Piezatablero.position.x =i;
        Piezatablero.position.y =j;
        escena.add(Piezatablero);
        Piezatablero.receiveShadow=true;
        //console.log("pieza añadida");
       }
}
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
renderizador.shadowMapEnabled=true;   
TorreV1.castShadow=true;
//TorreV2.castShadow=true;
//EstrellaV1.castShadow=true;
EstrellaV2.castShadow=true;
CaballoV1.castShadow=true;
//CaballoV2.castShadow=true;
malla2Rev1.castShadow=true;
//malla2Rev2.castShadow=true;
//mallaRev1.castShadow=true;
mallaRev2.castShadow=true;
mallaV1.castShadow=true;
//mallaV2.castShadow=true;
//Piezatablero.receiveShadow=true;
luz1.castShadow=true;  
luz2.castShadow=true;
luz3.castShadow=true;
                      
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