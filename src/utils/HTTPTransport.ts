import queryStringify from './queryString';

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export type RequestOptions = {
  headers?: Record<string, string>,
  method?: string,
  data?: object,
  body?: any,
  timeout?: number,
  tries?: number,
}

export type HTTPMethod = (url: string, options?: RequestOptions) => Promise<any>;
export type HTTPRequest = (url: string, options: RequestOptions, timeout?: number) => Promise<any>;

export class HTTPTransport {
  _baseUrl?: string;

  constructor() {
    this._baseUrl = 'https://ya-praktikum.tech/api/v2';
  }

  get: HTTPMethod = (url, options = {}) => {
    const { data = {} } = options;
    return this.request(
      `${url}${queryStringify(data)}`,
      { ...options, method: METHODS.GET },
      options.timeout,
    );
  };

  post : HTTPMethod = (url, options = {}) => this.request(
    url,
    { ...options, method: METHODS.POST },
    options.timeout,
  );

  put : HTTPMethod = (url, options = {}) => this.request(
    url,
    { ...options, method: METHODS.PUT },
    options.timeout,
  );

  delete : HTTPMethod = (url, options = {}) => this.request(
    url,
    { ...options, method: METHODS.DELETE },
    options.timeout,
  );

  request: HTTPRequest = (url, options, timeout = 5000) => {
    const { headers = {}, method, body } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error('No method'));
        return;
      }

      const isGet = method === METHODS.GET;
      const currentUrl = this._baseUrl ? `${this._baseUrl}${url}` : url;
      
      const xhr = new XMLHttpRequest();
      xhr.open(method, currentUrl);
      xhr.withCredentials = true;

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr);
        } else {
          reject(xhr);
        }
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;
      if (isGet || !body) {
        xhr.send();
      } else {
        xhr.send(body);
      }
    });
  };
}

// const fetchWithRetry: HTTPRequest = (url, options = {}) => {
//   const { tries = 1 } = options;

//   function onError(err: any) {
//     const triesLeft = tries - 1;
//     if (!triesLeft) {
//       throw err;
//     }

//     return fetchWithRetry(url, { ...options, tries: triesLeft });
//   }

//   return new HTTPTransport().request(url, options).catch(onError);
// };



















// enum METHODS {
//     GET = 'GET',
//     POST = 'POST',
//     PUT = 'PUT',
//     PATCH = 'PATCH',
//     DELETE = 'DELETE',
// }

// export type RequestOptions = {
//     headers?: Record<string, string>;
//     method: string;
//     timeout?: number;
//     data?: any;
// };

// const baseUrl = 'https://ya-praktikum.tech/api/v2';

// export class Http {
//   async get<TResponse>(url: string, data?: {}): Promise<TResponse> {
//     return this.request(url, { method: METHODS.GET, data });
//   }

//   async post<TResponse>(url: string, data: {}): Promise<TResponse> {
//     return this.request(url, { method: METHODS.POST, data });
//   }

//   async put<TResponse>(url: string, data: {}): Promise<TResponse> {
//     return this.request(url, { method: METHODS.PUT, data });
//   }

//   async delete<TResponse>(url: string, data: {}): Promise<TResponse> {
//     return this.request(url, { method: METHODS.DELETE, data });
//   }

//   async request<TResponse>(
//     url: string,
//     options: RequestOptions = { method: METHODS.GET },
//   ): Promise<TResponse> {
//     return new Promise((resolve, reject) => {
//       const { method, data } = options;

//       const xhr = new XMLHttpRequest();

//       // if (method === METHODS.GET) {
//       //   if (data) {
//       //     url = `${url}?${Object.entries(data)
//       //       .map(([key, value]: [key: string, value: any]): string => `${key}=${value}`)
//       //       .join('&')}`;
//       //   }
//       // }

//       xhr.open(method, baseUrl + url);
//       xhr.withCredentials = true;

//       xhr.onload = function () {
//         // let resp;
//         // if (~xhr?.getResponseHeader('Content-Type')?.indexOf('application/json')!) {
//         //   resp = JSON.parse(xhr.response);
//         // } else {
//         //   resp = xhr.response;
//         // }
//         // if (xhr.status === 200) {
//           resolve(xhr);
//         // } else {
//         //   reject(resp);
//         // }
//       };

//       xhr.onabort = reject;
//       xhr.onerror = reject;
//       xhr.ontimeout = reject;

//       if (method === METHODS.GET || !data) {
//         xhr.send();
//       } else if (data instanceof FormData) {
//         xhr.send(data);
//       } else {
//         xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
//         xhr.send(JSON.stringify(data));
//       }
//     });
//   }
// }
