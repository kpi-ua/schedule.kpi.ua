const BASE_URL = "https://api.campus.kpi.ua";

const defaultHeaders = {
  "Content-Type": "application/json",
};

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

const fetchWrapper = async (post_url: string, options: FetchOptions = {}) => {
  const { headers = {}, ...restOptions } = options;

  const requestOptions: RequestInit = {
    ...restOptions,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  };

  try {
    const url = BASE_URL + post_url;
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} in request to ${url}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

// Mimic axios methods for HTTP requests (get, post, put, delete)
const Http = {
  get: (url: string, options: FetchOptions = {}) =>
    fetchWrapper(url, { ...options, method: 'GET' }),

  post: (url: string, body: any, options: FetchOptions = {}) =>
    fetchWrapper(url, { ...options, method: 'POST', body: JSON.stringify(body) }),

  put: (url: string, body: any, options: FetchOptions = {}) =>
    fetchWrapper(url, { ...options, method: 'PUT', body: JSON.stringify(body) }),

  delete: (url: string, options: FetchOptions = {}) =>
    fetchWrapper(url, { ...options, method: 'DELETE' }),
};

export default Http;
