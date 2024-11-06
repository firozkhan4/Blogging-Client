import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { EditorProvider } from "./contexts/EditorContext.jsx";
import "@mantine/tiptap/styles.css";
import App from "./App.jsx";
import "./index.css";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <EditorProvider>
          <App />
        </EditorProvider>
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>
);
