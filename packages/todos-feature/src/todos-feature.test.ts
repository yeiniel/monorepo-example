import { beforeEach, describe, expect, test } from "@jest/globals";
import type { Todo } from "./todo";
import { TodosFeature } from "./todos-feature";

describe(`${TodosFeature.name}`, () => {
  let todosFeature: TodosFeature;

  beforeEach(() => {
    todosFeature = new TodosFeature();
  });

  describe(`${TodosFeature.prototype.list.name}`, () => {
    test(`should promise to return a list of Todos`, async () => {
      // given

      // when
      const response: Todo[] = await todosFeature.list();

      // then
      expect(Array.isArray(response)).toBe(true);
    });
  });

  describe(`${TodosFeature.prototype.add.name}`, () => {
    test(`should promise to add a todo`, async () => {
      // given
      const todo: Todo = { text: `some pending activity ${Math.random()}` };

      // when
      await todosFeature.add(todo);

      // then
      const todos = await todosFeature.list();
      expect(todos).toContain(todo);
    });
  });
});
