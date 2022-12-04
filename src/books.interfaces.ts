export interface ISingleBookInfo {
  bookInfo: ISingleBook;
}
export interface ISingleBook {
  id: number;
  isbn: number;
  title: string;
  nameOfAuthor: string;
  dateOfBirthAuthor: string;
  numOfPages: number;
  yearOfBublishing: number;
  quantity: number;
  coverPhoto?: string;
}
