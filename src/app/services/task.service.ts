import { Injectable } from '@angular/core';
import { I_Task } from '../Task';
import { Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'aplication/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = 'http://localhost:5000/tasks';

  constructor(private http:HttpClient) { }

  getTasks():Observable<I_Task[]>{

    return this.http.get<I_Task[]>(this.url)
  }

  deleteTask(task:I_Task):Observable<I_Task> {

    return this.http.delete<I_Task>(this.url+'/'+task.id);

  }

  updateTaskReminder(task: I_Task):Observable<I_Task>{
    console.log(task)
    return this.http.put<I_Task>(this.url+'/'+task.id,task);
  }

  addTask(task:I_Task){

    return this.http.post<I_Task>(this.url,task);

  }


}
