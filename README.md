To run a dev server:

```
REACT_APP_API_BASE=https://path/to/api npm run
```

To build a production instance and serve it locally:
```
npm install -g serve
REACT_APP_API_BASE https://path/to/api npm run
serve -s build
```

Testing API url (wide open CORS): `http://open990demobackend-env-1.3x3uibyjqp.us-east-1.elasticbeanstalk.com/`