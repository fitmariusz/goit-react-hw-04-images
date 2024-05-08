import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AppStart } from '../components/ApiStart/AppStart'

const queryClient = new QueryClient();

export const App = () => {

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <AppStart/>
    </QueryClientProvider>
    </>
  );
};
