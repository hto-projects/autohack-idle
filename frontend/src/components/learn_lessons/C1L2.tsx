import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
SyntaxHighlighter.registerLanguage("javascript", js);

export default function C1L2() {
  const syntax1 = `function collectAll() {}`;
  const syntax2 = `function collectAll() {
    prompt("You have collected all of the available bits!”);
    return;
  }`;

  return (
    <div className={`normalLesson ${open && "showing"}`} style={{ color: "black" }}>
      <h3 style={{ color: "black", textAlign: "left", marginLeft: "-3%", marginRight: "-3%" }}>
        Lesson 2: Functions in JavaScript
      </h3>

      <p>
        In this lesson you will learn how to code the function that is called when the Collect All button is clicked.
        This will be done in JavaScript.
      </p>

      <p>
        Functions hold a whole block of code that is intended to complete a certain task. This makes it easier to use
        that code multiple times or in different places. For our purpose, we are just using it to condense the amount of
        code in the button element.
      </p>

      <h6 className="sample"> Sample Code: </h6>
      <SyntaxHighlighter
        language="javascript"
        style={anOldHope}
        className="syntax"
        showLineNumbers="true"
        showInlineLineNumbers="true"
      >
        {syntax1}
      </SyntaxHighlighter>

      <p>
        To create a function, you first start with the word function, then the name of the function, and then
        parentheses, and finally curly brackets. The word function tells the computer that you are making a new function
        and the name tells the computer what text you are going to use to use the function. The parentheses currently
        contain nothing, but they can contain parameters, which are pieces of information that are given to the function
        to do what it needs. The curly brackets are also currently empty, but they are supposed to contain the block of
        code that the function is representing.
      </p>

      <h6 className="sample"> Sample Code: </h6>
      <SyntaxHighlighter
        language="javascript"
        style={anOldHope}
        className="syntax"
        showLineNumbers="true"
        showInlineLineNumbers="true"
      >
        {syntax2}
      </SyntaxHighlighter>

      <p>
        I have now added a prompt, which is a pop-up on the user's screen, that tells the user all available bits were
        collected. We also have to add a return statement, which tells the computer when the block of code is completed.
        We can also return information, if we wanted, however, we do not need to for this function. Now, we need to have
        the function actually collect all of the available bits
      </p>
    </div>
  );
}
