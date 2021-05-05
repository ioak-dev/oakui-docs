/* eslint-disable import/prefer-default-export */
import { BehaviorSubject } from 'rxjs';

export const OakEditFocusedEvent = new BehaviorSubject({
  groupId: '',
  id: '',
});
interface OakEditFocusedEventType {
  groupId: string;
  id: string;
}
