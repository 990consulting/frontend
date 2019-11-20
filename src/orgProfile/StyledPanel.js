/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import SearchIcon from "@material-ui/icons/Search";
import { withRouter } from 'react-router-dom';


const styles = (theme) => ({
    root: {},
    table: {
        overflowX: 'auto',
        display: 'block'
    },
    expansionDetails: {
        display: 'flex',
        flexDirection: 'column',
        padding: '8px 0 24px 24px'
    },
    expanded: {
        margin: 0,
        background: `${theme.color.white} !important`,
        '& > div:first-child > div:last-child': {
            transform: 'translateY(-50%) rotate(360deg) !important'
        }
    },
    summaryRoot: {
        '&:hover': {
            background: theme.color.background.desaturated
        }
    },
    summaryIcon: {
        color: theme.color.white
    },
    summary: {
        background: theme.color.primary.desaturated,
        '&:hover': {
            backgroundColor: `${theme.color.primary.desaturated} !important`
        }
    },
    summaryContent: {
        textAlign: 'left',
        fontFamily: theme.typography.fontFamily.heading,
        backgroundColor: theme.color.primary.desaturated,
        fontSize: '1.125rem',
        fontStyle: 'normal',
        '&>p': {
            fontWeight: 'bold',
            color: `${theme.color.white} !important`
        }
    },
    content: {
        textAlign: 'left'
    },
    structureWrapper: {
        boxShadow: '0 2px 4px 0 #e3e3e3',
    },
    tableRow: {
        border: `1px solid ${theme.color.grey.standard}`,
        '& td': {
            borderLeft: `1px solid ${theme.color.grey.standard}`,
        }
    },
    periodsTableRow: {
        backgroundColor: theme.color.background.desaturated,
        border: `1px solid ${theme.color.grey.standard}`,
        '& td': {
            textAlign: 'center',
            borderLeft: `1px solid ${theme.color.grey.standard}`,
        }
    },
    tableCell: {
        textAlign: 'center',
        width: '6rem',
        [theme.breakpoints.up('sm')]: {
            wordBreak: 'break-word'
        }
    },
    tableCellName: {
        textAlign: 'left',
        width: 'auto'
    },
    tbody: {
        display: 'inline-table',
        width: '98%'
    },
    details: {
        paddingRight: '0',
        paddingLeft: '12px'
    },
    toplevel:{
      margin: '0',
      color: 'white',
      fontSize: '1.125rem',
    },
    emph:{
      fontWeight: '700',
      fontSize: 24,
    },
    bannerInputIcon: {
      color: theme.color.primary.standard,
      fontSize: '2.5rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '2rem',
      },
    },
});

// TODO This is not very DRY.
class UnstyledPanel extends React.Component {

  searchPeople = (e) => {
    e.stopPropagation();
    const caption = this.props.label;
    this.props.history.push(`/search/people/?name_person=${caption}`);
  }

