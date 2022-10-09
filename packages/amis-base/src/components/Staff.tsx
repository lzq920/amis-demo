import { FormItem, render } from "amis";

function Staff(props: any) {
    return render({
        "label": "选项",
        "type": "select",
        "name": "select",
        "source": "prefix:baiduApi/amis/api/mock2/form/getOptions?waitSeconds=1"
    })
}
FormItem({
    type: 'staff',
    autoVar: true
})(Staff);
export default Staff;