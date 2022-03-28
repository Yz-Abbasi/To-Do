import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input()
  text!: string;

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    console.log("Madar amirreza");
  }

}
