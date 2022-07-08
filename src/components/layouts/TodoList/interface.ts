export interface ITodoItem {
  id: string;
  text: string;
  category?: "Желтая категория" | "Синяя категория" | "Красная категория" | null;
  done: boolean;
}
