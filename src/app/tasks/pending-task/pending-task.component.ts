import { Component, OnInit } from '@angular/core';
import { TasksServiceService } from 'src/app/tasks-service.service';

@Component({
  selector: 'app-pending-task',
  templateUrl: './pending-task.component.html',
  styleUrls: ['./pending-task.component.scss']
})
export class PendingTaskComponent implements OnInit {

  constructor(private tasksService: TasksServiceService) { }

  ngOnInit(): void {
    this.tasksService.gettask().subscribe(data=>{});
  }

}
