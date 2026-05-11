import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { MetaProvider } from "@solidjs/meta";
import "./app.css";

export default function App() {
  return (
    <MetaProvider>
      <Router root={(props) => <>{props.children}</>}>
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
