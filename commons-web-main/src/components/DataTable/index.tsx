import React from 'react';
import { Row, Col } from 'react-grid-system';
import styled from 'styled-components';

import ColumnHeader from '../ColumnHeader';
import ListLargeText from '../ListLargeText';
import Divider from '../Divider';
import Link from '../Link';

type Header = {
  size?: any;
  title?: string;
};

type Generic = {
  link?: string;
};

type Props<T extends Generic> = {
  headers: string[] | Header[];
  data: T[];
  renderers: ((item: T) => Object)[];
  onSort: (index: number) => void;
  padding?: string;
  name?: string;
};

class DataTable<T extends Generic> extends React.Component<Props<T>> {
  handleSort = (index: number) => {
    this.props.onSort(index);
  };

  getColumnSize = (columnIndex: number) => {
    const column = this.props.headers[columnIndex];
    let columnSize = { sm: 2 };

    if (typeof column !== "string") {
      if (column.size) {
        columnSize = column.size;
      }
    }

    return columnSize;
  };

  render() {
    const { name } = this.props;
    return (
      <StretchTable padding={this.props.padding}>
        <Divider />
        <HeaderRow>
          {this.props.headers.map((header, index) => (
            <Col
              key={`${name}-${
                typeof header === "string" ? header : header.title
              }`}
              {...this.getColumnSize(index)}
            >
              <ColumnHeader onClick={() => this.handleSort(index)}>
                {typeof header === "string" ? header : header.title}
                &nbsp;&nbsp;&nbsp;{/*TODO add sorting arrow*/}
              </ColumnHeader>
            </Col>
          ))}
        </HeaderRow>
        <Divider />
        {this.props.data.map((d, index) =>
          d.link ? (
            <React.Fragment key={`${name}-raw${index}`}>
              <Link to={d.link} key={`${name}-link${index}`}>
                <Row key={`${name}-link-row${index}`}>
                  <ItemRow>
                    {this.props.headers.map((h, colIndex) => (
                      <Col
                        {...this.getColumnSize(colIndex)}
                        key={`${name}-link-cell${index}-${colIndex}`}
                      >
                        <Cell>{this.props.renderers[colIndex](d)}</Cell>
                      </Col>
                    ))}
                  </ItemRow>
                </Row>
              </Link>
              <Divider />
            </React.Fragment>
          ) : (
            <React.Fragment key={`${name}-raw${index}`}>
              <Row key={`${name}-row${index}`}>
                <ItemRow>
                  {this.props.headers.map((h, colIndex) => (
                    <Col
                      {...this.getColumnSize(colIndex)}
                      key={`${name}-cell${index}-${colIndex}`}
                    >
                      <Cell>{this.props.renderers[colIndex](d)}</Cell>
                    </Col>
                  ))}
                </ItemRow>
              </Row>
              <Divider />
            </React.Fragment>
          )
        )}
        {!this.props.data || this.props.data.length === 0 ? (
          <ListLargeText>There are no items to display</ListLargeText>
        ) : null}
      </StretchTable>
    );
  }
}

export default DataTable;

interface StretchTableProps {
  padding?: string;
}

const StretchTable = styled.div<StretchTableProps>`
  width: 100%;
  position: relative;
  border-radius: 8px;
  background-color: white;
  padding: ${(props) => props.padding || "0px"};
  margin-top: 0px;
  margin-right: 30px;
`;

const HeaderRow = styled(Row)`
  justify-content: space-between !important;
`;

const ItemRow = styled.div`
  width: 100%;
  height: 52px;
  margin-top: 0px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

const Cell = styled.div`
  display: flex;
  justify-content: flex-start;
  border: none;
`;
