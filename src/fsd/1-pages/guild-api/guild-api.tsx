import React, { useContext } from 'react';

// eslint-disable-next-line import-x/no-internal-modules -- FYI: Ported from `v2` module; doesn't comply with `fsd` structure
import { useConvexUserDataQuery } from '@/convex/hooks';
// eslint-disable-next-line import-x/no-internal-modules -- FYI: Ported from `v2` module; doesn't comply with `fsd` structure
import { StoreContext } from '@/reducers/store.provider';

// eslint-disable-next-line import-x/no-internal-modules -- FYI: Ported from `v2` module; doesn't comply with `fsd` structure
import { TacticusGuildVisualization } from '@/fsd/3-features/tacticus-integration/guild-overview';
// eslint-disable-next-line import-x/no-internal-modules -- FYI: Ported from `v2` module; doesn't comply with `fsd` structure
import { TacticusGuildRaidVisualization } from '@/fsd/3-features/tacticus-integration/guild-raid-v2';
// eslint-disable-next-line import-x/no-internal-modules -- FYI: Ported from `v2` module; doesn't comply with `fsd` structure
import { mapUserIdToName } from '@/fsd/3-features/tacticus-integration/user-id-mapper';

export const GuildApi: React.FC = () => {
    const { guild } = useContext(StoreContext);
    const guildMembers = [...guild.members];

    const userDataQuery = useConvexUserDataQuery();
    if (userDataQuery.isError) return 'Error when loading data';
    if (userDataQuery.isPending) return 'Loading...';
    const { data } = userDataQuery;

    if (!guildMembers.some(x => x.userId == data.tacticusUserId)) {
        guildMembers.push({
            userId: data.tacticusUserId,
            username: data.username ?? '',
            shareToken: '',
            index: -1,
        });
    }

    const userIdMapper = mapUserIdToName(guildMembers);

    return (
        <div>
            <TacticusGuildVisualization userIdMapper={userIdMapper} />
            <TacticusGuildRaidVisualization userIdMapper={userIdMapper} />
        </div>
    );
};
