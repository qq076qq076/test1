import * as React from 'react';
import UaTables from '../../components/tables/UaTables';
import UaButton from '../../components/buttons/UaButton';

class Transfer extends React.Component {
    public render() {
        const headData = [
            {title:'開始時間',dataKey:'0'},
            {title:'上線',dataKey:'0'},
            {title:'會員帳號',dataKey:'0'},
            {title:'稽核種類',dataKey:'0'},
            {title:'幣別',dataKey:'0'},
            {title:'存款金額',dataKey:'0'},
            {title:'優惠金額',dataKey:'0'},
            {title:'有效投注稽核',dataKey:'0'},
            {title:'備註/操作',dataKey:'0'},
        ];
        return (
            <div>
                <h3>錢包間出入紀錄</h3>
                <div>
                    <div className="row m0 search">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <UaButton type="primary">轉帳成功 總筆數</UaButton>
                                </div>
                                <div className="col-md-6">
                                    <UaButton type="primary">轉帳失敗 總筆數</UaButton>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-2">日期</div>
                                <div className="col-md-2">
                                    <input type="date" name="dateStart" />
                                </div>
                                <div className="col-md-2">
                                    <input type="date" name="dateEnd" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">最小金額</div>
                                <div className="col-md-8">
                                    <input type="number" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">最大金額</div>
                                <div className="col-md-8">
                                    <input type="number" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">會員帳號</div>
                                <div className="col-md-8">
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">處理人員</div>
                                <div className="col-md-8">
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">轉帳單號</div>
                                <div className="col-md-8">
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">狀態</div>
                                <div className="col-md-8">
                                    <select name="currency">
                                        <option value="">全部</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <UaButton type="primary">搜尋</UaButton>
                            <UaButton>重置</UaButton>
                        </div>
                    </div>
                    <UaTables head={headData} />
                </div>
            </div>);
    }

}

export default Transfer;