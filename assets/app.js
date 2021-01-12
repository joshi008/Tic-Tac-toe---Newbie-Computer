var box1 = [-1, -1, -1]
var box2 = [-1, -1, -1]
var box3 = [-1, -1, -1]

function moved(e) {
    const boxid = e.target.id;
    let box = document.getElementById(boxid);

    if (box.innerHTML === "") {
        box.innerHTML = "X";
        mark_list(boxid, 1);
        let p = result(1);

        if (p == -1)
            computer_move();
    }
    else {
        return;
    }
}

function mark_list(s, n) {
    switch (s) {
        case "box11": box1[0] = n;
            break;
        case "box12": box1[1] = n;
            break;
        case "box13": box1[2] = n;
            break;
        case "box21": box2[0] = n;
            break;
        case "box22": box2[1] = n;
            break;
        case "box23": box2[2] = n;
            break;
        case "box31": box3[0] = n;
            break;
        case "box32": box3[1] = n;
            break;
        case "box33": box3[2] = n;
            break;
    }
}

function computer_move() {
    // kaise banau algo computer ke liye
    let boxid;

    if (box2[1] == -1) {
        box2[1] = 0;
        boxid = "box22";
    }
    else {

        var c = false;
        for (var i = 0; i < 3; i++) {
            if (box2[i] == -1) {
                box2[i] = 0;
                if (i == 0) boxid = "box21";
                if (i == 1) boxid = "box22";
                if (i == 2) boxid = "box23";
                c = true;
                break;
            }
        }
        if (!c) {
            for (var i = 0; i < 3; i++) {
                if (box1[i] == -1) {
                    box1[i] = 0;
                    if (i == 0) boxid = "box11";
                    if (i == 1) boxid = "box12";
                    if (i == 2) boxid = "box13";
                    c = true;
                    break;
                }
            }
        }
        if (!c) {
            for (var i = 0; i < 3; i++) {
                if (box3[i] == -1) {
                    box3[1] = 0;
                    boxid = "box3" + (i + 1);
                    c = true;
                    break;
                }
            }
        }
    }

    let box = document.getElementById(boxid);
    box.innerHTML = "O";

    result(0);
}

function result(s) {
    let h2 = document.getElementById("result");
    if ((box1[0] == box1[1] && box1[1] == box1[2] && box1[0] == s) ||
        (box2[0] == box2[1] && box2[1] == box2[2] && box2[0] == s) ||
        (box3[0] == box3[1] && box3[1] == box3[2] && box3[0] == s) ||
        (box1[0] == box2[0] && box2[0] == box3[0] && box3[0] == s) ||
        (box1[1] == box2[1] && box2[1] == box3[1] && box3[1] == s) ||
        (box1[2] == box2[2] && box2[2] == box3[2] && box3[2] == s) ||
        (box1[0] == box2[1] && box2[1] == box3[2] && box3[2] == s) ||
        (box1[2] == box2[1] && box2[1] == box3[0] && box3[0] == s)
    ) {

        if (s == 1) {
            h2.innerHTML = "Great you won!!!";
            let g = document.getElementById("game");
            g.style.display = "none";
            return 1;
        }
        else {
            h2.innerHTML = "At last computer is really genius";
            let g = document.getElementById("game");
            g.style.display = "none";
            return 1;
        }
    }

    if (box1[0] != -1 && box1[1] != -1 && box1[2] != -1 && box2[0] != -1 && box2[1] != -1 && box2[2] != -1 && box3[0] != -1 && box3[1] != -1 && box3[2] != -1) {
        h2.innerHTML = "Neck to neck game break in a tie!"
        return 0;
    }
    return -1;
}


function reset() {
    let g = document.getElementById("game");
    g.style.display = "grid";

    let h2 = document.getElementById("result");
    h2.innerHTML = ""

    box1 = [-1, -1, -1]
    box2 = [-1, -1, -1]
    box3 = [-1, -1, -1]

    let box;
    boxid = "box11";
    box = document.getElementById(boxid);
    box.innerHTML = "";

    boxid = "box12";
    box = document.getElementById(boxid);
    box.innerHTML = "";

    boxid = "box13";
    box = document.getElementById(boxid);
    box.innerHTML = "";

    boxid = "box21";
    box = document.getElementById(boxid);
    box.innerHTML = "";

    boxid = "box22";
    box = document.getElementById(boxid);
    box.innerHTML = "";

    boxid = "box23";
    box = document.getElementById(boxid);
    box.innerHTML = "";

    boxid = "box31";
    box = document.getElementById(boxid);
    box.innerHTML = "";

    boxid = "box32";
    box = document.getElementById(boxid);
    box.innerHTML = "";

    boxid = "box33";
    box = document.getElementById(boxid);
    box.innerHTML = "";
}