import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import HTML from "react-syntax-highlighter/dist/esm/languages/hljs/vbscript-html";
SyntaxHighlighter.registerLanguage("HTML", HTML);

export default function C1L1() {
  const syntax1 = `<button> Click Me </button>;`;
  const syntax2 = `<button onclick = “printAllPages()”> Print All </button>`;

  return (
    <div style={{ scrollBehavior: "smooth", overflow: "auto", height: "85%", width: "100%" }}>
      <p>
        In this lesson you will learn how to code a button that will allow you to print all pages. This will be done in
        HTML.
      </p>

      <p> First, we need to make a button that the user can click.</p>

      <h6 className="sample"> Sample Code: </h6>
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
      <button style={{ marginLeft: "10%" }}> Click Me </button>

      <p>
        In HTML, the &lt; and &gt; are called opening and closing tags and they hold what are called elements. button is
        one such element and it creates a button on the user's webpage. It is clickable, but clicking the button doesn't
        currently do anything because we didn't tell it what to do.
      </p>

      <h6 className="sample"> Sample Code: </h6>
      <SyntaxHighlighter
        language="HTML"
        style={anOldHope}
        className="syntax"
        showLineNumbers="true"
        showInlineLineNumbers="true"
      >
        {syntax2}
      </SyntaxHighlighter>

      <h6 className="sample"> Sample Output: </h6>
      <button style={{ marginLeft: "10%" }}> Print All </button>

      <p>
        Now, we must add an onclick attribute, which just tells the computer what to do when the button is clicked.
        Attributes are just used to further describe html elements. Since we are trying to make a button that allows the
        user to print all of the pages at once, we need to make the onclick attribute equal to printAllPages(), which is
        a function call. Function calls are used to tell the computer which specific function to implement. We should
        also change the text on the button to Print All, as that is what we want the button to do. Now we have added
        functionality (what happens when the user clicks the button) to our button. However, the computer still doesn't
        know what to do as we do not have a printAllPages function made. So, now we need to add a printAllPages function
        to our code.
      </p>
    </div>
  );
}
