
function setup(){
THREE.ImageUtils.crossOrigin ='';


escena = new THREE.Scene();
camara = new THREE.PerspectiveCamera();

var ejes=new THREE.AxisHelper( 35 );

var Basedevigas=new THREE.JSONLoader();
Basedevigas.load('http://juancarlossalcedo777.github.io/rv/texturas/viga.js',funcionAgregarModelo);

function funcionAgregarModelo(geometry){
	
	material=new THREE.MeshStandardMaterial({color: 0xDBE6E6})
	
	viga1=new THREE.Mesh(geometry,material);
	escena.add(viga1);
	viga1.position.set(0,0,0);
	viga1.scale.set(100,100,100)
	
	viga2=new THREE.Mesh(geometry,material);
	escena.add(viga2);
	viga2.position.set(0,1,0);
	viga2.scale.set(100,100,100);
	
	viga3=new THREE.Mesh(geometry,material);
	escena.add(viga3);
	viga3.position.set(0,2,0);
	viga3.scale.set(100,100,100);
	
	viga4=new THREE.Mesh(geometry,material);
	escena.add(viga4);
	viga4.position.set(0,3,0);
	viga4.scale.set(100,100,100);
	
	viga5=new THREE.Mesh(geometry,material);
	escena.add(viga5);
	viga5.position.set(0,4,0);
	viga5.scale.set(100,100,100);
	
	viga6=new THREE.Mesh(geometry,material);
	escena.add(viga6);
	viga6.position.set(0,5,0);
	viga6.scale.set(100,100,100);
	
	viga7=new THREE.Mesh(geometry,material);
	escena.add(viga7);
	viga7.position.set(0,-1,0);
	viga7.scale.set(100,100,100);
	
	viga8=new THREE.Mesh(geometry,material);
	escena.add(viga8);
	viga8.position.set(0,-2,0);
	viga8.scale.set(100,100,100);
	
	viga9=new THREE.Mesh(geometry,material);
	escena.add(viga9);
	viga9.position.set(0,-3,0);
	viga9.scale.set(100,100,100);
	
	viga10=new THREE.Mesh(geometry,material);
	escena.add(viga10);
	viga10.position.set(0,-4,0);
	viga10.scale.set(100,100,100);
	
	viga11=new THREE.Mesh(geometry,material);
	escena.add(viga11);
	viga11.position.set(0,-5,0);
	viga11.scale.set(100,100,100);
	
	
}


var rieles=new THREE.JSONLoader();
rieles.load('http://juancarlossalcedo777.github.io/rv/texturas/riel.js',funcionAgregarRieles);

 function funcionAgregarRieles(geometry){
	
	material=new THREE.MeshStandardMaterial({color: 0x817F7F})
	
	riel1=new THREE.Mesh(geometry,material);
	escena.add(riel1);
	riel1.position.set(0,5.75,0);
	riel1.rotation.x= Math.PI/2;
	riel1.scale.set(100,100,100);
	
	riel2=new THREE.Mesh(geometry,material);
	escena.add(riel2);
	riel2.position.set(0,-5.75,0);
	riel2.rotation.x= Math.PI/2;
	riel2.scale.set(100,100,100);
	

}

 travesu=new THREE.JSONLoader();
 travesu.load('http://juancarlossalcedo777.github.io/rv/texturas/travesup.js',funcionAgregarTravesup);

function funcionAgregarTravesup(geometry){
	
	material=new THREE.MeshPhongMaterial({color: 0x0D3145})
	
	travesup=new THREE.Mesh(geometry,material);
	escena.add(travesup);
	travesup.position.set(-.5,0,3.5);
	travesup.rotation.x= Math.PI/2;
	travesup.rotation.z= Math.PI;
	travesup.scale.set(100,100,100);
}


 Seta=new THREE.JSONLoader();
 Seta.onLoadComplete=function(){escena.add( ejez )} 
 Seta.load('http://juancarlossalcedo777.github.io/rv/texturas/seta.js',funcionAgregarSeta);

function funcionAgregarSeta(geometry){
	
	material=new THREE.MeshPhongMaterial({color: 0xF43317})
	
	ejez=new THREE.Mesh(geometry,material);
    ejez.position.set(1,-5,5.5);
	ejez.rotation.x= Math.PI*3/2;
	ejez.rotation.z= Math.PI;
    ejez.scale.set(100,100,100);
	 

		
escena.add(ejez);
	
 }	
 
 

 Go=new THREE.JSONLoader();
 Go.load('http://juancarlossalcedo777.github.io/rv/texturas/eje.js',funcionAgregarEje);

function funcionAgregarEje(geometry){
	
	material=new THREE.MeshPhongMaterial({color: 0x000000})
	
	eje=new THREE.Mesh(geometry,material);
	eje.position.set(1.5,0,8.1);
	eje.rotation.x= Math.PI*3/2;
	eje.rotation.z= Math.PI;
	eje.scale.set(100,100,100);
	escena.add(eje);



}

	


var skyGeo = new THREE.BoxGeometry(80, 85, 85);
var texturew = THREE.ImageUtils.loadTexture( 'http://juancarlossalcedo777.github.io/rv/texturas/wood.jpg' );
 var materialw = new THREE.MeshBasicMaterial({ map: texturew,});

var sky = new THREE.Mesh(skyGeo, materialw);
     sky.material.side = THREE.BackSide;
    escena.add(sky);





	
	
	
	


var zonadetrabajoG= new THREE.BoxGeometry( 9.5, 9, .2);
var zonadetrabajoM = new THREE.MeshDepthMaterial();
var zonadetrabajo = new THREE.Mesh( zonadetrabajoG, zonadetrabajoM );
escena.add(zonadetrabajo);
zonadetrabajo.position.set(5,0,.6);


var luzPuntual = new THREE.PointLight(0xFFFFFF);
luzPuntual.position.x=10;
luzPuntual.position.y=10;
luzPuntual.position.z=10;


var luzPuntual2 = new THREE.PointLight(0xFFFFFF);
luzPuntual2.position.x=0;
luzPuntual2.position.y=10;
luzPuntual2.position.z=0;

var luzPuntual3 = new THREE.PointLight(0xFFFFFF);
luzPuntual3.position.x=10;
luzPuntual3.position.y=0;
luzPuntual3.position.z=0;

escena.add(luzPuntual);
escena.add(luzPuntual2);
escena.add(luzPuntual3);
escena.add(ejes);



camara.position.x=20;
camara.position.y=20;
camara.position.z=20;

camara.lookAt( escena.position );
camara.rotation.z = Math.PI;


controls = new THREE.OrbitControls( camara );
controls.addEventListener( 'change', render );

// var a = math.matrix([[0, 1], [2, 3], [4, 5]]);
// a.forEach(function (value, index, matrix) {
  // console.log('value:', value, 'index:', index);
// });

// console.log(a.format(2));

coorx=math.range(.5,7.6,0.2);
coory=math.range(-5,7.6,0.2);
coorz=math.range(8.1,2,-0.2);
longx=coorx.size();
longy=coory.size();
longz=coorz.size();


// coorx.subset(math.index(35), 2);
// coorx.subset(math.index(36), 3);

console.log(coorx.format(2));
	
	console.log(longx);
//camara.rotation.z=Math.PI*0.5;
renderer = new THREE.WebGLRenderer();

function render() {
  renderer.render( escena, camara );
}

renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild( renderer.domElement);


}

