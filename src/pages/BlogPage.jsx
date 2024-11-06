import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_B_ID } from "../graphqls/queries";

export default function BlogPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_B_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.getBlogById) return <p>No blog found.</p>;

  // Destructure the blog data
  const { title, content, author } = data.getBlogById;

  return (
    <div className="container mx-auto border w-2/4 p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="mb-2 text-gray-600">
        <strong>Author:</strong> {author}
      </p>
      <div className="text-lg leading-relaxed">{content}</div>
    </div>
  );
}
