const { map } = rxjs;

const clickObservable = rxjs.fromEvent(document, 'click');

// clickObservable
//   .pipe(
//     map((pointerEvent) => console.log(pointerEvent.parentElement)),
//   )
//   .subscribe((pointerEvent) => console.log(pointerEvent.parentElement));

// const clicks = clickObservable.do((_) => {
const clicks = clickObservable.pipe(
  map(`Looking at the last item you looked at  `),

  console.log(' clicks is working'),

  // Use local storage to solve this

  // localStorage.setItem('itemLastLooked', clicks);

  // credit to https://www.youtube.com/watch?v=2LCo926NFLI&ab_channel=Fireship
  // check 14:00
);

const clicks_serialized = JSON.stringify(clicks)

localStorage.setItem('itemLastLooked', clicks_serialized);

// Takes multiple different values (subs) and put them out at once
// eslint-disable-next-line no-undef
const subject = clicks.multicast(() => new Rx.Subject());

// This is for timstamps but can be the value for setItem
// eslint-disable-next-line no-restricted-globals, no-unused-vars
const user = subject.subscribe((c) => print(`Last looked at ${c.timeStamp}`));

subject.connect();

