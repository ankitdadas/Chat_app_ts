import React from "react";
import { Switch, Route } from "react-router-dom";
 import InboxPage from "./../src/pages/Inbox/Inbox";
/*import CampaignsPage from "./../src/pages/Campaigns";

import ContactsPage from "./../src/pages/Contacts";
import FeatureRequestsPage from "./../src/pages/FeatureRequests";

import InsightsPage from "./../src/pages/Insights";
import TemplatesPage from "./../src/pages/Templates";

import ToolsPage from "./../src/pages/Tools"; */
import NavigationBar from "./components/NavigationBar/NavigationBar";

const Routing = () => {
    return (
        <>
            <NavigationBar />
            <Switch>
                <Route exact path={["/", "/inbox"]} component={InboxPage} />
                {/*  <Route exact path="/Campaigns" component={CampaignsPage} />
                    <Route exact path="/Templates" component={TemplatesPage} />
                    <Route exact path="/Contacts" component={ContactsPage} />
                    <Route exact path="/Insights" component={InsightsPage} />
                    <Route exact path="/Tools" component={ToolsPage} />
                    <Route exact path="/Featurerequests" component={FeatureRequestsPage} />*/}
            </Switch>
        </>
    );
};
export default Routing;
