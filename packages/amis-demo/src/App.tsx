import { Amis, Diy } from "amis-base"
import "amis-base/dist/style.css"
function App() {
  const PageJson = {
    "type": "page",
    "body": [{
      "type": "crud",
      "api": "prefix:baiduApi/amis/api/mock2/sample",
      "syncLocation": false,
      "columns": [
        {
          "name": "id",
          "label": "ID"
        },
        {
          "name": "engine",
          "label": "Rendering engine"
        },
        {
          "name": "browser",
          "label": "Browser"
        },
        {
          "name": "platform",
          "label": "Platform(s)"
        },
        {
          "name": "version",
          "label": "Engine version"
        },
        {
          "name": "grade",
          "label": "CSS grade",
          "copyable": true
        },
        {
          "type": "operation",
          "label": "操作",
          "buttons": [
            {
              "label": "点击弹框",
              "type": "button",
              "actionType": "dialog",
              "dialog": {
                "title": "弹框标题",
                "body": "这是一个弹框"
              },
            },
            {
              "label": "提示",
              "type": "button",
              "actionType": "toast",
              "toast": {
                "position": "top-center",
                "items": [
                  {
                    "body": "轻提示内容"
                  }
                ]
              }
            },
            {
              "label": "详情",
              "type": "button",
              "level": "link",
              "actionType": "dialog",
              "dialog": {
                "title": "查看详情",
                "body": {
                  "type": "form",
                  "body": [
                    {
                      "type": "input-text",
                      "name": "engine",
                      "label": "Engine"
                    },
                    {
                      "type": "input-text",
                      "name": "browser",
                      "label": "Browser"
                    },
                    {
                      "type": "input-text",
                      "name": "platform",
                      "label": "platform"
                    },
                    {
                      "type": "input-text",
                      "name": "version",
                      "label": "version"
                    },
                    {
                      "type": "control",
                      "label": "grade",
                      "body": {
                        "type": "tag",
                        "label": "${grade}",
                        "displayMode": "normal",
                        "color": "active"
                      }
                    }
                  ]
                }
              }
            },
            {
              "label": "删除",
              "type": "button",
              "level": "link",
              "className": "text-danger",
              "disabledOn": "this.grade === 'A'"
            }
          ]
        }
      ],
    }, {
      type: "diy",
      tip: "撒打发士大夫"
    }]
  }
  return (
    <>
      <Amis json={{ ...PageJson }} data={{}} />
      <Diy tip={"Hello Diy component"} />
    </>
  )
}
export default App
