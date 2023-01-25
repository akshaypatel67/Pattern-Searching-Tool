function highlight(text, pattern, pos)
{
    console.log(text);
    let j = 0;
    let output = "";

    for(let i=0; i<text.length; i++) {
        if(j<pos.length && i == pos[j]) {
            output += "<span class='highlight'>";
        }

        if(i == pos[j] + pattern.length) {
            output += "</span>";
            j++;
        }

        output += text[i];
    }

    document.getElementById("divText").innerHTML = output;
}

function search() {
    let pattern = document.getElementById("txtPattern").value;
    let text = document.getElementById("txtText").value;
    let algo = document.getElementById("algorithm").value;
    let ans = [];

    document.getElementById("divText").innerHTML = text;
    
    if(algo == "kmp")
        ans = kmp(text, pattern);
    else
        ans = rabin_karp(text, pattern);

    highlight(text, pattern, ans);
}

let btn = document.getElementById("btnSearch");
btn.addEventListener("click", search);