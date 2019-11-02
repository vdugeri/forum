import React from "react";
import EditorJs from "@editorjs/editorjs";

import "./editor.styles.scss";

const editor = new EditorJs("codex-editor");

const Editor = () => <div className="editor" id="codex-editor"></div>;

export default Editor;
