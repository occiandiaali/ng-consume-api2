import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'posts' },
    { path: 'posts', component: PostsComponent },
    { path: 'users', loadComponent: () => import('./users/users.component').then(m => m.UsersComponent) },
    { path: 'comments', loadComponent: () => import('./comments/comments.component').then(m => m.CommentsComponent) },
    { path: '**', redirectTo: 'posts' }
];
