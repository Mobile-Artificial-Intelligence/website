import style from './page.module.css';
import BlogPostMinimal from '@/components/blog-post-minimal';
import getPosts from '@/utility/get-blog-posts';

async function BlogPage() {
  const posts = getPosts();

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
