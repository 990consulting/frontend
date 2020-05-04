## Running locally (without Docker)
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

## Running with Docker with demo API
```
docker build -t open990 --target runner .
docker run -p 8080:80 -d open990
```

### Specifying a custom API path
Note: `--build-arg` will work with any of the stages (`builder`, `runner`, or `artifact`)

```
docker build -t open990 --target runner --build-arg REACT_APP_API_BASE=https://path/to/api .
docker run -p 8080:80 -d open990
```

## Creating a local build artifact
```
docker build -t open990-artifact --target artifact .
docker run -v ${PWD}:/usr/artifact open990-artifact
```

## Testing API url (wide open CORS): 
http://open990demobackend-env-1.3x3uibyjqp.us-east-1.elasticbeanstalk.com/