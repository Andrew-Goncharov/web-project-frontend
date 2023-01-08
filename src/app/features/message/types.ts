interface IBase {
  message: string,
}

export interface INotification extends IBase {
  variant: "success" | "info" | "error" | "warning",
  message: string,
}

export interface IError extends IBase {
  message: string,
}

export interface IMessage {
  id: string | number,
  payload: INotification | IError,
}
