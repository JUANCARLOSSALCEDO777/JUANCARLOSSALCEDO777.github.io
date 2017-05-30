function setup(){
 cubo1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1),new THREE.MeshNormalMaterial());
 cubo2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1),new THREE.MeshNormalMaterial());
    cubo1.position.x=0.7
    cubo2.position.x=-0.7;
    
    camara = new THREE.PerspectiveCamera();
camara.position.z=5;
raycaster= new THREE.Raycaster();
raycaster.setFromCamera(new THREE.Vector2(0,0),camara)

escena = new THREE.Scene();
escena.add(cubo1);
escena.add(cubo2);
escena.add(camara);



renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth*.95,window.innerWidth*.95);

document.body.appendChild(renderer.domElement);
}

function loop(){
    
    var intersects=raycaster.intersectObjects(escena.children);
    if(intersects.length>0) step=-step;
    cubo1.rotation.x += step;
    cubo1.rotation.y += step;
    cubo2.rotation.x += step;
    cubo2.rotation.y += step;
    requestAnimationFrame(loop);
    renderer.render(escena,camara);
}
var camara, escena, renderer,cubo1,cubo2,raycaster;
var step=0.01;
setup();
loop();