import { Application } from "express";


  export class ServerConfig {
    [key:string]: string | number |boolean; 
    PARSE_DATABASEURI: string = "mongodb://mongo:27017/";
    PARSE_MASTERKEY: string = "ABCDEFG";
    PARSE_LOCAL_SERVERHOST: string = "localhost";
    PARSE_PUBLIC_SERVERHOST: string = "localhost";
    HTTPS_PORT: number = 1337;
    HTTP_PORT: number = 13371;
    HTTPS: boolean;
    MAIN_DATABASE: string = "servermanager";
  }
  
export class SubServerConfig {
  [key:string]: string | number |boolean;
  PARSE_APPNAME: string;
  PARSE_DATABASEURI: string;
  PARSE_APPID: string;
  PARSE_MASTERKEY: string;
  PARSE_LOCAL_SERVERHOST: string = "localhost";
  PARSE_PUBLIC_SERVERHOST: string = "localhost";
  CLOUD_ENTRY: string;
  PATH: string;
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

  export interface InitProcess {
    init() : any;
  }
export { Process, ProcessInit } from "./Process";
export { Cloud } from "./cloud";
export { Schema } from "./schema";