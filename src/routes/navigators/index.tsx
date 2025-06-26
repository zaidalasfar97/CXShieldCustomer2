/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import Text from "../../components/Text";
import { getData } from "../../config/storage";
import { fetchUserSetting } from "../../redux/middleware/ManageUsers";
import { useAppDispatch } from "../../redux/store";
import UserScreens from "./UserScreens";
import HomeTabs from "./MainTabs";
import WelcomeScreens from "./WelcomeScreens";

// ======
import NewAccount from "./NewAccount";
import TaskDetails from "../../screens/MainScreen/components/TaskDetails";
import CriticalIssues from "../../screens/MainScreen/components/CriticalIssues";
import Settings from "./Settings";
import AccountDetails from "../../screens/Settings/AccountDetails";
import QuestionsLib from "../../screens/Settings/QuestionsLib";
import UpdateAndTraining from "../../screens/Settings/UpdateAndTraining";
import FAQScreen from "../../screens/Settings/FAQs";
import ContactUs from "../../screens/Settings/ContactUs";
import HelpCenter from "../../screens/Settings/HelpCenter";
import AboutCompany from "../../screens/Settings/AboutCompany";
import ManageBrands from "../../screens/Settings/ManageBrands";
import NewBusiness from "../../screens/Settings/ManageBrands/NewBusiness";
import BusinessDetails from "../../screens/Settings/ManageBrands/BusinessDetails";
import Notifications from "../../screens/Settings/Notifications";
import NewTask from "../../screens/MainScreen/components/NewTask";
import TaskList from "../../screens/MainScreen/components/TaskList";

//Fin

import PaymentSetup from "../../screens/Financials/PaymentSetup";
import TopUpBalance from "../../screens/Financials/TopUpBalance";
import TopUpSuccessful from "../../screens/Financials/TopUpSuccessful";
import ManageSubscription from "../../screens/Financials/ManageSubscription";
import PlanPayment from "../../screens/Financials/PlanPayment";
import NewPlanPaymentSucc from "../../screens/Financials/NewPlanPaymentSucc";
import PaymentHistory from "../../screens/Financials/PaymentHistory";
import PaymentOverview from "../../screens/Financials/PaymentOverview";
import PreferredMethod from "../../screens/Financials/PreferredMethod";

import MainScreen from "../../screens/MainScreen";

//Survey

import BillLimit from "../../screens/CustomSurvey/BillLimit";
import DateTime from "../../screens/CustomSurvey/DateTime";
import SelectStore from "../../screens/CustomSurvey/SelectStore";
import SpecialRequests from "../../screens/CustomSurvey/SpecialRequests";
import SurveyQuestions from "../../screens/CustomSurvey/SurveyQuestions";
import DefaultQuestions from "../../screens/CustomSurvey/DefaultQuestions";
import QualityOfProduct from "../../screens/CustomSurvey/QualityOfProduct";
import QualityOfService from "../../screens/CustomSurvey/QualityOfService";
import CustomQuestions from "../../screens/CustomSurvey/CustomQuestions";
import AllQuestions from "../../screens/CustomSurvey/AllQuestions";
import TaskDetilsNew from "../../screens/Tasks/TaskDetails";

import ListOfQuestions from "../../screens/Tasks/ListOfQuestions";
import AnswerQuestions from "../../screens/Tasks/AnswerQuestions";

// Settings
import PersonalInfo from "../../screens/Settings/PersonalInfo";
import ContactDetails from "../../screens/Settings/ContactDetails";
import ProfessionalInfo from "../../screens/Settings/ProfessionalInfo";
import UpdatePreferences from "../../screens/Settings/UpdatePreferences";
import Rating from "../../screens/Settings/Rating";

