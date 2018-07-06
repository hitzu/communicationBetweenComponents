import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-children2',
  templateUrl: './children2.component.html',
  styleUrls: ['./children2.component.css']
})
export class Children2Component implements OnInit, OnChanges {

  @Input() elements : any[] ;
  public pairs : any[] = [];

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes){
    //  console.log(changes.elements.currentValue[3])
    changes.elements.currentValue.forEach(element => {
      console.log(element)
      if(element.index % 2 == 0){
        this.pairs.push(element);
      }
    });
  }

}
