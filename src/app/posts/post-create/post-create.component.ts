import { Component, OnInit } from "@angular/core";
import { Post } from "../post.model";
import { NgForm } from "@angular/forms";
import { from } from "rxjs";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"],
})
export class PostCreateComponent {
  constructor(public postsService: PostsService) {}
  enterTitle = "";
  enterContent = "";

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.postsService.addPosts(form.value.title, form.value.content);
    form.resetForm();
  }
}
