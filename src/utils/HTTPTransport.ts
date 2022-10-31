const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

// Самая простая версия. Реализовать штучку со всеми проверками им предстоит в конце спринта
// Необязательный метод
function queryStringify(data: object) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  // Здесь достаточно и [object Object] для объекта
  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`, '?');
}

type RequestOptions = {
  headers?: Record<string, string>,
  method?: string,
  data?: object,
  timeout?: number,
  tries?: number,
}

type HTTPMethod = (url: string, options?: RequestOptions) => Promise<any>;
type HTTPRequest = (url: string, options: RequestOptions, timeout?: number) => Promise<any>;

class HTTPTransport {
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

  request: HTTPRequest = (url, options, timeout = 50000) => {
    const { headers = {}, method, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error('No method'));
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(method, url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}

const fetchWithRetry: HTTPRequest = (url, options = {}) => {
  const { tries = 1 } = options;

  function onError(err: any) {
    const triesLeft = tries - 1;
    if (!triesLeft) {
      throw err;
    }

    return fetchWithRetry(url, { ...options, tries: triesLeft });
  }

  return new HTTPTransport().request(url, options).catch(onError);
};
