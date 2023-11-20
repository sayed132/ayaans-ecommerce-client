export const color = [
    "white",
    "black",
    "red",
    "maroon",
    "beige",
    "pink",
    "green",
    "yellow",
];

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "white" },
            { value: "beige", label: "beige" },
            { value: "blue", label: "blue" },
            { value: "brown", label: "brown" },
            { value: "green", label: "green" },
            { value: "purple", label: "purple" },
            { value: "yellow", label: "yellow" }
        ]
    },
    {
        id: "size",
        name: "Size",
        options: [
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
            { value: "XL", label: "XL" }
        ]
    }
];

export const SingleFilters = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "50-150", label: "Tk. 50 To 150" },
            { value: "150-399", label: "Tk. 150 To 399" },
            { value: "399-799", label: "Tk. 399 To 799" },
            { value: "799-1599", label: "Tk. 799 To 1599" },
            { value: "1599-5000", label: "Tk. 1599 To 5000" }
        ]
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            { value: "10", label: "10% And Above" },
            { value: "20", label: "20% And Above" },
            { value: "30", label: "30% And Above" },
            { value: "40", label: "40% And Above" },
            { value: "50", label: "50% And Above" },
            { value: "60", label: "60% And Above" },
            { value: "70", label: "70% And Above" },
            { value: "80", label: "80% And Above" },
            { value: "90", label: "90% And Above" },
            { value: "100", label: "100% And Above" },
        ]
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "in_stock", label: "In Stock" },
            { value: "out_of_stock", label: "Out Of Stock" },
        ]
    }
];

export const ShortOptions = [
    { name: "Price: Low to High", query: "price_low" , current: false},
    { name: "Price: High to Low", query: "price_high" , current: false},
];