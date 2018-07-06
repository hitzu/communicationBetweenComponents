import { Component, OnInit, Input, DoCheck, IterableDiffers, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-children2',
  templateUrl: './children2.component.html',
  styleUrls: ['./children2.component.css']
})
export class Children2Component implements OnInit, DoCheck {

  @Input() elements : any[] = [] ;
  public pairs : any[] = [];
  differ : any;

  constructor(private _differs: IterableDiffers) {
    this.differ = _differs.find([]).create(null);
  }

  ngOnInit(){

  }

  ngDoCheck() {
    const change = this.differ.diff(this.elements);
    if(change){
      this.pairs = []
      change.collection.forEach(element => {
        if(element.index % 2 == 0){
          this.pairs.push(element)
        }
      });
      //console.log(change.collection);  
    }
  }

  
}
