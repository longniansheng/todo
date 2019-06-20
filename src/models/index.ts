export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface Action {
  type: string;
  payload?: any;
}
