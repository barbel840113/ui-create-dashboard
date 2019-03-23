import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-form',
  templateUrl: './layout-form.component.html',
  styleUrls: ['./layout-form.component.scss']
})
export class LayoutFormComponent implements OnInit {

  constructor() { }

  tabs =[{
    label :'welcome',
    name : 'Welcome'
  },
  {
    label :'welcome1',
    name : 'Welcome1'
  }]
  ngOnInit() {
  }

}
