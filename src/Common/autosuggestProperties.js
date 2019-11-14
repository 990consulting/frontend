/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */
import apiClient from 'App/ApiClient';

export const orgASProps = {
  route: apiClient.orgSearch,
  slug: "name_org",
  placeholder: "Name of organization...",
  suggestion: apiClient.getListOfOrganizationSuggestion,
  baseUrl: "/search/org/",
  mobileSearchSuggestions: 3,
  desktopSearchSuggestion: 10
};

export const peopleASProps = {
  route: apiClient.peopleSearch,
  slug: "name_person",
  placeholder: "Name of person...",
  suggestion: apiClient.getListOfPeopleSuggestion,
  baseUrl: "/search/people/"
};
