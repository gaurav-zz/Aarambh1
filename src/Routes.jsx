import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import PartnershipLaunchpad from './pages/partnership-launchpad';
import MissionControlHub from './pages/mission-control-hub';
import RocketArsenal from './pages/rocket-arsenal';
import TeamCommandCenter from './pages/team-command-center';
import EngineeringVault from './pages/engineering-vault';
import CommunicationHub from './pages/communication-hub';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<MissionControlHub />} />
        <Route path="/partnership-launchpad" element={<PartnershipLaunchpad />} />
        <Route path="/mission-control-hub" element={<MissionControlHub />} />
        <Route path="/rocket-arsenal" element={<RocketArsenal />} />
        <Route path="/team-command-center" element={<TeamCommandCenter />} />
        <Route path="/engineering-vault" element={<EngineeringVault />} />
        <Route path="/communication-hub" element={<CommunicationHub />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
