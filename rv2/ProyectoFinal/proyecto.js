  function listener(){
    camara.aspect= window.innerWidth/window.innerHeight;
    camara.updateProjectionMatrix();
    renderizador.setSize(window.innerWidth,window.innerHeight);
}
function push(e){
    /*     if(e.keyCode===65|| e.keyCode===97)//IZQUIERDA     A
        Personajes[0].position.x++;
    else if (e.keyCode===87 || e.keyCode===119)//ADELANTE   W
        Personajes[0].position.z++;
    else if (e.keyCode===68 || e.keyCode===100)//DERECHA    D
        Personajes[0].position.x--;
    else if (e.keyCode===83|| e.keyCode===115)//ATRAS       S
        Personajes[0].position.z--;
*/
}
function ManipularObj(){
     if (!Personajes[0]) {
        return;
    }

}


function setup(){
 escena = new THREE.Scene();
 escena.background=new THREE.Color(0xffffff);
//---ejes//
    var ejes = new THREE.AxisHelper( 50 );
    ejes.position.set( 0, 0, 0 );
    escena.add( ejes );
//---ejes//

//---luz//
 luz1 = new THREE.PointLight( 0xFFFFFF, 1,140 );
luz1.position.set( 0, 50, 0 );
escena.add( luz1 );
luz2 = new THREE.PointLight( 0xFFFFFF, 1, 140 );
luz2.position.set( 140, 50, 0 );
escena.add( luz2 );
luz3 = new THREE.PointLight( 0xFFFFFF, 1, 140 );
luz3.position.set( 0, 50, 140 );
escena.add( luz3 );
luz4 = new THREE.PointLight( 0xFFFFFF, 1, 140 );
luz4.position.set( 140, 50, 140 );
escena.add( luz4 );
    
var LuzAmbiental= new THREE.AmbientLight( 0xFFFFFF );
escena.add(LuzAmbiental);
//---luz//

//---plano//

    
var Piezatablero;
var material = new Array();
THREE.ImageUtils.crossOrigin='';
var textura1=THREE.ImageUtils.loadTexture('source/mosaic02Fix.jpg');
var textura2=THREE.ImageUtils.loadTexture('source/mosaic03Fix.jpg');
 material[1]= new THREE.MeshLambertMaterial({map:textura1,side: THREE.DoubleSide});
 material[2]= new THREE.MeshLambertMaterial({map:textura2,side: THREE.DoubleSide});
//color[1]=new THREE.MeshLambertMaterial({color: 0x000000,side: THREE.DoubleSide});
//color[2]=new THREE.MeshLambertMaterial({color: 0xFFFFFF,side: THREE.DoubleSide});
var colorTemp=material[1];

for (var i=3.5;i<140;i=i+7){
   //console.log("cambio de columna");
    if (colorTemp===material[2]){
            colorTemp=material[1];
            //console.log("se cambio a color 1");
       }
        
        else if (colorTemp===material[1]){
            colorTemp=material[2];
            //console.log("se cambio a color 2");
       }
    for(var j=3.5;j<140;j=j+7){
       // console.log("cambio de fila")
    
       if (colorTemp===material[2]){
            colorTemp=material[1];
            //console.log("se cambio a color 1");
       }
        
        else if (colorTemp===material[1]){
            colorTemp=material[2];
            //console.log("se cambio a color 2");
       }
        Piezatablero=new THREE.Mesh(new THREE.PlaneGeometry(7,7,1,1),colorTemp);
        Piezatablero.position.x =i;
        Piezatablero.position.z =j;
         Piezatablero.rotateX(-(Math.PI)/2) ;
        escena.add(Piezatablero);
        Piezatablero.receiveShadow=true;
        //console.log("pieza añadida");
       }
}
//---plano//
//Laberinto
    var pH=new Array;
    var pV=new Array;
var a=0;
var b=0;
var pared=THREE.ImageUtils.loadTexture('source/wallstone.jpg');
for (var i=0;i<21;i++){
    for (var j=0;j<20;j++){
        if(Hor[i][j]==1&&Hor[i][j+1]==1){
            pH[a]=new THREE.Mesh(new THREE.BoxGeometry(7,4,1), new THREE.MeshLambertMaterial({map:pared} ));
            pH[a].position.x =3.5+(j)*7;
            pH[a].position.z =0.5+(i)*7;
            pH[a].position.y =2;
            pH[a].name="Pared";
            escena.add(pH[a]) ;
            pH[a].geometry.computeBoundingBox ();
            pH[a].box = new THREE.BoxHelper( pH[a], 0x0000ff );
            pH[a].box.position.set(-pH[a].position.x,-pH[a].position.y, -pH[a].position.z);
            pH[a].add( pH[a].box );
            a++;
        }else if(Hor[i][j]==1&&Hor[i][j+1]==0){
            pH[a]=new THREE.Mesh(new THREE.BoxGeometry(8,4,1), new THREE.MeshLambertMaterial({map:pared} ));
            pH[a].position.x =4+(j)*7;
            pH[a].position.z =0.5+(i)*7;
            pH[a].position.y =2;
            pH[a].name="Pared";
            escena.add(pH[a]) ;
            pH[a].geometry.computeBoundingBox ();
            pH[a].box = new THREE.BoxHelper( pH[a], 0x0000ff );
            pH[a].box.position.set(-pH[a].position.x,-pH[a].position.y, -pH[a].position.z);
            pH[a].add( pH[a].box );
             a++;
        }else if(Hor[i][j]==1){
            pH[a]=new THREE.Mesh(new THREE.BoxGeometry(7,4,1), new THREE.MeshLambertMaterial({map:pared} ));
           pH[a].position.x =3.5+(j)*7;
           pH[a].position.z =0.5+(i)*7;
           pH[a].position.y =2;
           pH[a].name="Pared";
            escena.add(pH[a]) ;
            pH[a].geometry.computeBoundingBox ();
            pH[a].box = new THREE.BoxHelper( pH[a], 0x0000ff );
            pH[a].box.position.set(-pH[a].position.x,-pH[a].position.y, -pH[a].position.z);
            pH[a].add( pH[a].box );
            a++;
        }
    }    
}
for (var i=1;i<21;i++){
    for (var j=0;j<21;j++){
        if(Ver[i][j]==1){
            pV[b]=new THREE.Mesh(new THREE.BoxGeometry(1,4,7), new THREE.MeshLambertMaterial({map:pared} ));
            pV[b].position.z =3.5+(i-1)*7;
            pV[b].position.x =0.5+(j)*7;
           pV[b].position.y =2;
           pV[b].name="Pared";
            escena.add(pV[b]) ;
            pV[b].geometry.computeBoundingBox ();
            pV[b].box = new THREE.BoxHelper( pV[b], 0xffff00 );
            pV[b].box.position.set(-pV[b].position.x,-pV[b].position.y, -pV[b].position.z);
            pV[b].add( pV[b].box );
            b++;
        }
    }    
}
//laberinto
//--camara//
camara=new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
camara.position.z=140;
camara.position.x=140;
camara.position.y=5;


//--camara//
//--FPS--//

    
//--FPS--//

//---personajes//
 ObjetoPadre=function(geometry,material,Bando="blue",Tipo=null){      //inicio de objetoPadre
   
     THREE.Mesh.call(this,geometry,material) ; // el objeto donde se hereda (THREE.Mesh)se ocupa su constructor por esta razon el constructor de obejto padre                                               llama al constructor de THREE.Mesh con el uso de calll
     this.NoPI=3.141592654; // IMPORTANTE !!! No cambiar se ha probado con otros valores y la suma y resta hacen cosas raras por esto no se uso Math.PI
     this.name="Personaje"
     this.TipoPer=Tipo;
     this.VecFrente= new THREE.Vector3(0,0,1);
     this.OriginRaycaster=new THREE.Vector3(this.position.x,this.position.y+2.5,this.position.z);
     this.raycaster= new THREE.Raycaster(this.OriginRaycaster,this.VecFrente,1.5,7);
     this.StepPerFrame=(7/4);
     this.NewPos=new THREE.Vector3(0,0,0);
     this.ObjDetectado=null;
     
     //Propiedades refrentes al bando
     this.bando=Bando;//red o blue, por default blue
     var Azul=new THREE.MeshBasicMaterial({color:0x0000ff});
     var Rojo=new THREE.MeshBasicMaterial({color:0xff0000});
     var MatBando;
     if (this.bando=="blue"){
         MatBando=Azul;
     }
     if (this.bando=="red"){
         MatBando=Rojo;
     }
     this.bando_mesh=new THREE.Mesh(new THREE.CircleGeometry(1.5,15),MatBando);
     this.bando_mesh.position.set(0,0.01,0);
     this.bando_mesh.rotation.x-=Math.PI/2;
     this.add(this.bando_mesh);
     //Propiedades refrentes al bando
     this.GirarIzq= function(){
         this.rotation.y += this.NoPI/2
     if (this.rotation.y==this.NoPI*2){
        this.rotation.y=0; 
        }
          console.log(this.rotation.y)
          
     }
     
        this.GirarDer= function(){
            if (this.rotation.y==0){
        this.rotation.y=this.NoPI*2; 
        }
         this.rotation.y -= this.NoPI/2
     console.log(this.rotation.y)
     
     }
    this.Avanzar=function(){
        this.ActFrente();
        //como estos vectores son definidos por three la suma y multiplicacion por un escalar estan definidos por three
        this.NewPos=this.position.clone().add(this.VecFrente.clone().multiplyScalar (this.StepPerFrame) );
        this.position.set(this.NewPos.x,this.NewPos.y,this.NewPos.z); 
        console.log(this.position);
    }
     
     
     this.ActFrente=function (){
         if (this.rotation.y==0){
             this.VecFrente= new THREE.Vector3(0,0,1);console.log("up")}
         else if (this.rotation.y==this.NoPI/2){
             this.VecFrente= new THREE.Vector3(1,0,0); console.log("left")}
         else if (this.rotation.y==this.NoPI){
             this.VecFrente= new THREE.Vector3(0,0,-1);console.log("down")}
         else if (this.rotation.y==this.NoPI*3/2){
             this.VecFrente= new THREE.Vector3(-1,0,0);console.log("right")}
         
         console.log(this.VecFrente)
        }
         this.DetectarEnfrente=function(){
         this.ActFrente();
         this.OriginRaycaster=new THREE.Vector3(this.position.x,this.position.y+2.5,this.position.z);//ACTUALIZAcion manual del vector Origin
             if (typeof Arrow != "undefined"){escena.remove(Arrow)}
            Arrow=new THREE.ArrowHelper(this.VecFrente,this.OriginRaycaster,60,0x000000);
            escena.add(Arrow);
             this.raycaster.set(this.OriginRaycaster,this.VecFrente);
            var interseciones=this.raycaster.intersectObjects(escena.children);
              if(interseciones.length>=1) {console.log("se ha encontrado "+interseciones.length+" objetos");
//detecta al mismo objeto dos veces una por cada lado de la cara por eso la longitud del array cambia de 0 a dos 
            return interseciones[0].object
                                         }
             else console.log("no hay nada");
            return null
         }
this.random1_2=function(){
                var x =Math.random() * (2.5 - 1.5) + 1.5;
                return Math.floor(x);
    
}
         //agregar anexos    
    this.Sensar= function(){
        if(Number.isInteger((this.position.x+3.5)/7) && Number.isInteger((this.position.z+3.5)/7)){ 
            //solo que sense en los puntos de giro, para asi avanzar en fracciones de 7 sin tener problemas con los giros
        this.ObjDetectado=this.DetectarEnfrente();
        }
    }
    
    this.Actuar=function(){
         if (this.ObjDetectado==null){
             this.Avanzar();
         }
        else if(this.ObjDetectado.name=="Pared"){
           var select=this.random1_2();
               if(select==1){
                  this.GirarDer(); 
               }
                if(select==2){
                    this.GirarIzq();
                }
        }
        else if(this.ObjDetectado.name=="Personaje"){
            
            if(this.ObjDetectado.TipoPer==this.TipoPer){
                console.log("matando al obj detetado");
                escena.remove(this.ObjDetectado);
            }
            else{
              var select=this.random1_2();
               if(select==1){
                  this.GirarDer(); 
               }
                if(select==2){
                    this.GirarIzq();
                }
                
               
            }
        }
         
     }
     }//fin de funcion ObjetoPadre
    
    
    ObjetoPadre.prototype=new THREE.Mesh();// SE define el prototipo ObjetoPadre, heredando asi las propiedades y metodos de THREE.Mesh
 
    CargarPer(Num=0,NumArray=0,X=-33.5,Y=0,Z=-33.5,rX=0,rY=0,rZ=0,Bando="blue"); //modificada la pos para que no inicie intersectando
    CargarPer(Num=1,NumArray=1,X=10.5,Y=0,Z=3.5,rX=0,rY=0,rZ=0,Bando="blue");
    CargarPer(Num=2,NumArray=2,X=17.5,Y=0,Z=3.5,rX=0,rY=0,rZ=0,Bando="blue");
    CargarPer(Num=3,NumArray=3,X=24.5,Y=0,Z=3.5,rX=0,rY=0,rZ=0,Bando="blue");
    CargarPer(Num=4,NumArray=4,X=31.5,Y=0,Z=3.5,rX=0,rY=0,rZ=0,Bando="blue");       
    CargarPer(Num=5,NumArray=5,X=38.5,Y=0,Z=3.5,rX=0,rY=0,rZ=0,Bando="blue");
    
    CargarPer(Num=0,NumArray=6,X=136.5,Y=0,Z=136.5,rX=0,rY=3.141592654,rZ=0,Bando="red");
    CargarPer(Num=1,NumArray=7,X=129.5,Y=0,Z=136.5,rX=0,rY=3.141592654,rZ=0,Bando="red");
    CargarPer(Num=2,NumArray=8,X=122.5,Y=0,Z=136.5,rX=0,rY=3.141592654,rZ=0,Bando="red");
    CargarPer(Num=3,NumArray=9,X=115.5,Y=0,Z=136.5,rX=0,rY=3.141592654,rZ=0,Bando="red");
    CargarPer(Num=4,NumArray=10,X=108.5,Y=0,Z=136.5,rX=0,rY=3.141592654,rZ=0,Bando="red");       
    CargarPer(Num=5,NumArray=11,X=101.5,Y=0,Z=136.5,rX=0,rY=3.141592654,rZ=0,Bando="red");

   
    function CargarPer(Num,NumArray,X=0,Y=0,Z=0,rX=0,rY=0,rZ=0,Bando="blue"){
    LinkModel="source/Personaje"+Num+".js"    
    PersonajesLoader[Num]=new THREE.JSONLoader();
    PersonajesLoader[Num].load(LinkModel,funcionAgregarPer);
   
    function funcionAgregarPer(geometry,material){
        Personajes[NumArray]= new ObjetoPadre(geometry,material,Bando,Num);//new THREE.Mesh(geometry,material);
         Personajes[NumArray].geometry.computeBoundingBox ();
        Personajes[NumArray].box = new THREE.BoxHelper( Personajes[NumArray], 0xffff00 );
     //box.position.set(-Personajes[NumArray].position.x,0, -Personajes[NumArray].position.z);
        Personajes[NumArray].add( Personajes[NumArray].box );
        
        Personajes[NumArray].position.set(X,Y,Z);
        Personajes[NumArray].rotation.set(rX,rY,rZ);
      
        escena.add( Personajes[NumArray]);
        //anadiendo caracteristicas del jugador 
        
        if(NumArray==0){
     camara.position.set(0,8,-7);
    // camara.rotation.set(0,Math.PI,0);
     camara.rotation.set(0,Math.PI,0);
     Personajes[NumArray].add(camara);
     Personajes[NumArray].Actuar= undefined ;       
     Personajes[NumArray].Sensar= undefined ; 
         
        controlsPer = new THREE.FirstPersonControls(Personajes[NumArray]);// solo camara usuario
        controlsPer.lookSpeed = 0.5;
        controlsPer.movementSpeed = 20;
        controlsPer.noFly = false;
        controlsPer.lookVertical = false;
        controlsPer.constrainVertical = true;
        controlsPer.activeLook = true;
    
      }
     
     }
 
    }
  
    

//---personajes// 
    
//eventos
var tipoEvento = 'resize';
var capturar=false;
window.addEventListener('keypress',push,false);
window.addEventListener(tipoEvento, listener, capturar);

//eventos  
    
//--controles//
//controls = new THREE.OrbitControls( camara );    //regresar
//controls.target=(new THREE.Vector3(70,0,70)) ;   // regresar
//controls = new THREE.FirstPersonControls(camara);// solo camara usuario
clock = new THREE.Clock();
       // controls.lookSpeed = 0.1;//REMPLAZADO
        //controls.movementSpeed = 20;//REMPLAZADO
        //controls.noFly = true;//REMPLAZADO
        //controls.lookVertical = false;//REMPLAZADO
        //controls.constrainVertical = true;//REMPLAZADO
    
    
//--controles//

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, 
                      window.innerHeight );
renderizador.shadowMapEnabled=true;   

luz1.castShadow=true;  
luz2.castShadow=true;
luz3.castShadow=true;
                      
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );

}

function loop(){
    requestAnimationFrame( loop);
    //controls.update();
     var delta = clock.getDelta();
    controlsPer.update(delta);// para usuario


    
  for(var i=0;i<escena.children.length; i++){
    if(escena.children[i].Sensar !== undefined)
      escena.children[i].Sensar();
  }


    for(var i=0;i<escena.children.length; i++){
    if(escena.children[i].box  !== undefined && Go)
     var temp=Personajes[0].geometry.boundingBox.intersectsBox (escena.children[i].geometry.boundingBox );
    if (temp){ alert("interseccion");       }    
        
  }

    
    
    
    
    
    
    



  for(var i=0;i<escena.children.length; i++){
    if(escena.children[i].Actuar !== undefined)
      escena.children[i].Actuar();
  }



   
   

  

    renderizador.render(escena,camara);
    
}
var escena,camara,renderizador,Num,clock,controlsPer,controls;
var Go=false;
var Personajes=[];
var PersonajesLoader=[];
setup();

    
loop();