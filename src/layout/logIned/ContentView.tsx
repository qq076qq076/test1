import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import TransactionMainView from "../../finance/transaction/TransactionMainView";
import DepositRecordsView from '../../finance/depositRecords/DepositRecordsView';
import Withdraw from "../../finance/withdraw/Withdraw";
import WithdrawalConditions from "../../finance/withdrawal_conditions_list/WithdrawalConditions";
import Transfer from '../../finance/transfer/Transfer';
import Bank from '../../finance/bank/Bank';
import Incom from '../../finance/income/Income';
import Thirdparty from '../../finance/thirdparty/Thirdparty';
import Adjustment from '../../finance/adjustment/Adjustment';
import Financial from '../../finance/financial/Financial';

class ContentView extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Switch>
                <Route path="/transactionRecords" component={TransactionMainView} />
                <Route path="/depositRecords" component={DepositRecordsView} />
                <Route path="/withdrawalRecords" component={Withdraw} />
                <Route path="/WithdrawalConditions" component={WithdrawalConditions} />
                <Route path="/transfer" component={Transfer} />
                <Route path="/bank" component={Bank} />
                <Route path="/income" component={Incom} />
                <Route path="/thirdparty" component={Thirdparty} />
                <Route path="/adjustment" component={Adjustment} />
                <Route path="/financial" component={Financial} />
                <Redirect to='/transactionRecords' />
            </Switch>
        );
    }

}

export default ContentView;