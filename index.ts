import { Application } from "express";


  export class ServerConfig {
    PARSE_APPNAME: string;
    PARSE_DATABASEURI: string;
    PARSE_APPID: string;
    PARSE_MASTERKEY: string;
    PARSE_SERVERURL: string;
    PARSE_PUBLICSERVERURL: string;
    ROUTE: string;
    PORT: number;
    LOCALPORT: number;
    MAIN_DATABASE: string;
  }
  
export class SubServerConfig {
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