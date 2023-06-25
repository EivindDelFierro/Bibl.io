import topBar from "./Components/topBar";
import bottomBar from "./Components/bottomBar";
import doiContainer from "./Containers/doiContainer";

// top level application layer. Renders visible area for user
const App = () => {
  return (
    <div>
      <topBar />
      <interativeArea />
      <bottomBar />
    </div>
  )
}

export default App;