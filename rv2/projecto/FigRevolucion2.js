var puntosRev2 =[];

puntosRev2.push(new THREE.Vector2(0,3));
puntosRev2.push(new THREE.Vector2(.5,2.75));
puntosRev2.push(new THREE.Vector2(.75,2.5));
puntosRev2.push(new THREE.Vector2(.5,2));
puntosRev2.push(new THREE.Vector2(.75,1.75));
puntosRev2.push(new THREE.Vector2(.5,1.5));
puntosRev2.push(new THREE.Vector2(.75,.5));
puntosRev2.push(new THREE.Vector2(1,0));
puntosRev2.push(new THREE.Vector2(0,0));


               
var formaR2 = new THREE.LatheGeometry(puntosRev2,32,(0),2*3.01416);
formaR2.computeBoundingSphere();
formaR2.computeFaceNormals();

var material2R1 = new THREE.MeshLambertMaterial({color:0x0000FF});
var material2R2 = new THREE.MeshLambertMaterial({color:0xFF0000});

material2R1.side= THREE.BackSide;
material2R2.side= THREE.BackSide;



var malla2Rev1 = new THREE.Mesh( formaR2, material2R1 );
var malla2Rev2 = new THREE.Mesh( formaR2, material2R2 );