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
var textura1=THREE.ImageUtils.loadTexture('source/modern_cyc.jpg');
var textura2=THREE.ImageUtils.loadTexture('source/basket.jpg');
var materialE1 = new THREE.MeshLambertMaterial({map:textura1});
var materialE2 = new THREE.MeshLambertMaterial({map:textura2});

var EstrellaV1 = new THREE.Mesh( estrellaF, materialE1 );
var EstrellaV2 = new THREE.Mesh( estrellaF, materialE2 );