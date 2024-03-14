import { api } from '../services/axios';
import useSWR from 'swr';
import { Me } from '@/protocols';

export function useMe() {
    const { data, error, isLoading } = useSWR<Me>('/me', async (url: string) => {
        const response = await api.get(url);
        return response.data.results.user;
    });

    return { data };
}
