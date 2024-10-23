import { PostContent } from "./content";
import { PostInteractions } from "./interactions";
import { PostProfile } from "./profile";
import { PostTitle } from "./title";
import { PostWrapper } from "./wrapper";

export const Post = {
  root: PostWrapper,
  Profile: PostProfile,
  content: PostContent,
  title: PostTitle,
  interactions: PostInteractions,
}