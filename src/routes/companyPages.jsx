import React from "react";
import { Route } from "react-router-dom";
import {
  HomePage,
  ProjectStructure,
  Team,
  WhatSetsUsApart,
  MissingPage,
} from "pages";

export default [
  <Route path="/" element={<HomePage />} />,
  <Route path="/project-structure" element={<ProjectStructure />} />,
  <Route path="/what-sets-us-apart" element={<WhatSetsUsApart />} />,
  <Route path="/team" element={<Team />} />,
  <Route path="*" element={<MissingPage />} />,
];
