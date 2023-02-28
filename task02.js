'use strict';

const countUnigueIP = (arr) => {
    const arrOfUniqueIP = [...new Set(arr)];
    return arrOfUniqueIP.length;
}
