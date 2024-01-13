import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  #baseUrl = 'https://jsonplaceholder.typicode.com';
  http: HttpClient = inject(HttpClient);

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.#baseUrl}/posts`).pipe(
      retry(3),
      catchError(() => {
        console.info('Error occurred..')
        return throwError(() => new Error("Couldn't get all posts.."))
      })
    )
  }
}
