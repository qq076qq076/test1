import * as React from "react";
import styled from "styled-components";

class HeaderView extends React.Component {
    public render(): any {
        return (
            <TopBar>
                <Title className="Layout-title">Welcome to Finance</Title>
            </TopBar>
        );
    }

}

const Title = styled.h1`
    font-size: 20px;
    line-height:60px;
`;

const TopBar = styled.div`
    background-color: #4a8bc2;
    border-color: #4a8bc2;
    text-align: center;
    color: #fff;
    height: 60px;
`;

export default HeaderView;