import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  now: string = '';

constructor() {
    setInterval(() => {
      this.now = new Date().toString().split(' ')[4];
    }, 1);
  }

  @Input() post: Post = {
    _id: '',
    title: '',
    message: '',
    date_at: '',    
  };
  
}
