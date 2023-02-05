export type Event =
  | {
      type: 'click';
      event: MouseEvent;
    }
  | {
      type: 'focus';
      event: FocusEvent;
    }
  | {
      type: 'keydown';
      event: KeyboardEvent;
    };

type NonKeyDownEvents = Exclude<Event, { type: 'keydown' }>;
