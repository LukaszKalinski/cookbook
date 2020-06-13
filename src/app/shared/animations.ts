import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

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
    ]),
  biggerImageOnHover:
    trigger('biggerImageOnHover', [
      state('true', style({
        filter: 'grayscale(0)',
        transform: 'scale(1.1)'
      })),
      state('false', style({
        filter: 'grayscale(100%)',
        transform: 'scale(1)'
      })),
      transition('true <=> false', [
        animate(200)
      ]),
    ]),
  appearWithOpacity:
    trigger('appearWithOpacity', [
      state('in', style({
        opacity: 1,
        color: 'black',
        transform: 'scale(1)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
        color: 'white',
        transform: 'scale(0.5)'
        }),
        animate(1000)
      ]),
    ]),
  iconOnHover:
    trigger('iconOnHover', [
      state('true', style({
        color: 'white',
        backgroundColor: 'black',
        offset: 0
      })),
      state('false', style({
        color: 'black',
        backgroundColor: 'transparent',
        offset: 0
      })),
      transition('true => false', [
        animate(400, keyframes([
          style({ color: 'black', backgroundColor: 'transparent'})
        ]))
      ]),
      transition('false => true', [
        animate(400, keyframes([
          style({ color: 'white', backgroundColor: 'black'})
        ]))
      ]),
    ]),
  headerscrolling:
    trigger('headerscrolling', [
      state('false', style({
        color: 'white',
        height: '100px',
        backgroundColor: 'black',
        'border-bottom': '1px solid black'
      })),
      state('true', style({
        color: 'black',
        height: '50px',
        backgroundColor: 'white',
        'border-bottom': '1px solid black'
      })),
      transition('true <=> false', [
        animate(250)
      ]),
    ]),
  setheighttozero:
    trigger('setheighttozero', [
      state('false', style({
        height: '100vh'
      })),
      state('true', style({
        height: 0
      })),
      transition('true <=> false', [
        animate(1000)
      ]),
    ]),
  footerheight:
    trigger('footerheight', [
      state('true', style({
        height: '200px',
      })),
      state('false', style({
        height: '50px'
      })),
      transition('* => true', [
        animate(500)
      ]),
    ]),
};
