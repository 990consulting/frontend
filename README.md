To run a dev server against the test API (wide open CORS):
```
REACT_APP_API_BASE=http://open990demobackend-env-1.3x3uibyjqp.us-east-1.elasticbeanstalk.com/ npm start
```

More generally, to run a dev server against any API instance:
```
REACT_APP_API_BASE=https://path/to/api npm start
```

To build a production instance and serve it locally:
```
npm install -g serve
REACT_APP_API_BASE https://path/to/api npm build 
serve -s build
```

Testing API url (wide open CORS): `http://open990demobackend-env-1.3x3uibyjqp.us-east-1.elasticbeanstalk.com/