export const Confessions : React.FC = () => {

// A subject line for the confession.

// A dropdown for the reason for the confession. This could be either a type of misdemeanour, or "I just want to talk"

// A text box for details

// "I just want to talk"


const options = [
  {
    name: "I Just Want To Talk",
    value: "talk"
  },
  {
    name: "Mild Public Rudeness",
    value: "rudeness",
  },
  {
    name: "Speaking in a Lift",
    value: "lift",
  },
  {
    name:"Not Eating Your Vegetables",
    value: "vegetables",
  },
  {
    name: "Supporting Manchester United",
    value: "united",
  },
];

  return(
    <>
      <p>It's very difficult to catch people commiting misdemeanours so we appreciate it when citizens confess to us directly.</p>

      <p>However, if you're just having a hard day and need to vent then you're welcome to contact us here to. Up to you!</p>

      <form action="" method="post">
        <label>Subject:</label>

        <input type="text" id="subject" name="subject" required/>

        <br></br>

        Reason for contact: 
        <select>
          {options.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>

        <br></br>

        <textarea id="text" name="text"></textarea>

        <br></br>

        <button>Confess</button>
      </form>
    </>
  )
}