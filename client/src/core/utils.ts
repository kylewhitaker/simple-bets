import { ApiResponse, Bet, User } from "./types";

export function getFormData(form: EventTarget | HTMLFormElement): {
  [key: string]: string;
} {
  return Object.fromEntries(new FormData(form as HTMLFormElement)) as {
    [key: string]: string;
  };
}

const customFetch =
  <T>(slug: string) =>
  async (): Promise<T> => {
    return fetch(`http://localhost:4200${slug}`)
      .then((response) => response.json() as Promise<ApiResponse<T>>)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        return null as T;
      });
  };

export const fetchUser = customFetch<User>("/user");
export const fetchBets = customFetch<Bet[]>("/bets");
