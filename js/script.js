document.addEventListener("DOMContentLoaded", function() {
    const GetItems = document.getElementById("get");

    const items = ["Home", "About", "Services", "Contact", "Blog"];

    GetItems.innerHTML = "";
    items.forEach(function(item) {
        const listItem = document.createElement("a");
        listItem.href = "#";
        listItem.textContent = item;
        GetItems.appendChild(listItem);
    });
});
