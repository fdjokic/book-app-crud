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

// note: yearOfPublishing GET => yearOfBublishing POST
// note: numOfPages GET => numberOfPages POST
// isbn is required in squema but not in design

// since back-end hasn't provided any convention in naming
export interface ISingleBookPOST {
  isbn: number | null;
  title: string;
  nameOfAuthor: string;
  dateOfBirthAuthor: string;
  numberOfPages: number | null;
  yearOfPublishing: number | null;
  quantity: number | null;
  coverPhoto?: any;
}
