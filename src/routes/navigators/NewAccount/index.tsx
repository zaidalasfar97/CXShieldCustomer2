import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import NewAccountPage from '../../../screens/NewAccount';
import AccountTypeScreen from '../../../screens/NewAccount/AccountType';
import BusinessInfo from '../../../screens/NewAccount/BusinessInfo';
import BusinessDetails from '../../../screens/NewAccount/BusinessDetails';
import BusinessRepresentative from '../../../screens/NewAccount/BusinessRepresentative';
import AccountConfirmation from '../../../screens/NewAccount/AccountConfirmation';
import AccountCreated from '../../../screens/NewAccount/AccountCreated';
import NewBranch from '../../../screens/NewAccount/NewBranch';
import AddNewBranch from '../../../screens/NewAccount/AddNewBranch';
import CitizenshipDetails from '../../../screens/NewAccount/CitizenshipDetails';
import Preferences from '../../../screens/NewAccount/Preferences';
import PaymentSetup from '../../../screens/NewAccount/PaymentSetup';
import SelectPaymentSetup from '../../../screens/NewAccount/SelectPaymentSetup';
import AccountFinish from '../../../screens/NewAccount/AccountFinish';


const nativeStack = createNativeStackNavigator();
const NewAccount = () => {
  return (
    <nativeStack.Navigator
      screenOptions={{
        headerShown: false,
        header: () => null,
      }}>
      <nativeStack.Screen name="NewAccountPage" component={NewAccountPage} />
      <nativeStack.Screen
        name="AccountTypeScreen"
        component={AccountTypeScreen}
      />
      <nativeStack.Screen name="BusinessInfo" component={BusinessInfo} />
      <nativeStack.Screen name="BusinessDetails" component={BusinessDetails} />
      <nativeStack.Screen
        name="BusinessRepresentative"
        component={BusinessRepresentative}
      />
      <nativeStack.Screen
        name="AccountConfirmation"
        component={AccountConfirmation}
      />
      <nativeStack.Screen name="AccountCreated" component={AccountCreated} />
      <nativeStack.Screen name="NewBranch" component={NewBranch} />
      <nativeStack.Screen name="AddNewBranch" component={AddNewBranch} />
      <nativeStack.Screen name="CitizenshipDetails" component={CitizenshipDetails} />

      <nativeStack.Screen name="Preferences" component={Preferences} />

      <nativeStack.Screen name="PaymentSetup" component={PaymentSetup} />

      <nativeStack.Screen name="SelectPaymentSetup" component={SelectPaymentSetup} />

      <nativeStack.Screen name="AccountFinish" component={AccountFinish} />


    </nativeStack.Navigator>
  );
};

export default NewAccount;
