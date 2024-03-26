const sales = [
    {
        id: 1, 
        machine: "Pacific Transfer", 
        slot: 154, 
        itemid: 70, 
        item: "Nissin Cup Noodles Shrimp Flavor 2.5 oz", 
        saleid: "20240311134026000-005-01", 
        slotseq: 1, 
        orderdate: "Mar 11 2024  1:40PM", 
        itemprice: 1.50, 
        itemCost: 0.58, 
        profit: 0.85
   },
   {
        id: 2, 
        machine: "Pacific Transfer", 
        slot: 145, 
        itemid: 23, 
        item: "Coca Cola can 12 oz", 
        saleid: "20240311134041000-005-01", 
        slotseq: 1, 
        orderdate: "Mar 11 2024  1:40PM", 
        itemprice: 1.00, 
        itemCost: 0.62, 
        profit: 0.33, 
   },
   {
        id: 3, 
        machine: "Pacific Transfer", 
        slot: 134, 
        itemid: 4421, 
        item: "Jack Link's Beef Steak Jerky (Original) ", 
        saleid: "20240311154301000-005-01", 
        slotseq: 1, 
        orderdate: "Mar 11 2024  3:43PM", 
        itemprice: 2.25, 
        itemCost: 1.01, 
        profit: 1.13, 
   },
   {
        id: 4, 
        machine: "Pacific Transfer", 
        slot: 134, 
        itemid: 4421, 
        item: "Jack Link's Beef Steak Jerky (Original) ", 
        saleid: "20240311154301000-005-02", 
        slotseq: 2, 
        orderdate: "Mar 11 2024  3:43PM", 
        itemprice: 2.25, 
        itemCost: 1.01, 
        profit: 1.13, 
   },
   {
        id: 5, 
        machine: "Pacific Transfer", 
        slot: 134, 
        itemid: 4421, 
        item: "Jack Link's Beef Steak Jerky (Original) ", 
        saleid: "20240311154352000-005-01", 
        slotseq: 3, 
        orderdate: "Mar 11 2024  3:43PM", 
        itemprice: 2.25, 
        itemCost: 1.01, 
        profit: 1.13, 
   },
];

const salesTotalByItem = sales.reduce(
    (acc, sale) => ({
        ...acc,
        [sale.item]: (acc[sale.item] || 0) + parseInt([sale.itemprice])
    }),
    {}
);

const salesCountByItem = sales.reduce(
    (acc, sale) => ({
        ...acc,
        [sale.item]: (acc[sale.item] || 0) + 1
    }),
    {}
);

console.log(salesCountByItem);
console.log(salesTotalByItem);