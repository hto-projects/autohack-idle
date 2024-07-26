import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
SyntaxHighlighter.registerLanguage("javascript", js);

export default function C1L5() {
  const syntax1 = `<button onclick = “printAllPages()”> Print All </button>;`;
  const syntax2 = `const printPagesArray = [page1, page2, page3];
function printAllPages() {
  for(int i = printPagesArray.length-1; i >= 0; i--)  {
    printPagesArray[i].Print();
  }
  return;
}`;

  return (
    <div style={{ scrollBehavior: "smooth", overflow: "auto", height: "100%", width: "120%", marginLeft: "-10%" }}>
      <p></p>
      <p style={{ marginLeft: "10%" }}>This is the final code made from all of the lessons in chapter 1.</p>

      <h6 className="sample" style={{ marginLeft: "10%" }}>
        {" "}
        Sample Code (HTML):{" "}
      </h6>
      <SyntaxHighlighter style={anOldHope} className="syntax" showLineNumbers="true" showInlineLineNumbers="true">
        {syntax1}
      </SyntaxHighlighter>

      <h6 className="sample" style={{ marginLeft: "10%" }}>
        {" "}
        Sample Code (JavaScript):{" "}
      </h6>
      <SyntaxHighlighter
        language="javascript"
        style={anOldHope}
        className="syntax"
        showLineNumbers="true"
        showInlineLineNumbers="true"
      >
        {syntax2}
      </SyntaxHighlighter>
    </div>
  );
}
