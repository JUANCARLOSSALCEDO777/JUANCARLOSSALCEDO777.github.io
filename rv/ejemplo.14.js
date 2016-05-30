function setup(){
THREE.ImageUtils.crossOrigin ='';
escena = new THREE.Scene();
var theta = 0;
var ejes=new THREE.AxisHelper( 35 );

var Modelo3D=new THREE.JSONLoader();
Modelo3D.load('http://juancarlossalcedo777.github.io/rv/texturas/viga.js',funcionAgregarModelo);

function funcionAgregarModelo(geometry){
	imagen=new THREE.ImageUtils.loadTexture('http://juancarlossalcedo777.github.io/rv/texturas/metal.jpg');
	material=new THREE.MeshStandardMaterial({color: 0xDBE6E6})
	
	ModeloFinal=new THREE.Mesh(geometry,material);
	escena.add(ModeloFinal);
	ModeloFinal.position.set(0,0,0);
	ModeloFinal.scale.set(100,100,100)
	
	viga2=new THREE.Mesh(geometry,material);
	escena.add(viga2);
	viga2.position.set(0,5,0);
	viga2.scale.set(100,100,100);
	
	
}


var luzPuntual = new THREE.PointLight(0xFFFFFF);
luzPuntual.position.x=20;
luzPuntual.position.y=20;
luzPuntual.position.z=20;

escena.add(ejes);
escena.add(luzPuntual);



camara = new THREE.PerspectiveCamera();
camara.position.z=5;
camara.position.x=0;
camara.position.y=5;
camara.lookAt( escena.position );

camara.rotation.y=Math.PI*-0.5;
renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild( renderer.domElement);


}
var theta = 0;
function loop(){
requestAnimationFrame( loop);

	theta += 0.1;
	//camara.position.x = 31 * Math.cos( THREE.Math.degToRad( theta ) );
	//camara.position.y = 31 * Math.sin( THREE.Math.degToRad( theta ) );
	//camara.lookAt( escena.position );
	//camara.rotation.x=Math.PI*0.5;




renderer.render(escena,camara);
}

var camara,escena,renderer;

setup();
loop();
