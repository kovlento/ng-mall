import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

export interface TopMenu{
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {

  selectedIndex=-1;
  title = 'pinduoduo';
  @Input() backgroundColor = '#fff';
  @Input() menus : TopMenu[] = [];
  @Output() tabSelected = new EventEmitter
  
  constructor() {
    console.log('组件构造调用')
  }

  ngOnInit() {
    console.log('组件初始化')
  }

  handleSelection(index: number){
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex])
  }

}
