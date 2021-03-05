import React from "react";
import { Switch, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Todo from "./Todo/index";
function App() {
  return (
    <Box>
      <Switch>
        <Route path="/" component={Todo} />
      </Switch>
    </Box>
  );
}
 
export default App;
