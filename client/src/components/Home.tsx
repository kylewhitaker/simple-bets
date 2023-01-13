import { useState } from "react";
import { Bet, User, View } from "../core";

interface Props {
  user: User;
  setView: React.Dispatch<React.SetStateAction<View>>;
}

export function Home(props: Props) {
  const [bets, setBets] = useState<Bet[]>([]);

  function logout() {
    props.setView(View.Landing);
  }

  return (
    <>
      <p>Welcome back, {props.user.firstName}</p>
      <form
        style={{ marginBottom: "20px" }}
        onSubmit={(e) => {
          e.preventDefault();
          const data = Object.fromEntries(
            new FormData(e.target as HTMLFormElement)
          );
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