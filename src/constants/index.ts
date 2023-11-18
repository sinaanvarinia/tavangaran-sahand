import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { BsBriefcase,BsMailbox2 } from "react-icons/bs";
import { LuConstruction } from "react-icons/lu";
// import { GiGoldMine } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import { GiNewspaper } from "react-icons/gi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAlternateEmail,MdFax } from "react-icons/md";

export const navbarItems = [
    {
    id: 1,
    title: "خانه",
        icon: AiOutlineHome,
    href:"/"
},
    {
    id: 2,
    title: "خدمات",
    icon:BsBriefcase,
    href:"services"
},
    {
    id: 3,
        title: "پروژه ها",
    icon:LuConstruction,
    href:"projects"
    
},
    {
    id: 3,
        title: "درباره ما",
    icon:AiOutlineInfoCircle,
    href:"/about"
    
},
    {
    id: 3,
        title: "تماس با ما",
    icon:FiPhoneCall,
    href:"contact"
    
},
    {
    id: 3,
        title: "کاتالوگ شرکت",
    icon:GiNewspaper,
    href:"catalogue"
    
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