import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cricketapp';
  ngOnInit(){
    
  }
  slides = [
    {'image': "../../assets/images/banner1.jpg"}, 
    {'image': "../../assets/images/banner2.jpg"}, 
    {'image': "../../assets/images/banner3.jpg"}, 
    {'image': "../../assets/images/banner4.jpg"}, 

  ];

}
