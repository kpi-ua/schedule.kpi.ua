const BASE_URL = 'https://api.campus.kpi.ua';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

const fetchWrapper = async <T = unknown>(requestUrl: string, options: FetchOptions = {}): Promise<T> => {
  const { headers = {}, ...restOptions } = options;

  const requestOptions: RequestInit = {
    ...restOptions,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  };

  const url = BASE_URL + requestUrl;
  const response = await fetch(url, requestOptions);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} in request to ${url}`);
  }
  return await response.json();
};

const Http = {
  get: <T = unknown>(url: string, options: FetchOptions = {}) => fetchWrapper<T>(url, { ...options, method: 'GET' }),
};

export default Http;
