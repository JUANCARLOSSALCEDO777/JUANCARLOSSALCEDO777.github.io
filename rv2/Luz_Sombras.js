function setup(){
var forma11 = new THREE.SphereGeometry(1);
var material = new THREE.MeshPhongMaterial({color: 0x00CC00});
malla = new THREE.Mesh(forma11, material);
malla.position.y=2;
    
//tablero
    var base = new THREE.Mesh( new THREE.BoxGeometry(5,.1,5),new THREE.MeshLambertMaterial({color:0xFFFFFF}));
//tablero
//luz
 var LuzPuntual= new THREE.PointLight(0xFFFFFF,1);

    LuzPuntual.position.y=20;
 //luz
escena = new THREE.Scene();
escena.add(malla);
escena.add(LuzPuntual);
escena.add(base);


camara = new THREE.PerspectiveCamera();
camara.position.z=12;
camara.position.y=5;
    
var miCanvas = document.getElementById("miCanvas");
renderer = new THREE.WebGLRenderer({canvas: miCanvas, antialias: true});
renderer.setSize(1000,1000)
renderer.shadowMapEnabled = true;
malla.castShadow=true;
base.receiveShadow = true;
LuzPuntual.castShadow= true;


}
function loop(){
    requestAnimationFrame(loop);
    malla.rotation.x    += 0.1;
    malla.rotation.y    += 0.1;
    renderer.render(escena,camara);
    
}
var camara, escena, renderer,malla;
setup();
loop();