import { Component } from '@angular/core';
import { AppService } from './app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private buttons: Array<String> = ['darby', 'intersections', 'coding-violations'];
  private data = [];

  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router) { }

}
