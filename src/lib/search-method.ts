export const searchMethod = (method: string, field:string, searchText: string) => {
  switch (method) {
    case 'contains':
      return {
        [field]: {
          contains: searchText,
        },
      };
    default:
      return {
        [field]: searchText,
      };
  }
};
