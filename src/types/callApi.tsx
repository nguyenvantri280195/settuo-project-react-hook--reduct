export interface ICallApiRequest {
  params: {
    email: string;
    password: string;
  };
  method: string;
  url: string;
}
