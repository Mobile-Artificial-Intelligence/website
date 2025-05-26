// /app/blog/[slug]/page.jsx
import getPosts from '@/utility/get-blog-posts';
import style from './page.module.css';

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export default async function BlogPostPage(props: { params: { slug: string } }) {
  const params = await props.params;
  const posts = getPosts();
  const post = posts.find(p => p.slug === params.slug);

  if (!post) return <div>Post not found</div>;

  return (
    <article className={style.post} >
      <h1>{post.title}</h1>
      <p className={style.date} >{post.date}</p>
      <div className={style.content} dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
