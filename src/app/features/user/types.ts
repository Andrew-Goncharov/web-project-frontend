export type TJWT = {
  token: string,
  refresh: string,
  ttl: number | string,
}

export interface IUser {
  username: string,
  email: string,
  sessionCreds: TJWT | null,
  lastError: string | null,
}

// export interface IAsyncThunk<T> {
//   payload: T,
//   onSuccess?: () => void,
//   onError?: () => void,
// }
