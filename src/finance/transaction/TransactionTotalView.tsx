import * as React from "react";
import UaButton from "../../components/buttons/UaButton";
import UaTables from "../../components/tables/UaTables";
import Ajax from "../../helpers/Ajax";
import * as moment from "moment";

interface IForm {
    startTime: string;
    endTime: string;
    currency: string;
}

interface IDataTable {
    1: string;
    2: string;
    3: string;
    4: string;
}

interface ITransactionTotalViewState {
    form: IForm;
    dataTable?: IDataTable[]
}

class TransactionTotalView extends React.Component<{}, ITransactionTotalViewState> {
    private searchForm = {
        startTime: moment().format("YYYY-MM-DD"),
        endTime: moment().format("YYYY-MM-DD"),
        currency: "",
    };
    private tableData = [
        {1: "公司入款", 2: "0.00 (0)", 3: "会员出款", 4: "0.00 (0)"},
        {1: "第三方線上支付", 2: "0.00 (0)", 3: "优惠派发", 4: "0.00 (0)"},
        {1: "手动调整加钱", 2: "0.00 (0)", 3: "手动调整扣钱", 4: "0.00 (0)"},
        {1: "+", 2: "0.00", 3: "-", 4: "0.00"},
        {1: "总额", 2: "0.00", 3: "会员总余额", 4: "0.00"},
    ];

    private headData = [
        {title: "收入", dataKey: "1"},
        {title: "收入金额 (笔数)", dataKey: "2"},
        {title: "支出", dataKey: "3"},
        {title: "支出金额 (笔数)", dataKey: "4"},
    ];

    constructor(props: {}) {
        super(props);
        this.state = {
            form: this.searchForm,
            dataTable: this.tableData,
        };
    }

    public render() {
        return (
            <div>
                <div className="row m0 search">
                    {this.renderDateInput()}
                    {this.renderCurrencyInput()}
                    <div className="col-md-12">
                        <UaButton type="primary" onClick={this.Search}>搜尋</UaButton>
                        <UaButton>重置</UaButton>
                    </div>
                </div>
                <UaTables head={this.headData} data={this.tableData}/>
            </div>
        );
    }

    private renderCurrencyInput() {
        return (
            <div className="col-md-8">
                <div className="row">
                    <div className="col-md-4">幣別</div>
                    <div className="col-md-6">
                        <select name="currency"
                                value={this.state.form.currency}
                                onChange={this.changeInput}>
                            <option value="">全部</option>
                            <option value="RMB">人民幣</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }

    private renderDateInput() {
        return <div className="col-md-8">
            <div className="row">
                <div className="col-md-4">日期</div>
                <div className="col-md-3">
                    <input type="date"
                           name="startTime"
                           value={this.state.form.startTime}
                           onChange={this.changeInput}/>
                </div>
                <div className="col-md-3">
                    <input type="date"
                           name="endTime"
                           value={this.state.form.endTime}
                           onChange={this.changeInput}/>
                </div>
            </div>
        </div>;
    }

    private changeInput = (event: any) => {
        const name = event.target.name;
        this.searchForm[name] = event.target.value;
        this.setState({form: this.searchForm});
    };

    private Search = () => {
        Ajax.sendPostRequest("/financeSummaryDetailReq", this.state.form, (res: any) => {
            const data = res.data;
            this.tableData = [
                {1: "公司入款", 2: data.plusCompanyAmount, 3: "会员出款", 4: data.minusMemberAmount},
                {1: "第三方線上支付", 2: data.plusPlatFormAmount, 3: "优惠派发", 4: data.minusPreferencial},
                {1: "手动调整加钱", 2: data.plusManualAmount, 3: "手动调整扣钱", 4: data.minusManualAmount},
                {1: "+", 2: data.plus, 3: "-", 4: data.minus},
                {1: "总额", 2: data.total, 3: "会员总余额", 4: data.memberBalance},
            ];
            this.setState({dataTable: this.tableData});
        });
    };
}

export default TransactionTotalView;
