import { useEffect, useState } from 'react';

import { useQuery } from 'react-query';

import styles from './HubList.module.css';

import { HubListItem } from '../HubListItem/HubListItem';

import { useFetchHubs } from '../../hooks/useFetchHubs';

import { Hub } from '../../utils/types';
import { useFilters } from '../FilterProvider';
import { checkActiveFilter, filterByName, selectStageFilter } from '../../utils/filterHelpers';
import { Loader } from '../Loader/Loader';
import { NoResults } from '../NoResults/NoResults';

export const HubList = () => {
  const [hubCollection, setHubCollection] = useState<Hub[]>([]);
  const { filters } = useFilters();

  const { data, isLoading, isError } = useQuery<Hub[], Error>('collectionHubs', useFetchHubs, {
    staleTime: 20 * 60 * 1000, //caching for 20mins. Can be updated based on the requirements
  });

  useEffect(() => {
    if (data) {
      const { name: nameInput, active, stage } = filters;
      const filteredHubs = data.filter(
        ({ displayName: hubName, state: hubState, stage: hubStage }) =>
          filterByName(hubName, nameInput) &&
          checkActiveFilter(hubState, active) &&
          selectStageFilter(hubStage, stage),
      );
      setHubCollection(filteredHubs);
    }

    return () => {
      setHubCollection([]);
    };
  }, [data, filters]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !hubCollection) {
    return <NoResults text='Error fetching hub collections' />;
  }

  if (!hubCollection.length) {
    return <NoResults text='😔 Sorry, no results found' />;
  }

  return (
    <ul data-testid='hub-list' className={styles.list}>
      {hubCollection.map((hub) => (
        <HubListItem
          name={hub.displayName}
          key={hub.uuid}
          description={hub.cardDescription}
          imageSource={hub.cardImage.directLink}
          logoImageSource={hub.logo?.directLink}
          location={hub.location}
          totalRecoveredPlasticFormatted={hub.formattedTotalRecoveredQuantity}
          totalUnassignedPlastic={hub.unassignedQuantityTotal}
          totalRecoveredPlastic={hub.totalRecoveredQuantity}
          slug={hub.slug ?? ''}
          state={hub.state}
          parentHub={hub.parentHubName}
        />
      ))}
    </ul>
  );
};
