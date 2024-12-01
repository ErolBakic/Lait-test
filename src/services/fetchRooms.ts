import axios from 'axios';
import type { Room } from '../types/Room';

// fetch the rooms
const client = axios.create({
    baseURL: 'https://42f2e2e1-2e02-4722-8fd9-22ddf222b030.mock.pstmn.io',
});

// export the rooms
export const fetchRooms = async(): Promise<Room[]> => {

    // on success
    try {
        const resp = await client.get<Room[]>('/hotels');
        return resp.data;

    // on failure
    } catch (error) {
        console.error('Failed to fetch rooms:', error);
        throw new Error('Failed to fetch rooms');
    }
    
}