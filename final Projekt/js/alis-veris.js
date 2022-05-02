var marka = ["asus", "dell", "hp", "lenovo","acer", "LG", "Huawei","Samsung","Sony"];
var lu = document.querySelector(".row1 .category");
var input = document.querySelector("#search");
var stock = document.querySelector(".stock");
var acer = [{
    ad: "acer",
    tesvir: "tesvir",
    qiymet: "4414 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer",
    tesvir: "tesvir",
    qiymet: "2331 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer",
    tesvir: "tesvir",
    qiymet: "432 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer",
    tesvir: "tesvir",
    qiymet: "42421 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer",
    tesvir: "tesvir",
    qiymet: "4123421 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer",
    tesvir: "tesvir",
    qiymet: "4343 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer",
    tesvir: "tesvir",
    qiymet: "6566 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer",
    tesvir: "tesvir",
    qiymet: "6565 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer",
    tesvir: "tesvir",
    qiymet: "432 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, 
];
var asus = [{
    ad: "asus",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus",
    tesvir: "tesvir",
    qiymet: "2780 AZN",
    telefon: "055-867-3567",
    yeni: "bəli",
    əməliyaddaş: "16GB",
    CPU: "Core i9",
    daimiyaddaş: "500GB",
    daimitipi: "SSD",
    emeliyyat: "win 10",
    GPU: "Intel Iris Xe Graphics"
}, ];
var dell = [
    {
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },{
        ad: "dell",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }
]
var lenovo = [
    {
        ad: "lenovo",
        tesvir: "tesvir",
        qiymet: "2785 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "14GB",
        CPU: "Core i9",
        daimiyaddaş: "600GB",
        daimitipi: "SSD",
        emeliyyat: "win 11",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },
    {
        ad: "lenovo",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },
    {
        ad: "lenovo",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },
    {
        ad: "lenovo",
        tesvir: "tesvir",
        qiymet: "2785 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "14GB",
        CPU: "Core i9",
        daimiyaddaş: "600GB",
        daimitipi: "SSD",
        emeliyyat: "win 11",
        GPU: "Intel Iris Xe Graphics"
    },
    {
        ad: "lenovo",
        tesvir: "tesvir",
        qiymet: "2785 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "14GB",
        CPU: "Core i9",
        daimiyaddaş: "600GB",
        daimitipi: "SSD",
        emeliyyat: "win 11",
        GPU: "Intel Iris Xe Graphics"
    }
]
var hp =[
    {
        ad: "hp",
        tesvir: "tesvir",
        qiymet: "2000AZN",
        telefon: "055-860-3567",
        yeni: "bəli",
        əməliyaddaş: "10GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },  {
        ad: "hp",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },  {
        ad: "hp",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },  {
        ad: "hp",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },  {
        ad: "hp",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },  {
        ad: "hp",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },  {
        ad: "hp",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },  {
        ad: "hp",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },  {
        ad: "hp",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },  {
        ad: "hp",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },  {
        ad: "hp",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },  {
        ad: "hp",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },  {
        ad: "hp",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },  {
        ad: "hp",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        əməliyaddaş: "16GB",
        CPU: "Core i9",
        daimiyaddaş: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }
];
for (var i = 0; i < marka.length; i++) {
    var li = document.createElement("li");
    li.classList.add("item");
    li.innerText = marka[i];
    lu.appendChild(li);
    var item = document.querySelectorAll(".category .item");
    item[i].addEventListener("click", function () {
        for (var i = 0; i < stock_div.length; i++) {
            stock.children[0].remove();
        }
        var content = String(this.innerText);
        content = content.toLowerCase();
        for (var i = 0; i < 9; i++) {
            var col3 = document.createElement("div");
            col3.classList.add("col-3");
            var button =document.createElement("button")
            button.innerHTML="etrafli"
            var stockItems = document.createElement("div");
            stockItems.classList.add("stock-items");
            var img = document.createElement("img");
            img.src = `img/${content}.jpg`;
            var p = document.createElement("p");
            var p2 = document.createElement("p");
            var p3 = document.createElement("p");
            var p4 = document.createElement("p");
            var p5 = document.createElement("p");
            p.innerHTML = `Adi:${marka[i].ad}`;
            p2.innerHTML = `Tesviri:${marka[i].tesvir}`;
            p3.innerHTML = `Qiymet:${marka[i].qiymet}`;
            p4.innerHTML = `Yeni:${marka[i].yeni}`;
            p5.innerHTML = `Telefon:${marka[i].telefon}`;
            stockItems.appendChild(img);
            stockItems.appendChild(p);
            stockItems.appendChild(p2);
            stockItems.appendChild(p3);
            stockItems.appendChild(p4);
            stockItems.appendChild(p5);
            stockItems.appendChild(button)
            col3.appendChild(stockItems);
            stock.appendChild(col3);


        }
    })
}
for (var i = 0; i < 9; i++) {
    var col3 = document.createElement("div");
    col3.classList.add("col-3");
    var button =document.createElement("button")
    button.innerHTML="etrafli"
    var stockItems = document.createElement("div");
    stockItems.classList.add("stock-items");
    var img = document.createElement("img");
    img.src = `img/acer.jpg`;
    var p = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    p.innerHTML = `Adi:${acer[i].ad}`;
    p2.innerHTML = `Tesviri:${acer[i].tesvir}`;
    p3.innerHTML = `Qiymet::${acer[i].qiymet}`;
    p4.innerHTML = `Yeni::${acer[i].yeni}`;
    p5.innerHTML = `Telefon::${acer[i].telefon}`;
    stockItems.appendChild(img);
    stockItems.appendChild(p);
    stockItems.appendChild(p2);
    stockItems.appendChild(p3);
    stockItems.appendChild(p4);
    stockItems.appendChild(p5);
    stockItems.appendChild(button)
    col3.appendChild(stockItems);
    stock.appendChild(col3);

}
var stock_div = document.querySelectorAll(".stock .col-3");

input.addEventListener("keyup", function (e) {
    if (e.keyCode > 64 && e.keyCode < 91) {

        var item = document.querySelectorAll(".category .item");
        for (var i = 0; i < item.length; i++) {
            item[i].remove();
        }
        for (var i = 0; i < marka.length; i++) {
            var value = input.value;
            if (marka[i].toLowerCase().includes(value.toLowerCase())) {
                var li = document.createElement("li");
                li.classList.add("item");
                li.innerText = marka[i];
                li.addEventListener("click", function () {
                    for (var i = 0; i < stock_div.length; i++) {
                        stock.children[0].remove();
                    }
                    var content = String(this.innerText);
                    content = content.toLowerCase();
                    for (var i = 0; i < 9; i++) {
                        var col3 = document.createElement("div");
                        col3.classList.add("col-3");
                        var button =document.createElement("button")
                        button.innerHTML="etrafli"
                        var stockItems = document.createElement("div");
                        stockItems.classList.add("stock-items");
                        var img = document.createElement("img");
                        img.src = `img/${content}.jpg`;
                        var p = document.createElement("p");
                        var p2 = document.createElement("p");
                        var p3 = document.createElement("p");
                        var p4 = document.createElement("p");
                        var p5 = document.createElement("p");
                        p.innerHTML = `Adi:`;
                        p2.innerHTML = `Tesviri:`;
                        p3.innerHTML = `Qiymet:`;
                        p4.innerHTML = `Yeni:`;
                        p5.innerHTML = `Telefon:`;
                        stockItems.appendChild(img);
                        stockItems.appendChild(p);
                        stockItems.appendChild(p2);
                        stockItems.appendChild(p3);
                        stockItems.appendChild(p4);
                        stockItems.appendChild(p5);
                        stockItems.appendChild(button);
                        col3.appendChild(stockItems);
                        stock.appendChild(col3);
                    }
                })
                lu.appendChild(li);

            }
        }

        if (lu.children.length == 0) {
            var li = document.createElement("li");
            li.classList.add("item");
            li.innerText = "Netice tapilmadi";
            lu.appendChild(li);
            var item = document.querySelectorAll(".category .item");
            item[i].addEventListener("click", function () {
                for (var i = 0; i < stock_div.length; i++) {
                    stock.children[0].remove();
                }
                var content = String(this.innerText);
                content = content.toLowerCase();
                for (var i = 0; i < 9; i++) {
                    var col3 = document.createElement("div");
                    col3.classList.add("col-3");
                    var button =document.createElement("button")
                    button.innerHTML="etrafli"
                    var stockItems = document.createElement("div");
                    stockItems.classList.add("stock-items");
                    var img = document.createElement("img");
                    img.src = `${content}.jpg`;
                    var p = document.createElement("p");
                    var p2 = document.createElement("p");
                    var p3 = document.createElement("p");
                    var p4 = document.createElement("p");
                    var p5 = document.createElement("p");
                    p.innerHTML = `Adi:`;
                    p2.innerHTML = `Tesviri:`;
                    p3.innerHTML = `Qiymet:`;
                    p4.innerHTML = `Yeni:`;
                    p5.innerHTML = `Telefon:`;
                    stockItems.appendChild(img);
                    stockItems.appendChild(p);
                    stockItems.appendChild(p2);
                    stockItems.appendChild(p3);
                    stockItems.appendChild(p4);
                    stockItems.appendChild(p5);
                    stockItems.appendChild(button)
                    col3.appendChild(stockItems);
                    stock.appendChild(col3);


                }
            })
        }
    } else if (input.value == "") {
        var item = document.querySelectorAll(".category .item");
        for (var i = 0; i < item.length; i++) {
            item[i].remove();
        }
        for (var i = 0; i < marka.length; i++) {
            var li = document.createElement("li");
            li.classList.add("item");
            li.innerText = marka[i];
            lu.appendChild(li);
            var item = document.querySelectorAll(".category .item");
            item[i].addEventListener("click", function () {
                for (var i = 0; i < stock_div.length; i++) {
                    stock.children[0].remove();
                }
                var content = String(this.innerText);
                content = content.toLowerCase();
                for (var i = 0; i < 4; i++) {
                    var col3 = document.createElement("div");
                    col3.classList.add("col-3");
                    var button =document.createElement("button")
                    button.innerHTML="etrafli"
                    var stockItems = document.createElement("div");
                    stockItems.classList.add("stock-items");
                    var img = document.createElement("img");
                    img.src = `${content}.jpg`;
                    var p = document.createElement("p");
                    var p2 = document.createElement("p");
                    var p3 = document.createElement("p");
                    var p4 = document.createElement("p");
                    var p5 = document.createElement("p");
                    p.innerHTML = `Adi:`;
                    p2.innerHTML = `Tesviri:`;
                    p3.innerHTML = `Qiymet:`;
                    p4.innerHTML = `Yeni:`;
                    p5.innerHTML = `Telefon:`;
                    stockItems.appendChild(img);
                    stockItems.appendChild(p);   
                    stockItems.appendChild(p2);
                    stockItems.appendChild(p3);
          
                    stockItems.appendChild(p4);
                    stockItems.appendChild(p5);
                    stockItems.appendChild(button)
                    col3.appendChild(stockItems);
                    stock.appendChild(col3);


                }
            })
        }

    }


});


