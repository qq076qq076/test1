import * as React from 'react';
import UaTables from '../../components/tables/UaTables';
import UaButton from '../../components/buttons/UaButton';

class Adjustment extends React.Component {
    public render() {
        const headData = [
            { title: 'ID', dataKey: '' },
            { title: '日期', dataKey: '' },
            { title: '會員帳號', dataKey: '' },
            { title: '+/-', dataKey: '' },
            { title: '調節類型', dataKey: '' },
            { title: '幣別', dataKey: '' },
            { title: '錢包', dataKey: '' },
            { title: '金額', dataKey: '' },
            { title: '調節前', dataKey: '' },
            { title: '調節後', dataKey: '' },
            { title: '執行者', dataKey: '' },
            { title: '備註', dataKey: '' },
        ];
        return (<div>
            <h3>人工調節金額</h3>
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
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-2">搜索</div>
                            <div className="col-md-2">
                                <select name="currency">
                                    <option value="">會員帳號</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <input type="text"/>
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
                            <div className="col-md-4">錢包</div>
                            <div className="col-md-8">
                                <select name="currency">
                                    <option value="">全部</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-2">調節類型</div>
                            <div className="col-md-2">
                                <select name="currency">
                                    <option value="">全部</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <select name="currency">
                                    <option value="">全部</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-2">金額</div>
                            <div className="col-md-2">
                                <input type="number" placeholder="起"/>
                            </div>
                            <div className="col-md-2">
                            <input type="number" placeholder="止"/>
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

export default Adjustment;