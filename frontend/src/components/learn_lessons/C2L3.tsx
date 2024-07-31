import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
SyntaxHighlighter.registerLanguage("css", css);
import HTML from "react-syntax-highlighter/dist/esm/languages/hljs/vbscript-html";
SyntaxHighlighter.registerLanguage("HTML", HTML);

export default function C2L3() {
  const syntax1 = `<h1> Sample Webpage </h2>
<p id= "para1"> First paragraph </p>
<p> Second Paragraph </p>`;

  const syntax2 = `body {
  background-color: green;
  color: white;
}

h1 {
  color: white;
}

#para1 {
  font-family: Georgia;
}`;

  return (
    <div style={{ scrollBehavior: "smooth", overflow: "auto", height: "85%", width: "100%" }}>
      <p>This is the final code made from all of the lessons in chapter 2.</p>

      <h6 className="sample"> Sample Code (HTML): </h6>
      <SyntaxHighlighter
        language="HTML"
        style={anOldHope}
        className="syntax"
        showLineNumbers="true"
        showInlineLineNumbers="true"
      >
        {syntax1}
      </SyntaxHighlighter>

      <h6 className="sample"> Sample Code (CSS): </h6>
      <SyntaxHighlighter
        language="css"
        style={anOldHope}
        className="syntax"
        showLineNumbers="true"
        showInlineLineNumbers="true"
      >
        {syntax2}
      </SyntaxHighlighter>

      <h6 className="sample"> Sample Output: </h6>
      <div
        style={{
          marginLeft: "20%",
          marginRight: "20%",
          border: "2px solid black",
          backgroundColor: "green",
          color: "black"
        }}
      >
        <h2 style={{ color: "white", fontFamily: "Courier New" }}> Sample Webpage </h2>
        <p style={{ fontFamily: "Courier New" }}> Paragraph 1 </p>
        <p style={{ fontFamily: "Georgia" }}> Paragraph 2 </p>
      </div>
    </div>
  );
}
