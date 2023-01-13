import { Auth } from "aws-amplify";
import { getFormData, View } from "../core";

interface Props {
  setView: React.Dispatch<React.SetStateAction<View>>;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

export function Login(props: Props) {
  return (
    <form
      onSubmit={async (e) => {
        try {
          e.preventDefault();
          const data = getFormData(e.target);
          console.log(data);
          const user = await Auth.signIn(data.email, data.password);
          console.log(user);
          props.setUser(user.username);
          props.setView(View.Home);
        } catch (error) {
          alert(error);
        }
      }}
    >
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
}
