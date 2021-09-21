const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img:
            "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img:
            "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img:
            "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img:
            "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img:
            "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:
            "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img:
            "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img:
            "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img:
            "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];

const btnContainerDive = document.querySelector('.btn-container');
const btnAll = document.createElement('button');
const btnKorea = document.createElement('button');
const btnJapan = document.createElement('button');
const btnChina = document.createElement('button');
const menuItemsDiv = document.querySelector('.container');

btnAll.textContent = 'All';
btnKorea.textContent = 'Korea';
btnJapan.textContent = 'Japan';
btnChina.textContent = 'China';
btnContainerDive.appendChild(btnAll);
btnContainerDive.appendChild(btnKorea);
btnContainerDive.appendChild(btnJapan);
btnContainerDive.appendChild(btnChina);


btnContainerDive.addEventListener('click', e => {
    showList(e.target.textContent);
});

function clearCenter() {
    let itemCount = menuItemsDiv.childElementCount;
    for (let i = 0; i < itemCount; i++) {
        while (menuItemsDiv.firstChild) {
            menuItemsDiv.removeChild(menuItemsDiv.lastChild);
        }
    }
}

function showList(category) {
    clearCenter();

    const filterMenu = (category !== 'All')?menu.filter(item => item.category === category):menu;
    const rowCount = (filterMenu.length % 2)?filterMenu.length / 2:Math.ceil(filterMenu.length / 2);
    let rowArray = [];
    for(let i = 0; i<rowCount; i++){
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        rowArray.push(row);
    }

    rowArray.forEach(row => {
        menuItemsDiv.appendChild(row);
    });

    for (let i = 0; i < filterMenu.length; i++) {
        let itemDiv = document.createElement('div');
        let itemImg = document.createElement('img');
        let itemTitle = document.createElement('h3');
        let itemPrice = document.createElement('h3');
        let titlePriceDiv = document.createElement('div');
        let descH = document.createElement('h');

        itemTitle.textContent = filterMenu[i].title;
        itemPrice.textContent = filterMenu[i].price;
        descH.innerHTML = filterMenu[i].desc;
        itemImg.setAttribute('src', `${filterMenu[i].img}`);
        itemDiv.setAttribute('class', 'col-sm-6');
        titlePriceDiv.setAttribute('class', 'menu-title');

        let row = document.createElement('div');
        let colImg = document.createElement('div');
        let colText = document.createElement('div');
        let rowContainer = document.createElement('div');

        rowContainer.setAttribute('class', 'container');
        row.setAttribute('class', 'row');
        colImg.setAttribute('class', 'col-sm-4');
        colText.setAttribute('class', 'col-sm-8');
        
        colImg.appendChild(itemImg);
        colText.appendChild(titlePriceDiv);
        colText.appendChild(descH);
        row.appendChild(colImg);
        row.appendChild(colText);
        rowContainer.appendChild(row);

        titlePriceDiv.appendChild(itemTitle);
        titlePriceDiv.appendChild(itemPrice);
        itemDiv.appendChild(rowContainer);

        rowArray[i % 2].appendChild(itemDiv);
    }
}



