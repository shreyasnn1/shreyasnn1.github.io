import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export default function Post() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="post-page">
        <p>Post not found.</p>
        <Link to="/blog">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="post-page">
      <Link to="/blog" className="back-link">
        ← Back to Blog
      </Link>
      <header className="post-header">
        <h1>{post.title}</h1>
        <time dateTime={post.date}>{post.date}</time>
      </header>
      <div className="post-body">
        {post.body.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </article>
  );
}
