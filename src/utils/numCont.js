
// add a suffix in number abbreviation of likes
export const StarsCont = (starsCont, setStarsCont) => {
  if(starsCont >= 1000 && starsCont < 1000000) {
    return setStarsCont((starsCont / 1000).toFixed(1) + 'k')
  } else if (starsCont >= 1000000) {
    return setStarsCont((starsCont / 1000000).toFixed(1) + 'M')
  }
}

// add a suffix in number abbreviation of comments
export const CommentsCont = (commentsCont, setCommentsCont) => {
  if(commentsCont >= 1000 && commentsCont < 1000000) {
    return setCommentsCont((commentsCont / 1000).toFixed(1) + 'k')
  } else if (commentsCont >= 1000000) {
    return setCommentsCont((commentsCont / 1000000).toFixed(1) + 'M')
  }
}

// add and remove your like of the post
export const AddLike = (setLiked, liked, starsCont, setStarsCont) => {
  setLiked(!liked)
  if(liked === false) {
    return setStarsCont(starsCont + 1)
  } else {
    return setStarsCont(starsCont - 1)
  }

}