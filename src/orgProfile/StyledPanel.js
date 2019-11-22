/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';
import ReactDOM from 'react-dom'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import SearchIcon from "@material-ui/icons/Search";
import { withRouter } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';


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
        color: '#6839d3',
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
    bannerInputIcon: {
      fontSize: '1.5rem',
      margin: 'auto 10px',
      [theme.breakpoints.down('xs')]: {
        margin: 'auto 0',
      },
      '&:hover': {
        cursor: 'pointer'
      }
    },
    spyglassDiv: {
      display: 'flex',
      paddingRight : '0 !important'
    },
    snippetDiv_left: {
      [theme.breakpoints.down('xs')]: {
        width: 5
      },
    },
    snippetDiv_right: {
      [theme.breakpoints.down('xs')]: {
        width: 15
      },
    },
    showButtonDiv: {
      textAlign: 'left',
    },
    showButton: {
      marginLeft: 50,
      fontFamily: theme.typography.fontFamily.main,
      backgroundColor: theme.color.secondary,
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: 12,
      padding: 10,
      border: 0,
      '&:hover': {
        cursor: 'pointer'
      },
      '&:focus': {
        outline: 'none'
      }
    },
    truncate: {
      marginTop: -20,
      marginBottom: 25,
    },
    dot: {
      height: 5,
      width: 5,
      backgroundColor: theme.color.primary.desaturated,
      borderRadius: '50%',
      display: 'block',
      margin: '0 70px 5px',
    }
});

// TODO This is not very DRY.
class UnstyledPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      position : null,
    })
  }
  componentDidMount() {
    const position = ReactDOM
                    .findDOMNode(this.refs['UniqueElementIdentifier'])
                    .getBoundingClientRect();
    this.setState({
      position,
    })
    
  }

  searchPeople = (e) => {
    e.stopPropagation();
    const caption = this.props.label;
    this.props.history.push(`/search/people/?name_person=${caption}`);
  }

  onShowAll = () => {
    const {position} = this.state;
    this.props.onShowAll();
    if(this.props.showAll)
      window.scrollTo(0, position.y)
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
      spyglass,
      showbutton,
      showAll
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
          className={"expansion-panel-summary" + (isTopLevel ? ' top-level' : '') + ' ' + displayMode }
          id = {id}
        >
          {isTopLevel?<h2 className={classes.toplevel} ref='UniqueElementIdentifier'>{label}</h2>:<Typography className={classes.heading} ref='UniqueElementIdentifier'>{label}</Typography>}
          {spyglass &&
            <div className={classes.spyglassDiv}>
              <div onClick={(e)=>{e.stopPropagation()}} className={classes.snippetDiv_left}></div>
              <Tooltip title={`Search for ${label} at other organizations`} aria-label={`Search for ${label} at other organizations`}>
                <div id="spyglass">
                  <SearchIcon onClick={this.searchPeople} id="spyglass" className={classes.bannerInputIcon}  />
                </div>
              </Tooltip>
              <div onClick={(e)=>{e.stopPropagation()}} className={classes.snippetDiv_right}></div>
            </div>
          }
        </ExpansionPanelSummary>
        <ExpansionPanelDetails classes={typographyClasses}
                               className="expansion-panel-details"
                               style={detailStyles}
        >
          {children}
        </ExpansionPanelDetails>
          { (emph && !showAll && showbutton) &&
            <div className={classes.truncate}>
              <span className={classes.dot}></span>
              <span className={classes.dot}></span>
              <span className={classes.dot}></span>
            </div>
          }
          <div className={classes.showButtonDiv}>
            {(emph && showbutton)?<button className={classes.showButton} onClick={this.onShowAll}>{showAll?'Show fewer':'Show all'}</button>:''}
          </div>
        }
      </ExpansionPanel>
    </Grid>);
  }
}

const BaseStyledPanel = withRouter(withStyles(styles)(UnstyledPanel));

class TopLevelPanel extends React.Component {
    render() {
      const {id, classes, label, startExpanded, children, displayMode, emph, spyglass, showAll, showbutton} = this.props;
      
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
        showAll={showAll}
        showbutton={showbutton}
        onShowAll = {this.props.onShowAll}
      >
        {children}
      </BaseStyledPanel>
    }
}

class InteriorPanel extends React.Component {
  render() {
    const {id, classes, label, startExpanded, children, displayMode, emph, spyglass, showAll, showbutton} = this.props;
    
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
      showAll={showAll}
      showbutton={showbutton}
      onShowAll = {this.props.onShowAll}
    >
      {children}
    </BaseStyledPanel>
  }
}

class LeafPanel extends React.Component {
  render() {
    const {id, classes, label, children, startExpanded, displayMode, emph, spyglass, showAll, showbutton} = this.props;
    
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
      showAll={showAll}
      showbutton={showbutton}
      onShowAll = {this.props.onShowAll}
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
      const {id, displayMode, label, startExpanded, children, emph, spyglass, showAll, showbutton} = this.props;
      if (displayMode==="always") {
      const {id, displayMode, label, startExpanded, children, emph, spyglass, showAll} = this.props;
        return (<StyledTopLevelPanel emph={emph} spyglass={spyglass} id={id} label={label} startExpanded={startExpanded} displayMode={displayMode} showAll={showAll} showbutton={showbutton} onShowAll = {this.props.onShowAll}>
          {children}
        </StyledTopLevelPanel>);
      } else if (displayMode==="expand") {
        return (<StyledInteriorPanel emph={emph} spyglass={spyglass} id={id} label={label} startExpanded={startExpanded} displayMode={displayMode} showAll={showAll} showbutton={showbutton} onShowAll = {this.props.onShowAll}>
          {children}
        </StyledInteriorPanel>);
      } else if (displayMode==="never") {
        return (<StyledLeafPanel emph={emph} spyglass={spyglass} id={id} label={label} startExpanded={startExpanded} displayMode={displayMode} showAll={showAll} showbutton={showbutton} onShowAll = {this.props.onShowAll}>
          {children}
        </StyledLeafPanel>);
      } else {
        return <div>Something went wrong</div>;
      }
    }
}

export default withStyles(styles)(StyledPanel);
