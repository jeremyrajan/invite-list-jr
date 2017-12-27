[![Build Status](https://travis-ci.org/jeremyrajan/invite-list-jr.svg?branch=master)](https://travis-ci.org/jeremyrajan/invite-list-jr)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![npm version](https://badge.fury.io/js/invite-list-jr.svg)](https://badge.fury.io/js/invite-list-jr)
[![david.dm](https://david-dm.org/jeremyrajan/invite-list-jr.svg)](https://david-dm.org/jeremyrajan/invite-list-jr)

[![NPM](https://nodei.co/npm/invite-list-jr.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/invite-list-jr/)

# invite-list-jr
Find a list of customers who are close to the proximity (in KM). Mainly used to create a invitation list of customers within a certain radius of the event.

# Setup
```
[sudo] npm i -g invite-list-jr
```

# Usage
The program expects 2 inputs while looking for the right information:

* Customer records in a text file (customers.txt) -- one customer per line, JSON-encoded. Example [here](https://github.com/jeremyrajan/invite-list-jr/blob/master/customers.txt).
* Config.json file, with the following information with the structure and information [here](https://github.com/jeremyrajan/invite-list-jr/blob/master/src/Config.d.ts).

Once you have the above information, run the following command:

```
invite-list-jr --f=[location to customers.txt] --c=[location to config.json]
```

This will give you a list of customers within in the proximity defined and number of results.

> For easiness, we have provided a [customers.txt](https://github.com/jeremyrajan/invite-list-jr/blob/master/customers.txt) and [config.json](https://github.com/jeremyrajan/invite-list-jr/blob/master/config.json) example to get started with.

# Calculation
Currently the program uses haversine function to calculate the distance and convert it to KM's. That said, we have an option to change the program to use spherical law of cosines [here](https://github.com/jeremyrajan/invite-list-jr/blob/master/src/index.ts#L21).

For more information regarding the algorithms, please refer to https://en.wikipedia.org/wiki/Great-circle_distance.

# Roadmap
* Allow the algorithm to be configurable.
* Ability to write the results to a file and convert it to .csv for easy export.

# Development

```
git clone git@github.com:jeremyrajan/invite-list-jr.git
npm install
gulp # starts a watcher
```