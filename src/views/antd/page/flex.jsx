import React, { Component } from 'react'
import { Flex } from 'antd-mobile';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

export default class demo1 extends Component {
  render() {
    return (
      <>
      <Flex>
        <Flex.Item><PlaceHolder /></Flex.Item>
        <Flex.Item><PlaceHolder /></Flex.Item>
      </Flex>
      <Flex justify="between" wrap="wrap">
        <PlaceHolder className="inline"/>
        <PlaceHolder className="inline"/>
        <PlaceHolder className="inline"/>
        <PlaceHolder className="inline"/>
        <PlaceHolder className="inline"/>
        <PlaceHolder className="inline"/>
      </Flex>
      </>
    )
  }
}
