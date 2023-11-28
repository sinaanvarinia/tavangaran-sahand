import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { BsBriefcase,BsMailbox2 } from "react-icons/bs";
import { LuConstruction } from "react-icons/lu";
// import { GiGoldMine } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import { GiMineExplosion, GiNewspaper } from "react-icons/gi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAlternateEmail,MdFax } from "react-icons/md";
import { title } from "process";
import {GrGallery} from "react-icons/gr"
import {RiGalleryFill} from "react-icons/ri"
import {IoMdImages} from "react-icons/io"

export const navbarItems = [
    {
    id: 100,
    title: "خانه",
        icon: AiOutlineHome,
    href:"/"
}, {
    id: 107,
        title: "معادن",
    icon:GiMineExplosion,
    href:"/mines"
    
},
    {
    id: 102,
    title: "خدمات",
    icon:BsBriefcase,
    href:"/services"
},
    {
    id: 103,
        title: "پروژه ها",
    icon:LuConstruction,
    href:"/projects"
    
},
    {
    id: 104,
        title: "درباره ما",
    icon:AiOutlineInfoCircle,
    href:"/about"
    
},
    {
    id: 105,
        title: "تماس با ما",
    icon:FiPhoneCall,
    href:"/contact"
    
},
    {
    id: 106,
        title: "کاتالوگ شرکت",
    icon:GiNewspaper,
    href:"/catalogue"
    
},
    {
    id: 108,
        title: "گالری عکس",
    icon:IoMdImages,
        href: "/gallery"
    
},
   
    
]

export const footerSiteLinks = [
    {
        id: 1,
        title:"خانه",
    href:"/"
    },
    {
        id: 2,
        title:"خدمات",
    href:"/services"
    },
    {
        id: 3,
        title:"پروژه ها",
    href:"/projects"
    },
    {
        id: 4,
        title:"درباره ما",
    href:"/about"
    },
    {
        id: 5,
        title:"تماس با ما",
    href:"/contact"
    },
    {
        id: 6,
        title:"کاتالوگ  شرکت",
    href:"/catalogue"
    }
]
export const footerLinks = [
    {
        id: 11,
        title: "هلدینگ سرمایه گذاری فولاد گستر کوثر",
        link:"http://www.fgkinv.com"
    },
    {
        id: 12,
        title:"هلدینگ سرمایه گذاری دریک",
        link:"http://www.daricgroup.com"
    },
    {
        id: 14,
        title:"هلدینگ سرمایه گذاری گسترش فولاد تبریز",
        link:"https://www.gftco.ir/"
    },
    {
        id: 13,
        title:"سازمان نظام مهندسی معدن ",
        link:"http://imeo.ir/"
    }
    
    ,
    {
        id: 16,
        title:"نظام مهندسی معدن آذربایجان شرقی",
        link:"http://azarsharghi.imeo.ir/"
    }
    ,
    {
        id: 17,
        title:"سازمان توسعه و نوسازی معادن و صنایع معدنی ایران (ایمیدرو)",
        link:"https://imidro.gov.ir/"
    }
    ,
    {
        id: 18,
        title:"خانه معدن ایران",
        link:"https://iranminehouse.ir/"
    }
    ,
    {
        id: 19,
        title:"سازمان صنعت، معدن و تجارت استان آذربایجان شرقی",
        link:"https://tabriz.inso.gov.ir/portal/home/"
    }
    ,
    
]

export const contactUs = [
    {
        id: 21,
        title: "تلفن: ",
        value: "04134482130-36",
        icon: BiSolidPhoneCall
    },
    {
        id: 22,
        title: "فکس: ",
        value: "04134482140",
        icon: MdFax
        
    },
    {
        id: 23,
        title: "کد پستی: ",
        value:"5197713333",
        icon: BsMailbox2
        
    },
    {
        id: 24,
        title: "ایمیل:",
        value:"TavangaranSahandCo@gmail.com",
        icon: MdAlternateEmail
        
    },
]

