declare global {
  function fetch<ResponseType = any>(
    input: RequestInfo | URL,
    init?: TypedRequestInit,
  ): Promise<TypedResponse<ResponseType>>;

  type TypedRequestInit = RequestInit;

  interface TypedResponse<T> extends Response {
    json(): Promise<T>;
  }

  interface KPI_ID {
    init(): void;
  }

  interface Window {
    KPIID: KPI_ID;
  }
}

export {};
