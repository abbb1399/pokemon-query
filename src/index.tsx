import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import "./index.scss"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { MyPokemonsContextProvider } from "./store/my-pokemons-context"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <MyPokemonsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyPokemonsContextProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
