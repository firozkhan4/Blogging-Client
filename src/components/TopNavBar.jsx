import { useContext } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { EditorContext } from "../contexts/EditorContext";

export default function TopNavBar() {
  const { isEditing, setIsEditing } = useContext(EditorContext);
  return (
    <nav className="border-b-2">
      <div className=" container mx-auto py-3 flex items-center justify-between">
        <section className="flex items-center text-2xl space-x-4 justify-center">
          <Link to={"/"}>firozkhan.com</Link>
          <MdOutlineDarkMode size={20} className="cursor-pointer" />
        </section>
        <Link
          to={"/editor"}
          className="bg-blue-400 rounded shadow-none text-xl py-1 px-3  text-white"
        >
          {isEditing ? "Post" : "Create"}
        </Link>
      </div>
    </nav>
  );
}
