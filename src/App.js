import './App.scss';
import HomeScreen from "./pages/HomeScreen"
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
     </Router>
    </QueryClientProvider>
  );
}

export default App;
