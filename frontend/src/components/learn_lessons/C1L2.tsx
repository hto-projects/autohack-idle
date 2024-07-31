import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
SyntaxHighlighter.registerLanguage("javascript", js);

export default function C1L2() {
  const syntax1 = `function functionName() {};`;
  const syntax2 = `function printAllPages() {};`;
  const syntax3 = `function printAllPages() { 
  prompt(“You have printed all of the pages!”); 
  return; 
}`;

  return (
    <div style={{ scrollBehavior: "smooth", overflow: "auto", height: "80%", width: "100%" }}>
      <p>
        {" "}
        In this lesson you will learn about functions in JavaScript and how to make the printAllPages() function. This
        will be done in JavaScript.
      </p>

      <p>
        {" "}
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
        {" "}
        To create a function in JavaScript, we must use the above syntax. The word "function" tells the computer that we
        are making a new function, and the name tells the computer what text we are going to use to call the function.
        When we call a function, we are just telling the computer to implement the function. The parentheses currently
        contain nothing, but they can contain parameters, which are pieces of information that are given to the function
        to do what it needs. The curly brackets are also currently empty, but they are supposed to contain the block of
        code that the function is representing. Now, let's make the printAllPages function.
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
        {" "}
        We have to make sure that the name of the function matches the function call we use for the button, so that the
        computer knows to call this function. Next, we should place a block of code in the function, so that the
        function actually does something.{" "}
      </p>

      <h6 className="sample"> Sample Code: </h6>
      <SyntaxHighlighter
        language="javascript"
        style={anOldHope}
        className="syntax"
        showLineNumbers="true"
        showInlineLineNumbers="true"
      >
        {syntax3}
      </SyntaxHighlighter>

      <p>
        {" "}
        I have added a prompt, which is a pop-up on the user's screen, that tells the user that all of the pages were
        printed. We also must add a return statement, which tells the computer when the block of code is completed. We
        can also return information, if we wanted, however, we do not need to for this function. Now, we need to have
        the function actually print all of the pages.
      </p>
    </div>
  );
}
