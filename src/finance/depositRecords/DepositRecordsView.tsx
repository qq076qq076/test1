import * as React from "react";
import UaButton from "../../components/buttons/UaButton";
import UaTables from "../../components/tables/UaTables";
import Ajax from "../../helpers/Ajax";
import stringifyMoney from "../../helpers/String_util";
import * as moment from "moment";
import SearchRow, { IRowData, InputType } from "../../components/SearchRow";

interface IForm {
  startTime: string;
  endTime: string;
  account: string;
  currency: string;
  maxTxnAmount: string;
  minTxnAmount: string;
  name: string;
  orderNo: string;
  platform: string;
  status: string;
  subType: string;
  searchType: string;
}

interface IDataTable {
  申請時間: string;
  存款ID: string;
  代理: string;
  會員帳號: string;
  真實姓名: string;
  玩家群組: string;
  支付資訊: string;
  幣別: string;
  存款金額: string;
  玩家實收: string;
  收款資訊: string;
  公司實收: string;
  狀態: string;
  審核人員: string;
  審核時間: string;
  操作備註: string;
}

interface IDepositRecordsViewState {
  DepositRecordsSearchForm: IForm;
  dataTableList?: IDataTable[];
}

class DepositRecordsView extends React.Component<{}, IDepositRecordsViewState> {
  private searchFormData = {
    startTime: moment().format("YYYY-MM-DD"),
    endTime: moment().format("YYYY-MM-DD"),
    searchType: "",
    account: "",
    currency: "",
    maxTxnAmount: "",
    minTxnAmount: "",
    name: "",
    orderNo: "",
    platform: "",
    status: "",
    subType: ""
  };

  private rowDateList = [
    {
      inputType: InputType.Input,
      attributeName: "startTime",
      attributeType: "date",
      attributeValue: this.searchFormData.startTime
    },
    {
      inputType: InputType.Input,
      attributeName: "endTime",
      attributeType: "date",
      attributeValue: this.searchFormData.endTime
    }
  ];

  private rowSearchList: IRowData[] = [
    {
      inputType: InputType.Select,
      attributeName: "searchType",
      attributeValue: this.searchFormData.searchType,
      selectOptionList: [
        { title: "會員帳號", value: "account" },
        { title: "真實姓名", value: "name" }
      ]
    },
    {
      inputType: InputType.Input,
      attributeName: "searchInput",
      attributeValue: this.searchFormData.searchType,
      attributeType: "text"
    }
  ];

  private rowCurrenctDataList: IRowData[] = [
    {
      inputType: InputType.Select,
      attributeName: "currency",
      attributeValue: this.searchFormData.currency,
      selectOptionList: [
        { title: "全部", value: "" },
        { title: "人民幣", value: "RMB" }
      ]
    }
  ];

  private statusMap = [
    { value: "", title: "全部" },
    { value: "1", title: "待定" },
    { value: "2", title: "處理中" },
    { value: "3", title: "已批准" },
    { value: "4", title: "已拒絕" },
    { value: "5", title: "已取消" },
    { value: "6", title: "已過期" },
    { value: "7", title: "已過期(>2天)" },
    { value: "8", title: "強制入款" }
  ];

  private rowStatusDataList: IRowData[] = [
    {
      inputType: InputType.Select,
      attributeName: "status",
      attributeValue: "",
      selectOptionList: this.statusMap
    }
  ];

  private rowAmountDataList: IRowData[] = [
    {
      inputType: InputType.Input,
      attributeName: "minTxnAmount",
      attributeType: "number",
      attributeValue: this.searchFormData.minTxnAmount
    },
    {
      inputType: InputType.Input,
      attributeName: "maxTxnAmount",
      attributeType: "number",
      attributeValue: this.searchFormData.maxTxnAmount
    }
  ];

  private rowSubTypeDataList: IRowData[] = [
    {
      inputType: InputType.Select,
      attributeName: "subType",
      attributeValue: this.searchFormData.subType,
      selectOptionList: [
        { title: "全部", value: "" },
        { title: "公司入款", value: "1" },
        { title: "第三方線上支付", value: "2" },
        { title: "手動調整扣錢", value: "3" },
        { title: "提款沒收", value: "4" }
      ]
    }
  ];

