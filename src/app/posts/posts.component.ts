import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable, catchError, of, tap } from 'rxjs';
import { Post } from '../models/post.interface';
import { CommonModule } from '@angular/common';
import { ErrorWidgetComponent } from '../error-widget/error-widget.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [ErrorWidgetComponent, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts$!: Observable<Post[]>;
  error: Error | null = null;

  constructor(readonly pService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.pService.getAllPosts().pipe(
      tap({
        error: (err) => this.error = err
      }),
      catchError(() => of([]))
    )
  }
}
