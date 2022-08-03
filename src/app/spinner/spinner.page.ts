import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.page.html',
  styleUrls: ['./spinner.page.scss'],
})
export class SpinnerPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['home/challenge']);
    }, 3000);
  }

}
