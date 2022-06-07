import { Component, Input } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  //mediaItem refers to the alias that you specify at app.component.html
  @Input() mediaItem;
  onDelete() {
    console.log('deleted');
  }
}
