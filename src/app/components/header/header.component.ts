import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import {Subscription} from 'rxjs'
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showAddTask: boolean;
  subscription:Subscription;

  constructor(private uiservice:UiService, private router:Router) { 
    this.subscription=this.uiservice.onToggle().subscribe((value)=>{
      this.showAddTask=value;
    })
  }

  ngOnInit(): void {
  }

  togleAddTask(){
    this.uiservice.toggleAddTask();
  }

  hasRoute(route:string){

    return this.router.url ===route;

  }

}
