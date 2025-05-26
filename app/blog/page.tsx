import style from './page.module.css';
import BlogPostMinimal from '@/components/blog-post-minimal';
import posts from '@/utility/posts';

async function BlogPage() {
  return (
    <div className={style.blog} >
      <h1>Mobile AI Blog</h1>
      <ul>
        {posts.map(post => (
          <BlogPostMinimal key={post.slug} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default BlogPage;
