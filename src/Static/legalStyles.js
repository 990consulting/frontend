/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

export const styles = (theme) => ({
  root: {
    ...theme.open990.pageContainer
  },
  policyHeader: {
    ...theme.open990.pageTitle
  },
  staticMainContent: {
    ...theme.open990.pageContent,
    '& a': {
      ...theme.open990.link,
      textDecoration: 'none'
    }
  },
  chapterTitle: {
    fontWeight: 600,
  },
  contact: {
    fontWeight: 600
  },
});
