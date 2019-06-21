import { Todo } from 'src/models';

export default function getVisibilityTodo(todos: Todo[] = [], filter: string) {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
}
