import {Component, OnInit} from '@angular/core';
import {parseJsonSchemaToCommandDescription} from "@angular/cli/utilities/json-schema";
import {PlannerTask} from '../../shared/models/planner-task.model';

enum FilterType{
  Pending,
  Done,
  All
}

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit{
  plannerTasks: PlannerTask [] = [
    {
    description: 'Buy potatoes',
    done: false
    },
    {
      description: 'Feed the cat',
      done: false
    }
  ];

   taskInputValue = '';
   pendingTaskCount = 0;
   visibleTasks?: PlannerTask[];
   filterType = FilterType; //ar sho mainigo izmanto html pie butto
   selectedFilterType = FilterType.All;

   ngOnInit(): void {
     //this.visibleTasks = [...this.plannerTasks]; aizvieto jo var nedarit
     // ko parāda uz ielādes brīdi
     this.setVisibleTasks()
     this.setPendingTaskCount();
   }

  addTask(): void{
    //console.log(this.taskInputValue)
    const trimmedValue = this.taskInputValue.trim();

    if(trimmedValue) {
     const newTask = { description: trimmedValue, done: false };
     this.plannerTasks.push(newTask);
     //this.plannerTasks = [...this.plannerTasks,newTask];
     this.taskInputValue = '';
     this.setPendingTaskCount();
     }
  }

  deleteTask(index: number): void{
    this.plannerTasks = this.plannerTasks.filter((task, i )=> i !== index);
    this.setPendingTaskCount();
  }

  setPendingTaskCount(): void {
    this.pendingTaskCount = this.plannerTasks.filter(task => !task.done).length;//atgriez tas kas nav cone, panemt garumu cik ieksa
    this.setVisibleTasks();
  }

  clearAllTasks(): void{
    this.plannerTasks = [];
    this.setPendingTaskCount();
}

  setVisibleTasks(): void {
    if (this.selectedFilterType === FilterType.Pending) {
      this.visibleTasks = this.plannerTasks.filter(task => !task.done);
    } else if (this.selectedFilterType === FilterType.Done) {
      this.visibleTasks = this.plannerTasks.filter(task => task.done)
    } else {
      this.visibleTasks = [...this.plannerTasks];
    }
  }

  setSelectedFilterType(type: FilterType): void {
    this.selectedFilterType = type;
    this.setVisibleTasks()
  }
}
