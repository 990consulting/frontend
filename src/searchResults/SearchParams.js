/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import apiClient from '../App/ApiClient';
import { formOptions } from '../Static/Resources'

import TextField from '@material-ui/core/TextField';

import { SingleSelect, MultipleSelect, components } from "react-select-material-ui";
import debounce from 'lodash/debounce';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";


class SearchParams extends React.Component {

  state = {
      params: [],
      groups: [],
      focusOptions: undefined
  };

  usStates = {
    al: "Alabama",
    ak: "Alaska",
    az: "Arizona",
    ar: "Arkansas",
    ca: "California",
    co: "Colorado",
    ct: "Connecticut",
    de: "Delaware",
    fl: "Florida",
    ga: "Georgia",
    hi: "Hawaii",
    id: "Idaho",
    il: "Illinois",
    in: "Indiana",
    ia: "Iowa",
    ks: "Kansas",
    ky: "Kentucky",
    la: "Louisiana",
    me: "Maine",
    md: "Maryland",
    ma: "Massachusetts",
    mi: "Michigan",
    mn: "Minnesota",
    ms: "Mississippi",
    mo: "Missouri",
    mt: "Montana",
    ne: "Nebraska",
    nv: "Nevada",
    nh: "New Hampshire",
    nj: "New Jersey",
    nm: "New Mexico",
    ny: "New York",
    nc: "North Carolina",
    nd: "North Dakota",
    oh: "Ohio",
    ok: "Oklahoma",
    or: "Oregon",
    pa: "Pennsylvania",
    ri: "Rhode Island",
    sc: "South Carolina",
    sd: "South Dakota",
    tn: "Tennessee",
    tx: "Texas",
    ut: "Utah",
    vt: "Vermont",
    va: "Virginia",
    wa: "Washington",
    wv: "West Virginia",
    wi: "Wisconsin",
    wy: "Wyoming",
    dc: "Washington DC"
  };

  usTerritories = {
    pr: "Puerto Rico",
    vi: "U.S. Virgin Islands",
    as: "American Samoa",
    gu: "Guam",
    mp: "Northern Mariana Islands",
    ae: "Armed Forces Europe",
    ap: "Armed Forces Pacific"
  };

  canadaStates = {
    ab: "Alberta",
    bc: "British Columbia",
    mb: "Manitoba",
    nb: "New Brunswick",
    nl: "Newfoundland and Labrador",
    ns: "Nova Scotia",
    on: "Ontario",
    pe: "Prince Edward Island",
    qc: "Quebec",
    sk: "Saskatchewan",
    nt: "Northwest Territories",
    nu: "Nunavut",
    yt: "Yukon Territory"
  };

  componentDidMount() {
    this.initialize()
  }

