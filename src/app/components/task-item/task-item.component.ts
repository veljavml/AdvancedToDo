import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { I_Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: I_Task
  @Output() onDeleteTask:EventEmitter<I_Task>=new EventEmitter();
  faTimes= faTimes;
  @Output() onToggleReminder: EventEmitter<I_Task> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:I_Task){

    this.onDeleteTask.emit(task);
    
  }

  onToggle(task: I_Task){

    this.onToggleReminder.emit(task);
    console.log('Emituje task'+ task)

  }

}
