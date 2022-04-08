import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updated-title',
  templateUrl: './updated-title.component.html',
  styleUrls: ['./updated-title.component.scss']
})
export class UpdatedTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  updatedTitle = "I'm the new title"
}
