import React from 'react';
import Loadable from 'react-loadable';

//避免Loading组件闪屏
const LoadingComponent = (props) => {
  if (props.error) {
    return <div>Error!<button onclick={ props.retry }>{ Retry }</button></div>
  } else if (props.timedOut) {
    return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.pastDelay) {
  } else if (props.pastDelay) {
    return <div>Loading...</div>
  } else {
    return null;
  }
}

export default (loader, loading=LoadingComponent) => {
  return Loadable({
    loader,
    loading,
    delay: 200,
    timeout: 10000,
  })
}
