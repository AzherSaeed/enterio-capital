import React from 'react';
import { projectModelFloe } from 'assets';
import { StructureFlowContainer } from './style';

function StructureFlow() {
  return (
    <StructureFlowContainer>
      <img src={projectModelFloe} alt="projectModelFloe" />
    </StructureFlowContainer>
  );
}

export default StructureFlow;