  private rowPlatformDataList: IRowData[] = [
    {
      inputType: InputType.Select,
      attributeName: "platform",
      attributeValue: this.searchFormData.platform,
      selectOptionList: [
        { title: "全部", value: "" },
        { title: "Quickpay", value: "Quickpay" },
        { title: "sunipay", value: "sunipay" }
      ]
    }
  ];

  private rowOrderNoDataList: IRowData[] = [
    {
      inputType: InputType.Input,
      attributeName: "orderNo",
      attributeType: "text",
      attributeValue: this.searchFormData.orderNo
    }
  ];

  private dataTableList: IDataTable[] = [];

  private headData = [
    { title: "申请时间", dataKey: "申請時間" },
    { title: "存款ID", dataKey: "存款ID" },
    { title: "代理", dataKey: "代理" },
    { title: "會員帳號", dataKey: "會員帳號" },
    { title: "真實姓名", dataKey: "真實姓名" },
    { title: "玩家群組", dataKey: "玩家群組" },
    { title: "支付資訊", dataKey: "支付資訊" },
    { title: "幣別", dataKey: "幣別" },
    { title: "存款金額", dataKey: "存款金額" },
    { title: "玩家實收", dataKey: "玩家實收" },
    { title: "收管資訊", dataKey: "收款資訊" },
    { title: "公司實收", dataKey: "公司實收" },
    { title: "狀態", dataKey: "狀態" },
    { title: "審核人員", dataKey: "審核人員" },
    { title: "審核時間", dataKey: "審核時間" },
    { title: "操作/備註", dataKey: "操作備註" }
  ];

  constructor(props: {}) {
    super(props);
    this.state = {
      DepositRecordsSearchForm: this.searchFormData
    };
  }

  public render() {
    return (
      <div>
        <h3>存款紀錄</h3>
        <div>
          <div className="row m0 search">
            <SearchRow
              title="存款期間"
              rowDataList={this.rowDateList}
              searchFormData={this.state.DepositRecordsSearchForm}
            />
            <SearchRow
              title="搜尋"
              rowDataList={this.rowSearchList}
              searchFormData={this.state.DepositRecordsSearchForm}
            />
            <SearchRow
              title="币别"
              rowDataList={this.rowCurrenctDataList}
              searchFormData={this.state.DepositRecordsSearchForm}
            />
            <SearchRow
              title="狀態"
              rowDataList={this.rowStatusDataList}
              searchFormData={this.state.DepositRecordsSearchForm}
            />
            <SearchRow
              title="轉帳金額"
              rowDataList={this.rowAmountDataList}
              searchFormData={this.state.DepositRecordsSearchForm}
            />
            <SearchRow
              title="支付类型"
              rowDataList={this.rowSubTypeDataList}
              searchFormData={this.state.DepositRecordsSearchForm}
            />
            <SearchRow
              title="第三方平台"
              rowDataList={this.rowPlatformDataList}
              searchFormData={this.state.DepositRecordsSearchForm}
            />
            <SearchRow
              title="存款ID"
              rowDataList={this.rowOrderNoDataList}
              searchFormData={this.state.DepositRecordsSearchForm}
            />
            <div className="col-md-12">
              <UaButton type="primary" onClick={this.search}>
                搜尋
              </UaButton>
              <UaButton>重置</UaButton>
            </div>
          </div>
          <UaTables head={this.headData} data={this.state.dataTableList} />
        </div>
      </div>
    );
  }

  private search = () => {
    Ajax.sendPostRequest(
      "/queryPaymentTransaction",
      this.state.DepositRecordsSearchForm,
      (res: any) => {
        this.dataTableList = res.data.map((item: any) => {
          return {
            申請時間: moment(item.dateTime).format("YYYY-MM-DD"),
            存款ID: item.orderNo,
            代理: item.agent,
            會員帳號: item.account,
            真實姓名: item.name,
            玩家群組: item.playerGroup,
            支付資訊: item.paymentInfo,
            幣別: item.currency,
            存款金額: stringifyMoney(item.txnAmount),
            玩家實收: stringifyMoney(item.settleAmount),
            收款資訊: item.bankNameAndBankAccountName,
            公司實收: stringifyMoney(item.settleAmount),
            狀態: this.statusMap[item.status].title,
            審核人員: item.auditor,
            審核時間: moment(item.auditorDate).format("YYYY-MM-DD"),
            操作備註: item.note
          };
        });
        this.setState({ dataTableList: this.dataTableList });
      }
    );
  };
}

export default DepositRecordsView;