  render() {
    const {
      classes,
      panelClasses,
      summaryClasses,
      typographyClasses,
      label,
      children,
      startExpanded,
      isTopLevel,
      displayMode,
      id,
      emph,
      spyglass
    } = this.props;
    const panelStyles = isTopLevel ? {} : {'boxShadow': 'none'};
    const detailStyles = {'paddingRight': '0', paddingLeft: '12px'};
    /*const detailChildStyles = {
      'display': 'flex',
      'justify-content': 'center'
    };*/
    const className = isTopLevel ? 'top-level-panel' : '';
    
    return(<Grid item xs={12}>
      <ExpansionPanel
        CollapseProps = {{ unmountOnExit: true }}
        defaultExpanded = { startExpanded }
        classes={panelClasses}
        style={panelStyles}
        className={className}
        
      >
        <ExpansionPanelSummary
          classes={summaryClasses}
          expandIcon={<ExpandMoreIcon />}
          className={"expansion-panel-summary" + (isTopLevel ? ' top-level' : '') + ' ' + displayMode}
          id = {id}
        >
          {isTopLevel?(emph?<h2 className={classes.toplevel} className={classes.emph}>{label}</h2>:<h2 className={classes.toplevel}>{label}</h2>):(emph?<Typography className={classes.heading} className={classes.emph}>{label}</Typography>:<Typography className={classes.heading}>{label}</Typography>)}
          <SearchIcon onClick={this.searchPeople} className={classes.bannerInputIcon} />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails classes={typographyClasses}
                               className="expansion-panel-details"
                               style={detailStyles}
        >
          {children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>);
  }
}

const BaseStyledPanel = withRouter(withStyles(styles)(UnstyledPanel));

class TopLevelPanel extends React.Component {
    render() {
      const {id, classes, label, startExpanded, children, displayMode, emph, spyglass} = this.props;
      
      const panelClasses = {
        expanded: classes.expanded
      };
      
      const summaryClasses = {
        root: classes.summary,
        content: classes.summaryContent
      };
      
      const typographyClasses = {
        root: classes.heading
      };
  
      return <BaseStyledPanel
        panelClasses={panelClasses}
        summaryClasses={summaryClasses}
        typographyClasses={typographyClasses}
        label={label}
        startExpanded={startExpanded}
        isTopLevel={true}
        displayMode={displayMode}
        id={id}
        emph={emph}
        spyglass={spyglass}
      >
        {children}
      </BaseStyledPanel>
    }
}

class InteriorPanel extends React.Component {
  render() {
    const {id, classes, label, startExpanded, children, displayMode, emph, spyglass} = this.props;
    
    const panelClasses = {
      expanded: classes.expanded
    };
    
    const summaryClasses = {
      root: classes.summaryRoot,
      content: classes.content
    };
    
    const typographyClasses = {
      root: classes.heading2
    };
  
    return <BaseStyledPanel
      panelClasses={panelClasses}
      summaryClasses={summaryClasses}
      typographyClasses={typographyClasses}
      label={label}
      startExpanded={startExpanded}
      isTopLevel={false}
      displayMode={displayMode}
      id={id}
      emph={emph}
      spyglass={spyglass}
    >
      {children}
    </BaseStyledPanel>
  }
}

class LeafPanel extends React.Component {
  render() {
    const {id, classes, label, children, startExpanded, displayMode, emph, spyglass} = this.props;
    
    const panelClasses = {
      expanded: classes.expanded
    };
    
    const summaryClasses = {
      root: classes.summaryRoot,
      content: classes.content
    };
    
    const typographyClasses = {
      root: classes.heading
    };
    
    return <BaseStyledPanel
      id = {id}
      panelClasses={panelClasses}
      summaryClasses={summaryClasses}
      typographyClasses={typographyClasses}
      label={label}
      startExpanded={startExpanded}
      isTopLevel={false}
      displayMode={displayMode}
      emph={emph}
      spyglass={spyglass}
    >
      {children}
    </BaseStyledPanel>
  }
}

const StyledLeafPanel = withStyles(styles)(LeafPanel);
const StyledInteriorPanel = withStyles(styles)(InteriorPanel);
const StyledTopLevelPanel = withStyles(styles)(TopLevelPanel);

class StyledPanel extends React.Component {
    render() {
      const {id, displayMode, label, startExpanded, children, emph, spyglass} = this.props;
      if (displayMode==="always") {
        return (<StyledTopLevelPanel emph={emph} spyglass={spyglass} id={id} label={label} startExpanded={startExpanded} displayMode={displayMode}>
          {children}
        </StyledTopLevelPanel>);
      } else if (displayMode==="expand") {
        return (<StyledInteriorPanel emph={emph} spyglass={spyglass} id={id} label={label} startExpanded={startExpanded} displayMode={displayMode}>
          {children}
        </StyledInteriorPanel>);
      } else if (displayMode==="never") {
        return (<StyledLeafPanel emph={emph} spyglass={spyglass} id={id} label={label} startExpanded={startExpanded} displayMode={displayMode}>
          {children}
        </StyledLeafPanel>);
      } else {
        return <div>Something went wrong</div>;
      }
    }
}

export default withStyles(styles)(StyledPanel);
