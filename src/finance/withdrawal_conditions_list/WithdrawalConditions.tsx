import * as React from 'react';
import UaTables from '../../components/tables/UaTables';
import UaButton from '../../components/buttons/UaButton';

class WithdrawalConditions extends React.Component {
    public render() {
        const headData = [
            { title: '會員帳號', dataKey: '0' },
            { title: '轉帳金額', dataKey: '0' },
            { title: '轉出', dataKey: '0' },
            { title: '轉入', dataKey: '0' },
            { title: '執行者', dataKey: '0' },
            { title: '創建時間', dataKey: '0' },
            { title: '轉帳單號', dataKey: '0' },
            { title: '狀態', dataKey: '0' },
        ];
        return (
            <div>
                <h3>提款條件列表</h3>
                <div>
                    <div className="row m0 search">
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
                                <div className="col-md-4">稽核種類</div>
                                <div className="col-md-8">
                                    <select name="currency">
                                        <option value="">全部</option>
                                    </select>
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
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">會員帳號</div>
                                <div className="col-md-4">
                                    <select name="currency">
                                        <option value="">全部</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">玩家狀態</div>
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

export default WithdrawalConditions;