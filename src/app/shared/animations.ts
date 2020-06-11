import { trigger, state, style, transition, animate } from '@angular/animations';

export const Animations = {
  titlesWhiteToBlack:
    trigger('titlesWhiteToBlack', [
      state('true', style({
        color: 'white',
        backgroundColor: 'black',
        'border-bottom': '1px solid black'
      })),
      state('false', style({
        color: 'black',
        backgroundColor: 'white',
        'border-bottom': '1px solid black'
      })),
      transition('true <=> false', [
        animate(250)
      ]),
    ]),
  enterImage:
    trigger('enterImage', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)',
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        }),
        animate(500)
      ]),
    ])
};

