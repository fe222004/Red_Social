import { Component, OnInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.scss'
})
export class StoriesComponent implements OnInit {
  showLargeImage: boolean = false;
  showSecondCarousel: boolean = false;
  selectedImage: string = '';
  selectedUsername: string = '';
  selectedUserImage: string ='';

  //IMAGEN GRANDE STORIE
  secondCarouselImages: string[] = [
    'https://i.pinimg.com/564x/c0/a8/13/c0a813bedbd6cbf466614e535246b3f1.jpg', // Story 1
    'https://i.pinimg.com/564x/79/1b/0c/791b0cc64b8c59a2b9c4c6b367262c1c.jpg', // Story 2
    'https://i.pinimg.com/564x/5e/35/e0/5e35e0514519ce0cac696c448716e463.jpg', // Story 3
    'https://i.pinimg.com/564x/73/21/b0/7321b05a0676f6b736ffc6cc0fe6cc95.jpg', // Story 4
    'https://i.pinimg.com/564x/54/ea/fb/54eafbd5afd6e71b69eb6341c5e99830.jpg', // Story 5
    'https://i.pinimg.com/564x/1e/b3/cb/1eb3cb84b0a11a2d4e7b55d0b3377b0d.jpg', // Story 6
    'https://i.pinimg.com/564x/9c/c2/1e/9cc21e66529f64cafdb3d573199399cd.jpg', // Story 7
    'https://i.pinimg.com/564x/9c/c2/1e/9cc21e66529f64cafdb3d573199399cd.jpg', // Story 8
  ];

  //NOMBRE DE USUARIO STORIE
  secondCarouselUsernames: string[] = [
    'Carlos_200', // Story 1
    'April_300', // Story 2
    'Mannn_300', // Story 3
    'Joss_300', // Story 4
    'Ajsj_300', // Story 5
    'Aproo_300', // Story 6
    'Ayyyp_300', // Story 7
    'April_300', // Story 8
  ];

  //IMAGEN PEQUEÑA USUARIO
  secondCarouselUserImages: string[] = [
    'https://i.pinimg.com/736x/8e/13/42/8e1342b88abdccd23172bd02031fc90e.jpg', // Story 1
    'https://i.pinimg.com/564x/9c/c2/1e/9cc21e66529f64cafdb3d573199399cd.jpg', // Story 2
    'https://i.pinimg.com/564x/5e/35/e0/5e35e0514519ce0cac696c448716e463.jpg', // Story 3
    'https://i.pinimg.com/564x/73/21/b0/7321b05a0676f6b736ffc6cc0fe6cc95.jpg', // Story 4
    'https://i.pinimg.com/564x/54/ea/fb/54eafbd5afd6e71b69eb6341c5e99830.jpg', // Story 5
    'https://i.pinimg.com/564x/1e/b3/cb/1eb3cb84b0a11a2d4e7b55d0b3377b0d.jpg', // Story 6
    'https://i.pinimg.com/564x/9c/c2/1e/9cc21e66529f64cafdb3d573199399cd.jpg', // Story 7
    'https://i.pinimg.com/564x/9c/c2/1e/9cc21e66529f64cafdb3d573199399cd.jpg', // Story 8
  ];

  constructor() { }

  ngOnInit(): void {
    var myCarousel = document.querySelector('#carouselExampleRide');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000,
      ride: 'carousel'
    });
  }

  toggleShowLargeImage(): void {
    this.showLargeImage = !this.showLargeImage;
  }

  setLargeImageStory2(): void {
    this.selectedImage = this.secondCarouselImages[0];
    this.selectedUsername = this.secondCarouselUsernames[0];
    this.selectedUserImage = this.secondCarouselUserImages[0];
    this.showLargeImage = true;
  }

  setLargeImageStory3(): void {
    this.selectedImage = this.secondCarouselImages[1];
    this.selectedUsername = this.secondCarouselUsernames[1];
    this.selectedUserImage = this.secondCarouselUserImages[1];
    this.showLargeImage = true;
  }

  setLargeImageStory4(): void {
    this.selectedImage = this.secondCarouselImages[2];
    this.selectedUsername = this.secondCarouselUsernames[2];
    this.selectedUserImage = this.secondCarouselUserImages[2];
    this.showLargeImage = true;
  }

  setLargeImageStory5(): void {
    this.selectedImage = this.secondCarouselImages[3];
    this.selectedUsername = this.secondCarouselUsernames[3];
    this.selectedUserImage = this.secondCarouselUserImages[3];
    this.showLargeImage = true;
  }

  setLargeImageStory6(): void {
    this.selectedImage = this.secondCarouselImages[4];
    this.selectedUsername = this.secondCarouselUsernames[4];
    this.selectedUserImage = this.secondCarouselUserImages[4];
    this.showLargeImage = true;
  }

  setLargeImageStory7(): void {
    this.selectedImage = this.secondCarouselImages[5];
    this.selectedUsername = this.secondCarouselUsernames[5];
    this.selectedUserImage = this.secondCarouselUserImages[5];
    this.showLargeImage = true;
  }

  setLargeImageStory8(): void {
    this.selectedImage = this.secondCarouselImages[6];
    this.selectedUsername = this.secondCarouselUsernames[6];
    this.selectedUserImage = this.secondCarouselUserImages[6];
    this.showLargeImage = true;
  }

  setLargeImageStory9(): void {
    this.selectedImage = this.secondCarouselImages[7];
    this.selectedUsername = this.secondCarouselUsernames[7];
    this.selectedUserImage = this.secondCarouselUserImages[7];
    this.showLargeImage = true;
  }

}
