import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  
  @Input()isliked!:boolean
  @Output()eventemittercustumevent:EventEmitter<boolean>=new EventEmitter<boolean>()
  
  constructor() { }

  ngOnInit(): void {
  }


  onclickbtn(){
    this.isliked=!this.isliked
    this.eventemittercustumevent.emit(this.isliked)
  }
  
}
