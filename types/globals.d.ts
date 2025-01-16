/* QUESTION */

interface Tag {
  _id: string;
  name: string;
}

interface Author {
  _id: string;
  name: string;
  image: string;
  value: string;
}
export interface Question {
  _id: string;
  title: string;
  tags: Tag[];
  author: Author;
  createdAt: Date;
  description: string;
  upvotes: string;
  answers: string;
  views: string;
}
