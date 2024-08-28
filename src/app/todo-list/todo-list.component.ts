import { Component } from '@angular/core';
import { Task } from '../task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  tasks: Task[] = [];
  newTask: Task = {
    id: 0,
    name: '',
    description: '',
    deadline: new Date(),
    priority: 'low'
  };

  addTask() {
    this.newTask.id = this.tasks.length + 1;
    this.tasks.push({...this.newTask});
    this.resetNewTask();
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  updateTask(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = {...task};
    }
  }

  resetNewTask() {
    this.newTask = {
      id: 0,
      name: '',
      description: '',
      deadline: new Date(),
      priority: 'low'
    };
  }
}
