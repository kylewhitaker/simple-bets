import { Auth } from "aws-amplify";
import { useState } from "react";
import { Bet, getFormData, View } from "../core";

interface Props {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
  setView: React.Dispatch<React.SetStateAction<View>>;
}

export function Home(props: Props) {
  const [bets, setBets] = useState<Bet[]>([]);

  async function logout() {
    await Auth.signOut();
    props.setUser(null);
    props.setView(View.Landing);
  }

  return (
    <>
      <p>Welcome back, {props.user}</p>
      <form
        style={{ marginBottom: "20px" }}
        onSubmit={(e) => {
          e.preventDefault();
          const data = getFormData(e.target);
          console.log(data);
          setBets((bets) => [
            { amount: Number(data.amount), win: Math.random() > 0.5 },
            ...bets,
          ]);
        }}
      >
        <div>
          <label htmlFor="amount">$</label>
          <input id="amount" name="amount" type="number" />
        </div>
        <button type="submit">Place bet</button>
      </form>
      <table style={{ marginBottom: "20px" }}>
        <tr>
          <th>Amount</th>
          <th>Result</th>
        </tr>
        {bets.slice(0, 5).map((bet) => (
          <tr>
            <td>${bet.amount}</td>
            <td>{bet.win ? "winner" : "loser"}</td>
          </tr>
        ))}
      </table>
      <div className="action-tray">
        <button onClick={() => logout()}>Log out</button>
      </div>
    </>
  );
}
