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
          resolve(xhr.responseText);
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
