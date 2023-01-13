import { Component, OnInit,Input } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { I_Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {



  constructor(private taskService:TaskService) {  }

  tasks:I_Task[]=[];

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(data=>{
      this.tasks=data;
    })
  }

  deleteTask(task:I_Task){
    this.taskService.deleteTask(task).subscribe(data=>{
      console.log(data);
      this.tasks=this.tasks.filter(t=>t.id !== task.id)
    })
  }

  toggleReminder(task:I_Task){

    task.reminder= !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();

  }

  addTask(task:I_Task){

    this.taskService.addTask(task).subscribe((task)=>{
      this.tasks.push(task);
    })

  }

}
