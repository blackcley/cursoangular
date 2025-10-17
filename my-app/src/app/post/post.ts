import { Component } from '@angular/core';
import { PostComment } from './post-comment/post-comment';

@Component({
  selector: 'app-post',
  imports: [PostComment],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post {
  posts:string[] = Array.from({ length: 100 }, (_, i) => `Post ${i + 1}`);
  trigger = false;

  loadPosts() {
    this.trigger = true;
  }
}
