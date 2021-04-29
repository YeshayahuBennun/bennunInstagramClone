import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Image } from './image.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [     // trigger block
      state('hidden', style({      // final CSS following animation
        opacity: 0
      })),
      state('exposed', style({
        opacity: 1
      })),
      transition('hidden <=> exposed', animate('1s ease-in'))
    ])
  ]

})
export class BannerComponent implements OnInit {

  public status: string = 'hidden'
  public images: Image[] = [
    { status: 'exposed', url: "/assets/banner-acesso/img_1.png" },
    { status: 'hidden', url: "/assets/banner-acesso/img_2.png" },
    { status: 'hidden', url: "/assets/banner-acesso/img_3.png" },
    { status: 'hidden', url: "/assets/banner-acesso/img_4.png" },
    { status: 'hidden', url: "/assets/banner-acesso/img_5.png" }
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.rotation(), 3000)
  }
  public rotation(): void {

    let idx: number

    for (let i = 0; i < this.images.length; i++) {
      if (this.images[i].status === 'exposed') {
        this.images[i].status = 'hidden'
        idx = i === 4 ? 0 : i + 1

        break
      }
    }
    this.images[idx].status = 'exposed'

    setTimeout(() => this.rotation(), 3000)
  }

}
