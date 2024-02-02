import { Hub } from '../utils/types';

export const useFetchHubs = async (): Promise<Hub[]> => {
  const hubApi = process.env.REACT_APP_HUB_API;
  if (!hubApi) throw new Error('No Api Url found.');

  const response = await fetch(hubApi);

  if (!response.ok) {
    throw new Error('Network response was not ok. Error occured while fetching collection hubs.');
  }

  return response.json();
};
