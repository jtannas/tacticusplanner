import { IPersonalData, IPersonalData2 } from '../models/interfaces';

export interface IUserDataResponse {
    id: number;
    username: string;
    lastModifiedDate: string;
    shareToken?: string;
    role: 'admin' | 'moderator' | 'user';
    pendingTeamsCount: number;
    rejectedTeamsCount: number;
    modifiedDateTicks: string;
    tacticusApiKey: string;
    tacticusUserId: string;
    tacticusGuildApiKey: string;
    data: IPersonalData | IPersonalData2 | undefined;
}
