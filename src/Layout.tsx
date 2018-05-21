import * as React from "react";
import {Link, Route, Switch} from "react-router-dom";
import {Menu} from "semantic-ui-react";
import styled from "styled-components";
import TransactionMainView from "./transaction/TransactionMainView";

class Layout extends React.Component {
  public render() {
    return (
      <Container>
        {this.renderHeader()}
        <DownContainer>
          {this.renderMenu()}
          {this.renderContent()}
        </DownContainer>
      </Container>
    );
  }

  private renderHeader = () => {
    return (
      <Header className="Layout-header">
        <Title className="Layout-title">Welcome to Finance</Title>
      </Header>
    );
  };

  private renderMenu = () => {
    return (
      <Menu vertical={true}>
        <Menu.Item>
          财务管理
          <Menu.Menu>
            <Menu.Item as={Link} to={"/transactionList"}>
              总交易记录
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  };

  private renderContent = () => {
    return (
      <Content>
        <Switch>
          <Route exact={true} path="/" component={TransactionMainView} />
          <Route path="/transactionList" component={TransactionMainView} />
        </Switch>
      </Content>
    );
  };
}

const Container = styled.div`
  text-align: center;
`;

const DownContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Header = styled.header`
  background-color: #222;
  height: 50px;
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Content = styled.div`
  margin: 20px;
`;

export default Layout;
