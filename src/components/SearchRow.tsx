import * as React from "react";

export enum InputType {
  Select = "select",
  Input = "input"
}

interface ISelectOption {
  title: string;
  value: string;
}

export interface IRowData {
  inputType: InputType;
  attributeValue: string;
  attributeName: string;
  attributeType?: string;
  selectOptionList?: ISelectOption[];
}

interface ISearchFormProps {
  title: string;
  rowDataList: IRowData[];
  searchFormData: object;
}

interface ISearchFormState {
  searchFormData: object;
}

class SearchRow extends React.Component<ISearchFormProps, ISearchFormState> {
  constructor(props: ISearchFormProps) {
    super(props);
    this.state = { searchFormData: props.searchFormData };
  }
  public render() {
    const title = this.props.title;
    const rowDataList = this.props.rowDataList;
    return (
      <div className="col-md-6">
        <div className="row">
          <div className="col-md-4">{title}</div>
          {rowDataList.map(item => {
            const classTag = "col-md-" + 8 / rowDataList.length;
            if (item.inputType === "input") {
              return (
                <div className={classTag} key={item.attributeName}>
                  {this.renderInput(item)}
                </div>
              );
            } else {
              return (
                <div className={classTag} key={item.attributeName}>
                  {this.renderSelect(item)}
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }

  private renderInput = (columnData: IRowData) => {
    return (
      <input
        type={columnData.attributeType}
        name={columnData.attributeName}
        value={columnData.attributeValue}
        onChange={this.changeInput}
      />
    );
  };

  private renderSelect = (columnData: IRowData) => {
    return (
      <select
        name={columnData.attributeName}
        value={columnData.attributeValue}
        onChange={this.changeInput}
      >
        {columnData.selectOptionList &&
          this.renderSelectOption(columnData.selectOptionList)}
      </select>
    );
  };

  private changeInput = (event: any) => {
    const name = event.target.name;
    this.state.searchFormData[name] = event.target.value;
    this.setState({ searchFormData: this.state.searchFormData });
  };

  private renderSelectOption = (selectOption: ISelectOption[]) => {
    return selectOption.map(item => (
      <option value={item.value} key={item.value}>
        {item.title}
      </option>
    ));
  };
}

export default SearchRow;
