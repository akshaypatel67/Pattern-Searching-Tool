function compute_lps(pattern) {
    let lps = [];
    let prefixCount = 0;

    lps.push(0);

    for(let i=1; i<pattern.length; i++) {
        if(pattern[i] == pattern[prefixCount]) {
            prefixCount++;
            lps.push(prefixCount);
        } else if(prefixCount > 0) {
            prefixCount = lps[prefixCount - 1];
            i--;
        } else {
            lps.push(0);
        }
    }

    return lps;
}

function kmp(text, pattern) {
    console.log("kmp");
    text = text.toLowerCase();
    pattern = pattern.toLowerCase();

    let pos = [];

    let lps = compute_lps(pattern);
    let n = text.length;
    let i = 0, j = 0;

    while(i < n) {
        if(text[i] == pattern[j]) {
            if(j == pattern.length - 1) {
                // console.log("pattern found at position " + (i-j+1));
                pos.push(i-j);
            }
            i++;
            j++;
        } else {
            if(j > 0) {
                j = lps[j-1];
            } else {
                i++;
            }
        }
    }

    return pos;
}