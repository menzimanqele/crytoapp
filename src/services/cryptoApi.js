import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders ={
    'X-RapidAPI-Key': 'bd92c2022dmsh622f3414d014540p1a8b63jsn4f78c56ca446',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}


const baseUrl ='https://coinranking1.p.rapidapi.com/coins';
const createRequest= (url)=>({url,headers:cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl:baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:()=>createRequest('/coins')
        })
    })


})


export const {
    useGetCryptosQuery,
} = cryptoApi;
