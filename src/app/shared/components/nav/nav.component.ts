import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isOpened:boolean = false;
  ngOnInit(): void {
  }

  /** toggle menu */
  toggleMenu(){
    if(!this.isOpened){
      this.isOpened = true;
      $('.circle-menu li').each((i:number,li:HTMLElement)=>{
        $(li).addClass('open');
      })
    }else{
      this.isOpened = false;
      $('.circle-menu li').each((i:number,li:HTMLElement)=>{
        $(li).removeClass('open');
      })
    }
  }

}
