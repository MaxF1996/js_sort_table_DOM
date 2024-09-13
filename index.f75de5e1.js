"use strict";
// write code here
const pageTable = document.querySelector("table");
function extractAmount(str) {
    return parseFloat(str.replace(/[^0-9.]/g, ""));
}
function sortTable(table) {
    table.addEventListener("click", (e)=>{
        const th = e.target.closest("th");
        if (th) {
            const tbody = table.querySelector("tbody");
            const rows = [
                ...tbody.querySelectorAll("tr")
            ];
            const sortedRows = rows.sort((rowA, rowB)=>{
                const a = rowA.children[th.cellIndex].textContent;
                const b = rowB.children[th.cellIndex].textContent;
                if ("$\u20AC\xa3\xa5CHF\u20B9\u20BD\u20A9R\u20BARM\u0E3FRp\u20B1\u0631.\u0633\u062F.\u0625\u20AAE\xa3\u20AB\u20A6\u20A8\u09F3".includes(a[0]) && "0123456789".includes(a[1])) return extractAmount(a) - extractAmount(b);
                return a.localeCompare(b);
            });
            tbody.append(...sortedRows);
        }
    });
}
sortTable(pageTable);

//# sourceMappingURL=index.f75de5e1.js.map
