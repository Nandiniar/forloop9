import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forloop9';
  users=['X','Y','Z','A','B'];
  students=[
    {
      name:'X',
      age:19,
      email:'X@gmail.com'
    },
    {
      name:'Y',
      age:21,
      email:'Y@gmail.com',

    },
    {
      name:'Z',
      age:22,
      email:'Z@gmail.com'
    },
    {
      name:'A',
      age:28,
      email:'A@gmail.com'
    }
  ];
  getName(val:string){
    console.log(val);
  }
}
