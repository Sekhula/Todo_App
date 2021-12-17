import { Component, OnInit } from '@angular/core';
import { TasksServiceService } from 'src/app/tasks-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  servedt: any;
  constructor(private tasksService: TasksServiceService) { }
  
  ngOnInit(): void {
    this.tasksService.gettask().subscribe(data=>{
      this.servedt = data;
    });
  }
}
