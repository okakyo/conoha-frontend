import { KeyboardEvent } from "react";

export const editorKeypress = (
  e: any,
  markdown: string,
  setMarkdown: (text: string) => void,
  registMarkdown?: (text: string) => void
) => {
  if (e.keyCode === 9) {
    e.preventDefault();
    const textareaElement = e.target;
    const currentText = textareaElement.value;
    const start = textareaElement.selectionStart;
    const end = textareaElement.selectionEnd;
    const spaceCount = 2;
    const substitution = Array(spaceCount + 1).join(" ");
    const newText =
      currentText.substring(0, start) +
      substitution +
      currentText.substring(end, currentText.length);
    setMarkdown(newText);
  } else if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    console.log(markdown);
    console.log("Registed");
  }
};
