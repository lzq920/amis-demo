import { Renderer } from "amis";

function Diy(props: any) {
    console.log(props)
    const { tip } = props;
    return <div>这是自定义组件:{tip}</div>
}
Renderer({
    type: 'diy',
    autoVar: true
})(Diy);
export default Diy;