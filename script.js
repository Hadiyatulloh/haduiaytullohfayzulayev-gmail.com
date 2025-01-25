// let button = document.getElementById("myButton");
// button.addEventListener("click", () => {
//     alert("knopka bosildi!");
//     document.body.style.backgroundColor = "red";
// });


// let form = document.getElementById("myform");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     alert("forma yuborildi");
//     let name = form.querySelector('input').value

//     console.log(name);
// })




// const box = document.getElementById("box");

// box.addEventListener("mousedown", () => {
//     box.style.backgroundColor = "blue"
// })
// box.addEventListener("mouseup", () => {
//     box.style.backgroundColor = "red";
// });// DOM (HTML) to'liq yuklangach, bu kod ishga tushadi
// DOM (HTML) to'liq yuklangach, bu kod ishga tushadi





document.addEventListener("DOMContentLoaded", () => {

    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.textAlign = "center";
    document.body.style.flexDirection = "column";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";
    document.body.style.margin = "0";

    const a = document.getElementById("a");
    a.style.padding = "10px";
    a.style.borderRadius = "10px";
    a.style.border = "none";
    a.style.outline = "none";
    a.style.fontSize = "16px";

    // Butonlar uchun uslub
    const b = document.querySelectorAll("button");
    b.forEach(c => {
        c.style.padding = "10px 20px";
        c.style.borderRadius = "10px";
        c.style.border = "none";
        c.style.cursor = "pointer";
        c.style.backgroundColor = "gray";
        c.style.color = "white";
        c.style.fontSize = "16px";
        c.style.margin = "5px";

        c.addEventListener("mousedown", () => {
            c.style.backgroundColor = "green";
            c.style.color = "white";
        });

        c.addEventListener("mouseup", () => {
            c.style.backgroundColor = "gray";
            c.style.color = "white";
        });
    });

    const d = document.querySelector(".lok");
    d.style.display = "flex";
    d.style.justifyContent = "center";
    d.style.alignItems = "center";
    d.style.gap = "10px";
    d.style.margin = "20px 0";

    let e = document.getElementById("asd");
    e.style.padding = "10px 20px";
    e.style.backgroundColor = "#333";
    e.style.borderRadius = "10px";
    e.style.fontSize = "18px";

    const f = document.getElementById("inputrang");
    f.style.border = "none";
    f.style.backgroundColor = "gray";
    f.style.color = "white";
    f.style.fontSize = "16px";
    f.style.cursor = "pointer";


    const g = document.getElementById("send");
    const h = document.getElementById("minus");
    const i = document.getElementById("plus");



    g.addEventListener("click", () => {
        const j = a.value.trim();
        if (j !== "") {
            e.textContent = j;
        }
    });

    i.addEventListener("click", () => {
        let k = e.textContent;
        k = Number(k);
        k += 1;
        e.textContent = k;
    });

    h.addEventListener("click", () => {
        let k = e.textContent;
        k = Number(k);
        k -= 1;
        e.textContent = k;
    });

    f.addEventListener("input", () => {
        e.style.color = f.value;
    });
});