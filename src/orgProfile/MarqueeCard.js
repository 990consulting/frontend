/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';
import { styles } from 'orgProfile/marqueeCardStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';



const MarqueeCard = ({
  classes,
  marquees
}) => {
  const marqueeSimple = (marquees) => {
    const { label, lines } = marquees[0];
    return (
      <Grid item xs={12} className={classes.simpleWrapper}>
        <h2>{label}</h2>
        {lines.map((line, index) => {
          return (
            <p key={`line-text-${index}`}>
              {line}
            </p>
          )
        })}
      </Grid>
    );
  };

  const marqueeTables = (marquees) => {
    return marquees.map((marquee, index) => {
      const { label, lines } = marquee;
      return (
        <Grid item xs={12} md={6} key={`table-marquee-${index}`}>
          <Grid container justify="center">
            <Grid
              item
              xs={12}
              md={11}
              className={classes.tableWrapper}>
              <h2>
                {label}
              </h2>
              {lines.map((line, index) => {
                return (
                  <p
                      key={`line-text-${index}`}
                      dangerouslySetInnerHTML={{__html: line}}
                  />
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      );
    });
  };

  const renderContent = (marquees) => {
    switch (marquees.length) {
      case 0:
        return null;
      case 1:
        return marqueeSimple(marquees);
      default:
        return marqueeTables(marquees);
    }
  };

  return (
    <Grid container justify="center">
      {renderContent([...marquees])}
    </Grid>
  )
}
  ;

export default withStyles(styles)(MarqueeCard);