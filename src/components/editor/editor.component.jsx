import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";
import "components/editor/editor.styles.scss";

const editorConfiguration = {
  toolbar: [
    "bold",
    "italic",
    "heading",
    "link",
    "bulletedList",
    "numberedList",
    "blockQuote",
  ],
};

const Editor = ({ onChange, name }) => (
  <div className="editor">
    <CKEditor
      editor={InlineEditor}
      config={editorConfiguration}
      onChange={onChange}
      name={name}
      type="textarea"
      placeholder="Say something..."
    />
  </div>
);

export default Editor;
