// Document Object Model -DOM

const para1 = document.getElementById("main-para")
para1.innerHTML = "<h2>YOU HAVE BEEN HACKED BUDDY</h2>"


//change style

para1.style.color = "blue"

para1.style.fontSize = "30px"

const head = document.getElementsByTagName("h1")[0]
head.classList.add("highlight")
para1.classList.remove("underline")
