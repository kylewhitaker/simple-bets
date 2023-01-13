import axios from "axios";
import { ApiResponse, Bet, User } from "./types";

export function getFormData(form: EventTarget | HTMLFormElement): {
  [key: string]: string;
} {
  return Object.fromEntries(new FormData(form as HTMLFormElement)) as {
    [key: string]: string;
  };
}

const request =
  <T>(method: "GET" | "POST" | "PUT", slug: string) =>
  async (body: any = undefined): Promise<T> => {
    return axios
      .request({
        url: `http://localhost:4200${slug}`,
        method,
        data: body,
      })
      .then((response) => response.data as Promise<ApiResponse<T>>)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        return null as T;
      });
  };

export const getUser = request<User>("GET", "/user");
export const createUser = request<User>("POST", "/user");
export const updateUser = request<User>("PUT", "/user");
export const getBets = request<Bet[]>("GET", "/bets");
export const createBet = request<Bet>("POST", "/bets");
