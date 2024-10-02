import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertasService } from 'src/app/services/alertas.service'; 
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class ManejodbService {

   //variable de conexión a la Base de Datos
   public database!: SQLiteObject;

   /////////CREACION DE LAS TABLAS/////////////////////
 
   //rol del usuario
   rol_usuario: string = "CREATE TABLE IF NOT EXISTS rol_usuario (id_rol INTEGER PRIMARY KEY autoincrement, nombre_rol VARCHAR(50) NOT NULL);";
 
   //estado (venta)
   estado: string = "CREATE TABLE IF NOT EXISTS estado (id_estado INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(100) NOT NULL);";
 
   //categoria
   categoria: string = "CREATE TABLE IF NOT EXISTS categoria (id_categoria INTEGER PRIMARY KEY autoincrement, nombre_categoria TEXT NOT NULL);";
 
   //usuario
   usuario: string = "CREATE TABLE IF NOT EXISTS usuario (id_usuario INTEGER PRIMARY KEY autoincrement, rut_usuario VARCHAR(20) NOT NULL, nombres_usuario VARCHAR(100) NOT NULL, apellidos_usuario VARCHAR(100) NOT NULL, username VARCHAR(20) NOT NULL, clave VARCHAR(12) NOT NULL, correo VARCHAR(50) NOT NULL, token_recup_clave BOOLEAN NOT NULL, estado_user BOOLEAN NOT NULL, id_rol INTEGER, FOREIGN KEY (id_rol) REFERENCES rol_usuario(id_rol));";
   
   //producto
   producto: string = "CREATE TABLE IF NOT EXISTS producto (id_producto INTEGER PRIMARY KEY autoincrement, nombre_prod VARCHAR(50) NOT NULL, precio_prod INTEGER NOT NULL, stock_prod INTEGER NOT NULL, descripcion_prod TEXT NOT NULL, foto_prod BLOB, estatus BOOLEAN, id_categoria INTEGER, FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria));"; //blob para la foto

   //venta
   venta: string = "CREATE TABLE IF NOT EXISTS venta (id_venta INTEGER PRIMARY KEY autoincrement, fecha_venta DATE NOT NULL, total INTEGER NOT NULL, id_usuario INTEGER, id_estado INTEGER , FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario), FOREIGN KEY (id_estado) REFERENCES estado(id_estado));";
 
   //detalle
   detalle: string = "CREATE TABLE IF NOT EXISTS detalle (id_detalle INTEGER PRIMARY KEY autoincrement, cantidad_d INTEGER NOT NULL, subtotal INTEGER NOT NULL, id_venta INTEGER, id_producto INTEGER, FOREIGN KEY (id_venta) REFERENCES venta(id_venta), FOREIGN KEY (id_producto) REFERENCES producto(id_producto));";
 
   //resecna
   resecna: string = "CREATE TABLE IF NOT EXISTS resecna (id_resecna INTEGER PRIMARY KEY autoincrement, text_resecna TEXT NOT NULL, puntos_resecna INTEGER NOT NULL, foto_resecna BLOB, id_usuario INTEGER, id_producto, FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario), FOREIGN KEY (id_producto) REFERENCES producto(id_producto));";
 
   //favoritos(lista de deseos)
   favoritos: string = "CREATE TABLE IF NOT EXISTS favoritos (id_favoritos INTEGER PRIMARY KEY autoincrement, fecha_creacion DATE NOT NULL, id_usuario INTEGER, id_producto, FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario), FOREIGN KEY (id_producto) REFERENCES producto(id_producto));";
 
  
  ///////////////////////INSERTS//////////////////////////

  registrousuario: string= "INSERT OR IGNORE INTO usuario (id_usuario, rut_usuario, nombres_usuario, apellidos_usuario, username, clave, correo, token_recup_clave, estado_user, id_rol) VALUES (1, '12345678-9', 'Juan', 'Perez', 'juanperez', 'password123', 'juan.perez@example.com', FALSE, TRUE, 1);";

  ///////////////////////INSERTS//////////////////////////

  //variables para guardar los registros resultantes de los select
  //se recomienda que se creee una clase para cada select que traiga distintos datos
  //las clases se añaden mediante cmd (ionic generate)
  //tambien se genera clase para utilizar join
  listadoUsuarios = new BehaviorSubject([]);

  //variable para manipular el estado de la Base de Datos (solo se crea UNA variable de este tipo)
  //cuando la bd este lista cambiar el valor
  private idDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);


  //Platform: verifica que el dispositivo permita usar la bd
  //añadir las alertas a un servicio y NO PUEDE HABER ALERTAS REPETIDAS
  constructor(private sqlite: SQLite, private platform: Platform, private alertasService: AlertasService) { 
    this.crearBD();
  }

  //funciones de retorno de observables
  //se recomienda que todas las funciones de los select comience con fetch y luego un nombre referente de lo que devuelve
  //la variable
  //siempre devuelve un observable
  fetchUsuarios(): Observable<Usuarios[]>{
    return this.listadoUsuarios.asObservable();
  } 

  //val observable de la bd
  dbState(){
    return this.idDBReady.asObservable();
  }

  crearBD(){
    //verificar la plataforma esta dispoible o de error
    //en la funcion de flecha se añade .then(()=>{}) el () antes de la flecha se añade para no capturar la info de la funcion de flecha 
    this.platform.ready().then(()=>{
      //procedemos a crear la base de datos
      this.sqlite.create({
        //necesita 2 parametros
        name: 'megagames.db', //nombre conexion (luego del nombre se añade .db) al cambiar el nombre se creara una conexion nueva y se podra utilizar tablas nuevas
        location: 'default' //localicacion bd en default
      }).then((db: SQLiteObject)=>{ //.then() si la conexion es exitosa
        //capturar y guardar la conexion de Base de Datos
        this.database = db;
        //llamar a la funcion de creacion de tablas
        this.creartablas();

        //modificar el observable (todos los observables se les cambia el valor con .next() y en el () se inserta el nuevo valor)
        this.idDBReady.next(true);
      }).catch(e=>{
        this.alertasService.presentAlert("Creacion de BD", "error creando la BD" + JSON.stringify(e));
      })
    })
  }

  //para reconocer await la funcion debe ser asyncrona (async funcion(){ })
  async creartablas(){
    try{
      //mandar a ejecutar las tablas en el orden especifico
      //se le agrega await para que el programa espere a que ejecute una linea para pasar a la siguiente
      await this.database.executeSql(this.usuario,[])

      //generamos los insert en caso que existan
      await this.database.executeSql(this.registrousuario,[])

    }catch(e){
      this.alertasService.presentAlert("Creacion de tabla", "Error creando la tablas" + JSON.stringify(e));
    }
  }

}
