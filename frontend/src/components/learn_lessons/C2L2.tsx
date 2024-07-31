import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
SyntaxHighlighter.registerLanguage("css", css);
import HTML from "react-syntax-highlighter/dist/esm/languages/hljs/vbscript-html";
SyntaxHighlighter.registerLanguage("HTML", HTML);

export default function C2L2() {
  const syntax1 = `<h1> Sample Webpage </h2>
<p> First paragraph </p>
<p> Second Paragraph </p>`;
  const syntax2 = `h1 {
  color: white;
}`;
  const syntax3 = `<p id= "para1"> First paragraph </p>`;
  const syntax4 = `#para1 {}`;
  const syntax5 = `#para1 {
  font-family: Georgia;
}`;

  return (
    <div style={{ scrollBehavior: "smooth", overflow: "auto", height: "85%", width: "100%" }}>
      <p>In this lesson you will learn how to change only specific parts a webpage, not the entire body. </p>

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
          backgroundColor: "green",
          color: "black"
        }}
      >
        <h2 style={{ fontFamily: "Courier New" }}> Sample Webpage </h2>
        <p style={{ fontFamily: "Courier New" }}> Paragraph 1 </p>
        <p style={{ fontFamily: "Courier New" }}> Paragraph 2 </p>
      </div>

      <p>
        {" "}
        Now, let's make the title a different color to stand out more. Since we are only changing the color of the
        heading, we can use the h1 selector. The h1 element was used in the HTML of this webpage to make the title, so
        that is why we are specifically using h1.
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
        <p style={{ fontFamily: "Courier New" }}> Paragraph 2 </p>
      </div>

      <p>
        Now, let's try to only change one of the paragraphs on the page. To do this, you would normally use the p
        selector, as paragraphs are written using the p element. However, we only want to change the first p element.
        Thus, we need to give the first p element an id, so that we can specifically only change that first p element.{" "}
      </p>

      <h6 className="sample"> Sample Code (HTML) : </h6>
      <SyntaxHighlighter
        language="HTML"
        style={anOldHope}
        className="syntax"
        showLineNumbers="true"
        showInlineLineNumbers="true"
      >
        {syntax3}
      </SyntaxHighlighter>

      <p> To use an id as a selector in CSS, you need to use a # in front of the id. </p>

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

      <p> Let's change the font of the first paragraph to Georgia. To do this, use the font-family property.</p>

      <h6 className="sample"> Sample Code (CSS): </h6>
      <SyntaxHighlighter
        language="css"
        style={anOldHope}
        className="syntax"
        showLineNumbers="true"
        showInlineLineNumbers="true"
      >
        {syntax5}
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

      <p>
        {" "}
        Use this website to check out all of the different font options:{" "}
        <a href="https://www.w3schools.com/cssref/pr_font_font-family.php" target="_blank">
          {" "}
          CSS font-family (w3schools.com){" "}
        </a>{" "}
      </p>
    </div>
  );
}
