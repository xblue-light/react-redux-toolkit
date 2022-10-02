import { UserState } from "../slices/userSlice";

// A mock function to mimic making an async request for data
export interface IUserData {
  data: {
    amount: number;
    user: UserState;
  };
}
export function fetchCountAndUserDetails(amount: number): Promise<IUserData> {
  return new Promise<IUserData>((resolve, reject) => {
    try {
      setTimeout(
        () =>
          resolve({
            data: {
              amount,
              user: {
                name: "John Alsaker",
                age: 25,
                email: "purplehaze@pm.me",
                id: "1000-2000-3000-4000",
              },
            },
          }),
        5000
      );
    } catch (error) {
      reject(error);
    }
  });
}
