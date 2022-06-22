import React from "react";
import { Route } from "react-router-dom";
import {
  HomePage,
  ProjectStructure,
  WhatSetsUsApart,
  MissingPage,
  OurTeam,
  ContactUs,
  SingleTeamMember
} from "pages";

export default [
  <Route  path="/" element={<HomePage />} />,
  <Route path="/project-structure" element={<ProjectStructure />} />,
  <Route path="/what-sets-us-apart" element={<WhatSetsUsApart />} />,
  <Route path="/contactus" element={<ContactUs />} />,
  <Route path="/team" element={<OurTeam />} />,
  <Route path="/team/:id" element={<SingleTeamMember/>} />,
  <Route path="*" element={<MissingPage />} />,
];
