import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

function PostsGrid(props) {
  return (
    <ul className={classes.grid}>
      {props.posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
}

export default PostsGrid;
