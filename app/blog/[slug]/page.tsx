// /app/blog/[slug]/page.jsx
import posts from '@/utility/posts';
import style from './page.module.css';

interface BlogPostPageParams { 
    slug: string 
}

export function generateStaticParams(): BlogPostPageParams[] {
  return posts.map(post => ({ slug: post.slug }));
}

export default async function BlogPostPage(props: { params: Promise<BlogPostPageParams> }) {
  const params = await props.params;
  const post = posts.find(p => p.slug === params.slug);

  if (!post) return <div>Post not found</div>;

  return (
    <article className={style.post} >
      <h1>{post.title}</h1>
      <p className={style.date} >{post.date}</p>
      {post.content}
    </article>
  );
}
