import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import CreateProductPage from "./pages/CreateProductPage";
import CreateClientPage from "./pages/CreateClientPage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/produto" component={CreateProductPage} />
      <Route path="/cliente" component={CreateClientPage} />
    </BrowserRouter>
  );
}
