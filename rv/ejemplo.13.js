function setup(){
THREE.ImageUtils.crossOrigin ='';
var texturacaja =THREE.ImageUtils.loadTexture('http://juancarlossalcedo777.github.io/rv/texturas/metal.jpg');
var materialcaja=new THREE.MeshBasicMaterial({map: texturacaja});

var forma1= new THREE.BoxGeometry(12,4,8); 
var forma2= new THREE.BoxGeometry(2,6,2); 
caja1 = new THREE.Mesh (forma1,materialcaja);
caja2 = new THREE.Mesh (forma2,materialcaja);
caja2.position.x=7;
escena = new THREE.Scene();
escena.add(caja1);
escena.add(caja2);

camara = new THREE.PerspectiveCamera();
camara.position.z=51;
camara.position.x=31;
camara.position.y=31;
camara.lookAt( escena.position );
renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild( renderer.domElement);
}
function loop(){

requestAnimationFrame( loop);
caja1.rotation.x +=0.0;
caja1.rotation.y +=0.0;


renderer.render(escena,camara);
}

var camara,escena,renderer,malla;
setup();
loop();
