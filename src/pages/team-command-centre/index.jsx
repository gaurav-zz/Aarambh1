import React from 'react';
import { Helmet } from 'react-helmet';
import TeamHero from './components/TeamHero';
import OrganizationalChart from './components/OrganizationalChart';
import TeamMemberGrid from './components/TeamMemberGrid';
import SkillsMatrix from './components/SkillsMatrix';
import TeamEvolution from './components/TeamEvolution';
import AlumniNetwork from './components/AlumniNetwork';
import RecruitmentCTA from './components/RecruitmentCTA';

const TeamCommandCenter = () => {
  return (
    <>
      <Helmet>
        <title>Team Command Center - RocketryXyz Portfolio</title>
        <meta 
          name="description" 
          content="Meet the aerospace pioneers behind RocketryXyz. Explore our team structure, member profiles, skills matrix, and evolution timeline. Join tomorrow's aerospace leaders today." 
        />
        <meta name="keywords" content="aerospace team, student rocketry, engineering team, team profiles, aerospace careers, rocket team members" />
        <meta property="og:title" content="Team Command Center - RocketryXyz Portfolio" />
        <meta property="og:description" content="Meet the brilliant minds building the future of aerospace technology through collaborative excellence and technical innovation." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/team-command-center" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <TeamHero />

        {/* Organizational Chart */}
        <OrganizationalChart />

        {/* Team Member Grid */}
        <TeamMemberGrid />

        {/* Skills Matrix */}
        <SkillsMatrix />

        {/* Team Evolution Timeline */}
        <TeamEvolution />

        {/* Alumni Network */}
        <AlumniNetwork />

        {/* Recruitment CTA */}
        <RecruitmentCTA />
      </div>
    </>
  );
};

export default TeamCommandCenter;