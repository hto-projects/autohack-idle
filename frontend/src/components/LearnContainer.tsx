import SyntaxHighlighter from "react-syntax-highlighter";

export default function LearnContainer({ children }) {
  const jsCode = `function something() {
  // this is a comment
  alert("Hi!");
  console.log("Hello, world!");
  let y = 4;  
}
`;

  return (
    <div className="LearnContainer">
      <h2> Learn feature coming soon!</h2>

      <SyntaxHighlighter language="javascript">{jsCode}</SyntaxHighlighter>
    </div>
  );
}
