import { List } from "immutable";
import * as React from "react";
import styled from "styled-components";
import ContentView from "./ContentView";
import HeaderView from "./HeaderView";
import MenuView from "./MenuView";

export interface IMenu {
    id: string,
    icon?: string,
    isOpen?: boolean,
    subList?: List<IMenu>,
    title: string,
    uri?: string,
}

interface IMainLayoutState {
    menuList: List<IMenu>;
}

class MainLayout extends React.Component<{}, IMainLayoutState> {
    private menuList: List<IMenu> = List([
        {
            id: "finance",
            isOpen: true,
            subList: List([
                {
                    id: "transactionRecords",
                    title: "總交易紀錄",
                    uri: "/transactionRecords",
                },
                {
                    id: "depositRecords",
                    title: "存款紀錄",
                    uri: "/depositRecords",
                },
                {
                    id: "withdrawalRecords",
                    title: "提款紀錄",
                    uri: "/withdrawalRecords",
                },
                {
                    id: "WithdrawalConditions",
                    title: "提款條件列表",
                    uri: "/WithdrawalConditions",
                },
                {
                    id: "transfer",
                    title: "錢包間出入紀錄",
                    uri: "/transfer",
                },
                {
                    id: "bank",
                    title: "銀行列表",
                    uri: "/bank",
                },
                {
                    id: "income",
                    title: "公司入款管理",
                    uri: "/income",
                },
                {
                    id: "thirdparty",
                    title: "第三方支付平台",
                    uri: "/thirdparty",
                },
                {
                    id: "adjustment",
                    title: "人工調節金額",
                    uri: "/adjustment",
                },
                {
                    id: "financial",
                    title: "財務設定",
                    uri: "/financial",
                },
            ]),
            title: "財務管理",
        },
    ]);

    constructor(props: {}) {
        super(props);
        this.state = { menuList: this.menuList };
    }

    public render() {
        return (
            <StyledContainer>
                <HeaderView />
                <StyledDownPlace className="row">
                    <MenuLayoutStyle className="col-md-2">
                        <MenuView
                            menuList={this.state.menuList}
                            onClickMenu={this.onMenuChange}
                        />
                    </MenuLayoutStyle>
                    <div className="col-md-10">
                        <ContentView />
                    </div>
                </StyledDownPlace>
            </StyledContainer>
        );
    }

    public onMenuChange = (menu: IMenu): void => {
        menu.isOpen = !menu.isOpen;
        this.setState({
            menuList: List(this.state.menuList),
        });
    };
}

const StyledContainer = styled.div`
        min-height: 100vh;
    `;

const StyledDownPlace = styled.div`
        display: flex;
        flex-direction: row;
        height:calc( 100vh - 64px );
    `;

const MenuLayoutStyle = styled.div`
    background: #404040;
    text-align: center;
    padding-right:0;
`;

export default MainLayout;
