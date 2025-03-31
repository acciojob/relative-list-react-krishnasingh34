import React from 'react'

let arr = ['ramesh', 'suresh', 'raju', 'ram']
const App = () => {
  return (
    <div id="main">
      <ol key='relativeList'>
        {
          arr.map((value, index) => {
            return (
              <li key={`relativeListItem${index+1}`}>{value}</li>
            )
          })
        }
      </ol>
    </div>
  )
}

export default App
