import * as React from 'react';
import UaTables from '../../components/tables/UaTables';
import UaButton from '../../components/buttons/UaButton';
import Ajax from '../../helpers/Ajax';
import * as moment from 'moment';

interface Iform {
    startTime: string;
    endTime: string;
    account: string;
    currency: string;
    playerGroup: string;
    status: string;
    minTxnAmount: string;
    maxTxnAmount: string;
    name: string;
    orderNo: string;
    withdrawType: string;
}

interface IDataTable {
    申請時間: string;
    會員帳號: string;
    玩家群組: string;
    銀行資料: string;
    提款金額: string;
    稽核: string;
    優惠稽核: string;
    出款金額: string;
    帳戶餘額: string;
    提款方式: string;
    狀態: string;
    風險審核: string;
    財務操作: string;
}

interface IWithdrawState {
    form: Iform,
    dataTable?: IDataTable[]
}

class Withdraw extends React.Component<{}, IWithdrawState> {
    private searchForm = {
        startTime: moment().format('YYYY-MM-DD'),
        endTime: moment().format('YYYY-MM-DD'),
        account: '',
        currency: '',
        playerGroup: '',
        maxTxnAmount: '',
        minTxnAmount: '',
        name: '',
        orderNo: '',
        status: '',
        withdrawType: '',
    };
    private dataTable: IDataTable[] = [];
    constructor(props: {}) {
        super(props);
        this.state = {
            form: this.searchForm,
            dataTable: this.dataTable,
        };
    }
    public render() {
        const headData = [
            { title: '#', dataKey: '' },
            { title: '申請時間', dataKey: '1' },
            { title: '會員帳號\n真實姓名', dataKey: '2' },
            { title: '玩家群組\n幣別', dataKey: '3' },
            { title: '銀行資料', dataKey: '4' },
            { title: '提款金額', dataKey: '5' },
            { title: '稽核', dataKey: '6' },
            { title: '優惠稽核\n常態稽核', dataKey: '7' },
            { title: '出款金額', dataKey: '8' },
            { title: '帳戶餘額', dataKey: '9' },
            { title: '提款方式\n實際支付', dataKey: '10' },
            { title: '狀態', dataKey: '11' },
            { title: '風險審核', dataKey: '12' },
            { title: '財務操作', dataKey: '13' },
        ];
        return (<div>
            <h3>提款紀錄</h3>
            <div>
                <div className="row m0 search">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-2">日期</div>
                            <div className="col-md-2">
                                <input type="date"
                                    name="startTime"
                                    value={this.state.form.startTime}
                                    onChange={this.changeinput}
                                />
                            </div>
                            <div className="col-md-2">
                                <input type="date"
                                    name="endTime"
                                    value={this.state.form.endTime}
                                    onChange={this.changeinput}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">幣別</div>
                            <div className="col-md-8">
                                <select name="currency"
                                    value={this.state.form.currency}
                                    onChange={this.changeinput}>
                                    <option value="">全部</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">玩家群組</div>
                            <div className="col-md-8">
                                <select name="playerGroup"
                                    value={this.state.form.playerGroup}
                                    onChange={this.changeinput}>
                                    <option value="">全部</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">状态</div>
                            <div className="col-md-8">
                                <select name="status"
                                    value={this.state.form.status}
                                    onChange={this.changeinput}>
                                    <option value="">全部</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">提款金額</div>
                            <div className="col-md-4">
                                <input type="number" placeholder="起"
                                    name="minTxnAmount"
                                    value={this.state.form.minTxnAmount}
                                    onChange={this.changeinput} />
                            </div>
                            <div className="col-md-4">
                                <input type="number" placeholder="止"
                                    name="maxTxnAmount"
                                    value={this.state.form.maxTxnAmount}
                                    onChange={this.changeinput} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">取款單號</div>
                            <div className="col-md-8">
                                <input type="text"
                                    name="orderNo"
                                    value={this.state.form.orderNo}
                                    onChange={this.changeinput} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">提款方式</div>
                            <div className="col-md-8">
                                <select name="withdrawType"
                                    value={this.state.form.withdrawType}
                                    onChange={this.changeinput}>
                                    <option value="">全部</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">腳色</div>
                            <div className="col-md-8">
                                選項在這邊
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <UaButton type="primary" onClick={this.Search}>搜尋</UaButton>
                        <UaButton>重置</UaButton>
                    </div>
                </div>
                <UaTables head={headData} data={this.state.dataTable}/>
            </div>
        </div>);
    }

    private Search = () => {
        Ajax.sendPostRequest('/queryWithdrawTransaction', this.state.form, (res: object) => {
            console.log(res)
        })
    }

    private changeinput = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        this.searchForm[name] = value;
        this.setState({ form: this.searchForm });
    }
}

export default Withdraw;