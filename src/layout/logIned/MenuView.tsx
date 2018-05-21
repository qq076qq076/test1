import { List } from "immutable";
import * as React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { IMenu } from "./MainLayout";

interface IMenuViewProps {
    menuList: List<IMenu>,
    onClickMenu: (menu: IMenu) => void,
}

class MenuView extends React.Component<IMenuViewProps, {}> {
    public render() {
        return (
            <StyledMenu>
                {this.renderMenu()}
            </StyledMenu>
        );
    }

    private renderMenu = () => {
        return this.props.menuList.map((menu: IMenu) => {
            return (
                <StyledMenuLi
                    className={menu.isOpen ? "active" : ""}
                    key={menu.id}>
                    <a onClick={this.onClickMenu.bind(this, menu)}>
                        <span>{menu.title}</span>
                        {menu.subList && <ArrowIcon />}
                    </a>
                    <StyledSubMenu>
                        {menu.subList && this.renderSubMenu(menu.subList)}
                    </StyledSubMenu>
                </StyledMenuLi>
            );
        });
    };

    private onClickMenu = (menu: IMenu) => {
        this.props.onClickMenu(menu);
    };

    private renderSubMenu = (subList: List<IMenu>) => {
        return subList.map((menu: IMenu) => {
            return (
                <li key={menu.id}>
                    <Link to={menu.uri ? menu.uri : "#"}>
                        {menu.title}
                    </Link>
                </li>
            );
        });
    };
}

const CssUl = css`
    list-style-type: none;
    padding:0;
    text-align:center;
    margin: 0;
`;

const CssMenuA = css`
    display: block;
    position: relative;
    margin: 0;
    border: 0px;
    padding: 5px 15px;
    font-size: 12px;
`;

const StyledMenu = styled.ul`
    ${CssUl}
    margin-top:1px;
`;

const StyledMenuLi = styled.li`    
    border: 0;
    line-height: 30px;
    margin: 0 0 1px 0px;
    padding: 0;
    margin: 0 0 1px 0px;
    &.active > a,
    &:hover > a{
        background: #4a8bc2;
    }
    & > a{
        color:#fff;
        background: #505050;
        ${CssMenuA}
    }
`;

const StyledSubMenu = styled.ul`
    ${CssUl}
    list-style-type: none;
    display: none;
    ${StyledMenuLi}.active &{
        display: block;
        background-color: #505050;
    }
    & a{
        color: #a0a0a0;
        ${CssMenuA}
    }
    & li:hover a{
        background: #575757;
    }
`;

const ArrowIcon = styled.span`
    float: right;
    margin-top: 12px;
    margin-right: 0px;
    width: 0;
    height: 0;
    border-left: 4px solid #A0A0A0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    ${StyledMenuLi}.active &{
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: none;
        border-top: 4px solid #fff;
    }
`;

export default MenuView;
