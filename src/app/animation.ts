import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> AboutPage', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }),
      ],
      {
        optional: true,
      }
    ),
    query(':enter', [style({ transform: 'rotateY(90deg)' })], {
      optional: true,
    }),
    query(':leave', style({ transform: 'rotateY(0deg)' }), {
      optional: true,
    }),
    group([
      query(
        ':leave',
        [
          animate(
            '800ms ease-in',
            style({ transform: 'rotateY(90deg)', opacity: 0 })
          ),
        ],
        {
          optional: true,
        }
      ),
      query(
        ':enter',
        [
          animate(
            '800ms ease-in',
            style({ transform: 'rotateY(0)', opacity: 1 })
          ),
        ],
        {
          optional: true,
        }
      ),
    ]),
  ]),
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }),
      ],
      {
        optional: true,
      }
    ),
    query(':enter', [style({ transform: 'rotateY(90deg)' })], {
      optional: true,
    }),
    query(':leave', style({ transform: 'rotateY(0deg)' }), {
      optional: true,
    }),
    group([
      query(
        ':leave',
        [
          animate(
            '800ms ease-in',
            style({ transform: 'rotateY(90deg)', opacity: 0 })
          ),
        ],
        {
          optional: true,
        }
      ),
      query(
        ':enter',
        [
          animate(
            '800ms ease-in',
            style({ transform: 'rotateY(0)', opacity: 1 })
          ),
        ],
        {
          optional: true,
        }
      ),
    ]),
  ]),
  // transition('* <=> experiencePage', [
  //   style({ position: 'relative' }),
  //   query(
  //     ':enter, :leave',
  //     [
  //       style({
  //         position: 'absolute',
  //         top: 0,
  //         left: 0,
  //         width: '100%',
  //         height: '100%',
  //       }),
  //     ],
  //     {
  //       optional: true,
  //     }
  //   ),
  //   query(':enter', [style({ left: '-100%' })], {
  //     optional: true,
  //   }),
  //   query(':leave', animateChild(), {
  //     optional: true,
  //   }),
  //   group([
  //     query(':leave', [animate('800ms ease-in', style({ left: '100%' }))], {
  //       optional: true,
  //     }),
  //     query(':enter', [animate('800ms ease-in', style({ left: '0%' }))], {
  //       optional: true,
  //     }),
  //   ]),
  // ]),
]);
