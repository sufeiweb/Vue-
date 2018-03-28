export const ORIGIN_NAME = location.origin.includes('test.')? '{测试域名}':location.origin.includes('https')?'{生产域名}':'{开发域名}';
export const SUB_API_PATH = '{api前缀}';
export const SUB_WS_PATH = '{socket前缀}';
export const WS_NAME = (location.origin.includes('https')?'wss://':'ws://')+ORIGIN_NAME+SUB_WS_PATH;
export const API_PATH = (location.origin.includes('https')?'https://':'http://')+ORIGIN_NAME + SUB_API_PATH;
