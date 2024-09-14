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

const Http = {
  get: (url: string, options: FetchOptions = {}) =>
    fetchWrapper(url, { ...options, method: 'GET' }),
};

export default Http;
