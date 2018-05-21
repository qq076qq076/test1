import * as React from 'react';
import UaTables from '../../components/tables/UaTables';
import UaButton from '../../components/buttons/UaButton';

class Bank extends React.Component {
    public render() {
        const headData = [
            { title: '銀行名稱', dataKey: '' },
            { title: '熱門', dataKey: '' },
            { title: '顯示名稱', dataKey: '' },
            { title: '銀行類型', dataKey: '' },
            { title: '幣別', dataKey: '' },
            { title: '網銀網址', dataKey: '' },
            { title: '操作', dataKey: '' },
        ];
        return (<div>
            <h3>銀行列表</h3>
            <div>
                <div className="row m0 search">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">銀行名稱</div>
                            <div className="col-md-8">
                                <input type="text" placeholder="銀行名稱"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">銀行類型</div>
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

export default Bank;