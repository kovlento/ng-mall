import { Component } from '@angular/core';
import { TopMenu } from './components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedIndex=-1;
  title = 'pinduoduo';
  topMenus : TopMenu[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '手机',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '食品',
      link: ''
    },
    {
      title: '美妆',
      link: ''
    },
    {
      title: '电器',
      link: ''
    },
    {
      title: '鞋包',
      link: ''
    },
    {
      title: '女装',
      link: ''
    },
    {
      title: '电器',
      link: ''
    },
    {
      title: '水果',
      link: ''
    },
    {
      title: '运动',
      link: ''
    },
    {
      title: '电脑',
      link: ''
    },
    {
      title: '家访',
      link: ''
    },
    {
      title: '内衣',
      link: ''
    }
  ];
  handleTabSelected(topMenu: TopMenu){
    console.log(topMenu)
  }
}
