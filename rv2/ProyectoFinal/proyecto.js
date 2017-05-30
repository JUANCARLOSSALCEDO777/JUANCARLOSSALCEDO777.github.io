  function listener(){
    camara.aspect= window.innerWidth/window.innerHeight;
    camara.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
}
function push(e){
    if (e.keyCode===113)
        camara.position.z++;
    else if(e.keyCode===81)
        camara.position.z--;

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
 luz1 = new THREE.PointLight( 0x00FFFF, 1, 100 );
luz1.position.set( 25, 25, 20 );
escena.add( luz1 );
luz2 = new THREE.PointLight( 0xFF0F00, 1, 100 );
luz2.position.set( -25, 25, 20 );
escena.add( luz2 );
luz3 = new THREE.PointLight( 0xFFF000, 1, 100 );
luz3.position.set( 0, -25, 20 );
escena.add( luz3 );
    
var LuzAmbiental= new THREE.AmbientLight( 0xFFFFFF );
escena.add(LuzAmbiental);
//---luz//

//---plano//

    
var Piezatablero;
var material = new Array();
THREE.ImageUtils.crossOrigin='';
var textura1=THREE.ImageUtils.loadTexture('source/mosaic02Fix.jpg');
var textura2=THREE.ImageUtils.loadTexture('source/mosaic03Fix.jpg');
 material[1]= new THREE.MeshLambertMaterial({map:textura1});
 material[2]= new THREE.MeshLambertMaterial({map:textura2});
//color[1]=new THREE.MeshLambertMaterial({color: 0x000000,side: THREE.DoubleSide});
//color[2]=new THREE.MeshLambertMaterial({color: 0xFFFFFF,side: THREE.DoubleSide});
var colorTemp=material[1];

for (var i=3.5;i<140;i=i+7){
   //console.log("cambio de columna");
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

//--camara//
camara=new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
camara.position.z=5;
camara.position.y=5;
//--camara//

//---personajes//
 ObjetoPadre=function(geometry,material){
     THREE.Mesh.call(this,geometry,material) ; // el objeto donde se hereda (THREE.Mesh)se ocupa su constructor por esta razon el constructor de obejto padre                                               llama al constructor de THREE.Mesh con el uso de calll
     this.NoPI=3.141592654; // IMPORTANTE !!! No cambiar se ha probado con otros valores y la suma y resta hacen cosas raras por esto no se uso Math.PI
     this.VecFrente= new THREE.Vector3(0,0,1);
     this.OriginRaycaster=new THREE.Vector3(this.position.x,this.position.y+2.5,this.position.z);
     this.raycaster= new THREE.Raycaster(this.OriginRaycaster,this.VecFrente);
     
     
     
     
     
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
     
     this.ActFrente=function (){
         if (this.rotation.y==0){
             this.VecFrente= new THREE.Vector3(0,0,1);console.log(1)}
         else if (this.rotation.y==this.NoPI/2){
             this.VecFrente= new THREE.Vector3(1,0,0); console.log(2)}
         else if (this.rotation.y==this.NoPI){
             this.VecFrente= new THREE.Vector3(0,0,-1);console.log(3)}
         else if (this.rotation.y==this.NoPI*3/2){
             this.VecFrente= new THREE.Vector3(-1,0,0);console.log(4)}
         
         console.log(this.VecFrente)
        }
         this.DetectarEnfrente=function(){
         this.ActFrente();
         this.OriginRaycaster=new THREE.Vector3(this.position.x,this.position.y+2.5,this.position.z);//ACTUALIZAcion manual del vector 
            Arrow=new THREE.ArrowHelper(this.VecFrente,this.OriginRaycaster,60,0x000000);
            escena.add(Arrow);
             this.raycaster.set(this.OriginRaycaster,this.VecFrente);
            var interseciones=this.raycaster.intersectObjects(Personajes);
              if(interseciones.length>0) {console.log("se ha encontrado "+interseciones.length+" objetos");
            return interseciones[interseciones.length-1].object;
                                         }
             else console.log("no hay nada");
            
         }

     }
    //agregar anexos    
    
    
    ObjetoPadre.prototype=new THREE.Mesh();// SE define el prototipo ObjetoPadre, heredando asi las propiedades y metodos de THREE.Mesh
 
    CargarPer(0);
    CargarPer(1);
    CargarPer(2);
    CargarPer(3);
    CargarPer(4);       
    CargarPer(5);
      
   
    function CargarPer(Num){
    LinkModel="source/Personaje"+Num+".js"    
    PersonajesLoader[Num]=new THREE.JSONLoader();
    PersonajesLoader[Num].load(LinkModel,funcionAgregarPer);
   
    function funcionAgregarPer(geometry,material){
        Personajes[Num]= new ObjetoPadre(geometry,material);//new THREE.Mesh(geometry,material);
        Personajes[Num].position.x=(Num*5)+2.5;
        escena.add( Personajes[Num]);
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
controls = new THREE.OrbitControls( camara );

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

    controls.update();
    renderizador.render(escena,camara);
    
}
var escena,camara,renderizador,Num;
var Personajes=[];
var PersonajesLoader=[];
setup();
loop();