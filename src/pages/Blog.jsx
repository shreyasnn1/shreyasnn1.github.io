import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <ul className="post-list">
        {blogPosts.map((post) => (
          <li key={post.id} className="post-item">
            <Link to={`/blog/${post.id}`} className="post-link">
              <span className="post-title">{post.title}</span>
              <span className="post-date">{post.date}</span>
            </Link>
            <p className="post-excerpt">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
