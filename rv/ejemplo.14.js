function setup(){
THREE.ImageUtils.crossOrigin ='';
escena = new THREE.Scene();
var theta = 0;
var ejes=new THREE.AxisHelper( 35 );

var Modelo3D=new THREE.JSONLoader();
Modelo3D.load('http://juancarlossalcedo777.github.io/rv/texturas/viga.js',funcionAgregarModelo);

function funcionAgregarModelo(geometry,materials){
	imagen=new THREE.ImageUtils.loadTexture('http://juancarlossalcedo777.github.io/rv/texturas/viga.jpg');
	material=new THREE.MeshBasicMaterial({map:imagen})
	ModeloFinal=new THREE.Mesh(geometry,material);
	escena.add(ModeloFinal);
	ModeloFinal.position.set(0,0,0);
	
	
}


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
caja1.rotation.x +=0.0;

caja1.rotation.y +=0.0;




renderer.render(escena,camara);
}

var camara,escena,renderer;

setup();
loop();
