import { Routes } from '@angular/router';
import { PostsPage } from './features/posts/posts-page/posts-page';

export const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsPage }
];
