function setup(){
var forma11 = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({color: 0xCC00CC});
malla = new THREE.Mesh(forma11, material);
//luz
 var LuzAmbiental= new THREE.AmbientLight(0xFFFFFF);
 //luz
escena = new THREE.Scene();
escena.add(malla);
escena.add(LuzAmbiental);

camara = new THREE.PerspectiveCamera();
camara.position.z=5;
    
var miCanvas = document.getElementById("miCanvas");
renderer = new THREE.WebGLRenderer({canvas: miCanvas, antialias: true});
renderer.setSize(500,500)


}
function loop(){
    requestAnimationFrame(loop);
    malla.rotation.x    += 0.01;
    malla.rotation.y    += 0.01;
    renderer.render(escena,camara);
    
}
var camara, escena, renderer,malla;
setup();
loop();