import React, {Component} from 'react'
import { connect } from 'react-redux'
import { actions as listAction } from '../../store/reducers/listReducer'

//Hook
class List extends Component{
  componentDidMount() {
    this.props.fatch()
  }

  render(){
    let list = this.props.list
    return (
      <>
        <div>list</div>
        <ul>
          {list.map((item, i) => (
            <li key={i}>{item.title}</li>
          ))}
        </ul>
      </>
    )
  }
}
/* const List = (props) => {
  // console.log('list');
  let {list} = props;
  return (
    <>
      <div>list <button onClick = { props.fatch  }>获取</button></div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item.title}</li>
        ))}
      </ul>
    </>
  )
} */

const mapStateToProps = (state) => ({
  list: state.listReducer.list,
})

const mapDispatchToProps = {
  ...listAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
