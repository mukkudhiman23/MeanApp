import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor() {}
  private posts: Post[] = [];
  private postUpdate = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPOstUpdatedListener() {
    return this.postUpdate.asObservable();
  }

  addPosts(title: String, content: String) {
    const post = { title: title, content: content };
    this.posts.push(post);
    this.postUpdate.next([...this.posts]);
  }
}
