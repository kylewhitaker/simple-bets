import { getFormData, View } from "../core";

interface Props {
  setView: React.Dispatch<React.SetStateAction<View>>;
}

export function Login(props: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = getFormData(e.target);
        console.log(data);
        props.setView(View.Home);
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
