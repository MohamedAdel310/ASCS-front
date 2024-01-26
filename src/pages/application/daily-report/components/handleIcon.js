import {
  faHand,
  faHelmetSafety,
  faSmoking,
  faTruck,
  faUser,
  faWarning,
  faVest,
  faMobileAndroid,
  faPersonCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';

export default function handleIcon(event) {
  let res = faWarning;
  event === 'smoke' && (res = faSmoking);
  event === 'unauthorized' && (res = faPersonCircleExclamation);
  event === 'ppe' && (res = faHelmetSafety);
  event === 'truck' && (res = faTruck);
  event === 'hand' && (res = faHand);
  event === 'fight' && (res = faUser);
  event === 'vest' && (res = faVest);
  event === 'helmet' && (res = faHelmetSafety);
  event === ('phone' || 'answer phone' || 'look at phone') &&
    (res = faMobileAndroid);

  return res;
}
