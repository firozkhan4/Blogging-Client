import { BlogCard } from "../components/index";
import { useQuery } from "@apollo/client";
import { GET_ALL_BLOG } from "../graphqls/queries";

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_BLOG);

  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <main className="container mx-auto">
        {data.getAllBlog.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </main>
    </div>
  );
}
