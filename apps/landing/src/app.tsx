import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { MetaProvider } from "@solidjs/meta";
import "./app.css";

export default function App() {
  return (
    <Router root={(props) => (
      <MetaProvider>
        {props.children}
      </MetaProvider>
    )}>
      <FileRoutes />
    </Router>
  );
}
