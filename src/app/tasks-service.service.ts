import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {

  t_status: any;
  my_Path = "http://localhost:3000/tasks";

  constructor(private http:HttpClient) { }

  taskStatus(index: number)
  {
    
  }

  gettask()
  {
    return this.http.get(this.my_Path);
  }
}
