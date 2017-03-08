import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stories: Array<any> = [
    {titre: "Harry Potter",
      note: 10},
    {titre: "Le seigneur des anneaux",
      note: 1},
    {titre: "Le kamasutra pour les nuls",
      note: 10},
    {titre: "Père castor",
      note: 4}
  ];

}
