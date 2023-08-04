import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-link',
  templateUrl: './scroll-link.component.html',
  styleUrls: ['./scroll-link.component.scss']
})

export class ScrollLinkComponent implements OnInit {

  windowScrolled?:boolean;

  constructor (@Inject (DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    } else if (this.windowScrolled && (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop) < 10) {
      this.windowScrolled = false;
    }
  }
  
  scrollToTop(): void {
    console.log('Scroll to top function called.');
    (function smoothScroll(): void {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo( 0, currentScroll - (currentScroll / 8));
      }
    })();
  }

  ngOnInit(): void {
  }

}
