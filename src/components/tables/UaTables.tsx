import * as React from "react";
import styled, {css} from "styled-components";

interface ITableData {
    title: string;
    dataKey: string;
}

interface IUaTablesProps {
    data?: object[],
    head: ITableData[],
}

class UaTables extends React.Component<IUaTablesProps, {}> {
    public render() {
        return (
            <StyledTablePlace>
                <StyledTable>
                    <thead>
                    <tr>{this.renderHead()}</tr>
                    </thead>
                    <tbody>
                    {this.renderData()}
                    </tbody>
                </StyledTable>
            </StyledTablePlace>
        );
    }

    private renderHead = () => {
        return this.props.head.map((item, key) => {
            return (<th key={key}>{item.title}</th>);
        });
    };

    private renderData = () => {
        if (this.props.data) {
            return this.props.data.map((DataItem, DataIndex) => {
                return (
                    <tr key={DataIndex}>
                        {
                            this.props.head.map((HeadItem, HeadIndex) => {
                                return (
                                    <td key={HeadIndex}>{DataItem[HeadItem.dataKey]}</td>
                                );
                            })
                        }
                    </tr>
                );
            });
        } else {
            return (<tr>
                <td colSpan={this.props.head.length}>目前沒有資料</td>
            </tr>);
        }
    };
}

const CssTd = css`
    text-align:center;
    border: 1px solid #dee2e6;
    vertical-align: bottom;
    padding: 0.75rem;
    height: 100%;
`;

const StyledTable = styled.table`
    width: 100%;
    max-width: 100%;
    & tr{
        height:100%;
    }
    & th,& td{
        ${CssTd}
    }
    & tbody tr:nth-of-type(odd){
        background:rgba(0, 0, 0, 0.05);
    }
`;


const StyledTablePlace = styled.div`
    padding:15px;
`;


export default UaTables;