/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import React, { Component } from 'react';
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
	
	createColumns() {
		
		const firstRow = this.state.rows[0];
		if ("span" in firstRow) {
			return this.createSpanColumns();
		} else {
			return this.createYearColumns();
		}
	}
	
	render() {
		if (!this.state.isLoaded) {
			return (<div>&nbsp;</div>);
		} else {
			const columns = this.createColumns();
			const width = 40 + 20 * (columns.length - 1);
			const isMaximized = width < 100;
			return (<div className={"react-table-container-0" + (isMaximized ? ' maximized' : '')}>
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
			</div>);
		}
	}
}

export default OrgDataTable;
