import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  showMenuItems = false;

  private readonly scrollHandler = () => {
    if (window.scrollY > 50) {
      document.body.style.setProperty('--navbar-border-bottom', '1px solid var(--font-color)');
    } else {
      document.body.style.setProperty('--navbar-border-bottom', 'none');
    }
  };

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollHandler, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler, true);
  }

  toggleMenuItems(): void {
    this.showMenuItems = !this.showMenuItems;
  }
}
