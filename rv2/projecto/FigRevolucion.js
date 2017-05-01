var puntosRev =[];

puntosRev.push(new THREE.Vector2(0,5));
puntosRev.push(new THREE.Vector2(.25,4.75));
puntosRev.push(new THREE.Vector2(0,4.5));
puntosRev.push(new THREE.Vector2(0.5,4.25));
puntosRev.push(new THREE.Vector2(1,3.75));
puntosRev.push(new THREE.Vector2(.5,3.5));
puntosRev.push(new THREE.Vector2(1,3.25));
puntosRev.push(new THREE.Vector2(.5,3));
puntosRev.push(new THREE.Vector2(1.5,2.5));
puntosRev.push(new THREE.Vector2(.5,2.5));
puntosRev.push(new THREE.Vector2(.75,1.5));
puntosRev.push(new THREE.Vector2(1,.75));
puntosRev.push(new THREE.Vector2(1.5,0));
puntosRev.push(new THREE.Vector2(0,0));


               
var formaR = new THREE.LatheGeometry(puntosRev,32,(0),2*3.1416);
formaR.computeBoundingSphere();
formaR.computeFaceNormals();


var materialR1 = new THREE.MeshLambertMaterial({color:0x0000FF});
var materialR2 = new THREE.MeshLambertMaterial({color:0xFF0000});

materialR1.side= THREE.BackSide;
materialR2.side= THREE.BackSide;



var mallaRev1 = new THREE.Mesh( formaR, materialR1 );
var mallaRev2 = new THREE.Mesh( formaR, materialR2 );

//helper = new THREE.FaceNormalsHelper( mallaRev1, 2, 0x00ff00, 1 );    // visualizador de las normales de las caras del objeto                                        
                                             