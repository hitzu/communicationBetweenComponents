import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-children1',
  templateUrl: './children1.component.html',
  styleUrls: ['./children1.component.css']
})
export class Children1Component implements OnInit {

  public elements = [
    {name : "rob", index : 1},
    {name : "gui", index : 2},
    {name : "hit", index : 3},
    {name : "tor", index : 4}
  ]

  @Output() arrayOutput = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit() {
  }

  addElement(){
    this.elements.push({name : "reb", index:this.elements[this.elements.length-1].index+1});
    this.arrayOutput.emit(this.elements);
  }

}
