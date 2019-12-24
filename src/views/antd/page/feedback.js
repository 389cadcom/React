import React, { Component } from 'react'
import { Toast, Button, Modal } from 'antd-mobile'

export default class feedback extends Component {
  state = {
    show: true
  }
  // Toast.config({ duration, mask })
  // Toast.hide()

  //info, success, fail, loading, offline
  show = (params) => {
    // Toast.info('This is a toast tips !!!', 1);
    Toast.success('Toast without mask !!!', 50);
  }
  alert = (params) => {
    let Interface = Modal.alert('提示', '是否确认删除！', [
      { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
      { text: '确认', onPress: () => console.log('ok') },
    ])
    setTimeout(function() {
      Interface.close()
    }, 3000);
  }

  render() {
    return (
      <div>
        <Button size="small" inline type="ghost" onClick={this.show}>toast</Button>
        <Button size="small" inline type="ghost" onClick={this.alert}>alert</Button>

        <Modal
          visible={this.state.show}
          transparent
          maskClosable={false}
          title="Title"
          footer={[{ text: 'Ok', onPress: () => { this.setState({show:false}) } }]}
          // wrapProps={{ onTouchStart: this.onWrapTouchStart }}
          // afterClose={() => { alert('afterClose'); }}
        >
          <div style={{ height: 100, overflow: 'scroll' }}>
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
          </div>
        </Modal>
      </div>
    )
  }
}
