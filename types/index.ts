export interface UserType {
  name: { first: string; last: string };
  dob: { age: number };
  gender: string;
  email: string;
  phone: string;
  location: {
    street: { name: string; number: number };
    city: string;
    state: string;
    country: string;
  };
  id: { value: string };
  login: { uuid: string };
}
