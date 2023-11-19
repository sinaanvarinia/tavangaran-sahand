import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { BsBriefcase,BsMailbox2 } from "react-icons/bs";
import { LuConstruction } from "react-icons/lu";
// import { GiGoldMine } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import { GiMineExplosion, GiNewspaper } from "react-icons/gi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAlternateEmail,MdFax } from "react-icons/md";
import { title } from "process";

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
   
    
