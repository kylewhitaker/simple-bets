import { getFormData, View } from "../core";

interface Props {
  email: string;
  setView: React.Dispatch<React.SetStateAction<View>>;
}

export function Verify(props: Props) {
  return (
    <form
      onSubmit={async (e) => {
        try {
          e.preventDefault();
          const data = getFormData(e.target);
          console.log(data);

          // TODO: confirm sign up with AWS Cognito, go to Login
          //
        } catch (error) {
          alert(error);
        }
      }}
    >
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={props.email ?? undefined}
        />
      </div>
      <div>
        <label htmlFor="code">Verification Code:</label>
        <input id="code" name="code" type="code" />
      </div>
      <button type="submit">Confirm Email</button>
    </form>
  );
}
