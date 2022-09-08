import Amis from "./components/Amis"
function App() {
  return (
    <div className="App">
      <Amis json={{
        "type": "page",
        "body": {
          "type": "form",
          "api": "/amis/api/mock2/form/saveForm",
          "body": [
            {
              "type": "editor",
              "name": "editor",
              "label": "编辑器",
              "placeholder": "function() {\n  console.log('hello world')\n}"
            }
          ]
        }
      }} props={{}} />
    </div>
  )
}

export default App
