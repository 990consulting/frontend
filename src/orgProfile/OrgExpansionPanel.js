/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import OrgDataTable from './OrgDataTable';
import StyledPanel from "./StyledPanel";
import Grid from '@material-ui/core/Grid';

const styles = () => ({});

const spyglassBoolean = true; //set the value as false to shut off the spyglass

class OrgExpansionPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = ({
            showAll : false,
            listLength : 0,
        })

    }

    componentDidMount() {
        let childContent = this.props.raw.content;
        let listLength = childContent.length;
        this.setState({
            listLength
        })
    }

    constructTableChild(childData) {
        let table_id = childData.table_id;
        return (
          <OrgDataTable
            key={childData.table_id}
            table_id={table_id}
            periods={this.props.periods}
            scrollAll={this.props.scrollAllTables}
          />
        );
    }
   
    constructPanelChild(childData, emph, spyglass) {
        return (
          <Grid key = {childData.card_id} item xs={12}>
              <Grid container spacing={24}>
                  <Grid item xs={12}>
                      <OrgExpansionPanel
                        scrollAllTables
                        raw={childData}
                        periods={this.props.periods}
                        emph={emph}
                        spyglass={spyglass}
                      />
                  </Grid>
              </Grid>
          </Grid>
        );
    }
    /*constructPanelChild(childData) {
        return (<div></div>);
    }*/
    
    constructChild(childData) {
        let childType = childData["type"]; // Is "type" a protected keyword in Javascript?
        let emph = childData["emph"] ? true : false ; // check if the emph is true.
        let spyglass = childData["spyglass"] ? true : false ; // check if the spyglass is true.
        if(!spyglassBoolean) spyglass = false;
        if (childType === "table") {
            return this.constructTableChild(childData);
        } else if (childType === "nested") {
            return this.constructPanelChild(childData, emph, spyglass);
        }
        throw new Error("Unexpected child type '" + childType + "'");
        
        
    }

    constructChildren() {
        const {showAll} = this.state;
        let childContent = this.props.raw.content;
        let children = [];
        let childrenLength = childContent.length;
        if(this.props.emph && (childrenLength > 3) && (!showAll)) {
            childrenLength = 3;
        }
        for (let i = 0; i < childrenLength; i++) {
            let child = this.constructChild(childContent[i]);
            children.push(child)
        }
        return children;
    }

    getLabel() {
        return this.props.raw.body;
    }
    
    startExpanded() {
        return "toc" in this.props.raw || this.props.emph;
    }

    onShowAll = () => {
        const {showAll} = this.state;
        this.setState({
            showAll : !showAll,
        })
    }
    
    constructExpansionPanel() {
        const {card, card_id} = this.props.raw;
        const {showAll, listLength} = this.state;
        return (
          <StyledPanel id={card_id} label={this.getLabel()} startExpanded={this.startExpanded()} displayMode={card} emph={this.props.emph} spyglass={this.props.spyglass} showAll={showAll} listLength={listLength} onShowAll = {this.onShowAll}>
              <Grid container spacing={24}>
                  {this.constructChildren()}
              </Grid>
          </StyledPanel>
        );
    }
    
    render() {
        return (<div>{this.constructExpansionPanel()}</div>);
    }
}

export default withStyles(styles)(OrgExpansionPanel);
