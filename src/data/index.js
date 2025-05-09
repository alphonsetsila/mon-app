import 'boxicons/css/boxicons.min.css';

 export const navItems = [  

    {  
        label : 'Home',
        icon : 'bx bxs-folder-open',
        activeIcon :  'bx bxs-folder-open',
        inactiveIcon : 'bx bxs-folder',
    },
    {  
        label : 'Sac',
        icon : 'bx bxs-folder-open',
        activeIcon :  'bx bxs-folder-open',
        inactiveIcon : 'bx bxs-folder',
    },
    {  
        label : 'Tapis',
        icon : 'bx bxs-folder-open',
        activeIcon :  'bx bxs-folder-open',
        inactiveIcon : 'bx bxs-folder',
    },
    {  
        label : 'Hat',
        icon : 'bx bxs-folder-open',
        activeIcon :  'bx bxs-folder-open',
        inactiveIcon : 'bx bxs-folder',
    },
    {  
        label : 'Other',
        icon : 'bx bxs-folder-open',
        activeIcon :  'bx bxs-folder-open',
        inactiveIcon : 'bx bxs-folder',
    },
] 

export const items = [ 
    {   label : 'Product-01', img:'img/sac.jpeg' ,pageIndex : 1 },
    {   label : 'Product-02', img:'img/p.jpeg' ,pageIndex : 2 },
    {   label : 'Product-03', img:'img/hat.jpeg' ,pageIndex : 3 },
    {   label : 'Product-04', img:'img/ot.jpeg' ,pageIndex : 4 },
]

export const iphoneModels = [  
    {  
        nom : 'Sac Raffia classic',
        description : 'Made in Madagascar',
        price : 'From $099',
        img : 'img/sac_01.jpeg',
    },
    {  
        nom : 'Sac fashions Raffia',
        description : 'Made in Madagascar',
        price : 'From $150',
        img : 'img/sac_02.jpeg',
    },
    {  
        nom : 'Sac Authentic Raffia',
        description : 'Made in Madagascar',
        price : 'From $209',
        img : 'img/sac_03.jpeg',
    },
]
  
export const macbookModels = [ 
    {  
        chip : 'classic',
        price : 'From $799',
        img : 'img/tapie.jpeg',
        colors : [ 
            {label: 'Gold' , bg : '#f0e0d3', img : 'img/t.jpeg' },
            {label: 'Silver' , bg : '#eDe2e1', img : 'img/t1.jpeg' },
        ],
        specs : ['classic' , '1m carer' , 'Made in china' , 'waterproof']
    },
    {  
        chip : 'Modern',
        price : 'From $899',
        img : 'img/tapie.jpeg',
        colors : [ 
            {label: 'Gold' , bg : '#f0e0d3', img : 'img/tapie.jpeg' },
            {label: 'Silver' , bg : '#eDe2e1', img : 'img/t2.jpeg' },
        ],
        specs : ['modern' , '1m carer' , 'Made in madagascar' , 'waterproof']
    },
]

export const watchModels = [  
    {  
       imgs : ['img/hat.jpeg' , 'img/hat.jpeg'],
       name : 'Hat-001',
       price : 'From $39',
       desc : ['Raffia white' , 'water resistant' , 'Made in Madagascar'],
    },
    {  
        imgs : ['img/hat2.jpeg' , 'img/hat2.jpeg'],
        name : 'Hat-002',
        price : 'From $49',
        desc : ['Model classic' , 'water resistant' , 'Made in China'],
     },
     {  
        imgs : ['img/hat3.jpeg' , 'img/hat3.jpeg'],
        name : 'Hat-003',
        price : 'From $59',
        desc : ['Girl Hat' , 'water resistant' , 'Made in Madagascar'],
     },
]
export const imacModel = [ 
    { 
        label:'Green',
        bg : '#10505b',
        images : { 
            side : 'img/images.jpeg',
            front : 'img/images.jpeg',
            back : 'img/images.jpeg',
        },
    },
    { 
        label:'Yellow',
        bg : '#d48207',
        images : { 
            side : 'img/other.jpeg',
            front : 'img/other.jpeg',
            back : 'img/other.jpeg',
        },
    },
    // { 
    //     label:'White',
    //     bg : '#d48207',
    //     images : { 
    //         side : 'img/iphone16.jpeg',
    //         front : 'img/images.jpeg',
    //         back : 'img/ap.webp',
    //     },
    // },
    { 
        label:'Blue',
        bg : '#2a105b',
        images : { 
            side : 'img/o.jpeg',
            front : 'img/o.jpeg',
            back : 'img/o.jpeg',
        },
    },
]