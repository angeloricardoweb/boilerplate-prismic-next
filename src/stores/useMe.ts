import React, { useEffect, useState } from 'react';
import { api } from '../services/axios';
import { Me } from '../types/protocols';
import { errorHandler } from '../services/errorHandler';
import useSWR from 'swr';

export function useMe() {
    const { data, error, isLoading } = useSWR<Me>('/me', async (url) => {
        const response = await api.get(url);
        return response.data.results.user;
    });

    return { data };
}
