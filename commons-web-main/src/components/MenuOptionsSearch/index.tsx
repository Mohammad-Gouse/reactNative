import React from 'react';
import styled from 'styled-components';

import Images from '../../assets/images';

interface CommonProps {
  visible?: boolean
}

const Input = styled.input<CommonProps>`
  transition: .3s ease-in-out;
  pointer-events: ${({ visible }) => visible ? 'auto' : 'none'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  min-width: 180px;
  padding-left: 20px;
  border: none;
  background-color: transparent;
  outline: none;
  font-family: Montserrat;
`;

interface ContainerProps {
  opened?: boolean
}

const Container = styled.div<ContainerProps>`
  transition: .3s ease-in-out;
  width: ${({ opened }) => opened ? 260 : 30}px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 30px;
  border-radius: 30px;
  background-color: #FFF;
  color: #879399;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: center;
  border: 1px solid #DBE3E7;
  margin-right: 10px;
  outline: none !important;
  outline-offset: none !important;
  cursor: pointer;
`;

const Toggle = styled.button`
  padding: 0 8px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Badge = styled.div<CommonProps>`
  transition: .3s ease-in-out;
  opacity: ${({ visible }) => visible ? 1 : 0};
  top: -3px;
  right: -3px;
  position: absolute;
  height: 13px;
  width: 13px;
  border: 3px solid #CDE265;
  border-radius: 6px;
  background-color: #2DB496;
`;

const ClearImage = styled.img<CommonProps>`
  transition: .3s ease-in-out;
  width: 13px;
  height: 13px;
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  transform: translateY(-1px);

  ${({ visible }) => visible ? `
    opacity: 1;
    visibility: visible;
  ` : ''}
`;

type Props = {
  onChange: (search: string) => void,
  initialValue: string,
}

type State = {
  searchText: string,
  opened: boolean,
}

class MenuOptionsSearch extends React.Component<Props, State> {
  timerRef: any;
  input: any;

  state = { searchText: '', opened: false };

  constructor(props: Props) {
    super(props);
    this.timerRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.initialValue) {
      this.setState({ searchText: this.props.initialValue });
    }
  }

  toggle = () => {
    if (!this.state.opened && this.input) {
      this.input.focus();
    }

    this.setState(prev => ({
      opened: !prev.opened,
    }));
  };

  handleInputWith = (value: string) => {
    this.setState({ searchText: value });

    clearTimeout(this.timerRef.current);

    this.timerRef.current = setTimeout(() => {
      this.props.onChange(value);
    }, 300);
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.handleInputWith(e.target.value);
  };

  handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && this.input) {
      this.input.blur()
    }
  };

  clear = () => {
    this.handleInputWith('');
  }

  render() {
    return (
      <Container opened={this.state.opened}>
        <Badge visible={Boolean(this.state.searchText && !this.state.opened)} />
        <Input
          ref={ref => {this.input = ref}}
          visible={this.state.opened}
          onChange={this.handleInputChange}
          value={this.state.searchText}
          onBlur={this.toggle}
          onKeyPress={this.handleKeyPress}
        />
        <ClearImage
          visible={this.state.opened}
          src={Images.close}
          alt="clear"
          onClick={this.clear}
        />
        <Toggle onClick={this.toggle}>
          <img
            src={Images.search}
            alt="search"
          />
        </Toggle>
      </Container>
    );
  }
}

export default MenuOptionsSearch;
