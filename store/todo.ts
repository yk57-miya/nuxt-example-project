import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/api'

type Todo = {
  id?: Number
  title: String
  description: String
  done: Boolean
}

@Module({ name: 'todo', stateFactory: true, namespaced: true })
export default class Todos extends VuexModule {
  private todos: Todo[] = []

  // TODOのリスト取得
  public get getTodos() {
    return this.todos
  }

  // TODOの指定したid取得
  public get getTodo() {
    return (id: Number) => this.todos.find((todo) => todo.id === id)
  }

  // TODOのアイテムの数
  public get getTodoCount() {
    return this.todos.length
  }

  // TODO追加
  @Mutation
  private add(todo: Todo) {
    this.todos.push(todo)
  }

  // TODO削除
  @Mutation
  private remove(id: Number) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  // TODOリストセット
  @Mutation set(todos: Todo[]) {
    this.todos = todos
  }

  // TODOリストセット
  @Action({ rawError: true })
  public async fetchTodos() {
    const { data } = await $axios.get<Todo[]>('/api/todos')
    this.set(data)
  }

  // TODOリスト作成
  @Action({ rawError: true })
  public async createTodo(payload: Todo) {
    const { data } = await $axios.post<Todo>('/api/todo', payload)
    this.add(data)
  }

  // TODOリスト削除
  @Action({ rawError: true })
  async deleteTodo(id: Number) {
    await $axios.delete(`/api/todo/${id}`)
    this.remove(id)
  }
}
