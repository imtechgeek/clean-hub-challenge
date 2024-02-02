import { Stage, State } from './types';

export const filterByName = (hubName: string, inputText: string) => {
  return hubName.toLowerCase().includes(inputText);
};

export const checkActiveFilter = (hubState: State, active: boolean) => {
  if (!active) return hubState === State.Active || hubState === State.Demo; //turning off the active filter should display all results
  return hubState === State.Active;
};

export const selectStageFilter = (hubStage: Stage, stage: Stage | undefined) => {
  if (!stage) return hubStage === Stage.FullyOnboarded || hubStage === Stage.Pilot; //undefined stage should display results for both
  return hubStage === stage;
};
