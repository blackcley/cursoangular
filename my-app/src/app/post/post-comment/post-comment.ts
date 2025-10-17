import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-post-comment',
  imports: [],
  templateUrl: './post-comment.html',
  styleUrl: './post-comment.css'
})
export class PostComment {
  post = input<string>('');

  postsWithComments = Array.from({ length: 100 }, (_, i) => {
    const postNumber = i + 1;
    return {
      title: `Post ${postNumber}`,
      comments: [
        `Comment 1 on Post ${postNumber}`,
        `Comment 2 on Post ${postNumber}`,
        `Comment 3 on Post ${postNumber}`,
      ]
    };
  });

  comments = computed(() => {
    const title = this.post();
    const post = this.postsWithComments.find(p => p.title === title);
    return post ? post.comments : [];
  });
}
