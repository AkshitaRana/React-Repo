import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

// const anotherElement = (
//   <a href='https://google.com' target='_blank'>Visit Google</a>
// )


const anotherUser = "Fabulous"


const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click me to visit google',
  anotherUser /* This is a "evaluated expression" in which we cannot perform any operation(it's exp after operation) */
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // MyApp() we can execute the function like this also
  // reactElement
  reactElement
)
