import React from 'react';
import { Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import ColumnHeader from '../ColumnHeader';
import ListLargeText from '../ListLargeText';
import Divider from '../Divider';
import Link from '../Link';
class DataTable extends React.Component {
    constructor() {
        super(...arguments);
        this.handleSort = (index) => {
            this.props.onSort(index);
        };
        this.getColumnSize = (columnIndex) => {
            const column = this.props.headers[columnIndex];
            let columnSize = { sm: 2 };
            if (typeof column !== "string") {
                if (column.size) {
                    columnSize = column.size;
                }
            }
            return columnSize;
        };
    }
    render() {
        const { name } = this.props;
        return (React.createElement(StretchTable, { padding: this.props.padding },
            React.createElement(Divider, null),
            React.createElement(HeaderRow, null, this.props.headers.map((header, index) => (React.createElement(Col, Object.assign({ key: `${name}-${typeof header === "string" ? header : header.title}` }, this.getColumnSize(index)),
                React.createElement(ColumnHeader, { onClick: () => this.handleSort(index) },
                    typeof header === "string" ? header : header.title,
                    "\u00A0\u00A0\u00A0"))))),
            React.createElement(Divider, null),
            this.props.data.map((d, index) => d.link ? (React.createElement(React.Fragment, { key: `${name}-raw${index}` },
                React.createElement(Link, { to: d.link, key: `${name}-link${index}` },
                    React.createElement(Row, { key: `${name}-link-row${index}` },
                        React.createElement(ItemRow, null, this.props.headers.map((h, colIndex) => (React.createElement(Col, Object.assign({}, this.getColumnSize(colIndex), { key: `${name}-link-cell${index}-${colIndex}` }),
                            React.createElement(Cell, null, this.props.renderers[colIndex](d)))))))),
                React.createElement(Divider, null))) : (React.createElement(React.Fragment, { key: `${name}-raw${index}` },
                React.createElement(Row, { key: `${name}-row${index}` },
                    React.createElement(ItemRow, null, this.props.headers.map((h, colIndex) => (React.createElement(Col, Object.assign({}, this.getColumnSize(colIndex), { key: `${name}-cell${index}-${colIndex}` }),
                        React.createElement(Cell, null, this.props.renderers[colIndex](d))))))),
                React.createElement(Divider, null)))),
            !this.props.data || this.props.data.length === 0 ? (React.createElement(ListLargeText, null, "There are no items to display")) : null));
    }
}
export default DataTable;
const StretchTable = styled.div `
  width: 100%;
  position: relative;
  border-radius: 8px;
  background-color: white;
  padding: ${(props) => props.padding || "0px"};
  margin-top: 0px;
  margin-right: 30px;
`;
const HeaderRow = styled(Row) `
  justify-content: space-between !important;
`;
const ItemRow = styled.div `
  width: 100%;
  height: 52px;
  margin-top: 0px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;
const Cell = styled.div `
  display: flex;
  justify-content: flex-start;
  border: none;
`;
