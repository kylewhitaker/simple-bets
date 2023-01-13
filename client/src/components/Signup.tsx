import { View } from "../core";

interface Props {
  setView: React.Dispatch<React.SetStateAction<View>>;
}

export function Signup(props: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("signup form submitted");
        const data = Object.fromEntries(
          new FormData(e.target as HTMLFormElement)
        );
        console.log(data);
        props.setView(View.Login);
      }}
    >
      <div>
        <label htmlFor="fname">First Name:</label>
        <input id="fname" name="fname" type="text" />
      </div>
      <div>
        <label htmlFor="lname">Last Name:</label>
        <input id="lname" name="lname" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" />
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
}
