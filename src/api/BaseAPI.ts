import { HTTPTransport } from '../utils/HTTPTransport';

// export type APIMethod = (data: any) => Promise<any> | void;

export abstract class BaseAPI {
  _http: HTTPTransport;

  constructor(http: HTTPTransport) {
    this._http = http;
  }

  create(data?: any):Promise<any> | void { throw new Error(`Not implemented. ${data}`); }

  request():Promise<any> | void { throw new Error('Not implemented'); }

  update(data?: any):Promise<any> | void { throw new Error(`Not implemented. ${data}`); }

  delete():Promise<any> | void { throw new Error('Not implemented'); }
}
