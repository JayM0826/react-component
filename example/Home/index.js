import React, {
  Component
} from 'react';
import {
  Cell,
  CellBody,
  Cells,
  CellsTitle
} from '../../src';
import './style';

export default class Home extends Component {
  state = {
    components: [
      {name: 'Button', href: '#button'},
      {name: 'Cell', href: '#cell'}
    ]
  };

  // methods
  render() {
    let {components} = this.state;

    return (
      <div>
        <h1>React Component</h1>
        <CellsTitle>Component</CellsTitle>
        <Cells>{components.map((item, index) => {
          return (
            <Cell key={index} href={item.href}>
              <CellBody>{item.name}</CellBody>
            </Cell>
          );
        })}</Cells>
      </div>
    );
  }
}
