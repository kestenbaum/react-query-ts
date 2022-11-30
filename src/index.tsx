import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: 1,
            staleTime: 5 * 1000,
            refetchOnMount: "always"

        },
    }
})
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
<QueryClientProvider client={queryClient}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={true}/>
</QueryClientProvider>
);

