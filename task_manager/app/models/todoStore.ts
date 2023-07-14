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
  storageData=localStorage.getItem("taskData");
  todosList: ITodoModel[] =this.storageData? JSON.parse(this.storageData) : [];
  todo: ITodoModel = this.resetTodoData();

  resetTodoData() {
    return {
      //   id: 0,
      id: Math.max(0, Math.max(...this.todosList.map(({ id }) => id))) + 1,
      title: "",
      discription:"",
      status: "",
    };
  }

  constructor() {
    makeAutoObservable(this);
  }

  addTodo() {
    this.todosList.push(this.todo);
    this.todo = this.resetTodoData();
    localStorage.setItem("taskData",JSON.stringify(this.todosList))
  }
  updateTodo(){

  }
  deleteTodo(id: number) {
    this.todosList = this.todosList.filter((todo) => todo.id !== id);
    localStorage.setItem("taskData",JSON.stringify(this.todosList));
  };
}

const todosStore = new TodosStore();
export default todosStore;