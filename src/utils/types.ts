export type Hub = {
  uuid: string;
  state: State;
  category: string;
  stage: Stage;
  name: string;
  displayName: string;
  slug: null | string;
  type: null | string;
  location: null | string;
  externalId: null | string;
  recoveredQuantity: number;
  recoveredQuantityUnit: QuantityUnit;
  totalRecoveredQuantity: number;
  collectionAndSortingParagraph: null | string;
  pageMode: string;
  hubUnassignedRecoveryList: HubUnassignedRecoveryList[];
  referenceQuantityUnit: QuantityUnit;
  parentHubName: null | string;
  logo: Image | null;
  cardDescription: string;
  cardImage: Image;
  thankYouNote: null | string;
  portfolioAssignedQuantityPercentage: number | null;
  unassignedQuantityPercentage: number;
  unassignedQuantityTotal: number;
  assignable: boolean;
  formattedRecoveredQuantity: string;
  formattedTotalRecoveredQuantity: string;
};

interface Image {
  uuid: string;
  directLink: string;
  thumbnailDirectLink: string;
  processedDirectLink: null;
  processedThumbnailDirectLink: null;
  fileName: string;
  size: number;
}

type HubUnassignedRecoveryList = {
  uuid: string;
  createdAt: Date;
  state: HubUnassignedRecoveryListState;
  unassignedQuantity: number;
  assignedQuantity: number;
  quantityUnit: QuantityUnit;
};

enum QuantityUnit {
  Kg = 'KG',
}

enum HubUnassignedRecoveryListState {
  PartiallyAssigned = 'PARTIALLY_ASSIGNED',
  Unassigned = 'UNASSIGNED',
}

export enum Stage {
  FullyOnboarded = 'FULLY_ONBOARDED',
  Pilot = 'PILOT',
}

export enum State {
  Active = 'ACTIVE',
  Demo = 'DEMO',
}

export type Filter = {
  name: string;
  active: boolean;
  stage?: Stage;
};
