import messages from './messages';
import userSettingsSlice from './UserSettings';
import addInformationSlice from './CreateAd';

export default {
  UserSettings: userSettingsSlice,
  appMessage: messages,
  adInformation: addInformationSlice,
};
