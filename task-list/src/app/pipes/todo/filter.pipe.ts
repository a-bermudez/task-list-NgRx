import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/models/to-do/todo.model';

@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  transform(value: Todo[], filter: string): Todo[] {
    switch (filter) {
      case 'All':
        return value;
      case 'Completed':
        return value.filter((todo: Todo) => {
          return todo.completed;
        });
      case 'Pending':
        return value.filter((todo: Todo) => {
          return !todo.completed;
        });
      default:
        return value;
    }
  }
}
