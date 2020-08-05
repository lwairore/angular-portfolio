import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[lwkpTransformNavbar]'
})
export class TransformNavbarDirective {
  private toggleHomepageNavbar: boolean;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    this.toggleHomepageNavbar = false;
    if (window.pageYOffset > 500){
      this.toggleHomepageNavbar = true;
    }
  }

  private handleNavbarForHomepageComponent(): string {
    if (this.toggleHomepageNavbar){
      return `cs-header navbar navbar-expand-lg navbar-floating navbar-sticky navbar-light navbar-stuck`;
    } else {
      return `cs-header navbar navbar-expand-lg navbar-dark navbar-floating navbar-sticky`;
    }
  }

  @HostBinding('class') get classes() {
    return this.handleNavbarForHomepageComponent();
  }

}
