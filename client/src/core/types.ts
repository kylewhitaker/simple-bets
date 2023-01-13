export enum View {
  Landing = "landing",
  Signup = "signup",
  Verify = "verify",
  Login = "login",
  Home = "home",
}

export interface User {
  firstName: string;
}

export interface Bet {
  amount: number;
  win: boolean;
}
