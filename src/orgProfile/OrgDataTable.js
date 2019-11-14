/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React, { Component, Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';
import ReactTable from 'react-table';
import apiClient from 'App/ApiClient';

class OrgDataTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: false,
			rows: null,
			columns: [""].concat(props.periods)
		};

		this.handleOnScroll = this.handleOnScroll.bind(this);
		this.scrollToBegin = this.scrollToBegin.bind(this);
		this.scrollToEnd = this.scrollToEnd.bind(this);
		this.updateTable = this.updateTable.bind(this);
	}
	
	componentDidMount() {
		window.addEventListener('resize', this.updateTable);

		apiClient.getTableData(this.props.table_id)
			.then(
				(result) => {
					let rows = result.data.data;
					this.setState({
						isLoaded: true,
						rows: rows
					}, this.updateTable.bind(this));
				}
			);
	}

	componentWillUnmount () {
		window.removeEventListener('resize', this.updateTable);
	}

	updateTable () {
		if (this.columnsByYear()) {
			document.querySelectorAll('.rt-tr').forEach(row => {
				const column = row.querySelector('.sticky-column');
				const ghostColumn = row.querySelector('.sticky-ghost');
				
				if (column && ghostColumn) {
					column.style.width = `${ghostColumn.offsetWidth}px`;
					column.style.height = `${ghostColumn.offsetHeight}px`;
				}
			});
		}
	}

	createYearColumns() {
		const {periods} = this.props;
		const columns = this.columnsByYear() ? [{
			Header: '',
			width: "40%",
			headerClassName: 'sticky-column',
			className: 'sticky-column',
			accessor: "label"
		}, {
			Header: '',
			headerClassName: 'sticky-ghost',
			className: 'sticky-ghost',
			width: "40%",
			accessor: "label"
		}, {
			Header: '',
			headerClassName: 'sticky-ghost-twin',
			className: 'sticky-ghost-twin',
			width: "40%"
		}] : [{
			Header: '',
			width: "40%",
			accessor: "label"
		}];
		for (let i = 0; i < periods.length; i++) {
			const column = {
				Header: periods[i],
				width: "20%",
				accessor: periods[i],
				headerClassName: 'non-sticky',
				className: 'non-sticky',
				Cell: row => ReactHtmlParser(row.value)
			};
			columns.push(column)
		}
		return columns;
	}

	createSpanColumns() {
		const columns = [{
			Header: '',
			width: "40%",
			accessor: "label"
		}, {
			Header: '',
			width: "60%",
			accessor: "span",
			Cell: row => ReactHtmlParser(row.value)
		}];
		return columns
	}

	columnsByYear () {
		const firstRow = this.state.rows[0];

		return !("span" in firstRow);
	}
	
	createColumns() {
		return this.columnsByYear() ? this.createYearColumns() : this.createSpanColumns();
	}

	handleOnScroll (event) {
		if (this.props.scrollAll)
			document.getElementsByClassName('react-table-container-0').forEach(element => {
				const table = element.querySelector('.rt-table');

				if (element.id !== this.props.table_id && table)
					table.scrollLeft = event.target.scrollLeft;
			});
	}

	scrollTo (x) {
		document.getElementsByClassName('rt-table').forEach(element => {
			element.scrollLeft = x;
		});
	}

	scrollToBegin () {
		this.scrollTo(0);
	}

	scrollToEnd () {
		this.scrollTo(99999999);
	}
	
	render() {
		if (!this.state.isLoaded) {
			return (<div>&nbsp;</div>);
		} else {
			const {periods, table_id} = this.props;
			const columns = this.createColumns();
			const width = 40 + 20 * (columns.length - 1);
			const earliestPeriod = periods[periods.length - 1];
			const latestPeriod = periods[0];

			return (
				<Fragment>
					{this.columnsByYear() && (
						<div className="table-period-control">
							{`Scroll to: `}
							<span 
								onClick={this.scrollToBegin} 
								role="button" 
								onKeyDown={this.scrollToBegin}
							>
								Latest ({latestPeriod})
							</span>
							{`  ·  `}
							<span 
								onClick={this.scrollToEnd} 
								role="button" 
								onKeyDown={this.scrollToEnd}
							>
								Earliest ({earliestPeriod})
							</span>
						</div>
					)}
					<div 
						id={table_id}
						className={"react-table-container-0"} 
						onScroll={this.handleOnScroll}
					>
						<div className="react-table-container-1">
							<div className={"react-table-container-2"}>
								<ReactTable
									columns={this.createColumns()}
									data={this.state.rows}
									showPagination={false}
									minRows={0}
									className={this.columnsByYear() ? 'sticky' : ''}
									scroll={{x: true}}
								/>
							</div>
						</div>
					</div>
				</Fragment>
			);
		}
	}
}

export default OrgDataTable;
