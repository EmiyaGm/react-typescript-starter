import { message } from 'antd';
import moment from 'moment';

export function init() {
  moment.locale('zh-CN');
  message.config({ maxCount: 1, duration: 2 });
}
