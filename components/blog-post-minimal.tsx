import style from './blog-post-minimal.module.css';

function BlogPostMinimal({ post }: { post: BlogPost }) {
  return (
    <div className={style.post} >
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <a href={`/blog/${post.slug}`}>Read more</a>
    </div>
  );
}

export default BlogPostMinimal;