/// <reference types="react" />
import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';
import { Schema } from 'amis';
interface AmisProps {
    json: Schema;
    data: Record<string, unknown>;
}
export declare const env: {
    fetcher: ({ url, method, data, responseType, config, headers }: any) => any;
    isCancel: (value: unknown) => boolean;
    copy: (content: string, options?: {
        silent: boolean;
        format?: string;
    }) => void;
    theme: string;
    jumpTo: (location: string, action: any) => void;
    alert: (content: string, title?: string | undefined) => void;
    confirm: (content: string, title?: string | undefined, confirmText?: string | undefined) => Promise<any>;
    tracker: (eventTracke: any) => void;
    toastPosition: string;
};
declare function Amis({ json, data }: AmisProps): JSX.Element;
export default Amis;
