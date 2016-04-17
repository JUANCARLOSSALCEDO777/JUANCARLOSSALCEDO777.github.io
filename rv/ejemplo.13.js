function setup(){
THREE.ImageUtils.crossOrigin ='';
var texturacaja =THREE.ImageUtils.loadTexture('http://juancarlossalcedo777.github.io/rv/texturas/metal.jpg');
var materialcaja=new THREE.MeshBasicMaterial({map: texturacaja});
var forma= new THREE.BoxGeometry(12,4,8); 
malla = new THREE.Mesh (forma,materialcaja);

escena = new THREE.Scene();
escena.add(malla);
camara = new THREE.PerspectiveCamera();
camara.position.z=51;
renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild( renderer.domElement);
}
function loop(){

requestAnimationFrame( loop);
malla.rotation.x +=0.0;
malla.rotation.y +=0.0;


renderer.render(escena,camara);
}

var camara,escena,renderer,malla;
setup();
loop();
