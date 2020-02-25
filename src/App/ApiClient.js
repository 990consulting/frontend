/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import axios from 'axios';

class ApiClient {
  axiosBinding = axios.create({
    //baseURL: 'http://open990demobackend-env-1.3x3uibyjqp.us-east-1.elasticbeanstalk.com/',
    baseURL: process.env.REACT_APP_API_BASE,
    headers: {
      contentType: 'application/json'
    }
  });

  getListOfOrganizationSuggestion = (query) => {
    return this.axiosBinding.get(`/api/search/org/suggest/${query}/`);
  };

  getListOfPeopleSuggestion = (query) => {
    return this.axiosBinding.get(`/api/search/people/suggest/${query}/`);
  };

  searchOrganizationByQuery = (query) => {
    return this.axiosBinding.get(`/api/search/org/simple/${query}/`);
  };

  searchPeopleByQuery = (query) => {
    return this.axiosBinding.get(`/api/search/people/simple/${query}/`);
  };

  searchOrganizationsWithParams = (paramsQuery) => {
    return this.axiosBinding.get(`/api/search/org/${paramsQuery}`);
  };

  searchPeopleWithParams = (paramsQuery) => {
    return this.axiosBinding.get(`/api/search/people/${paramsQuery}`);
  };

  searchDataByQuery = (searchQuery) => {
    return this.axiosBinding.get(`/api/search/data/${searchQuery}`);
  };

  downloadIRSFile = (url) => {
    return this.axiosBinding.get(`/zip${url}/`);
  };

  downloadDataset = (ds) => {
    return this.axiosBinding.get(`/dl/ds/${ds}/`);
  };

  getOrgSkeleton = (ein) => {
    return this.axiosBinding.get(`/api/org/skeleton/${ein}/`);
  };

  getTableData = (tableId) => {
    return this.axiosBinding.get(`/api/org/table/${tableId}/`);
  };

  getFocusOptions = (ntee_major) => {
    return this.axiosBinding.get(`/api/search/options/focus/${ntee_major}/`);
  };
  
  submitContactForm = (address, inquiry, form, name, url) => {
    const params = {
      "address": address,
      "body": inquiry,
      "form": form,
      "name": name,
      "url": url
    };
    return this.axiosBinding.post(`/api/contact/`, params);
  };
  
  subscribeToMailingList = (email, reference) => {
    return axios.post(
      'https://open990.us4.list-manage.com/subscribe/post-json?u=1111052a043165cfad59cf43c&id=e9ee9c8031',
      null,
      {
        params: {
          MERGE0: email,
          MERGE6: reference
        }
      }
    ).catch(e => null);
  };

  doDownload = dataset => {
    return this.downloadDataset(dataset).then(res => {
      // window.open(res.data, "_blank");
      const link = document.createElement('a');
      link.href = res.data;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };
}

const apiClient = new ApiClient();
export default apiClient;
