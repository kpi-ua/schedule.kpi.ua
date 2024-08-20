interface Paging {
  firstItemOnPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastItemOnPage: number;
  pageCount: number;
  pageNumber: number;
  pageSize: number;
  totalItemCount: number;
}

export interface PagedResponse<T> {
  data: T;
  paging?: Paging;
}