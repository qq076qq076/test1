import * as React from 'react';
import { Tab } from "semantic-ui-react";
import FinancialSetting from './FinancialSetting';
import FinancialInfo from './FinancialInfo';
import RiskControl from './RiskControl';

const panes = [
    { menuItem: "存款時限設定", render: () => <Tab.Pane><FinancialSetting /></Tab.Pane> },
    { menuItem: "存款支付說明", render: () => <Tab.Pane><FinancialInfo /></Tab.Pane> },
    { menuItem: "風險控制", render: () => <Tab.Pane><RiskControl /></Tab.Pane> },
]

class Financial extends React.Component {
    public render() {
        return (
        <div>
            <h3>財務設定</h3>
            <Tab panes={panes} />
        </div>);
    }
}

export default Financial;