export const unique = (array: any[], getComparingItem = (item: any) => item) => {
    const uniqueFilter = (value: string, index: number, self: any) => {
        return self.map((e: any) => getComparingItem(e)).indexOf(getComparingItem(value)) === index;
    }

    return [...array.filter(uniqueFilter)];
}