var estrella = new THREE.Shape();

estrella.moveTo(1, 0);
estrella.lineTo(3,1);
estrella.lineTo(1, 1.5);
estrella.lineTo(0,3);
estrella.lineTo(-1,1.5);
estrella.lineTo(-3,1);
estrella.lineTo(-1,0);
estrella.lineTo(-2,-2);
estrella.lineTo(0,-1);
estrella.lineTo(2,-2);
estrella.lineTo(1,0);

var estrellaF = new THREE.ExtrudeGeometry( estrella, {amount: 1, bevelEnabled: false} );

estrellaF.computeBoundingSphere();
var materialE1 = new THREE.MeshLambertMaterial({color:0xFF0000});
var materialE2 = new THREE.MeshLambertMaterial({color:0x0000FF});

var EstrellaV1 = new THREE.Mesh( estrellaF, materialE1 );
var EstrellaV2 = new THREE.Mesh( estrellaF, materialE2 );