import { Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
//hostBinding relates to detecting when a mouse hovers over an object.
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favorite-hovering') hovering = false;
  @HostListener('mouseenter') onMouseEnter() {
      this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
}
  @Input() set mwFavorite(value) {
      this.isFavorite = value;
  }
}