import { useListConversationsQuery } from "../../redux/RTK/Chat";
const nativeStack = createNativeStackNavigator();
interface NavigationManagerProps {}
const NavigationManager = (props: NavigationManagerProps) => {
  const dispatch = useAppDispatch();
  const [homeScreen, setHomeScreen] = useState("");

  const GetGlobalVariables = async () => {
    setHomeScreen("WelcomeScreens");

    // var token = await getData('access_token');
    // if (token) {
    //   dispatch(fetchUserSetting(token));
    //   //console.log(homeScreen);
    //   setHomeScreen('HomeTabs');
    // } else {
    //   // setHomeScreen('WelcomeScreens');
    //   setHomeScreen('HomeTabs');
    // }
    // //setHomeScreen('Payment');

    console.log("GetGlobalVariables12312312");
  };
  React.useEffect(() => {
    setHomeScreen("WelcomeScreens");
  }, []);

  if (homeScreen === "") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{"Loading ..."}</Text>
      </View>
    );
  }
  return (
    <NavigationContainer
      fallback={<ActivityIndicator color="blue" size="large" />}
    >
      <nativeStack.Navigator
        initialRouteName={homeScreen}
        screenOptions={{
          headerShown: false,
          header: () => null,
        }}
      >
        <nativeStack.Screen name="WelcomeScreens" component={WelcomeScreens} />
        <nativeStack.Screen name="UserScreens" component={UserScreens} />
        <nativeStack.Screen name="HomeTabs" component={HomeTabs} />
        <nativeStack.Screen name="MainScreen" component={MainScreen} />
        {/* Here */}
        <nativeStack.Screen name="NewAccount" component={NewAccount} />
        <nativeStack.Screen name="TaskDetails" component={TaskDetails} />
        <nativeStack.Screen name="CriticalIssues" component={CriticalIssues} />
        <nativeStack.Screen name="Settings" component={Settings} />
        <nativeStack.Screen name="AccountDetails" component={AccountDetails} />
        <nativeStack.Screen name="QuestionsLib" component={QuestionsLib} />
        <nativeStack.Screen
          name="UpdateAndTraining"
          component={UpdateAndTraining}
        />
        <nativeStack.Screen name="FAQScreen" component={FAQScreen} />
        <nativeStack.Screen name="ContactUs" component={ContactUs} />
        <nativeStack.Screen name="HelpCenter" component={HelpCenter} />
        <nativeStack.Screen name="AboutCompany" component={AboutCompany} />
        <nativeStack.Screen name="ManageBrands" component={ManageBrands} />
        <nativeStack.Screen name="NewBusiness" component={NewBusiness} />
        <nativeStack.Screen
          name="BusinessDetails"
          component={BusinessDetails}
        />
        <nativeStack.Screen name="Notifications" component={Notifications} />
        <nativeStack.Screen name="NewTask" component={NewTask} />
        <nativeStack.Screen name="TaskList" component={TaskList} />

        <nativeStack.Screen name="TaskDetilsNew" component={TaskDetilsNew} />

        <nativeStack.Screen name="PaymentSetup" component={PaymentSetup} />
        <nativeStack.Screen
          name="PreferredMethod"
          component={PreferredMethod}
        />

        <nativeStack.Screen name="TopUpBalance" component={TopUpBalance} />
        <nativeStack.Screen
          name="TopUpSuccessful"
          component={TopUpSuccessful}
        />
        <nativeStack.Screen
          name="ManageSubscription"
          component={ManageSubscription}
        />
        <nativeStack.Screen name="PlanPayment" component={PlanPayment} />
        <nativeStack.Screen
          name="NewPlanPaymentSucc"
          component={NewPlanPaymentSucc}
        />
        <nativeStack.Screen name="PaymentHistory" component={PaymentHistory} />
        <nativeStack.Screen
          name="PaymentOverview"
          component={PaymentOverview}
        />
        <nativeStack.Screen name="BillLimit" component={BillLimit} />
        <nativeStack.Screen name="DateTime" component={DateTime} />
        <nativeStack.Screen name="SelectStore" component={SelectStore} />
        <nativeStack.Screen
          name="SpecialRequests"
          component={SpecialRequests}
        />
        <nativeStack.Screen
          name="SurveyQuestions"
          component={SurveyQuestions}
        />
        <nativeStack.Screen
          name="DefaultQuestions"
          component={DefaultQuestions}
        />
        <nativeStack.Screen
          name="QualityOfProduct"
          component={QualityOfProduct}
        />

        <nativeStack.Screen
          name="QualityOfService"
          component={QualityOfService}
        />
        <nativeStack.Screen
          name="CustomQuestions"
          component={CustomQuestions}
        />

        <nativeStack.Screen name="AllQuestions" component={AllQuestions} />

        {/* Settings */}
        <nativeStack.Screen name="PersonalInfo" component={PersonalInfo} />
        <nativeStack.Screen name="ContactDetails" component={ContactDetails} />
        <nativeStack.Screen
          name="ProfessionalInfo"
          component={ProfessionalInfo}
        />
        <nativeStack.Screen
          name="UpdatePreferences"
          component={UpdatePreferences}
        />
        <nativeStack.Screen name="Rating" component={Rating} />
        <nativeStack.Screen
          name="ListOfQuestions"
          component={ListOfQuestions}
        />
        <nativeStack.Screen
          name="AnswerQuestions"
          component={AnswerQuestions}
        />
      </nativeStack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationManager;
