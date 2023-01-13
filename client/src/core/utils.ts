export function getFormData(form: EventTarget | HTMLFormElement): {
  [key: string]: string;
} {
  return Object.fromEntries(new FormData(form as HTMLFormElement)) as {
    [key: string]: string;
  };
}
