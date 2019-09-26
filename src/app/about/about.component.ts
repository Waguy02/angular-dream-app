import { Component, OnInit } from '@angular/core';
import {Leader} from '../shared/leader';
import  {LEADERS} from '../shared/leader';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  leaders:Leader[]=LEADERS;

  ngOnInit() {
  }

}
