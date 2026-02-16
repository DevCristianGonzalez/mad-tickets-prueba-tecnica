import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { PostsService } from '../../../core/services/posts.service';
import { Post } from '../../../core/models/post.model';
import { CommonModule } from '@angular/common';
import { Card } from '../../../shared/card/card';

@Component({
  selector: 'app-posts-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Card
  ],
  templateUrl: './posts-page.html',
  styleUrl: './posts-page.css',
})
export class PostsPage {
  filterForm: FormGroup;
  posts$: Observable<Post[]>;
  filteredPosts$: Observable<Post[]>;

  constructor(
    private postsService: PostsService,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      title: [''],
      userId: ['']
    });

    this.posts$ = this.postsService.getPostsWithImages();

    this.filteredPosts$ = combineLatest([
      this.posts$,
      this.filterForm.valueChanges.pipe(startWith(this.filterForm.value))
    ]).pipe(
      map(([posts, filters]: [Post[], any]) =>
        posts.filter(post =>
          post.title.toLowerCase().includes(filters.title?.toLowerCase() || '') &&
          (filters.userId ? post.userId == +filters.userId : true)
        )
      )
    );
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
