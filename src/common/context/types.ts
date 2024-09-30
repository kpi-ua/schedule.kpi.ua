export interface SelectableEntityProvider<T> {
  item?: T;
  setItem: React.Dispatch<React.SetStateAction<T | undefined>>;
}
