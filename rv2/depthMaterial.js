function setup(){
    var forma11 = new THREE.BoxGeometry(100, 100, 50000);
var material = new THREE.MeshDepthMaterial();
malla = new THREE.Mesh(forma11, material);

escena = new THREE.Scene();
escena.add(malla);

camara = new THREE.PerspectiveCamera();
camara.position.z=1500;
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth*.95,window.innerHeight*.95);

document.body.appendChild(renderer.domElement);
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