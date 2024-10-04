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

  public database!: SQLiteObject;

  // Creación de las tablas
  rol_usuario: string = "CREATE TABLE IF NOT EXISTS rol_usuario (id_rol INTEGER PRIMARY KEY autoincrement, nombre_rol VARCHAR(50) NOT NULL);";
  estado: string = "CREATE TABLE IF NOT EXISTS estado (id_estado INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(100) NOT NULL);";
  categoria: string = "CREATE TABLE IF NOT EXISTS categoria (id_categoria INTEGER PRIMARY KEY autoincrement, nombre_categoria TEXT NOT NULL);";
  usuario: string = "CREATE TABLE IF NOT EXISTS usuario (id_usuario INTEGER PRIMARY KEY autoincrement, rut_usuario VARCHAR(20) NOT NULL, nombres_usuario VARCHAR(100) NOT NULL, apellidos_usuario VARCHAR(100) NOT NULL, username VARCHAR(20) NOT NULL, clave VARCHAR(12) NOT NULL, correo VARCHAR(50) NOT NULL, token_recup_clave BOOLEAN NOT NULL, estado_user BOOLEAN NOT NULL, id_rol INTEGER, FOREIGN KEY (id_rol) REFERENCES rol_usuario(id_rol));";

  registrousuario: string= "INSERT OR IGNORE INTO usuario (id_usuario, rut_usuario, nombres_usuario, apellidos_usuario, username, clave, correo, token_recup_clave, estado_user, id_rol) VALUES (1, '12345678-9', 'Juan', 'Perez', 'juanperez', 'password123', 'juan.perez@example.com', FALSE, TRUE, 1);";

  listadoUsuarios = new BehaviorSubject([]);
  private idDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, private alertasService: AlertasService) { 
    this.crearBD();
  }

  fetchUsuarios(): Observable<Usuarios[]> {
    return this.listadoUsuarios.asObservable();
  } 

  dbState() {
    return this.idDBReady.asObservable();
  }

  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'megagames1.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.creartablas();
        this.idDBReady.next(true);
        this.alertasService.presentAlert("Creación de BD", "Base de datos creada con éxito."); // Alerta de éxito
      }).catch(e => {
        this.alertasService.presentAlert("Creación de BD", "Error creando la BD: " + JSON.stringify(e)); // Alerta de error
        console.log("ERROR CREACIÓN BD");
      });
    });
  }

  async creartablas() {
    try {
      await this.database.executeSql(this.rol_usuario, []);
      await this.database.executeSql(this.estado, []);
      await this.database.executeSql(this.categoria, []);
      await this.database.executeSql(this.usuario, []);
      await this.database.executeSql(this.registrousuario, []);
      console.log("EXITO");
    } catch (e) {
      console.log("Error conectando las tablas");
      this.alertasService.presentAlert("Creación de tabla", "Error creando las tablas: " + JSON.stringify(e));
    }
  }
}
