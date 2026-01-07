function maxDepth(s) {
    let deep_max = 0;
    let deep_curr = 0;
    let bal = 0; 

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === '[') {
            deep_curr++;
            bal++;
            if (deep_curr > deep_max) {
                deep_max = deep_curr;
            }
        } else if (char === ']') {
            deep_curr--;
            bal--;

            if (deep_curr < 0) {
                return -1;
            }
        }
    }

    if (bal !== 0) {
        return -1;
    }

    return deep_max;
}

module.exports = maxDepth