function loop(){
	
requestAnimationFrame( loop);
 controls.update();
	theta =Math.PI*2*6*0;
	
	if (inicial==0){
		
travesup.position.x =(math.subset(coorx, math.index(0)));
 ejez.position.y=(math.subset(coory, math.index(0)));
 eje.position.z = (math.subset(coorz, math.index(0)));
 inicial=1;
	 }
	
	desx=(math.subset(coorx, math.index(timeturn+1)))-(math.subset(coorx, math.index(timeturn)));  
desy=(math.subset(coory, math.index(timeturn+1)))-(math.subset(coory, math.index(timeturn)));  
desz=(math.subset(coorz, math.index(timeturn+1)))-(math.subset(coorz, math.index(timeturn)));  	
console.log(desx);
console.log(timeturn);
	// camara.position.x = 10 * Math.cos( THREE.Math.degToRad( theta ) );
	// camara.position.y = 10 * Math.sin( THREE.Math.degToRad( theta ) );
	// camara.lookAt( escena.position );
	//camara.rotation.z = Math.PI/(180*theta);
	//camara.rotation.x =+ theta
	
var now = Date.now();
var deltaTime = (now - lastUpdate) / 1000; 
if (deltaTime > 1) { deltaTime = 0;
 }
 lastUpdate = now; 
 
 cuadros += 1; 
 acumDelta += deltaTime;
 
 if (acumDelta > 1) { FPS = cuadros; cuadros = 0; acumDelta -= 1; } 
 
 
 function moveMesh(){
    if (!travesup||!ejez||!eje) {
        return;
    }

    travesup.position.x += desx*deltaTime*run;
	 ejez.position.x=1+travesup.position.x;
	 ejez.position.y += desy*deltaTime*run;
	 eje.position.y=ejez.position.y;
	 eje.position.x=ejez.position.x+0.5;
	 eje.position.z += desz*deltaTime*run;
	 
	console.log(travesup.position.x);
	if(travesup.position.x>(math.subset(coorx, math.index(timeturn+1)))){
		timeturn += 1;
    }

	
	
	}
 moveMesh();
function rotateMesh(){
    if (!ejez) {
        return;
    }

    ejez.rotation.x += theta*deltaTime;
	}
	rotateMesh();
renderer.render( escena, camara );

//console.log(FPS);


}

var desx=2;
var desy=2;
var desz=2;
var run=1;
var coorx=null,coory=null ,coorz=null;
var camara,escena,renderer,controls;
var timeturn=0;
var theta = 0;
var ejez=null;
var travesup=null;
var eje=null;
var inicial=0;
var lastUpdate = 0, FPS = 0, cuadros = 0, acumDelta = 0; 

setup();
loop();
