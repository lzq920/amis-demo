import { Amis } from "amis-base"
import "amis-base/dist/style.css"
function App() {
  const PageJson = {
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
  }
  return (
    <Amis json={{ ...PageJson }} props={{}} />
  )
}
export default App
