import * as React from 'react';
import UaTables from '../../components/tables/UaTables';
import UaButton from '../../components/buttons/UaButton';

class Income extends React.Component {
    public render() {
        const headData = [
            { title: '銀行名稱', dataKey: '' },
            { title: '顯示名稱', dataKey: '' },
            { title: '支付類型', dataKey: '' },
            { title: 'VIP等級', dataKey: '' },
            { title: '帳戶名稱', dataKey: '' },
            { title: '幣別', dataKey: '' },
            { title: '單日存款上限', dataKey: '' },
            { title: '累計存懬熬上限', dataKey: '' },
            { title: '備註', dataKey: '' },
            { title: '更新人員', dataKey: '' },
            { title: '更新時間', dataKey: '' },
            { title: '狀態', dataKey: '' },
        ];
        return (<div>
            <h3>公司入款管理</h3>
            <div>
                <div className="row m0 search">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">銀行名稱</div>
                            <div className="col-md-8">
                                <select name="currency">
                                    <option value="">全部</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">支付類型</div>
                            <div className="col-md-8">
                                <select name="currency">
                                    <option value="">全部</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">幣別</div>
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

export default Income;