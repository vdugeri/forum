import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";

import "components/editor/editor.styles.scss";

const Editor = ({ handleChange, name }) => (
  <div className="editor">
    <CKEditor
      editor={InlineEditor}
      onChange={handleChange}
      name={name}
      type="textarea"
    />
  </div>
);

export default Editor;
