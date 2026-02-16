import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest, map } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private photosUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  private getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  private getPhotos(): Observable<any[]> {
    return this.http.get<any[]>(this.photosUrl);
  }

  getPostsWithImages(): Observable<Post[]> {
    return combineLatest([
      this.getPosts(),
      this.getPhotos()
    ]).pipe(
      map(([posts, photos]) =>
        posts.slice(0, 50).map(post => ({
          ...post,
          image: photos[post.id]?.thumbnailUrl
        }))
      )
    );
  }
}
