function setup(){
 cubo1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1),new THREE.MeshNormalMaterial());
 cubo2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1),new THREE.MeshNormalMaterial());
 Pelota = new THREE.Mesh(new THREE.SphereGeometry(0.5),new THREE.MeshNormalMaterial());
    cubo1.position.x=7
    cubo2.position.x=-7;
    
camara = new THREE.PerspectiveCamera();
camara.position.z=20;
raycaster1= new THREE.Raycaster(Pelota.position,new THREE.Vector3(1,0,0));
raycaster2= new THREE.Raycaster(Pelota.position,new THREE.Vector3(-1,0,0));

escena = new THREE.Scene();
escena.add(cubo1);
escena.add(cubo2);
escena.add(Pelota);
escena.add(camara);



renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth*.95,window.innerWidth*.95);

document.body.appendChild(renderer.domElement);
}

function loop(){
    
  obstaculo1=raycaster1.intersectObject(cubo1);
  obstaculo2=raycaster2.intersectObject(cubo2);
    
    if((obstaculo1.length > 0 && (obstaculo1[0].distance <= 0.5)) || 
       (obstaculo2.length > 0 && (obstaculo2[0].distance<=0.5)))
        step=-step;
    Pelota.position.x +=step;
    raycaster1.set(Pelota.position,new THREE.Vector3(1,0,0));
    raycaster2.set(Pelota.position,new THREE.Vector3(-1,0,0));
    requestAnimationFrame(loop);
    renderer.render(escena,camara);
}
var camara, escena, renderer,cubo1,cubo2,raycaster1,raycaster2;
var step=0.1;
setup();
loop();