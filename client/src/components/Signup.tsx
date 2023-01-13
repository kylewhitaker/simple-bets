import { Auth } from "aws-amplify";
import { View } from "../core";

interface Props {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setView: React.Dispatch<React.SetStateAction<View>>;
}

export function Signup(props: Props) {
  return (
    <form
      onSubmit={async (e) => {
        try {
          e.preventDefault();
          const data = Object.fromEntries(
            new FormData(e.target as HTMLFormElement)
          );
          const { user } = await Auth.signUp({
            username: data.email as string,
            password: data.password as string,
            attributes: {
              email: data.email,
            },
          });
          console.log(user);
          props.setView(View.Login); // todo: fix to Verify
        } catch (error) {
          alert(error);
        }
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
