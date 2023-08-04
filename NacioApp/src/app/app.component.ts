import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
onActivate($event: any) {
throw new Error('Method not implemented.');
}
  title = 'NacioApp';
}
