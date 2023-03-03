'use strict';

const countUnigueIP = (arr) => new Set(arr).size;

import {listIPv4} from '/ipv4.js';
console.log(countUnigueIP(listIPv4));

