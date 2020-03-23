export interface IUser {
  username: string;
  name: string;
  role: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export enum ROLE {
  develop = "Master Admin",
  systemAdmin = "Admin",
  user = "Nurse"
}
