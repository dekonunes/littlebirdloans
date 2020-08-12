import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  index = -1;

  updateContent(newIndex: number) {
    this.index = newIndex;
  }
}
