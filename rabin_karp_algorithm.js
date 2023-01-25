const BASE = 256;
const MOD = Number.MAX_SAFE_INTEGER;

function rabin_karp(text, pattern) {
    console.log("rabin_karp");
    text = text.toLowerCase();
    pattern = pattern.toLowerCase();

    let n = text.length;
    let m = pattern.length;

    let pos = [];

    let hash_pat = 0, hash_txt = 0, high_pow = 1;

    for(let i=0; i<m; i++) {
        hash_txt = ((BASE * hash_txt) % MOD + text.charCodeAt(i)) % MOD;
        hash_pat = ((BASE * hash_pat) % MOD + pattern.charCodeAt(i)) % MOD;
    }

    for(let i=0; i<m-1; i++) {
        high_pow = (high_pow * BASE) % MOD;
    }

    for(let i=0; i<n-m+1; i++) {
        if(i > 0) {
            hash_txt = ((BASE * (hash_txt - (text.charCodeAt(i-1) * high_pow) % MOD)) % MOD + text.charCodeAt(i+m-1)) % MOD;
        }
        
        if(hash_txt == hash_pat) {
            let flag = true;
            for(let j=0; j<m; j++) {
                if(text[i+j] != pattern[j]) {
                    flag = false;
                    break;
                }
            }

            if(flag == true) {
                // console.log("pattern found at position " + i);
                pos.push(i);
            }
        }
    }
    
    return pos;
}