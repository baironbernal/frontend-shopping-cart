import { Component } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { Validators, FormBuilder } from '@angular/forms';


import Swal  from 'sweetalert2';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss', '../../styles/styles-post-shared.scss']
})
export class CreateComponent {
  constructor(private postService: PostService, 
    private router: Router, private fb: FormBuilder) { }

  suscription:Subscription = new Subscription;
  public formSubmitted = false;

  h1: string = 'Create message';
  post: Post = {
    _id: '',
    title: '',
    message: '',
    date_at: '',
    
  };

  createPostForm = this.fb.group({
    title: ['', [Validators.required,]],
    message: ['', [Validators.required]], 
  }, {
    validators: () => {}
  });
  

  updateCardPost() {
    this.post.title = this.createPostForm.value.title;
    this.post.message = this.createPostForm.value.message;
  }

  createPost() {
    
    this.formSubmitted = true;
    if (this.createPostForm.invalid) {
      return;
    }
  
    this.suscription = this.postService.createPost(this.createPostForm.value).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('/post/my-publications')  
    }, (err) => {

      Swal.fire('Error', err.error.msg, 'error')
    })    
    
    Swal.fire('Post created', 'Great Job', 'success')
  }

  ngOnDestroy(){
    this.suscription.unsubscribe();
  }
  

  
}
