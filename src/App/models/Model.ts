export interface Model {
  name: string;
  update(name: string): Model;
}