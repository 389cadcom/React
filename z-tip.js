//2019-React 内容
1.router4(history--createBrowserHistory())  connected-react-router

2.redux, react-redux, react-promise, react-saga

3.antd组件内容

4.路由异步加载   react-loadable, AsyncComponent
  // AsyncComponent(() => import('./home'))
  /* const Home = Loadable({
    loader: () => import("./containers/Home"),
    loading: MyLoadingComponent
  }); */

4.Decorator  全局sass样式  sass-resources-loader


//通用的过场组件
const MyLoadingComponent = ({isLoading, error}) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
}
