import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
SyntaxHighlighter.registerLanguage("css", css);
import HTML from "react-syntax-highlighter/dist/esm/languages/hljs/vbscript-html";
SyntaxHighlighter.registerLanguage("HTML", HTML);

export default function C2L1() {
  const syntax1 = `<h1> Sample Webpage </h2>
<p> First paragraph </p>
<p> Second Paragraph </p>`;
  const syntax2 = `body {}`;
  const syntax3 = `body {
  background-color: green;
}`;
  const syntax4 = `body {
  background-color: green;
  color: white;
}`;

  return (
    <div
      style={{
        scrollBehavior: "smooth",
        overflow: "auto",
        height: "85%",
        width: "100%"
      }}
    >
      <p>In this lesson you will learn how to change the color of different things on a webpage.</p>

      <p> For this lesson assume we have the following webpage: </p>

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

      <h6 className="sample"> Sample Output: </h6>
      <div
        style={{
          marginLeft: "20%",
          marginRight: "20%",
          border: "2px solid black",
          backgroundColor: "white",
          color: "black"
        }}
      >
        <h2 style={{ fontFamily: "Courier New" }}> Sample Webpage </h2>
        <p style={{ fontFamily: "Courier New" }}> Paragraph 1 </p>
        <p style={{ fontFamily: "Courier New" }}> Paragraph 2 </p>
      </div>

      <p>
        The first thing we would want to do, is change the background color. To do so, we have to first specify that we
        are changing the entire webpage, also known as the body. body is one of many selectors, which tell the computer
        what we want to change on a webpage.
      </p>

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

      <p>
        Then, we have to specify what properties of the body we are stylizing. We want to change the background color of
        the body, so we can use background-color property to change to background color to any color. For this lesson, I
        am going to change the background color to green.
      </p>

      <h6 className="sample"> Sample Code (CSS): </h6>
      <SyntaxHighlighter
        language="css"
        style={anOldHope}
        className="syntax"
        showLineNumbers="true"
        showInlineLineNumbers="true"
      >
        {syntax3}
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
        <h2 style={{ fontFamily: "Courier New" }}> Sample Webpage </h2>
        <p style={{ fontFamily: "Courier New" }}> Paragraph 1 </p>
        <p style={{ fontFamily: "Courier New" }}> Paragraph 2 </p>
      </div>

      <p>
        Next, let’s change the color of all text on the page to white. Since we are changing all text on the page, we
        can still use the body selector. To change the color of all text, we want to use the color property.
      </p>

      <h6 className="sample"> Sample Code (CSS): </h6>
      <SyntaxHighlighter
        language="css"
        style={anOldHope}
        className="syntax"
        showLineNumbers="true"
        showInlineLineNumbers="true"
      >
        {syntax4}
      </SyntaxHighlighter>

      <h6 className="sample"> Sample Output: </h6>
      <div
        style={{
          marginLeft: "20%",
          marginRight: "20%",
          border: "2px solid black",
          backgroundColor: "green",
          color: "white"
        }}
      >
        <h2 style={{ fontFamily: "Courier New" }}> Sample Webpage </h2>
        <p style={{ fontFamily: "Courier New" }}> Paragraph 1 </p>
        <p style={{ fontFamily: "Courier New" }}> Paragraph 2 </p>
      </div>

      <p>
        Use this website to check out all of the different color options:
        <a href="https://www.w3schools.com/cssref/css_colors.php" target="_blank">
          CSS Colors (w3schools.com)
        </a>
      </p>
    </div>
  );
}
