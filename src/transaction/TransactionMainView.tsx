import * as React from "react";
import {Tab} from "semantic-ui-react";
import TransactionListView from "./TransactionListView";
import TransactionTotalView from "./TransactionTotalView";

const panes = [
  {menuItem: "出入总目", render: () => <Tab.Pane><TransactionTotalView /></Tab.Pane>},
  {menuItem: "出入帐目列", render: () => <Tab.Pane><TransactionListView /></Tab.Pane>},
];

const TransactionMainView = () => (
  <Tab panes={panes} />
);

export default TransactionMainView;
