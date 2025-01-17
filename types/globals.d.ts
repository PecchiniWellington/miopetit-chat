/* QUESTION */

import { NextResponse } from "next/server";

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

type ActionResponse<T = null> = {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    details?: Record<string, string[]>;
  };
  status?: number;
};

type SuccessResponse<T = null> = ActionResponse<T> & { success: true };
type ErrorResponse<T = null> = ActionResponse<undefined> & { success: false };
type APIErrorResponse<T = null> = NextResponse<ErrorResponse>;
type APIResponse<T = null> = NextResponse<SuccessResponse | ErrorResponse>;
