import type { Todo } from "./todo";

export class TodosFeature {
  private todos: Todo[] = [];

  async list() {
    return this.todos;
  }

  async add(todo: Todo) {
    this.todos.push(todo);
  }
}
