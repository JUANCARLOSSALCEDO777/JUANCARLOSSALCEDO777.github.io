var formaV = new THREE.Geometry();

formaV.vertices.push(new THREE.Vector3( 1,  0,  0 ) ); // Vértice 0
formaV.vertices.push(new THREE.Vector3( -1,  0, 0 ) ); // Vértice 1
formaV.vertices.push(new THREE.Vector3(0,  1, 0 ) );   // Vértice 2
formaV.vertices.push(new THREE.Vector3(0,  -1,  0 ) ); // Vértice 3
formaV.vertices.push(new THREE.Vector3( 0,  0,  1 ) ); // Vértice 4

formaV.faces.push(new THREE.Face3( 0, 1, 2 ) ); // Cara 0
formaV.faces.push(new THREE.Face3( 1, 0, 3 ) ); // Cara 1
formaV.faces.push(new THREE.Face3( 0, 2, 4 ) ); // Cara 2
formaV.faces.push(new THREE.Face3( 3, 0, 4 ) ); // Cara 3
formaV.faces.push(new THREE.Face3( 2, 1, 4 ) ); // Cara 4
formaV.faces.push(new THREE.Face3( 1, 3, 4 ) ); // Cara 5

formaV.computeBoundingSphere();
formaV.computeFaceNormals();

var materialV1 = new THREE.MeshLambertMaterial({color:0xFF0000});
var materialV2 = new THREE.MeshLambertMaterial({color:0x0000FF});



var mallaV1 = new THREE.Mesh( formaV, materialV1 );
var mallaV2 = new THREE.Mesh( formaV, materialV2 );
//mallaV1.rotateX(Math.PI/4);
//mallaV2.rotateX(Math.PI/4);

