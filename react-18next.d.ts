import 'react-i18next';

import ar from './i18n/dictionaries/ar.json';

declare module 'react-i18next' {
  // and extend them!
  interface Resources {
    translation: typeof ar;
  }
}
