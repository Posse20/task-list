import { Component, OnInit } from '@angular/core';
import { TaskInterface } from '../model/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../services/tasks';

@Component({
  selector: 'app-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class TaskComponent implements OnInit {

  task: TaskInterface[] = [];
  taskToShow: TaskInterface[] = [];
  newTask = '';
  filter: 'all' | 'completed' | 'pending' = 'all';
  id: number = 0;

  constructor(
    private taskService: TasksService
  ){
    this.filterTask();
  }

  ngOnInit(): void {
    this.retrieveAllTasks();
  }

  retrieveAllTasks(){
    this.taskService.getAllTasks().subscribe({
      next: data => {
        this.taskToShow = data;
        this.task = [...this.taskToShow];
      }
    });
  }

  addTask(){
    
    const name = this.newTask.trim();
    
    if(!name){
      return;
    }

    const taskToCreate: TaskInterface = {
      task_desc: name,
      completed: false
    }

    this.taskService.saveNewTask(taskToCreate).subscribe({
      next: data => {
        this.retrieveAllTasks();
        this.newTask = '';
      }
    })

  }

  deleteTask(task: any){
    this.taskService.deleteTask(task.id).subscribe({
      next: data => {
        this.retrieveAllTasks();
      }
    })
  }

  toggleCompleted(task: any){
    console.log('task', task);
    this.taskService.toggleComleted(task.id, task).subscribe({
      next: () => {
        this.retrieveAllTasks();
      }
    })
  }

  changeFilter(filter: 'all' | 'completed' | 'pending'){
    this.filter = filter;
    this.filterTask();
  }

  filterTask() {
    switch (this.filter) {
      case 'completed':
        this.taskToShow = this.task.filter(x => x.completed);
        break;
      case 'pending':
        this.taskToShow = this.task.filter(x => !x.completed);
        break;
      default:
        this.retrieveAllTasks();
        break;
    }
  }
}
