import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

class FloatingActionButton extends Component {
  render() {
    const { classes, handleClick, open, handleTooltipClose, handleTooltipOpen } = this.props;
    const fabStyle = { backgroundColor: "#FFFF00", color: "#000000" };

    return (
      <Tooltip
        title="Contact Open990"
        id="tooltip-controlled"
        onClose={handleTooltipClose}
        onOpen={handleTooltipOpen}
        open={open}
        disableFocusListener={true}
      >
        <Fab
          className={classes.dialog}
          style={fabStyle}
          size="small"
          onClick={handleClick}
          aria-label="tooltip-controlled"
        >
          <div>?</div>
        </Fab>
      </Tooltip>
    );
  }
}

const styles = () => ({
  dialog: {
    position: "fixed",
    bottom: 20,
    right: 20,
    zIndex: 1000
  }
});

export default withStyles(styles, { withTheme: true })(FloatingActionButton);
