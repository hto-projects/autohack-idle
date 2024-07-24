import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function C1L1() {
  const syntax1 = `<button> Click Me </button>;`;

  const syntax2 = `<button onClick="collectAll()"> Collect All </button>;`;

  return (
    <>
      <p>
        In this lesson you will learn how to code a button that will allow you to collect all bits available. This will
        be done in HTML.
      </p>

      <h6 className="sample"> Sample Code: </h6>
      <SyntaxHighlighter style={anOldHope} className="syntax" showLineNumbers="true" showInlineLineNumbers="true">
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
      <SyntaxHighlighter style={anOldHope} className="syntax" showLineNumbers="true" showInlineLineNumbers="true">
        {syntax2}
      </SyntaxHighlighter>

      <h6 className="sample"> Sample Output: </h6>
      <button style={{ marginLeft: "10%" }}> Collect All </button>

      <p>
        I have added a onclick attribute, which just tells the computer what to do when the button is clicked. Since we
        are trying to make a button that allows the user to collect all bits, I have made onclick equal to collectAll()
        which is a function. I have also changed the text on the button to Collect All, as that is what we want the
        button to do. Now we have added functionality, which is just what happens when you click the button, to our
        button. However, the computer still doesn't know what to do as we do not have a collectAll() function made. So,
        now we need to add collectAll() function to our code.
      </p>
    </>
  );
}
