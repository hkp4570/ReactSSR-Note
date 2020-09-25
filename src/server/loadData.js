import { matchRoutes } from 'react-router-config';
import routeConfig from '../routes/routeConfig';
import store from '../store';


// 服务端渲染页面前的加载
export default function (pathname) {
    const matches = matchRoutes(routeConfig, pathname);
    const pros = [];
    for (const match of matches) {
      if (match.route.component.loadData) {
        pros.push(Promise.resolve(match.route.component.loadData(store)));
      }
    }
    return Promise.all(pros);
}