  initialize = () => {
    const baseUrl = window.location.pathname;

    var params, groups;
    if(baseUrl.includes("/org")) {
        params = {
            "name_org": {
                label: "Organization Name"
            },
            "state_org": {
                label: "State",
                type: "state"
            },
            "city_org": {
                label: "City"
            },
            "expenses": {
                label: "Expenses",
                type: "range",
                min: 0,
                max: 9,
                prefix: '$'
            },
            "hi_comp": {
                label: "Highest paid",
                type: "range",
                min: 0,
                max: 6,
                prefix: '$'
            },
            "assets": {
                label: "Assets",
                type: "range",
                min: 0,
                max: 9,
                prefix: '$'
            },
            "ntee_major": {
                label: "Cause category",
                type: "cause_area"
            },
            "ntee_code": {
                label: "Focus",
                type: "focus"
            }
        };
    
        groups = {
            "Organization": [ "name_org", "state_org", "city_org" ],
            "divider1": 1,
            "Total expenses": [ "expenses" ],
            "divider2": 1,
            "Highest compensated": [ "hi_comp" ],
            "divider3": 1,
            "Total assets": [ "assets" ],
            "divider4": 1,
            "Cause area": [ "ntee_major", "ntee_code" ]
        }
    } else if(baseUrl.includes("/people")) {
        params = {
            "name_person": {
                label: "Person Name"
            },
            "title_person": {
                label: "Person Title"
            },
            "name_org": {
                label: "Organization Name"
            },
            "state_org": {
                label: "State",
                type: "state"
            },
            "city_org": {
                label: "City"
            },
            "expenses": {
                label: "Expenses",
                type: "range",
                min: 0,
                max: 9,
                prefix: '$'
            },
            "compensation": {
                label: "Compensation",
                type: "range",
                min: 0,
                max: 6,
                prefix: '$'
            },
            "assets": {
                label: "Assets",
                type: "range",
                min: 0,
                max: 9,
                prefix: '$'
            },
            "ntee_major": {
                label: "Cause category",
                type: "cause_area"
            },
            "ntee_code": {
                label: "Focus",
                type: "focus"
            }
        };
    
        groups = {
            "Person": [ "name_person", "title_person" ],
            "Compensation": [ "compensation" ],
            "Organization": [ "name_org", "state_org", "city_org" ]
        }
    } else if(baseUrl.includes("/data")) {
        params = {
            "field": {
                label: "Field"
            },
            "form": {
                label: "Form",
                type: "form"
            }
        };
    
        groups = {
            "": [ "field", "form" ] 
        }
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    for(let param_name in params) {
        const param = params[param_name];
        let value = getParameterByName(param_name);

        if(param.type == 'range') {
            value = {
                min: getParameterByName(param_name + '_min'),
                max: getParameterByName(param_name + '_max')
            }

            if(value.min !== null) {
                value.min = this.paramToLinear(param, value.min)
            } else {
                value.min = param.min
            }

            if(value.max !== null) {
                value.max = this.paramToLinear(param, value.max)
            } else {
                value.max = param.max
            }
        }

        if(value !== null) {

            if(param_name === 'ntee_code') {
                value = value.split(',')
            }

            param.value = value;

            if(param_name === 'ntee_major') {
                this.loadFocusOptions(value)
            }
        }
    }

    this.setState({ params, groups })
  }

  loadFocusOptions = (category) => {
    if(this.state.params.ntee_code) {
        this.state.params.ntee_code.value = null
    }
    
    this.setState({focusOptions: null});
    apiClient.getFocusOptions(category).then(response => {
        this.setState({focusOptions: response.data})
    })
  };

  onParamChange = (e) => {
    //console.log('e', e)

    const name = e.target.name;

    let value = e.target.value;

    const { params } = this.state;

    let newParams = Object.assign(params,
        {[name]: Object.assign(params[name], { value })}
    );

    this.setState({
        params: newParams
    });

    if(name === 'ntee_major') {
        this.loadFocusOptions(value)
    }

    this.search()

    
  };

  search = debounce(() => {
    const { params } = this.state;
    const baseUrl = window.location.pathname;
    const paramString = Object.keys(params).filter(param_name =>
        params[param_name].value === 0 || params[param_name].value
    ).map(param_name => {
        if(params[param_name].value.constructor === Array) {
            return params[param_name].value.length && (param_name + "=" + params[param_name].value.join(','))
        } else if(params[param_name].value.min !== undefined && params[param_name].value.max !== undefined) {
            const q = []
            if(params[param_name].value.min != params[param_name].min) {
                q.push(`${param_name}_min=${this.linearToParam(params[param_name], params[param_name].value.min)}`)
            } 
            if(params[param_name].value.max != params[param_name].max) {
                q.push(`${param_name}_max=${this.linearToParam(params[param_name], params[param_name].value.max)}`)
            }
            return q.length > 0 ? q.join('&') : ''
        } else {
            return param_name + "=" + params[param_name].value
        }
    }).filter(x => x).join("&");

    // if(paramString.length > 0) {
        this.props.onQueryMade && this.props.onQueryMade()
    // }

    const {history} = this.props;
    history.push(baseUrl + "?" + paramString);

    const { history:{location:{search}}, fetchResults } = this.props;

    fetchResults(search).then(() => this.hideSidebar())
  }, 700)

  renderOptionList = (list) => {
    const res = [];

    for(const key in list) {
        const value = list[key];

        res.push({
            value: key,
            label: value
        })
    }

    return res
  };

  render() {
    const elems = [];

    const { params, groups } = this.state;

    for(let group_name in groups) {
        if(group_name.startsWith("divider")) {
            // elems.push(<hr/>)
        } else { 
            // elems.push(<h5>{group_name}</h5>);
            groups[group_name].forEach(param_name => {

                const formGroup = [];

                const param = params[param_name];
                const label = param.label;
                

                const type = param.type || "text";
                const value = param.value;

                var options;

                switch(type) {
                    case "text":
                        formGroup.push(<label>{label}</label>);
                        // formGroup.push(<input type="text" name={param_name} value={value} onChange={this.onParamChange}/>);
                        formGroup.push(<TextField
                            style={{marginTop: '0'}}
                            name={param_name}
                            // label={label}
                            type="search"
                            // multiline
                            // rowsMax="4"
                            onChange={this.onParamChange}
                            margin="normal"
                            value={value}
                            />)
                        break;
                    case "number":
                        formGroup.push(<input type="number" name={param_name} value={value} onChange={this.onParamChange}/>);

                        break;
                    case "state":
                        const { usStates, usTerritories, canadaStates, renderOptionList } = this;

                        formGroup.push(<label>{label}</label>);


                        options = [
                            { value: "", label: "All States" }
                        ].concat(
                            renderOptionList(usStates)
                        ).concat([
                            { value: "d1", label: "--------------------------", isDisabled: true },
                            { value: "d2", label: "U.S. TERRITORIES", isDisabled: true }
                        ]).concat(
                            renderOptionList(usTerritories)
                        ).concat([
                            { value: "d3", label: "--------------------------", isDisabled: true },
                            { value: "d4", label: "CANADA", isDisabled: true }
                        ]).concat(
                            renderOptionList(canadaStates)
                        )

                        formGroup.push(<div className="state-select">
                            <SingleSelect placeholder={label} label={label} name={param_name} value={(options.find(x => (x.value||"") == (value||"")))||""} options={options} onChange={e => this.onParamChange({target: {
                                name: param_name,
                                value: e
                            }})} />
                        </div>)

                        break;
                    case "cause_area":
                        

                        const opts = [
                            <option value=""> All categories</option>
                            ,<option value="a">Arts &amp; culture </option>
                            ,<option value="b">Education</option>
                            ,<option value="c">Environment</option>
                            ,<option value="d">Animal-related</option>
                            ,<option value="e">Health care</option>
                            ,<option value="f">Mental health</option>
                            ,<option value="g">Diseases &amp; disorders</option>
                            ,<option value="h">Medical research</option>
                            ,<option value="i">Crime &amp; legal</option>
                            ,<option value="j">Employment</option>
                            ,<option value="k">Food &amp; agriculture</option>
                            ,<option value="l">Housing</option>
                            ,<option value="m">Safety &amp; disaster</option>
                            ,<option value="n">Recreation &amp; sports</option>
                            ,<option value="o">Youth development</option>
                            ,<option value="p">Human services</option>
                            ,<option value="q">International</option>
                            ,<option value="r">Civil rights &amp; social action</option>
                            ,<option value="s">Community improvement</option>
                            ,<option value="t">Philanthropy</option>
                            ,<option value="u">Natural science &amp; tech</option>
                            ,<option value="v">Social science</option>
                            ,<option value="w">Public benefit</option>
                            ,<option value="x">Religion</option>
                            ,<option value="y">Associations &amp; membership</option>
                            ,<option value="z">Unclassified</option>
                        ]

                        options = opts.map(opt => ({ value: opt.props.value, label: opt.props.children }))

                        formGroup.push(<label>{label}</label>);

                        formGroup.push(<div className="category-select">
                            <SingleSelect placeholder={label} 
                            // label={label} 
                            name={param_name} value={(options.find(x => (x.value || "") == (value || "")))||""} options={options} onChange={e => this.onParamChange({target: {
                                name: param_name,
                                value: e
                            }})} />
                        </div>)

                        break;
                    case "focus":
                        formGroup.push(<label>{label}</label>);

                        if(!this.state.focusOptions) {
                            formGroup.push(<div style={{pointerEvents: 'none'}}>
                                <SingleSelect placeholder={label} 
                                // label={label} 
                                name={param_name} value={{label: "Select category first", value: ""}} options={[]} />
                            </div>)
                        } else {

                            formGroup.push(<div className="multiple-select">
                                <MultipleSelect 
                                    // label={label} 
                                    name={param_name} value={(value && (this.state.focusOptions.filter(x => value.includes(x.value || ""))))||[]} options={
                                        this.state.focusOptions
                                    } onChange={e => this.onParamChange({target: {
                                        name: param_name,
                                        value: e
                                }})} />
                                {(!value || !value.length) && <div className="placeholder">
                                    Select a focus
                                </div>}
                            </div>)
                        }

                        break;
                    case "form":

                        formGroup.push(<label>{label}</label>);

                        options = [
                            { value: "", label: "Not Selected"}
                        ].concat(formOptions)

                        formGroup.push(<SingleSelect placeholder={label} 
                            // label={label} 
                            name={param_name} value={(options.find(x => (x.value || "") == (value || "")))||""} options={options} onChange={e => this.onParamChange({target: {
                            name: param_name,
                            value: e
                        }})} />)
                        break;
                    
                    case "range":

                        formGroup.push(<label>{label}</label>);

                        formGroup.push(<div>
                            <InputRange
                            allowSameValues={true}
                            minValue={param.min}
                            maxValue={param.max}
                            value={value || {min: param.min, max: param.max}}
                            onChange={e => this.onParamChange({target: {
                                name: param_name,
                                value: e
                            }})}
                            step={0.0001}
                            formatLabel={value => ""}
                             />
                            <div className="range-labels">
                                <div className="min">{this.linearToLabel(param, value.min)}</div>
                                <div className="min">{this.linearToLabel(param, value.max)}</div>
                            </div>
                        </div>)

                             

                        break;

                }

                elems.push(<div className="form-group">
                    {formGroup}
                </div>)
            })
        }
    }

    return <div id="search-params" onClick={this.props.onClick}>
        <h2>{this.props.sidebarTitle}</h2>
        
        {elems}

        {/* <button onClick={this.search}>Search</button> */}
    </div>
  }

  linearToLog(x) {
    if(x == 0) {
        return 0
    } else {
        return Math.round(Math.pow(10, x))
    }
  }

  numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  linearToLabel(param, value) {
      if(param.min == value) {
          return 'None'
      } else if(param.max == value) {
          return 'Max'
      } else {
          return `${param.prefix}${this.numberWithCommas(this.linearToLog(value))}`
      }
  }

  linearToParam(param, value) {
    if(param.min == value) {
        return '0'
    } else if(param.max == value) {
        return 'max'
    } else {
        //console.log('here', value, this.linearToLog(value))
        return this.linearToLog(value)
    }
  }

  paramToLinear(param, value) {
      if(value == 'max') {
          return param.max;
      } else if(value == 0) {
          return 0;
      } else {
          return Math.round(Math.log10(parseInt(value)))
      }
  }

  hideSidebar = () => {
    if(window.getComputedStyle(document.getElementsByClassName("mobile-sidebar")[0]).display != "none") {
      document.querySelector("svg[data-icon=bars]").parentElement.click()
    }
  }
}

export default withRouter(SearchParams)