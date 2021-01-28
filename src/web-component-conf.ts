import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'oak-input': any;
      'oak-button': any;
      'oak-form': any;
      'oak-select': any;
      'oak-modal': any;
      'oak-container': any;
      'oak-form-actions-container': any;
      'oak-popover': any;
      'oak-select-modern': any;
    }
  }
}
