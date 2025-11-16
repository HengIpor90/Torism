document.addEventListener("DOMContentLoaded", function() {
    const GetItems = document.getElementById("get");
    const title = document.querySelector(".title");
    const para = document.querySelector(".para");
    
    const items = ["Home", "About", "Services", "Contact", "Blog"];
    title.textContent = "Welcome to Torism";
    this.parentElement.style.backgroundColor = "lightblue";
    para.textContent = "Explore the world with us!";
    GetItems.innerHTML = "";
    items.forEach(function(item) {
        const listItem = document.createElement("a");
        listItem.href = "#";
        listItem.textContent = item;
        GetItems.appendChild(listItem);
    });
});
