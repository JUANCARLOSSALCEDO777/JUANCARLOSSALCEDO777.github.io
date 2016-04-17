function setup(){
THREE.ImageUtils.crossOrigin ='';
var textura =THREE.ImageUtils.loadTexture('http://images.all-free-download.com/images/graphiclarge/metal_steel_highdefinition_picture_11_169636.jpg');
var material=new THREE.MeshBasicMaterial({map: textura});
var forma= new THREE.BoxGeometry(5,5,5); 
malla = new THREE.Mesh (forma,material);

escena = new THREE.Scene();
escena.add(malla);
camara = new THREE.PerspectiveCamera();
camara.position.z=5;
renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild( renderer.domElement);
}
function loop(){

requestAnimationFrame( loop);
malla.rotation.x +=0.01;
malla.rotation.y +=0.01;

renderer.render(escena,camara);
}

var camara,escena,renderer,malla;
setup();
loop();
