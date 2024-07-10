export default function C1L1() {
  return (
    <div className={`normalLesson ${open && "showing"}`} style={{ color: "grey" }}>
      <h3 style={{ color: "black", textAlign: "left" }}>Lesson 1: Buttons in HTML</h3>

      <p>
        In this lesson you will learn how to code a button that will allow you to collect all bits available. This will
        be done in HTML.
      </p>

      <h6 style={{ color: "darkblue", marginLeft: "5%" }}> Sample Code: </h6>
      <div className="syntax">
        <span> &lt;button&gt; Click Me &lt;/button&gt; </span>
      </div>

      <h6 style={{ color: "darkblue", marginLeft: "5%" }}> Sample Output: </h6>
      <button style={{ marginLeft: "10%" }}> Click Me </button>

      <p>
        In HTML, the &lt; and &gt; are called opening and closing tags and they hold what are called elements. button is
        one such element and it creates a button on the user's webpage. It is clickable, but clicking the button doesn't
        currently do anything because we didn't tell it what to do.
      </p>

      <h6 style={{ color: "darkblue", marginLeft: "5%" }}> Sample Code: </h6>
      <div className="syntax">
        <span> &lt;button onclick = “collectAll()”&gt; Collect All &lt;/button&gt; </span>
      </div>

      <h6 style={{ color: "darkblue", marginLeft: "5%" }}> Sample Output: </h6>
      <button style={{ marginLeft: "10%" }}> Collect All </button>

      <p>
        I have added a onclick attribute, which just tells the computer what to do when the button is clicked. Since we
        are trying to make a button that allows the user to collect all bits, I have made onclick equal to collectAll()
        which is a function. I have also changed the text on the button to Collect All, as that is what we want the
        button to do. Now we have added functionality, which is just what happens when you click the button, to our
        button. However, the computer still doesn't know what to do as we do not have a collectAll() function made. So,
        now we need to add collectAll() function to our code.
      </p>
    </div>
  );
}
