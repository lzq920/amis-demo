
import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';

import { render as renderAmis, Schema, IScopedContext } from 'amis';
import { ToastComponent, AlertComponent, toast, alert, confirm } from 'amis-ui';
import axios from 'axios';
import copy from 'copy-to-clipboard';
declare const window: any;
interface AmisProps {
    json: Schema,
    updateScoped?: (amisScoped: IScopedContext) => void,
    data?: Record<string, unknown>,
}
export const env = {
    fetcher: ({
        url, // 接口地址
        method, // 请求方法 get、post、put、delete
        data, // 请求数据
        responseType,
        config, // 其他配置
        headers // 请求头
    }: any) => {
        if (!(url as string).startsWith('http')) {
            const prefix = url.match(/(prefix:[a-zA-Z]+)/)?.[0];
            if (prefix) {
                const key = prefix.split(":")[1]
                const baseURL = window?.AmisService?.[key]
                if (!baseURL) {
                    throw new Error('请求域名不存在!请在vite.config.js中定义相关服务名称以及对应域名')
                }
                axios.defaults.baseURL = baseURL
                url = url.replace(prefix, '')
            } else {
                throw new Error('请求服务API前缀错误!请使用 prefix:服务名 作为API前缀')
            }
        }
        config = config || {};
        config.withCredentials = true;
        responseType && (config.responseType = responseType);
        if (config.cancelExecutor) {
            config.cancelToken = new (axios as any).CancelToken(
                config.cancelExecutor
            );
        }
        config.headers = headers || {};
        if (method !== 'post' && method !== 'put' && method !== 'patch') {
            if (data) {
                config.params = data;
            }
            return (axios as any)[method](url, config);
        } else if (data && data instanceof FormData) {
            config.headers = config.headers || {};
            config.headers['Content-Type'] = 'multipart/form-data';
        } else if (
            data &&
            typeof data !== 'string' &&
            !(data instanceof Blob) &&
            !(data instanceof ArrayBuffer)
        ) {
            data = JSON.stringify(data);
            config.headers = config.headers || {};
            config.headers['Content-Type'] = 'application/json';
        }
        return (axios as any)[method](url, data, config);
    },
    isCancel: (value: unknown) => axios.isCancel(value),
    copy: (content: string, options?: { silent: boolean, format?: string }) => {
        copy(content, options);
        toast.success('内容已复制到粘贴板', {
            position: 'top-center'
        });
    },
    theme: 'cxd',
    jumpTo: (
        location: string,
        action: any
    ): void => {
        console.log("jumpTo", location, action)
    },
    alert,
    confirm,
    tracker: (eventTracke: any) => {
    },
    toastPosition: 'top-center'
}

function Amis({ json, data, updateScoped }: AmisProps) {
    return (
        <>
            <ToastComponent
                theme={'cxd'}
                key="toast"
                position={'top-right'}
                locale={'zh-CN'}
            />
            <AlertComponent theme={'cxd'} key="alert" locale={'zh-CN'} />
            {
                renderAmis(
                    json,
                    {
                        ...data,
                        scopeRef: (_ref: IScopedContext) => {
                            updateScoped?.(_ref)
                        }
                    },
                    env
                )
            }
        </>
    )
}
export default Amis