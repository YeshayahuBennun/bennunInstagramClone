import { animate, state, style, transition, trigger,keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css'],
  animations: [
    trigger('animation-banner', [
      state('created', style({
        opacity: 1
      })),
      transition('void => created', [
        style({
          opacity: 0, transform: 'translate(-50px, 0)'
        }),
        animate('500ms 0s ease-in-out')
      ])
    ]),
    trigger('painel-animation', [
      state('created', style({
        opacity: 1
      })),
      transition('void => created', [
        style({
          opacity: 0, transform: 'translate(50px, 0)'
        }),
        //0 void ----x-----------------------x--x--x-------------------x created 1.5s//
        animate('1500ms 0s ease-in-out',keyframes([
          style({offset:0.15, opacity:1,transform:'translateX(0)'}),
          style({offset:0.86, opacity:1,transform:'translateX(0)'}),

          style({offset:0.88, opacity:1,transform:'translateY(-10px)'}),
          style({offset:0.90, opacity:1,transform:'translateY(10px)'}),
          style({offset:0.92, opacity:1,transform:'translateY(-10px)'}),
          style({offset:0.94, opacity:1,transform:'translateY(10px)'}),
          style({offset:0.96, opacity:1,transform:'translateY(-10px)'}),
          style({offset:0.98, opacity:1,transform:'translateY(10px)'})
        
        ]))
      ])
    ])
  ]
})

export class AccessComponent implements OnInit {

  public statusBanner: string = 'created'
  public statusLogin: string = 'created'
  public formRegister: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public showPainel(event: string) {
    this.formRegister = event === 'register' ? true : false
  }

  //call back animations functions 
  public inAnimationStart(){
    console.log('Animation Start')
  }

  public inAnimationEnd(){
    console.log('Animation End')
  }

}
