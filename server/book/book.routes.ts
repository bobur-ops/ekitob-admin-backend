import { Prisma, Book } from "@prisma/client";
import express, { Router } from "express";
import { bookModel } from "./book.model";

export const bookRouter: Router = express.Router();

bookRouter.get<never, Book[]>("/", async (req, res, next) => {
  try {
    const response = await bookModel.getAllBooks();
    return res.status(200).send(response);
  } catch (error) {
    next(error);
  }
});

bookRouter.get<{ book_id: string }, Book>(
  "/:book_id",
  async (req, res, next) => {
    try {
      const { book_id } = req.params;
      const response = await bookModel.getBook(parseInt(book_id));

      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
);

bookRouter.post<never, Omit<Prisma.BookUncheckedCreateInput, "id">>(
  "/",
  async (req, res, next) => {
    try {
      const response = await bookModel.createBook(req.body);

      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
);

bookRouter.put<{ book_id: string }, Book, Prisma.BookUncheckedUpdateInput>(
  "/:book_id",
  async (req, res, next) => {
    try {
      const { book_id } = req.params;
      const data = req.body;
      const response = await bookModel.updateBook(parseInt(book_id), data);

      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
);

bookRouter.delete<{ book_id: string }, Book>(
  "/:book_id",
  async (req, res, next) => {
    try {
      const { book_id } = req.params;
      const response = await bookModel.deleteBook(parseInt(book_id));

      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
);
