import { Component } from '@angular/core';
import akashpreet from '../akashpreet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ap = akashpreet;
  constructor() {}
}
