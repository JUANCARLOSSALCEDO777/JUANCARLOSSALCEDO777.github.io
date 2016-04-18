function setup(){
THREE.ImageUtils.crossOrigin ='';
var texturacaja =THREE.ImageUtils.loadTexture('http://juancarlossalcedo777.github.io/rv/texturas/metal.jpg');
var materialcaja=new THREE.MeshBasicMaterial({map: texturacaja});
var materialllanta=new THREE.MeshBasicMaterial({color: 0xffffff}); 
var ejes=new THREE.AxisHelper( 35 );

var forma1= new THREE.BoxGeometry(12,4,8); 
var forma2= new THREE.BoxGeometry(2,6,2); 
var llantaext  = new THREE.CylinderGeometry( 5, 5, 20, 32 );
llantaext.thetaLength=THREE.Math.PI;

llantaext1= new THREE.Mesh (llantaext,materialllanta);
caja1 = new THREE.Mesh (forma1,materialcaja);
caja2 = new THREE.Mesh (forma2,materialcaja);
caja3 = new THREE.Mesh (forma2,materialcaja);
caja2.position.x=7;
caja2.position.z=-3;
caja3.position.x=-7;
caja3.position.z=-3;

llantaext1.position.z=9;
escena = new THREE.Scene();
escena.add(caja1);
escena.add(caja2);
escena.add(caja3);
escena.add(llantaext1);
escena.add(ejes);

camara = new THREE.PerspectiveCamera();
camara.position.z=0;
camara.position.x=31;
camara.position.y=0;
camara.lookAt( escena.position );

renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild( renderer.domElement);
}
function loop(){

requestAnimationFrame( loop);
caja1.rotation.x +=0.01;
caja1.rotation.y +=0.0;
llantaext1.rotation.z +=0.01;
camara.rotation.z +=0.0;

renderer.render(escena,camara);
}

var camara,escena,renderer,malla;
setup();
loop();
