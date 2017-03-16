
/*
var BaseF = new THREE.CylinderGeometry(2, 2, 1,16);
var CuerpoF = new THREE.CylinderGeometry(1, 1, 2);
var TapaF = new THREE.CylinderGeometry(1.75, 1.75, 1,6);
CuerpoF.translate(0,1,0);
TapaF.translate(0,3,0);

var BaseM = new THREE.Mesh(BaseF);
var CuerpoM = new THREE.Mesh(CuerpoF);
var TapaM = new THREE.Mesh(TapaF);

var TorreF = new THREE.Geometry();
TorreF.merge(BaseM.geometry, BaseM.matrix);
TorreF.merge(CuerpoM.geometry, CuerpoM.matrix);
TorreF.merge(TapaM.geometry, TapaM.matrix);

var TorreMat1 = new THREE.MeshLambertMaterial({color:0xFF0000});
var TorreMat2 = new THREE.MeshLambertMaterial({color:0x0000FF});

var TorreV1 = new THREE.Mesh( TorreF, TorreMat1 );
var TorreV2 = new THREE.Mesh( TorreF, TorreMat2 );
*/

//-------------------------------------
var BaseG1= new THREE.TorusKnotGeometry(2,0.6,240,20,3,5);
BaseG1.computeBoundingBox();
BaseG1.translate(0,0,1.6);// fue al tanteo :s

var CuerpoG1 = new THREE.TorusGeometry(2,1.2,3,21,Math.PI*2);
CuerpoG1.computeBoundingBox();
CuerpoG1.translate(0,0,3);

var CabezaG1= new THREE.SphereGeometry(2,24,24,0,Math.PI*2,0,Math.PI);
CabezaG1.computeBoundingBox();
CabezaG1.translate(0,0,3);

//haciendo mallas
var Base1= new THREE.Mesh(BaseG1,new THREE.MeshNormalMaterial());
var Cuerpo1= new THREE.Mesh(CuerpoG1,new THREE.MeshNormalMaterial());
var Cabeza1= new THREE.Mesh(CabezaG1,new THREE.MeshNormalMaterial());

var FigFinalG1 = new THREE.Geometry();
FigFinalG1.merge(Base1.geometry, Base1.matrix);
FigFinalG1.merge(Cuerpo1.geometry, Cuerpo1.matrix);
FigFinalG1.merge(Cabeza1.geometry, Cabeza1.matrix);

FigFinal1= new THREE.Mesh(FigFinalG1,new THREE.MeshLambertMaterial({color: 'red'}));
