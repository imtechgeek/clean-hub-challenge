import { filterByName, checkActiveFilter, selectStageFilter } from './filterHelpers';
import { State, Stage } from './types';

describe('filterHelpers', () => {
  describe('filterByName', () => {
    it('returns true when hubName includes inputText', () => {
      const result = filterByName('HUb1234', 'hub');
      expect(result).toBe(true);
    });

    it('returns false when hubName does not include inputText', () => {
      const result = filterByName('Hub1234', 'Test');
      expect(result).toBe(false);
    });
  });

  describe('checkActiveFilter', () => {
    it('returns true for active hub when active is true', () => {
      const result = checkActiveFilter(State.Active, true);
      expect(result).toBe(true);
    });
  });

  describe('selectStageFilter', () => {
    it('returns true when hubStage matches stage', () => {
      const result = selectStageFilter(Stage.FullyOnboarded, Stage.FullyOnboarded);
      expect(result).toBe(true);
    });
    it('returns true for hubStage FullyOnboarded or Pilot and selected stage is undefined', () => {
      const resultFullyOnboarded = selectStageFilter(Stage.FullyOnboarded, undefined);
      const resultPilot = selectStageFilter(Stage.Pilot, undefined);
      expect(resultFullyOnboarded).toBe(true);
      expect(resultPilot).toBe(true);
    });
  });
});
