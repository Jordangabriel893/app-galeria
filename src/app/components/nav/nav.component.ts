import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() sidenavShow = new EventEmitter();
  sidenav = false;
  constructor() { }

  ngOnInit() {
  }

  showSidenav() {
    this.sidenav = !this.sidenav;
    this.sidenavShow.emit(this.sidenav)
  }
}
