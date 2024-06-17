import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../../services/story.service';
import { StoryI } from '../../../models/story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  stories: StoryI[] = [];
  showLargeImage: boolean = false;
  selectedImage: string = '';
  selectedUsername: string = '';
  selectedUserImage: string = '';

  constructor(private storyService: StoryService) {}

  ngOnInit(): void {
    this.fetchStories();
  }

  fetchStories(): void {
    this.storyService.getStories().subscribe(
      (stories: StoryI[]) => {
        this.stories = stories;
      },
      (error) => {
        console.error('Error fetching stories:', error);
      }
    );
  }

  toggleShowLargeImage(): void {
    this.showLargeImage = !this.showLargeImage;
  }

  setLargeImage(story: StoryI): void {
    this.selectedImage = story.image;
    this.selectedUsername = story.username; // Obtén el nombre de usuario de la historia seleccionada
    this.selectedUserImage = story.userImage; // Obtén la imagen del usuario de la historia seleccionada
    this.showLargeImage = true;
  }
}
