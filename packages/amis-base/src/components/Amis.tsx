
import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';
import axios from 'axios';
import copy from 'copy-to-clipboard';

import { render as renderAmis, Schema } from 'amis';
import { ToastComponent, AlertComponent, toast } from 'amis-ui';
import { useState } from 'react';
interface AmisProps {
    json: Schema,
    props: Record<string, unknown>
}
function Amis({ json, props }: AmisProps) {
    const [amisScoped, setScope] = useState<any>()
    let theme = 'cxd';
    let locale = 'zh-CN';
    return (
        <>
            <ToastComponent
                theme={theme}
                key="toast"
                position={'top-right'}
                locale={locale}
            />
            <AlertComponent theme={theme} key="alert" locale={locale} />
            {
                renderAmis(
                    json,
                    {
                        ...props,
                        locale: locale,
                        scopeRef: (_ref: any) => (
                            setScope(_ref)
                        )  // 功能和前面 SDK 的 amisScoped 一样
                    },
                    {
                        // 下面三个接口必须实现
                        fetcher: ({
                            url, // 接口地址
                            method, // 请求方法 get、post、put、delete
                            data, // 请求数据
                            responseType,
                            config, // 其他配置
                            headers // 请求头
                        }: any) => {
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
                        isCancel: (value: any) => (axios as any).isCancel(value),
                        copy: content => {
                            copy(content);
                            toast.success('内容已复制到粘贴板');
                        },
                        jumpTo: (to: string, action?: any, ctx?: any) => {
                            console.log(to, action, ctx)
                            history.pushState('', '', to)
                        },
                        theme
                    }
                )
            }
        </>
    )
}
export default Amis