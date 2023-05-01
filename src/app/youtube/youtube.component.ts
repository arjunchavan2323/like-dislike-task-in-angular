import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  
  @Input()isliked!:boolean;

  @Output()getemitcustumeven:EventEmitter<boolean>=new EventEmitter<boolean>()
  

  constructor() { }

  ngOnInit(): void {
  }
  oncallickbutton(){
    this.isliked=!this.isliked
    this.getemitcustumeven.emit(this.isliked)
  }

  // oncallickbutton1(){
  //   this.getemitcustumeven.emit()
  // }
}
