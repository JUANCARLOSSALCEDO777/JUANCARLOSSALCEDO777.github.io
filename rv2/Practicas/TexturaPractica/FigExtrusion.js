var caballo = new THREE.Shape();

caballo.moveTo(2, 1);
caballo.lineTo(1.5, 2.5);
caballo.lineTo(0.5, 3);
caballo.lineTo(0, 4);
caballo.lineTo(-0.5, 3);
caballo.lineTo(-1.5, 2);
caballo.lineTo(-2.5, 2);
caballo.lineTo(-2, 1.5);
caballo.lineTo(-2.5, 1);
caballo.lineTo(-1.5, 1);
caballo.lineTo(0.5, 0.5);
caballo.lineTo(1, -1);
caballo.lineTo(1, -2);
caballo.lineTo(3, -2);
caballo.lineTo(3, -1);
caballo.lineTo(2, 1);
//caballo.lineTo(0, 2);
//caballo.lineTo(0, 2.5);
//caballo.lineTo(-0.5, 2.5);
//caballo.lineTo(-0.5, 2);
var caballoF = new THREE.ExtrudeGeometry( caballo, {amount: 1, bevelEnabled: false} );

caballoF.computeBoundingSphere();
var textura1=THREE.ImageUtils.loadTexture('source/modern_cyc.jpg');
var textura2=THREE.ImageUtils.loadTexture('source/basket.jpg');
var materialC1 = new THREE.MeshLambertMaterial({map:textura1});
var materialC2 = new THREE.MeshLambertMaterial({map:textura2});

var CaballoV1 = new THREE.Mesh( caballoF, materialC1 );
var CaballoV2 = new THREE.Mesh( caballoF, materialC2 );

