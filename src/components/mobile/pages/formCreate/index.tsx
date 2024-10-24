import { ButtonCreatePost } from "./button";
import { InputCreatePost } from "./input";
import { TextAreaCreatePost } from "./textarea";
import { CreatePageWrapper } from "./wrapper";

export const FormCreatePost = {
  root: CreatePageWrapper,
  input: InputCreatePost,
  content: TextAreaCreatePost,
  button: ButtonCreatePost,
}