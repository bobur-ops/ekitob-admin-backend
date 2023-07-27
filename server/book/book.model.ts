import { prisma } from "../prisma-client";
import { Prisma, Book } from "@prisma/client";

const getBook = async (book_id: Book["id"]) => {
  const book = await prisma.book.findUnique({
    where: {
      id: book_id,
    },
  });

  return book;
};

const getAllBooks = async () => {
  const books = await prisma.book.findMany();
  return books;
};

const createBook = async (data: Prisma.BookUncheckedCreateInput) => {
  const book = await prisma.book.create({
    data,
  });

  return book;
};

const updateBook = async (
  book_id: Book["id"],
  data: Prisma.BookUncheckedUpdateInput
) => {
  const book = await prisma.book.update({
    where: {
      id: book_id,
    },
    data,
  });

  return book;
};

const deleteBook = async (book_id: Book["id"]) => {
  const book = await prisma.book.delete({
    where: {
      id: book_id,
    },
  });

  return book;
};

export const bookModel = {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
