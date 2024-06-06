const para = document.createElement("paragraph");
para.textContent = "this para is created using DOM ";

para.setAttribute("id","para-id")
console.log(para.getAttribute("id"))

const span = document.createElement("span");
span.className = "blue";
span.id = "span_id";
span.style.backgroundColor = "red";
span.textContent = "This is in span created using DOM";

para.appendChild(span)
document.body.appendChild(para)