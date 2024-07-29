import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
SyntaxHighlighter.registerLanguage("javascript", js);

export default function C1L3() {
  const syntax1 = `const printPagesArray  = []; 
printPagesArray[0] = page1;
printPagesArray[1] = page2;
printPagesArray[2] = page3;`;
  const syntax2 = `const printPagesArray = [page1, page2, page3];`;

  return (
    <div style={{ scrollBehavior: "smooth", overflow: "auto", height: "85%", width: "100%" }}>
      <p>In this lesson you will learn about arrays and how to make them. This will be done in JavaScript</p>

      <p>
        {" "}
        To make the function print all the pages, we need to first understand how the pages are stored in the computer.
        Currently, all the pages are stored in an array, which is just a list of things. So, whenever a new page needs
        to be printed, a new page object is added to the array. And whenever a page is printed, the page object
        corresponding to that page is deleted from the array.{" "}
      </p>

      <h6 className="sample"> Sample Code: </h6>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SyntaxHighlighter
          language="javascript"
          style={anOldHope}
          className="syntax"
          showLineNumbers="true"
          showInlineLineNumbers="true"
        >
          {syntax1}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language="javascript"
          style={anOldHope}
          className="syntax"
          showLineNumbers="true"
          showInlineLineNumbers="true"
        >
          {syntax2}
        </SyntaxHighlighter>{" "}
      </div>

      <h6 className="sample"> Sample Array: </h6>
      <p style={{ color: "black", marginLeft: "10%" }}> [page1, page2, page3] </p>

      <p>
        {" "}
        The above code will declare (create) an array with 3 elements. The keyword const is used to tell the computer
        that printPagesArray will always be referring to the same array. The elements in the array can still change, but
        the array's name cannot be changed. printPagesArray is going to be the name of the array and the "= []" means
        that you are assigning printPagesArray to an array (printPagesArray equals an array). Both sets of code do the
        exact same thing, but the first block of code does it in multiple steps, while the second block finishes the
        action in one step. The first block of code first declares an empty array named printPagesArray and then, one by
        one, adds the pages to printPagesArray. Notice how page1 is being assigned to printPagesArray[0], not
        printPagesArray[1]. This is because arrays are indexed beginning at 0 and ending at the number of elements minus
        one. So, page1 is at index 0 (position 1) of the array, page2 is at index 1 (position 2), and page3 is at index
        2 (position 3) of the array. The second block of code declares an array with 3 pages called printPagesArray,
        and, thus, creates and fills the array in one line.{" "}
      </p>
    </div>
  );
}
