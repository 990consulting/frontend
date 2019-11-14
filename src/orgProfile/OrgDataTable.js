/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
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
	}
	
	componentDidMount() {
		apiClient.getTableData(this.props.table_id)
			.then(
				(result) => {
					let rows = result.data.data;
					this.setState({
						isLoaded: true,
						rows: rows
					});
				}
			);
	}

	createYearColumns() {
		const {periods} = this.props;
		const columns = [{
			Header: '',
			width: "40%",
			accessor: "label"
		}];
		for (let i = 0; i < periods.length; i++) {
			const column = {
				Header: periods[i],
				width: "20%",
				accessor: periods[i],
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
				if (element.id !== this.props.table_id)
					element.scrollLeft = event.target.scrollLeft;
			});
	}

	scrollTo (x) {
		document.getElementsByClassName('react-table-container-0').forEach(element => {
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
			const isMaximized = width < 100;
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
								Earliest ({earliestPeriod})
							</span>
							{`  --  `}
							<span 
								onClick={this.scrollToEnd} 
								role="button" 
								onKeyDown={this.scrollToEnd}
							>
								Latest ({latestPeriod})
							</span>
						</div>
					)}
					<div 
						id={table_id}
						className={"react-table-container-0" + (isMaximized ? ' maximized' : '')} 
						onScroll={this.handleOnScroll}
					>
						<div className="react-table-container-1" style={{width: (isMaximized ? 100 : width) + '%'}}>
							<div className={"react-table-container-2" + (isMaximized ? ' maximized' : '')}>
								<ReactTable
									columns={this.createColumns()}
									data={this.state.rows}
									showPagination={false}
									minRows={0}
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
