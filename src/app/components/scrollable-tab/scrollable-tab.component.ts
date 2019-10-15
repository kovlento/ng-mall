import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges, AfterContentInit } from '@angular/core';

export interface TopMenu{
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit,OnChanges, AfterContentInit {

  selectedIndex=-1;
  title = 'pinduoduo';
  @Input() backgroundColor = '#fff';
  @Input() menus : TopMenu[] = [];
  @Output() tabSelected = new EventEmitter
  
  constructor() {
    console.log('组件构造调用')
  }
  
  /* 
    在组件"@Input"属性发生变化的时候调用
    changes索引对象，key 是属性的名字
  */
  ngOnChanges(changes: SimpleChanges): void {
    console.log("组件输入属性改变")
    console.log(changes)
  }

  ngOnInit() {
    console.log('组件初始化')
  }

  /* 
    组件内容初始化
  */
  ngAfterContentInit(): void {
    console.log("组件内容初始化")    
  }

  handleSelection(index: number){
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex])
  }

}
