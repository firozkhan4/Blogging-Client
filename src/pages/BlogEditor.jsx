import { useContext, useEffect } from "react";
import { TinyEditor } from "../components";
import { EditorContext } from "../contexts/EditorContext";

export default function BlogEditor() {
  const { isEditing, setIsEditing } = useContext(EditorContext);

  useEffect(() => {
    setIsEditing(() => true);

    return () => {
      setIsEditing(() => false);
    };
  }, []);
  return (
    <div className="mx-auto container w-2/4 space-y-4 pt-4  h-[92vh]">
      <input
        type="text"
        placeholder="Title"
        className="border-slate-500 border-2 rounded px-2 text-3xl w-full py-3"
      />
      <TinyEditor />
    </div>
  );
}
