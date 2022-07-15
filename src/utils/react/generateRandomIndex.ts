import { assoc } from "../js/assoc";

export const generateRandomString = () =>
  Math.random().toString(36).substring(3, 15);

export const assignId = assoc("id", generateRandomString());

export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString())(obj);
