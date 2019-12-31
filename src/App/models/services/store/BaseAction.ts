interface BaseAction {
  type: string;
  payload?: Object;
  error?: boolean;
  meta?: Object;
}

export default BaseAction;
