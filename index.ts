import { Application } from "express";


  export class ServerConfig {
    [key:string]: string | number |boolean; 
    PARSE_DATABASEURI: string = "mongodb://mongo:27017/";
    PARSE_MASTERKEY: string = "ABCDEFG";
    PARSE_SERVERURL: string = "http://localhost:13371";
    PARSE_PUBLICSERVERURL: string = "http://127.0.0.1:13371";
    PORT: number = 1337;
    LOCALPORT: number = 13371;
    MAIN_DATABASE: string = "servermanager";
  }
  
export class SubServerConfig {
  [key:string]: string | number |boolean;
  PARSE_APPNAME: string;
  PARSE_DATABASEURI: string;
  PARSE_APPID: string;
  PARSE_MASTERKEY: string;
  PARSE_SERVERHOST: string;
  PARSE_PUBLICSERVERURL: string;
  CLOUD_ENTRY: string;
  PATH: string
  HTTPS_PORT: number;
  HTTP_PORT: number;
  HTTPS: boolean;
  INIT_MODULE: string;
}


  class Instance {
    PARSE_INSTANCE: Application;
    PARSE_DASHBOARD: Application;
    APP: Application;
    CONFIG: ServerConfig;
    initialExpressStackSize: number;
    LOGGER: any = require("parse-server/lib/logger");
  }

  export const instance = new Instance();
export { Process, ProcessInit } from "./Process";
export { Cloud } from "./cloud";
export { Schema } from "./schema";