export const minesConstants = {
    mineTitle:"  معادن فلزی و غیر فلزی:",
    mine: [
        
        
        {
        id: 201,
        title: " معدن اسکندیان (آهن – تیتانیوم) : آذربایجان غربی / سرو",
        href: ""
    },
    {
        id: 202,
        title: "معدن موئیل (سنگ آهن هماتیتی): اردبیل/ مشگین شهر ",
        href: ""
    },
    {
        id: 203,
        title: " باشماق (مس ) : آذربایجان شرقی / هشترود(IOCG)",
        href: ""
    },
    {
        id: 204,
        title: " پلی متال آوان (آهن – مس) : آذربایجان شرقی/ غرب سونگون",
        href: ""
    },
    {
        id: 205,
        title: " معدن بوکت (سنگ آهک و مرمریت): آذربایجان شرقی / عجبشیر",
        href: ""
    },
    {
        id: 206,
        title: " معدن برده زرد (سیلیس ): آذربایجان غربی/ بوکان",
        href: ""
    },
    {
        id: 207,
        title: " معدن امیر (زغال سنگ) : آذربایجان شرقی / مراغه",
        href: ""
    },
    {
        id: 208,
        title: "معدن مین باش حصار (زغال سنگ) : آذربایجان شرقی / مراغه ",
        href: ""
    },
    {
        id: 209,
        title: "معدن گویدرق (زغال سنگ) : آذربایجان شرقی / مراغه ",
        href: ""
    },
    {
        id: 210,
        title: "معدن آوان2 (گرانیت): آذربایجان شرقی / خاروانا ",
        href: ""
    },
    {
        id: 211,
        title: " معدن گدالو (خاک نسوز) : آذربایجان غربی / شاهین دژ",
        href: ""
    },
    {
        id: 212,
        title: " معدن چالی (زغال سنگ حرارتی): آذربایجان شرقی / مراغه",
        href: ""
    },
    {
        id: 213,
        title: " معدن پیرسقا(زغال سنگ حرارتی): آذربایجان شرقی / چاراویماق",
        href: ""
    },
    {
        id: 214,
        title: "معدن قوزلو (زغال سنگ کک شو): آذربایجان غربی/شاهین دژ ",
        href: ""
    },
    {
        id: 215,
        title: " معدن بدرلو (دولومیت): آذربایجان غربی/ تکاب",
        href: ""
    },
    {
        id: 216,
        title: " معدن زند آباد (گرانیت): آذربایجان شرقی / اهر",
        href: ""
    },
    {
        id: 217,
        title: " معدن قره کند (سیلیس- باریت) : آذربایجان شرقی / مراغه",
        href: ""
    },
    
    ],
    regionTitle:"محدود های فلزی و غیرفلزی:",
    region: [
        {
        
        id: 301,
        title: "محدوده آستامال (آهن): آذربایجان شرقی / غرب سونگون ",
        href: ""
    
    },
        {
        
        id: 302,
        title: "محدوده پلی متال تیکمه داش ( مس و طلا) : آذربایجان شرقی / بستان آباد",
        href: ""
    
    },
        {
        
        id: 303,
        title: " محدوده های پلی متال در پهنه های شوسف و خوسف : استان خراسان  جنوبی/ بیرجند ",
        href: ""
    
    },
        {
        
        id: 304,
        title: " محدوده خلیفه کندی (آهک – دولومیت): آذربایجان شرقی / مراغه",
        href: ""
    
    },
        {
        
        id: 305,
        title: "محدوده خطب (زغال سنگ): آذربایجان شرقی / مراغه ",
        href: ""
    
    },
        {
        
        id: 306,
        title: "محدوده گنبد (آهک) : آذربایجان شرقی / مراغه ",
        href: ""
    
    },
        {
        
        id: 307,
        title: "محدوده پلی متال شرق گاودل ",
        href: ""
    
    },
        {
        
        id: 308,
        title: " محدوده صاحب دیوان /مشکین شهر",
        href: ""
    
    },
        {
        
        id: 309,
        title: "محدوده شمال صاحب دیوان / اهر ",
        href: ""
    
    },
        {
        
        id: 310,
        title: " محدوده پلی متال جنوب سوناجیل",
        href: ""
    
    },
        
       
    ]

}
export const images = [
  {
    original: "/gallery/1.jpg",
    thumbnail: "/gallery/1.jpg",
  },
  {
    original: "/gallery/2.jpg",
    thumbnail: "/gallery/2.jpg",
  },
  {
    original: "/gallery/3.jpg",
    thumbnail: "/gallery/3.jpg",
  },
  {
    original: "/gallery/4.jpg",
    thumbnail: "/gallery/4.jpg",
  },
  {
    original: "/gallery/5.jpg",
    thumbnail: "/gallery/5.jpg",
  },
  {
    original: "/gallery/6.jpg",
    thumbnail: "/gallery/6.jpg",
  },
  {
    original: "/gallery/7.jpg",
    thumbnail: "/gallery/7.jpg",
  },
  {
    original: "/gallery/8.jpg",
    thumbnail: "/gallery/8.jpg",
  },
  {
    original: "/gallery/9.jpg",
    thumbnail: "/gallery/9.jpg",
  },
  {
    original: "/gallery/10.jpg",
    thumbnail: "/gallery/10.jpg",
  },
  {
    original: "/gallery/11.jpg",
    thumbnail: "/gallery/11.jpg",
  },
  {
    original: "/gallery/12.jpg",
    thumbnail: "/gallery/12.jpg",
  },
  {
    original: "/gallery/13.jpg",
    thumbnail: "/gallery/13.jpg",
  },
  {
    original: "/gallery/14.jpg",
    thumbnail: "/gallery/14.jpg",
  },
  {
    original: "/gallery/15.jpg",
    thumbnail: "/gallery/15.jpg",
  },
  {
    original: "/gallery/16.jpg",
    thumbnail: "/gallery/16.jpg",
  },
  {
    original: "/gallery/17.jpg",
    thumbnail: "/gallery/17.jpg",
  },
  {
    original: "/gallery/18.jpg",
    thumbnail: "/gallery/18.jpg",
  },
  {
    original: "/gallery/19.jpg",
    thumbnail: "/gallery/19.jpg",
  },
  {
    original: "/gallery/20.jpg",
    thumbnail: "/gallery/20.jpg",
  },
  {
    original: "/gallery/21.jpg",
    thumbnail: "/gallery/21.jpg",
  },
  {
    original: "/gallery/22.jpg",
    thumbnail: "/gallery/22.jpg",
  },
  {
    original: "/gallery/23.jpg",
    thumbnail: "/gallery/23.jpg",
  },
  {
    original: "/gallery/24.jpg",
    thumbnail: "/gallery/24.jpg",
  },
  {
    original: "/gallery/25.jpg",
    thumbnail: "/gallery/25.jpg",
  },
  {
    original: "/gallery/26.jpg",
    thumbnail: "/gallery/26.jpg",
  },
  {
    original: "/gallery/27.jpg",
    thumbnail: "/gallery/27.jpg",
  },
  {
    original: "/gallery/28.jpg",
    thumbnail: "/gallery/28.jpg",
  },
  {
    original: "/gallery/29.jpg",
    thumbnail: "/gallery/29.jpg",
  },
  {
    original: "/gallery/30.jpg",
    thumbnail: "/gallery/30.jpg",
  },
  {
    original: "/gallery/31.jpg",
    thumbnail: "/gallery/31.jpg",
  },
  {
    original: "/gallery/32.jpg",
    thumbnail: "/gallery/32.jpg",
  },
  {
    original: "/gallery/33.jpg",
    thumbnail: "/gallery/33.jpg",
  },
  {
    original: "/gallery/34.jpg",
    thumbnail: "/gallery/34.jpg",
  },
  {
    original: "/gallery/35.jpg",
    thumbnail: "/gallery/35.jpg",
  },
  {
    original: "/gallery/36.jpg",
    thumbnail: "/gallery/36.jpg",
  },
  {
    original: "/gallery/37.jpg",
    thumbnail: "/gallery/37.jpg",
  },
  {
    original: "/gallery/38.jpg",
    thumbnail: "/gallery/38.jpg",
  },
  {
    original: "/gallery/39.jpg",
    thumbnail: "/gallery/39.jpg",
  },
  {
    original: "/gallery/40.jpg",
    thumbnail: "/gallery/40.jpg",
  },
  {
    original: "/gallery/41.jpg",
    thumbnail: "/gallery/41.jpg",
  },
  {
    original: "/gallery/42.jpg",
    thumbnail: "/gallery/42.jpg",
  },
  {
    original: "/gallery/43.jpg",
    thumbnail: "/gallery/43.jpg",
  },
  {
    original: "/gallery/44.jpg",
    thumbnail: "/gallery/44.jpg",
  },
  {
    original: "/gallery/45.jpg",
    thumbnail: "/gallery/45.jpg",
  },
  {
    original: "/gallery/46.jpg",
    thumbnail: "/gallery/46.jpg",
  },
  {
    original: "/gallery/47.jpg",
    thumbnail: "/gallery/47.jpg",
  },
  {
    original: "/gallery/48.jpg",
    thumbnail: "/gallery/48.jpg",
  },
  {
    original: "/gallery/49.jpg",
    thumbnail: "/gallery/49.jpg",
  },
  {
    original: "/gallery/50.jpg",
    thumbnail: "/gallery/50.jpg",
  },
  
    
];

// export const images:{original:string,thumbnail:string} = ():{original:string,thumbnail:string}[] =>
// {
// const images = new Array()
//   var i:number=1
//   for (i ; i++; i <= 50){
//       images.push(
//         {
//         original: `/gallery/${i}.jpg`,
//         thumbnail: `/gallery/${i}.jpg`,
//       }
//     )
//   }
//     return (
//         images
//     )
// }


 
   
    
