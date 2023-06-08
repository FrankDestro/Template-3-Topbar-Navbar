import Menu from 'Components/Menu';
import Navbar from 'Components/Navbar';
import Page1 from 'pages/Page1';
import Page2 from 'pages/Page2';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Menu />
      <Switch>
        <Route path="/page1">
            <Page1 />
        </Route>
        <Route path="/page2">
            <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
