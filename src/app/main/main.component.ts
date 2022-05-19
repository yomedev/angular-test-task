import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  keywords: string = ''

  addItem(newKeywords: string) {
    this.keywords = newKeywords;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
