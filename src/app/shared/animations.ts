import { trigger, state, style, transition, animate, keyframes, query, stagger, group } from '@angular/animations';

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
        backgroundColor: 'transparent',
        'border-bottom': '1px solid transparent'
      })),
      state('true', style({
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
  setwidthtozero:
    trigger('setwidthtozero', [
      transition('void => *', [
        style({
          width: 0
        }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({width: '0%'}))
      ]),
    ]),
  footerheight:
    trigger('footerheight', [
      state('true', style({
        height: '200px',
        background: 'rgb(220,220,220)'
      })),
      state('false', style({
        height: '50px'
      })),
      transition('* <=> *', [
        animate(300)
      ]),
    ]),
  triggerMenu:
    trigger('triggerMenu', [
      state('true', style({
        opacity: 1,
        height: '100%',
        width: '100%',
      })),
      state('false', style({
        opacity: 0,
        height: '0%',
        width: '0%',
      })),
      transition('void => *', [
        style({
          opacity: 0.5,
          height: '0%',
          width: '0%'
        }),
        animate(500)
      ]),
      transition('* => *', [
        animate(500)
      ]),
    ]),
  entermenu:
    trigger('entermenu', [
      transition('void => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger(400, [
          animate('0.5s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateX(-50%) scale(0.8)', offset: 0, color: 'gold' }),
            style({ opacity: 1, transform: 'translateX(-10px) scale(0.9)', offset: 0.3, color: 'gold' }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1, color: 'black' }),
          ]))]), { optional: true }),
      ]),
    ]),
  enterIconsRow:
    trigger('enterIconsRow', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger(300, [
          animate('.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-200px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(-40px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
          ]))]), { optional: true }),
      ]),
    ]),
  carousel:
    trigger('carousel', [
      transition(':increment', group([
        style({transform: 'translateX(298px)'}),
        animate(500, style({transform: 'translateX(0)'}))
      ])),
      transition(':decrement', group([
        query(':leave', style({ opacity: 0 }), { optional: true }),
        style({transform: 'translateX(-298px)'}),
        animate(500, style({transform: 'translateX(0px)'}))
      ])),
    ]),
};

