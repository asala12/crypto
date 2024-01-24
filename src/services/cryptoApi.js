import{ createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
    'X-RapidAPI-Key': '9f26ffd69dmsh63a3d93cba75b27p12fd79jsnea5228f83605',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) =>  ({url, headers: cryptoApiHeaders,});
export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getryptoDetails: builder.query ({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getryptoHistory: builder.query ({
            query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
        }),
      
        
    })
});
export const { 
    useGetCryptosQuery,
    useGetryptoDetailsQuery,
    useGetryptoHistoryQuery,
} = cryptoApi;

