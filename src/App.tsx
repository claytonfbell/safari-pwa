import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { ReactQueryV3 } from "./ReactQueryV3";
import {
  QueryClientProvider as QueryClientProviderV4,
  QueryClient as QueryClientV4,
} from "@tanstack/react-query";
import { ReactQueryV4 } from "./ReactQueryV4";

const queryClient = new QueryClient();
const queryClientV4 = new QueryClientV4({
    defaultOptions: {
        mutations:{
            networkMode:'always'
        },
        queries: {
            networkMode:'always'
        }
    }
});

function App() {
  return (
    <>
      <div>
        <QueryClientProvider client={queryClient}>
          <ReactQueryV3 />
        </QueryClientProvider>
        <QueryClientProviderV4 client={queryClientV4}>
          <ReactQueryV4 />
        </QueryClientProviderV4>
      </div>
    </>
  );
}

export default App;
