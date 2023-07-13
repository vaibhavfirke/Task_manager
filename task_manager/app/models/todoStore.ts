import { configure, makeAutoObservable } from "mobx";
configure({
  enforceActions: "never",
});
export interface ITodoModel {
  id: number;
  title: string;
  discription:string,
  status: string;
}

class TodosStore {
  todosList: ITodoModel[] = [];
  todo: ITodoModel = this.resetTodoData();

  resetTodoData() {
    return {
      //   id: 0,
      id: Math.max(0, Math.max(...this.todosList.map(({ id }) => id))) + 1,
      title: "",
      discription:"",
      status: "Todo",
    };
  }

  constructor() {
    makeAutoObservable(this);
  }

  addTodo() {
    this.todosList.push(this.todo);
    this.todo = this.resetTodoData();
    console.log(this.todosList);
  }
}

const todosStore = new TodosStore();
export default todosStore;