import { Component } from '@angular/core';
import { PostI } from '../../models/post.interface';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  posts: PostI[] = [];
  showLargeImage: boolean = false;
  selectedImage: string | undefined = '';
  selectedUsername: string = '';
  selectedUserImage: string = '';
  user: User = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    image: '',
    description: '',
    countryId: 0,
  };
  

  constructor(private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute,
    private userService: UserService) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const userId = params.get('id');
      if (userId) {
        this.userService.getUser(userId).subscribe((response: User) => {
          console.log('this is the get user', response);
          this.user = response;
        });
      }
    });
  }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postService.findPosts().subscribe(
      (posts: PostI[]) => {
        this.posts = posts;
        console.log(posts);
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  toggleShowLargeImage(): void {
    this.showLargeImage = !this.showLargeImage;
  }

  setLargeImage(post: PostI): void {
    this.selectedImage = post.image;
   // this.selectedUsername = post.text;
    //this.selectedUserImage = post.tag;
    this.showLargeImage = true;
  }
}
