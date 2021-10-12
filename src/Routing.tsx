import React from "react";
import { Switch, Route } from "react-router-dom";
import InboxPage from "./pages/Inbox/Inbox";
import CampaignsPage from "./pages/Campaigns/Campaigns";
import ContactsPage from "./pages/Contacts/Contacts";
import InsightsPage from "./pages/Insights/Insights";
import TemplatesPage from "./pages/Templates/Templates";
import FeatureRequestsPage from "./pages/FeatureRequests/FeatureRequests";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ToolsPage from "./pages/Tools/Tools";
const Routing = () => {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path={["/", "/inbox"]} component={InboxPage} />
        <Route exact path="/campaigns" component={CampaignsPage} />
        <Route exact path="/Contacts" component={ContactsPage} />
        <Route exact path="/Tools" component={ToolsPage} />
        <Route exact path="/Featurerequests" component={FeatureRequestsPage} />
        <Route exact path="/Templates" component={TemplatesPage} />
        <Route exact path="/Insights" component={InsightsPage} />
      </Switch>
    </>
  );
};
export default Routing;
