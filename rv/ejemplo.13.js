function setup(){
THREE.ImageUtils.crossOrigin ='';
var theta = 0;
var texturacaja =THREE.ImageUtils.loadTexture('http://juancarlossalcedo777.github.io/rv/texturas/metal.jpg');
var materialcaja=new THREE.MeshBasicMaterial({map: texturacaja});
var materialllanta=new THREE.MeshBasicMaterial({color: 0xffffff}); 
var ejes=new THREE.AxisHelper( 35 );


var forma1= new THREE.BoxGeometry(12,4,8); 
var forma2= new THREE.BoxGeometry(2,6,2); 
var llantaext  = new THREE.CylinderGeometry( 1, 1, 2, 32,1,false,0,(Math.PI) );


llantaext1= new THREE.Mesh (llantaext,materialllanta);
llantaext1.position.x=7;
llantaext1.position.y=3;
llantaext1.position.z=-3;
llantaext1.rotation.z +=Math.PI/2;

llantaext2= new THREE.Mesh (llantaext,materialllanta);
llantaext2.position.x=-7;
llantaext2.position.y=3;
llantaext2.position.z=-3;
llantaext2.rotation.z +=Math.PI/2;

llantaext3= new THREE.Mesh (llantaext,materialllanta);
llantaext3.position.x=-7;
llantaext3.position.y=-3;
llantaext3.position.z=-3;
llantaext3.rotation.z +=Math.PI/2;
llantaext3.rotation.x +=Math.PI;

llantaext4= new THREE.Mesh (llantaext,materialllanta);
llantaext4.position.x=7;
llantaext4.position.y=-3;
llantaext4.position.z=-3;
llantaext4.rotation.z +=Math.PI/2;
llantaext4.rotation.x +=Math.PI;
caja1 = new THREE.Mesh (forma1,materialcaja);
caja2 = new THREE.Mesh (forma2,materialcaja);
caja3 = new THREE.Mesh (forma2,materialcaja);
caja2.position.x=7;
caja2.position.z=-3;
caja3.position.x=-7;
caja3.position.z=-3;



escena = new THREE.Scene();
escena.add(caja1);
escena.add(caja2);
escena.add(caja3);
escena.add(llantaext1);
escena.add(llantaext2);
escena.add(llantaext3);
escena.add(llantaext4);
escena.add(ejes);

camara = new THREE.PerspectiveCamera();
camara.position.z=31;
camara.position.x=31;
camara.position.y=31;
camara.lookAt( escena.position );

renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild( renderer.domElement);
}
var theta = 0;
function loop(){
requestAnimationFrame( loop);

	theta += 0.1;
	camara.position.x = 31 * Math.cos( THREE.Math.degToRad( theta ) );
	camara.position.y = 31 * Math.sin( THREE.Math.degToRad( theta ) );
	camara.lookAt( escena.position );
caja1.rotation.x +=0.01;
caja1.rotation.y +=0.0;




renderer.render(escena,camara);
}

var camara,escena,renderer,malla;

setup();
loop();
