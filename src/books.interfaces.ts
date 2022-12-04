 interface IBook {
title:string
nameOfAuthor:string
yearOfBublishing:number
quantity:number
numOfPages:number
coverPhoto:string
}

export interface ISingleBook {
    bookInfo:IBook
}