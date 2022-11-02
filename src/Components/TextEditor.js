import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { mailActions } from "../Store/mailSlice";

// function stringToHtml(str) {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(str, "text/html");
//   console.log(doc.body.textContent);
// }

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  function onChangeHandler(newContent) {
    // stringToHtml(newContent)
    setContent(newContent);
    dispatch(mailActions.setBody(content));
  }
  return (
    <div>
      <JoditEditor ref={editor} value={content} onChange={onChangeHandler} />
    </div>
  );
};

export default TextEditor;
