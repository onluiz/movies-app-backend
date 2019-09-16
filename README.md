# Movies API

To run a function localy: `serverless invoke local --function list --path mocks/list-event.json`

A serverless app to communicate with The Movie Database API.

The repository is organized as follows:

- `functions` lambda functions to be deployed on aws
- `mocks` resquests mocks to test functions locally
- `libs` functions and files used by the functions
- `static` static values

#### Usage

To use this repo locally you need to have the [Serverless framework](https://serverless.com) installed.

``` bash
$ npm install serverless -g
```

Clone this repo and install the NPM packages.

Run a single API on local.

``` bash
$ serverless invoke local --function list --path event.json
```

Where, `event.json` contains the request event info and looks something like this.

``` json
{
  "requestContext": {
    "authorizer": {
      "claims": {
        "sub": "USER-SUB-1234"
      }
    }
  }
}
```

Finally, run this to deploy to your AWS account.

``` bash
$ serverless deploy
```