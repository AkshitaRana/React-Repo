import Chai from "./chai"

function App() {
  const userName = "react is awesome"

  return (
    // Fragment: ussed to warp mulyiple tags in one(u can use div also)
    <>
      <h1>React series with vite {userName}</h1>
      <Chai/>
      <p>Para</p>
    </>
  )
}

export default App
