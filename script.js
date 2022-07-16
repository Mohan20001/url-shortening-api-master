let user_input = document.getElementById("user-input");
let enter_btn = document.getElementById("enter-btn");
let links_list = document.getElementById("links-list")

let base_url = "https://api.shrtco.de/v2/shorten?url=";




function createComponent(original_link, shorten_link){
    let row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("link-c");
    row.classList.add("shadow-sm");
    row.classList.add("p-3");
    row.classList.add("mb-3");
    let col_1 = document.createElement("div");
    col_1.classList.add("col-12");
    col_1.classList.add("col-sm-12");
    let col_2 = document.createElement("div");
    col_2.classList.add("col-12");
    col_2.classList.add("col-sm-12");
    col_2.classList.add("text-right");
    let p = document.createElement("p");
    p.classList.add("custom-link-path")
    p.innerText=original_link;
    let a = document.createElement("a");
    a.innerText = shorten_link;
    a.setAttribute("href", shorten_link);
    // a.href = shorten_link;
    let button = document.createElement("button");
    button.innerText = "COPY";
    button.classList.add("btn");
    button.classList.add("hero-button");
    button.classList.add("ml-md-3");
    button.classList.add("button-copy");
    button.setAttribute("data-text", shorten_link);
    button.setAttribute("onclick", "copyText(event)")
    links_list.append(row);
    row.append(col_1);
    row.append(col_2);
    col_1.append(p);
    col_2.append(a);
    col_2.append(button);
    // console.log(a.getAttribute("href"));
}

function copyText(e) {
    console.log(e.srcElement.attributes[1].value);
    navigator.clipboard.writeText(e.srcElement.attributes[1].value);
  }

function getDATA(end_point="google.com") {
   fetch(base_url+end_point).then(res => res.json()).then(data => {
      console.log(data);
      createComponent(data.result.original_link, data.result.short_link)
   });
}
enter_btn.addEventListener("click", ()=>{
    let long_link = user_input.value;
    getDATA(long_link)
});