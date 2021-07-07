import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navbar: Object[] = [
    // {
    //   url: '/skill',
    //   name: 'Skills',
    //   icon: '',
    // },
    // {
    //   url: '/project',
    //   name: 'Projects',
    //   icon: '',
    // },
    // {
    //   url: '/achivement',
    //   name: 'Achivement',
    //   icon: '',
    // },
    // {
    //   url: '/work',
    //   name: 'Work',
    //   icon: '',
    // },
    // {
    //   url: '/contact',
    //   name: 'Contact',
    //   icon: '',
    // },
  ];
  constructor() {}

  navSlide() {
    let burger = document.querySelector('.burger');
    burger.classList.toggle('burger-toggle');

    let nav = document.querySelector('.nav-links');
    nav.classList.toggle('nav-active');

    const navLinks = document.querySelectorAll<HTMLElement>('.nav-links li');
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  }
  toggleTheme(event: any, className: string) {
    document.getElementById('body').classList.toggle(className);
  }
}
