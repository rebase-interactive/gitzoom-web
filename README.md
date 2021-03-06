# GitZoom [![CircleCI](https://circleci.com/gh/rebase-interactive/gitzoom-web.svg?style=svg)](https://circleci.com/gh/rebase-interactive/gitzoom-web)


This README outlines the details of collaborating on this Ember application.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd gitzoom`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

GitZoom is deployed to AWS via ember-cli-deploy using the approach outlined in the following blog posts:

- [Deploying Ember to AWS CloudFront using ember-cli-deploy](http://kevin.pfefferle.co/2015/11/01/deploying-ember-to-aws-cloudfront-using-ember-cli-deploy/)
- [Introducing ember-cli-deploy-cloudfront and ember-cli-deploy-aws-pack](http://kevin.pfefferle.co/2015/11/10/introducing-ember-cli-deploy-cloudfront-and-ember-cli-deploy-aws-pack/)
- [Deploying Ember to AWS Cheat Sheet](http://kevin.pfefferle.co/2015/11/14/deploying-ember-to-aws-cheat-sheet/)

The configuration keys necessary for AWS deployment can be found in `.env.deploy.production.sample`. Copy this sample file to `.env.deploy.production` and insert values for each key before deployment.

To deploy a new version to AWS, run the following command:

```bash
ember deploy production
```

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Copyright

Copyright &copy; 2018 Rebase Interactive. All rights reserved.  
