import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostResponse } from '../../interfaces/post-response.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss', '../../styles/styles-post-shared.scss']
})
export class AllComponent {
  title: string = 'All publications';
  postsResponse: PostResponse = {
    ok: false,
    posts: []
  };
  
private suscription: Subscription = new Subscription;

constructor(private postService: PostService) {}


  ngOnInit() {
    this.getAllPublications()
  }

   getAllPublications() {
      this.suscription = this.postService.getPost().subscribe(data => this.postsResponse = data);
   }


   ngOnDestroy() {
    this.suscription.unsubscribe();
   }

}
