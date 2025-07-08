import s from '../Projects/Projects.module.scss';
import Blogs from '../../data/Blogs';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import BlogCard from './BlogCard';

const Blog = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <h1 className={s.title}>
          Recent <strong className={s.purple}>Blogs</strong>
        </h1>
        <p className={s.subtitle}>
          Stay updated with practical tips, tutorials, and deep dives into the tools and technologies I use.
        </p>

        <ul className={s.projects}>
          {Blogs.map((props) => (
            <BlogCard key={props.id} {...props} />
          ))}
        </ul>
      </div>
    </BaseLayout>
  );
};

export default Blog;
