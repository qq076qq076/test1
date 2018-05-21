import * as React from "react";
import UaButton from "../../components/buttons/UaButton";
import UaTables from "../../components/tables/UaTables";
import Ajax from "../../helpers/Ajax";
import * as moment from "moment";

interface IForm {
    endTime: string;
    startTime: string;
    maxTxnAmount: string;
    minTxnAmount: string;
    memberId: string;
    name: string;
    orderNo: string;
    updater: string;
    userId: string;
}

interface IDataTable {
    startTime?: string
}

interface ITransactionListViewState {
    form: IForm;
    dataTable?: IDataTable[]
}

class TransactionListView extends React.Component<{}, ITransactionListViewState> {
    private searchForm: IForm = {
        startTime: moment().format("YYYY-MM-DD"),
        endTime: moment().format("YYYY-MM-DD"),
        maxTxnAmount: "",
        minTxnAmount: "",
        name: "",
        memberId: "",
        orderNo: "",
        updater: "",
        userId: "",
    };

    private headData = [
        {title: "交易成立日期", dataKey: "1"},
        {title: "交易类别", dataKey: "2"},
        {title: "执行者", dataKey: "3"},
        {title: "玩家 (笔数)", dataKey: "4"},
        {title: "交易金额", dataKey: "5"},
        {title: "交易前余额", dataKey: "6"},
        {title: "交易后余额", dataKey: "7"},
        {title: "交易ID", dataKey: "8"},
        {title: "操作", dataKey: "9"},
    ];

    private dataTable: IDataTable[];

    constructor(props: {}) {
        super(props);
        this.state = {
            form: this.searchForm,
            dataTable: this.dataTable,
        };
    }

    public render() {
        return (<div>
            <div className="row m0 search">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-4">交易类别</div>
                        <div className="col-md-8">
                            很多選項
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-2">交易成立日期</div>
                        <div className="col-md-2">
                            <input type="date"
                                   name="endTime"
                                   value={this.state.form.endTime}
                                   onChange={this.changeInput}
                            />
                        </div>
                        <div className="col-md-2">
                            <input type="date"
                                   name="startTime"
                                   value={this.state.form.startTime}
                                   onChange={this.changeInput}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-4">会员帐号</div>
                        <div className="col-md-8">
                            <input type="text"
                                   name="memberId"
                                   value={this.state.form.memberId}
                                   onChange={this.changeInput}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-4">真实姓名</div>
                        <div className="col-md-8">
                            <input type="text"
                                   name="name"
                                   value={this.state.form.name}
                                   onChange={this.changeInput}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-4">交易ID</div>
                        <div className="col-md-8">
                            <input type="text"
                                   name="orderNo"
                                   value={this.state.form.orderNo}
                                   onChange={this.changeInput}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-4">处理人员</div>
                        <div className="col-md-8">
                            <input type="text"
                                   name="updater"
                                   value={this.state.form.updater}
                                   onChange={this.changeInput}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-4">最低金额</div>
                        <div className="col-md-8">
                            <input type="text"
                                   name="minTxnAmount"
                                   value={this.state.form.minTxnAmount}
                                   onChange={this.changeInput}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-4">最高金额</div>
                        <div className="col-md-8">
                            <input type="text"
                                   name="maxTxnAmount"
                                   value={this.state.form.minTxnAmount}
                                   onChange={this.changeInput}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <UaButton type="primary" onClick={this.search}>搜尋</UaButton>
                    <UaButton>重置</UaButton>
                </div>
            </div>
            <UaTables head={this.headData}/>
        </div>);
    }

    private changeInput = (event: any) => {
        const name = event.target.name;
        this.searchForm[name] = event.target.value;
        this.setState({form: this.searchForm});
    };

    private search = () => {
        Ajax.sendPostRequest("/financeTransactionList", this.state.form, (res: {}) => {
            console.log(res);
        });
    };
}

export default TransactionListView;
