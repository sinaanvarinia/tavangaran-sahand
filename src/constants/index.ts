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
export const siteTexts = 
{
  historyOfCompany: {
    title: "تاریخچه شرکت",
    text: "گروه صنعتی توانگران سهند از تابستان ۸۹ فعالیت خویش را در حوزه معدن و صنایع معدنی آغاز و بارویکرد تامین سنگ آهن مورد نیاز مجموعه هاي فولادي در شمال غرب به ويژه شرکت سرمایه گذاری گسترش فولاد تبریز اقدام به مطالعه، شناسایی و ثبت و بهره برداری از پتانسیل های آهنی در استان آذربایجان شرقی و استانهای همجوار نموده است.با گذشت نزدیک به پنج سال از آغاز فعالیت، حوزه فعالیت شرکت گسترش وسیعی یافت و علاوه بر ادامه کشف و بهره برداری معادن و محدوده های آهن در خصوص سایر معادن و محدوده های فلزی اعم از مس، طلا و تیتان و همچنین معادن غیر فلزی نظیر آهک، سیلیس و زغالسنگ و باریت برنامه ریزی منسجم طراحی و عملیاتی گردید.موفقیت حاصل در زمینه تملک معادن، فصل جدیدی در حوزه فعالیت های این شرکت در زمینه فرآوری مواد معدنی گشود که پروژه احداث و راه اندازی کارخانه فرآوری کنسانتره آهن و تیتان اسکندیان نقطه عطف این فعالیتها بوده است و به دنبال آن طرحهای در دست اقدام کنسانتره مس و آهن کلید خورد.",
    mostImportantActivities: {
      title: "عمده ترين فعالیت های انجام شده این شرکت به شرح زیر است:",
      textArray: ["مطالعه و بازدید بیش از 250 مورد پتانسیل آهن، مس، آهک، سیلیس، تیتان و زغال سنگ در سراسر کشور", " شناسائی و مطالعات اکتشافی بیش از  ۵۰ مورد پتانسیل آهن در شمالغرب کشور", " مطالعات سنجش از راه دور با اولویت اکتشاف آهن، تیتان، مس و طلا در شمالغرب کشور",
      "انجام بیش از 50 مورد کار ژئوفیزیکی در معادن و محدوده های دارای پتانسیل آهن","ایجاد جامع ترین بانک اطلاعاتی پتانسیل های آهن و مس در ایران خصوصاً شمالغرب کشور","اکتشاف معادن سنگ آهن داش آغل، آهن و تيتان اسکندیان و معدن آهک بوکت","اکتشاف محدوده های گوزل بولاغ، شاهین دژ و احمدآباد بوکان","طراحی، استخراج و بهره برداری از معدن آهن داش آغل و اسکندیان، سیلیس بردزرد و ترسه بلاغ، مس باشماق"," ایجاد واحد فرآوری (دانه بندی و پرعیار سازی سنگ آهن) در سایت اسکندیان"," کشف و ثبت 7 مورد معدن سنگ آهن؛ یک مورد معدن تیتان؛ 2 مورد محدوده مس و 3 مورد معدن سیلیس و 2 مورد معدن آهک و 6 مورد معدن زغال سنگ و 2 مورد فلزات گران بها (طلا - نقره) و یک مورد باریت در شمالغرب"," ایجاد واحد بازرگانی مواد معدنی جهت صادرات مواد معدنی فرآوری شده از کشور و واردات مواد مورد نیاز صنایع"," ارائه خدمات فني و مهندسي به ادارات، شركتها و سازمانهاي متقاضي در حوزه معدن"," بهره برداری از معادن (آهن - آهک - تیتان - سیلیس - سنگ تزئینی - مس) در شمالغرب کشور","خردایش، دانه بندی و پُرعیار سازی سنگ آهن و سیلیس در شمالغرب کشور"," بازرگانی و فروش سنگ آهن در داخل و خارج از کشور"," تامين مواد اوليه  فرّو آلياژها و مواد نسوز برای صنايع فولاد منطقه","در اختیار داشتن معادن مختلف به منظور تامین مواد اولیه کارخانجات فرو آلیاژها، آهک هیدراته و پخته، کنسانتره آهن هماتیت و کنسانتره تیتان 44% در منطقه","کشف معدن پلی متال باشماق (با اولویت مس - طلا) و اتمام عملیات اکتشافی به روش سیستماتیک و اخذ پروانه بهره برداری","کشف معدن سنگ آهن آوان و اتمام عملیات اکتشافی به روش سیستماتیک و اخذ پروانه بهره برداری","شناسایی و کشف محدوده های سنگ آهن آستمال، پلی متال تیکمه داش، باریت قره کند، سیلیس سلیمان آباد، پلی متال آغچه کهل و...","اتمام عملیات اکتشافی و بهره برداری بر روی معدن سیلیس بردزرد - بوکان"]
    }
  },
  vision: {
    title: "چشم انداز",
    text: "پیشتاز در شناسایی و اکتشاف معادن با کمک تکنولوژی و روشهای نوین به منظور ایجاد ثروت، کسب درآمد، احداث واحدهای فرآوری، اشتغال و تامین مواد اولیه مورد نیاز صنایع مختلف کشور و توسعه صادرات مواد معدنی فرآوری شده.",
    slogan1: "« خودکفایی در تامین مواد اولیه صنایع »",
    slogan2:"« صادرات مواد معدنی فرآوری شده »"
  },
  mission: {
      title: "بیانیه ماموریت شرکت",
      text:"شرکت توانگران سهند در حوزه اشتغالزایی، کسب و کار تولید و عرضه محصولات معدنی فعال بوده و هدف آن رشد و اعتلای اقتصادی ایران عزیز می باشد.اولویت اصلی این شرکت، فعالیت در زمینه تملک، اکتشاف، استخراج، بهره برداری، فروش مواد معدنی بویژه آهن ، تیتانیوم و سیلیس می باشد و همچنین بر اساس سیاست های هلدینگ به فعالیت در اکتشاف و بهره برداری معادن مس، طلا، سیلیس، سنگ آهک، زغال سنگ و سنگ های تزئینی و کانی های صنعتی مخصوصا باریت نیز همت گمارده است. ما برآنیم با دستیابی به تولیدی بهر ه ورتر سهم بیشتری از ارزش افزوده در زنجیره تولید فرآورده های فولادی را به خود اختصاص دهیم. مقصد محصولات ما در درجه اول شرکتهای فولادسازی تحت پوشش شرکت گسترش فولاد تبریز و پس از آن کلیه شرکت های فولاد سازی و گندله سازی در کشور و شرکت ها و کارخانجات متقاضی سنگ آهن و مواد معدنی وابسته یعنی آهک, سیلیس و زغال سنگ می باشد. یکی از اصول اساسی سیاست های ما جلب رضایت همکارانمان (خریداران محصولات و خدمات و شرکاء) می باشد و این رضایتمندی جز با کیفیت بالای محصولات و خدمات، قیمت مناسب و مهمتر از همه وفای به عهد میسر نخواهد شد. بنابراین می کوشیم با ایجاد زیرساختارهای مناسب مدیریتی، پرورش کارکنان و دستیابی به تکنولوژی و دانش فنی روز به تولید بهره ورتری برسیم. با این رویکرد خواهیم توانست سود بیشتری را به سهامداران و کلیه ذی نفعان خود عرضه کنیم ما برآنیم که در آینده ای نزدیک، ضمن تامین کلیه نیازهای معدنی شرکت گسترش فولاد تبریز به یک بازیگر اصلی در بازار محصولات معدنی حوزه فعالیت خود تبدیل و بزرگترین شرکت معدنی خاورمیانه محسوب شویم. فعالیتهای ما محدود به جغرافیای خاصی نمی باشد و در صورت شناسایی فرصتهای مناسب تا فراتر از مرزهای کشورمان نیزمیتواند گسترش یابد. در کنار این گستره  فعالیت مقیدیم به حفظ و صیانت از منابع ملی و طبیعی و بهره برداری بهینه از آنها، چرا که توسعه پایدار برای حال و نسل آینده در گرو بکارگیری دانش فنی همه جانبه و حفظ زیرساختهای ملی و طبیعی است"
  },
  values: {
    title: "ارزشها",
    textArray:[" توجه به حقوق کلیه ذینفعان و مشتری مداری"," کارآفرینی و اشتغال زایی در مناطق محروم و کم برخوردار"," توجه به ایمنی و سلامت کارکنان","احترام و صیانت از محیط زیست، منابع طبیعی و میراث فرهنگی و توجه به حقوق نسلهای آینده و رعایت الگوهای زیست محیطی و منابع طبیعی در طراحی و اجرای فعالیت های معدنی"," توجه ویژه به سرمایه های انسانی به عنوان اصلی ترین سرمایه شرکت"," تعامل سازنده با محیط و عناصر و سازمانهایی که در فضای کسب و کار حضور دارند و حرکت در مسیر توسعه پایدار"]
    },
  strategyOfCompany: {
    title: "استراتژی شرکت",
    textArray:["توسعه فعالیتهای اکتشافی با استفاده از روش ها و تکنولوژیهای نوین اکتشافی جهت دستیابی به پتانسیل های جدید و ایجاد فرصتهای شغلی تازه در مناطق محروم و کم برخوردار","تامین مواد اولیه و اصلی مورد نیاز صنایع فولاد سازی ( به ویژه هلدینگ دریک) و سایر صنایع فلزی فعال در کشور","تکمیل زنجیره تولید و ایجاد ارزش افزوده بیشتر و در یک کلام ایجاد ثروت با شناسایی و بهره برداری از معادن به عنوان تامین کننده مواد اولیه صنایع"," ارتقاء بهره وری، هم افزایی و رقابت پذیری بخش معدن و صنایع معدنی","توسعه منابع انسانی بخش معدن و صنایع معدنی از اکتشاف تا فرآوری","بازاریابی استراتژیک و توسعه صادرات محصولات و خدمات فنی - مهندسی"]
  },
  MembersOfBoard: {
    title: "اعضای هیات مدیره",
    members:[
    {
    name: "پوریا زنوزی مطلق",
    jobTitle: "رییس هيئت مديره",
    imgUrl: "/memberOfBoard/zonoozi.jpg"
    },
    {
    name: "ایوب مرادزاده",
    jobTitle: "نائب رييس هيئت مديره",
    imgUrl: "/memberOfBoard/moradzade.jpg"
    },
    {
    name: "مهديه برزگر",
    jobTitle: "مدير عامل و عضو هيئت مديره",
    imgUrl: "/memberOfBoard/barzgar.jpg"
    },
    {
    name: "رسول دودانگه",
    jobTitle: "عضو هيئت مديره",
    imgUrl: "/memberOfBoard/dodange.jpg"
    },
    {
    name: "مهدی مهرداد",
    jobTitle: "عضو هيئت مديره",
    imgUrl: "/memberOfBoard/mehrdad.png"
    },
    
  ]
  } ,
  subjectOfActivity: {
   title: "موضوع فعالیت شرکت",
   textArray: [" اکتشافات مواد معدنی و حصول به معادن با ارزش به عنوان دستیابی به مواد اولیه صنایع", " تجهیز و آماده سازی معادن، طراحی و استخراج مواد معدنی", " ارائه خدمات فنی و مهندسی از اکتشاف تا بهره برداری و فرآوری مواد معدنی", " طراحی و احداث خطوط تولید مواد معدنی و واحدهای فرآوری", "انجام کلیه فعالیتهای بازرگانی و خدماتی مجاز اعم از خرید و فروش (مواد معدنی) ، صادرات و واردات، توزیع و پخش و...", "مشارکت و سرمایه گذاری در محدوده های اکتشافی مستعد، معادن و طراحی و اجرای خط فرآوری مربوطه", "سرمایه گذاری در شرکتها، طرحها و واحدهای تولیدی، صنعتی و خدماتی", "طراحی، مهندسی، نظارت، بازرسی، سرمایه گذاری، مشارکت و مشاوره و اجرای طرحها و پروژه ها در احداث کارخانجات و واحدهای تولیدی و صنعتی و...", "بازرگاني مواد معدني"]
  },
  shareHolders: {
    title: "سهام داران شرکت",
    text: [{
      name: "هلدینگ سرمایه گذاری فولاد گستر کوثر",
      imgUrl:""
    },
    ]
  },
  humanResources: {
    mentors: {
      title:      "مشاورين گروه صنعتی توانگران سهند",
      members:[
    {
          name: "قهرمان سهرابی",
      degreeOfKnowledge:"دکترای زمین شناسی اقتصادی ٬ عضو هیئت علمی دانشگاه محقق اردبیلی",
      job:"",
      imgUrl:""
    },
    {
      name: "",
      job:"",
      imgUrl: "",
       degreeOfKnowledge:""
    }
    ]
    },

    technicalOfficials: {
      title:      "مسئولین فنی گروه صنعتی توانگران سهند",
      members: [
        {
      name: "ابراهیم یوزباشلو",
      job: "",
      degreeOfKnowledge:"",
      imgUrl:"/personel/youzbashloo.jpeg"
      },
        {
      name: "رشید فتحی رشید",
      job:"",
      imgUrl: "/personel/fathi.jpeg",
      degreeOfKnowledge:""
      
      },
        {
      name: "سجاد احسانخواه",
      job:"",
      imgUrl: "/personel/ehsankhah.jpeg",
      degreeOfKnowledge:""
      
      },
        {
      name: "فضه  خلیلی پیروزان",
      job:"",
      imgUrl: "/personel/khalili.jpeg",
      degreeOfKnowledge:""
      
      },
        {
      name: "مهری گوهری ",
      job:"",
      imgUrl: "",
      degreeOfKnowledge:""
      
      },
        
      ]
    }
,
    technicalPersonell: {
      title: "پرسنل فنی گروه صنعتی توانگران سهند",
      members: [
        {
      name: "  ابراهیم یوزباشلو",
      job: "",
      degreeOfKnowledge:"",
      imgUrl:"/personel/youzbashloo.jpeg"
      },
        {
      name: "حامد حمیدی هریس",
      job: "",
      degreeOfKnowledge:"",
      imgUrl:"/personel/hamidi.jpeg"
      },
        {
      name: "سجاد احسان خواه",
      job: "",
      degreeOfKnowledge:"",
      imgUrl:"/personel/ehsankhah.jpeg"
      },
        {
      name: "مهدی شرقی",
      job: "",
      degreeOfKnowledge:"",
      imgUrl:""
      },
        {
      name: "علیرضا ابراهیمی",
      job: "",
      degreeOfKnowledge:"",
      imgUrl:""
      },
        
       
        

      ]
    }
    ,
    officePersonell: {
      title: "پرسنل امور مالی و اداری و تدارکات گروه صنعتی توانگران سهند",
      members: [
        {
      name: "محمد حسین مقتدر",
      job: "",
      degreeOfKnowledge:"",
      imgUrl:"/personel/mogtader.jpeg"
        },
        {
      name: "حبیب پربرناوش",
      job: "",
      degreeOfKnowledge:"",
      imgUrl:"/personel/bornavash.jpeg"
        },
        {
      name: "جاوید عطائی مسجدلو",
      job: "",
      degreeOfKnowledge:"",
      imgUrl:"/personel/ataei.jpeg"
        },
        {
      name: "فضه خلیلی پیروزیان",
      job: "",
      degreeOfKnowledge:"",
      imgUrl:"/personel/khalili.jpeg"
        },
       
        
      ]
    }


    }
  }

export const awards = [
  {
    name: "مکتشف نمونه معدنی ۲۰۲۲",
  url:"/awards/1-award.png"},
  {
     name: "مکتشف نمونه معدنی ۲۰۲۱",
  url:"/awards/2-award.png"},
  {
    name: "مکتشف نمونه معدنی ۲۰۱۶",
  url:"/awards/3-award.png"},
  {
    name: "روز مهندس ۱۴۰۱",
  url:"/awards/4-award.png"},
  {
    name: "برزگر",
  url:"/awards/barzgar/1.jpg"},
  {
    name: "برزگر1",
  url:"/awards/barzgar/2.jpg"},
  {
    name: "برزگر2",
  url:"/awards/barzgar/3.jpg"},
]

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


 
   
    
