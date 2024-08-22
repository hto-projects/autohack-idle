import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
SyntaxHighlighter.registerLanguage("javascript", js);
import HTML from "react-syntax-highlighter/dist/esm/languages/hljs/vbscript-html";
SyntaxHighlighter.registerLanguage("HTML", HTML);

export default function C1L4() {
  const syntax1 = `<button onclick = “printAllPages()”> Print All </button>`;
  const syntax2 = `const printPagesArray = [page1, page2, page3];
function printAllPages() {
  printPagesArray[0].Print();
  printPagesArray[1].Print();
  printPagesArray[2].Print();
  return;
}`;
  const syntax3 = `for (int i = printPagesArray.length-1; i >= 0; i--) {
  printPagesArray[i].Print(); 
}`;
  const syntax4 = `const array = [thing1, thing2, thing3, thing4, thing5];
for (int i = 0; i < array.length; i++) { 
  array[i]. delete; 
}`;
  const syntax5 = `const array = [thing1, thing2, thing3, thing4, thing5];
for (int i = array.length-1; i >= 0; i--)  { 
  array[i]. delete; 
}`;
  const syntax6 = `const printPagesArray = [page1, page2, page3];
function printAllPages() {
  for (int i = printPagesArray.length-1; i >= 0; i--)  {
    printPagesArray[i].Print();
  }
  return;
}`;

  return (
    <div style={{ scrollBehavior: "smooth", overflow: "auto", height: "85%", width: "100%" }}>
      <p>
        In this lesson you will learn about for loops and make a for loop that prints all of the pages in an array. This
        will be done in JavaScript.
      </p>

      <p>
        Now, to print all of the pages in the array, we could go through each page, all of which are currently stored in
        printPagesArray, one by one and print it. However, that is very time consuming and results in a lot of
        repetitive code, as shown below:
      </p>

      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <div style={{ width: "54%" }}>
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
        </div>
        <div style={{ width: "45%" }}>
          <h6 className="sample"> Sample Code (JavaScript): </h6>
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
      </div>

      <p>
        Notice how we need a new line for each element in the array? If we had to print 20, or 100 pages, we would need
        100 lines of code to print each page. Thus, the code is very inefficient and redundant. To make the code
        efficient, we can use a For Loop. For Loop are a type of loop which can be used to iterate (go through) each
        element in an array. Use the following syntax to make a for loop:
      </p>

      <h6 className="sample"> Sample Code (JavaScript): </h6>
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
        To tell the computer that we are making a for loop, we need to use the keyword “for”. Then, inside of a set of
        parentheses, we have to make a variable and give it a value. This variable is going to tell the computer, how
        many times it needs to run the loop. Currently, we have the variable i set equal to the length of our array
        minus 1. This is due to how arrays are indexed as an array can have a length of 10, but it's last element is at
        position 9. Then, we have to add a semi-colon and move onto the next statement, which is a conditional
        statement. This statement tells the computer when the for loop should run. Currently, we are telling the
        computer to run the for loop, as long as i is greater than or equal to 0. In other words, the computer is going
        to run the for loop for every position of the array, until the array ends. The last statement that goes into the
        parentheses tells the computer to decrease i by one, every time the for loop ends. This last statement changes
        i, so that when the for loop runs for a position, the next run of the for loop runs with the next position.
        Inside of the brackets, is the actual block of code that is being run each time the for loop runs. This is the
        block of code that is being looped. We just have the Print() function being called on the element of the
        printPagesArray that is at position i. So, when i changes, the position on which the Print() function is being
        called, also changes. This is what allows the Print() function to be used on all of the elements of the array,
        without having to write a new line of code for each element.
      </p>

      <p>
        By using this syntax, we are actually iterating through the array backwards. We are starting at the last
        element, and moving towards the first element. The reason we are moving backwards through the array and not
        forwards, is because of how the Print() function works. The Print() function prints a page, and also deletes the
        page from the printPagesArray(). This is useful as it ensures that the array only contains pages that need to be
        printed, not ones that have already been printed. However, because the pages are deleted, the position of the
        other pages in the array change. For example, the printPagesArray currently looks like this: [page1, page2,
        page3]. When page1 is printed, page1 is deleted from the array, so the array then looks like this: [page2,
        page3]. Now, the array's length changed from 3 to 2, and page2 is now in position 1 and page 3 is now in
        position 2. Thus, the for loop actually wouldn't work as intended if we iterate through the array forwards as
        certain elements would be skipped over.
      </p>

      <h6 className="sample"> Example: </h6>

      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <div style={{ width: "50%" }}>
          <h6 className="sample"> Sample Code 1 (JavaScript): </h6>
          <SyntaxHighlighter
            language="javascript"
            style={anOldHope}
            className="syntax"
            showLineNumbers="true"
            showInlineLineNumbers="true"
          >
            {syntax4}
          </SyntaxHighlighter>
          <div style={{ marginLeft: "5%" }}>
            <p> After the first run: i = 1 and array = [thing2, thing3, thing4, thing5] </p>
            <p> After the second run: i = 2 and array = [thing2, thing4, thing5] </p>
            <p>
              This occurs because thing2 is now in position 0, while i is equal to 1, so the element that is being
              deleted is the element at position 1, which is thing 3. Thus, this results in some elements being skipped
              over.
            </p>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <h6 className="sample"> Sample Code 2 (JavaScript): </h6>
          <SyntaxHighlighter
            language="javascript"
            style={anOldHope}
            className="syntax"
            showLineNumbers="true"
            showInlineLineNumbers="true"
          >
            {syntax5}
          </SyntaxHighlighter>
          <div style={{ marginLeft: "5%" }}>
            <p> After the first run: i = 3 and array = [thing1, thing2, thing3, thing4] </p>
            <p> After the second run: i = 2 and array = [thing1, thing2, thing3] </p>
            <p>After the fourth run: i = 0 and array = [thing1] </p>
            <p>After the fifth run: i = -1 and array = [] </p>
            <p>Run 5 would be the final run as i is now no longer than greater than or equal to 0.</p>
          </div>
        </div>
      </div>

      <p> </p>

      <p>
        Now we need to place this for loop inside of the printAllPages() function, as that is what is being called when
        the Print All button is clicked.
      </p>

      <h6 className="sample"> Sample Code (JavaScript): </h6>
      <SyntaxHighlighter
        language="javascript"
        style={anOldHope}
        className="syntax"
        showLineNumbers="true"
        showInlineLineNumbers="true"
      >
        {syntax6}
      </SyntaxHighlighter>

      <p>
        That's it! Now you have a print all button that prints all of the pages in the printPagesArray using a for loop.
      </p>
    </div>
  );
}
