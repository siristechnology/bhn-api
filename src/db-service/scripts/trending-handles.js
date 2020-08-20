const categories = ['Politics','Media Celebrity','Actor','Sports'];

const TrendingTwitterHandles = [
    {
        name: 'Baburam Bhattarai',
        category: 'Politics',
        handle: '@brb1954',
        image: 'https://pbs.twimg.com/profile_images/2728978795/b13bbaf361366a8d54a7d54124243593_400x400.jpeg',
        searchTerms: ['Baburam Bhattarai']
    },
    {
        name: 'KP Sharma Oli',
        category: 'Politics',
        handle: '@pm_nepal',
        image: 'https://pbs.twimg.com/profile_images/964093929002946560/RrZvsn_9_400x400.jpg',
        searchTerms: ['KP Oli', 'PM Oli', 'KP Sharma Oli']
    },
    {
        name: 'Sher Bahadur Deuba',
        category: 'Politics',
        handle: '@DeubaSherbdr',
        image: 'https://pbs.twimg.com/profile_images/1044510739082313728/34oiYMBc_400x400.jpg',
        searchTerms: ['Sher Bahadur Deuba']
    },
    {
        name: 'Gagan Thapa',
        category: 'Politics',
        handle: '@thapagk',
        image: 'https://pbs.twimg.com/profile_images/1271785371127480321/4_Ic0B7m_400x400.jpg',
        searchTerms: ['Gagan Thapa']
    },
    {
        name: 'Rajendra Lingden',
        category: 'Politics',
        handle: '@RajendraLingden',
        image: 'https://pbs.twimg.com/profile_images/807137128832348161/B8-eE7-z_reasonably_small.jpg',
        searchTerms: ['Rajendra Lingden']
    },
    {
        name: 'Kamal Thapa',
        category: 'Politics',
        handle: '@kTnepal',
        searchTerms: ['Kamal Thapa'],
        image: 'https://pbs.twimg.com/profile_images/1109620803962851328/kLFiAf4Z_400x400.jpg'
    },
    {
        name: 'Yogesh Bhattarai',
        category: 'Politics',
        handle: '@yogesbhattarai',
        searchTerms: ['Yogesh Bhattarai'],
        image: 'https://pbs.twimg.com/profile_images/1245999832147193856/lSej4wlJ_200x200.jpg',
    },
    {
        name: 'Pradeep Gyawali',
        category: 'Politics',
        handle: '@PradeepgyawaliK',
        searchTerms: ['Pradeep Gyawali'],
        image: 'https://pbs.twimg.com/profile_images/1114561242226667523/J74c_baG_200x200.jpg',
    },
    {
        name: 'Basanta Chaudhary',
        category: 'Politics',
        handle: '@basant_cg',
        searchTerms: ['Basanta Chaudhary'],
        image: 'https://pbs.twimg.com/profile_images/1286237855614775297/uADJ2v4U_200x200.jpg',
    },
    {
        name: 'Rabindra Mishra',
        category: 'Politics',
        handle: '@RabindraMishra',
        searchTerms: ['Rabindra Mishra'],
        image: 'https://pbs.twimg.com/profile_images/1248923916627636224/YkNkuIPH_200x200.jpg',
    },
    {
        name: 'Bhim Rawal',
        category: 'Politics',
        handle: '@BhimRawal179',
        searchTerms: ['Bhim Rawal'],
        image: 'https://pbs.twimg.com/profile_images/863237248593965056/9hJy7pPT_200x200.jpg',
    },
    {
        name: 'Narayan Kaji Shrestha',
        category: 'Politics',
        handle: '@nksthaprakash',
        searchTerms: ['Narayan Kaji Shrestha'],
        image: 'https://pbs.twimg.com/profile_images/456438160944136193/ePgSMScw_200x200.jpeg',
    },
    {
        name: 'Nilamber Acharya',
        category: 'Politics',
        handle: '@nilacharya',
        searchTerms: ['Nilamber Acharya'],
        image: 'https://pbs.twimg.com/profile_images/1001335641437884417/fYZnA4Nk_200x200.jpg',
    },
    {
        name: 'Prakash Man Singh',
        category: 'Politics',
        handle: '@PMSinghNC',
        searchTerms: ['Prakash Man Singh'],
        image: 'https://pbs.twimg.com/profile_images/1262342140807442432/dIqAto9I_200x200.jpg',
    },
    {
        name: 'Madhav Kumar Nepal',
        category: 'Politics',
        handle: '@ncp_madhavnepal',
        searchTerms: ['Madhav Kumar Nepal'],
        image: 'https://pbs.twimg.com/profile_images/628469242187223041/1csoeY96_200x200.jpg',
    },
    {
        name: 'Comrade Prachanda',
        category: 'Politics',
        handle: '@cmprachanda',
        searchTerms: ['Puspa Kamal Dahal','Prachanda'],
        image: 'https://pbs.twimg.com/profile_images/1046428725133414401/cMICPiMS_200x200.jpg'
    },
    {
        name: 'Ram Sharan Mahat',
        category: 'Politics',
        handle: '@ramsmahat',
        searchTerms: ['Ram Sharan Mahat'],
        image: 'https://pbs.twimg.com/profile_images/627845038815379457/DnsJZQT9_200x200.jpg'
    },
    {
        name: 'Bimalendra Nidhi',
        category: 'Politics',
        handle: '@BimalendraNidhi',
        searchTerms: ['Bimalendra Nidhi'],
        image: 'https://pbs.twimg.com/profile_images/1053672788689596416/nxmj_Fw8_200x200.jpg'
    },
    {
        name: 'Ram Chandra Paudel',
        category: 'Politics',
        handle: '@NcPaudel',
        searchTerms: ['Ram Chandra Paudel'],
        image: 'https://pbs.twimg.com/profile_images/1150253522216030208/mXsPNoRz_200x200.jpg'
    },
    {
        name: 'Gokul Prasad Baskota',
        category: 'Politics',
        handle: '@GokulPBaskota',
        searchTerms: ['Gokul Prasad Baskota'],
        image: 'https://pbs.twimg.com/profile_images/1046689897376108549/GayzcBjw_200x200.jpg'
    },
    {
        name: 'Bhanu Bhakta Dhakal',
        category: 'Politics',
        handle: '@dhbhanu',
        searchTerms: ['Bhanu Bhakta Dhakal'],
        image: 'https://pbs.twimg.com/profile_images/1036251513843318784/2nI3h4vm_200x200.jpg'
    },
    {
        name: 'Khagendra Sangroula',
        category: 'Media Celebrity',
        handle: '@belakoboli',
        searchTerms: ['Khagendra Sangroula'],
        image: 'https://pbs.twimg.com/profile_images/777430819748974592/RAxgtDyd_200x200.jpg',
    },
    {
        name: 'Vijay Kumar Panday',
        category: 'Media Celebrity',
        handle: '@Vijaykumarko',
        searchTerms: ['Vijay Kumar Panday'],
        image: 'https://pbs.twimg.com/profile_images/891293756737036288/xR3s_3gO_200x200.jpg',
    },
    {
        name: 'Bhusan Dahal',
        category: 'Media Celebrity',
        handle: '@DahalTbd',
        searchTerms: ['Bhusan Dahal'],
        image: 'https://pbs.twimg.com/profile_images/1280013586824224768/bDX_trnN_200x200.jpg',
    },
    {
        name: 'Dil Bhusan Pathak',
        category: 'Media Celebrity',
        handle: '@DilBhusanPathak',
        searchTerms: ['Dil Bhusan Pathak'],
        image: 'https://pbs.twimg.com/profile_images/1182300102280413187/nDlqQ9rD_200x200.jpg',
    },
    {
        name: 'Yubraj Ghimire',
        category: 'Media Celebrity',
        handle: '@YubarajGhimire3',
        searchTerms: ['Yubaraj Ghimire'],
        image: 'https://pbs.twimg.com/profile_images/3442008702/66e02b757c23c671223ad7936b5cc085_200x200.jpeg',
    },
    {
        name: 'Kishore Nepal',
        category: 'Media Celebrity',
        handle: '@kishorenepal',
        searchTerms: ['Kishore Nepal'],
        image: 'https://pbs.twimg.com/profile_images/1262063327607316482/H21K4AVn_200x200.jpg',
    },
    {
        name: 'Kanak Mani Dixit',
        category: 'Media Celebrity',
        handle: '@KanakManiDixit',
        searchTerms: ['Kanak Mani Dixit'],
        image: 'https://pbs.twimg.com/profile_images/1093343506016493568/4OBk94Gk_200x200.jpg',
    },
    {
        name: 'Subhash Ghimire',
        category: 'Media Celebrity',
        handle: '@subhash580',
        searchTerms: ['Subhash Ghimire'],
        image: 'https://pbs.twimg.com/profile_images/1293055891877453827/B4c-rO4e_200x200.jpg'
    },
    {
        name: 'Pramod Kharel',
        category: 'Singer',
        handle: '@kharel777',
        searchTerms: ['Pramod Kharel'],
        image: 'https://pbs.twimg.com/profile_images/1041923276585357312/LNomwS-O_200x200.jpg',
    },
    {
        name: 'Deepak Bajracharya',
        category: 'Singer',
        handle: '@dpkbajra',
        searchTerms: ['Deepak Bajracharya'],
        image: 'https://pbs.twimg.com/profile_images/867739088329289729/SWx6ngN8_200x200.jpg'
    },
    {
        name: 'Manisha Koirala',
        category: 'Actor',
        handle: '@mkoirala',
        searchTerms: ['Manisha Koirala'],
        image: 'https://pbs.twimg.com/profile_images/1061546130247430144/duf25B-a_200x200.jpg',
    },
    {
        name: 'Keki Adhikari',
        category: 'Actor',
        handle: '@KekiAdhikari',
        searchTerms: ['Keki Adhikari'],
        image: 'https://pbs.twimg.com/profile_images/1293446913212071936/pbg5lZxD_200x200.jpg',
    },
    {
        name: 'Rajesh Hamal',
        category: 'Actor',
        handle: '@MN_RajeshHamal',
        searchTerms: ['Rajesh Hamal'],
        image: 'https://pbs.twimg.com/profile_images/1223595122945753093/ZubYq5hK_200x200.jpg',
    },
    {
        name: 'Manoj Gajurel',
        category: 'Actor',
        handle: '@gajureal',
        searchTerms: ['Manoj Gajurel'],
        image: 'https://pbs.twimg.com/profile_images/1275063373994930178/ZJSUWlDc_200x200.jpg',
    },
    {
        name: 'Priyanka Karki',
        category: 'Actor',
        handle: '@PriyankaKarky',
        searchTerms: ['Priyanka Karki'],
        image: 'https://pbs.twimg.com/profile_images/944935879562457089/uBkmC0U2_200x200.jpg'
    },
    {
        name: 'Rekha Thapa',
        category: 'Actor',
        handle: '@rekhafilms',
        searchTerms: ['Rekha Thapa'],
        image: 'https://pbs.twimg.com/profile_images/1159465637330087937/24KOLdDG_200x200.jpg'
    },
    {
        name: 'Dayahang Rai',
        category: 'Actor',
        handle: '@dayahangrai',
        searchTerms: ['Dayahang Rai'],
        image: 'https://pbs.twimg.com/profile_images/739446581724729345/GnwJmfhN_200x200.jpg'
    },
    {
        name: 'Namrataa Shrestha',
        category: 'Actor',
        handle: '@NamrataaS',
        searchTerms: ['Namrataa Shrestha'],
        image: 'https://pbs.twimg.com/profile_images/1136678908105961473/6chqSPWA_200x200.png'
    },
    {
        name: 'Reeccha Sharma',
        category: 'Actor',
        handle: '@reecchasharma',
        searchTerms: ['Reeccha Sharma'],
        image: 'https://pbs.twimg.com/profile_images/1233090377684381696/KMah4dNV_200x200.jpg'
    },
    {
        name: 'Raj Ballav Koirala',
        category: 'Actor',
        handle: '@RajBallav',
        searchTerms: ['Raj Ballav Koirala'],
        image: 'https://pbs.twimg.com/profile_images/1295182129337425925/jWkU-B3c_200x200.jpg'
    },
    {
        name: 'Shweta Khadka',
        category: 'Actor',
        handle: '@Shweta_khadka',
        searchTerms: ['Shweta Khadka'],
        image: 'https://pbs.twimg.com/profile_images/1005867068170752000/6VbCESKj_200x200.jpg'
    },
    {
        name: 'Neeta Dhungana',
        category: 'Actor',
        handle: '@neeta_dhungana_',
        searchTerms: ['Neeta Dhungana'],
        image: 'https://pbs.twimg.com/profile_images/1262401622140952585/ihgg8K2-_200x200.jpg'
    },
    {
        name: 'Jharana Thapa',
        category: 'Actor',
        handle: '@jharana_thapa',
        searchTerms: ['Jharana Thapa'],
        image: 'https://pbs.twimg.com/profile_images/993441947443519489/jJEfHCaL_200x200.jpg'
    },
    {
        name: 'Nisha Adhikari',
        category: 'Actor',
        handle: '@nishaadhikari4u',
        searchTerms: ['Nisha Adhikari'],
        image: 'https://pbs.twimg.com/profile_images/419462881621458945/myk5mCAq_200x200.jpeg'
    },
    {
        name: 'Deepak Raj Giri',
        category: 'Actor',
        handle: '@deepakraj2016',
        searchTerms: ['Deepak Raj Giri'],
        image: 'https://pbs.twimg.com/profile_images/686208528088875008/7dN-KKz2_200x200.jpg'
    },
    {
        name: 'Nirmal Purja',
        category: 'Sports',
        handle: '@nimsdai',
        searchTerms: ['Nirmal Purja'],
        image: 'https://pbs.twimg.com/profile_images/1155908331170619393/GUiExdN3_200x200.jpg',
    },
    {
        name: 'Sandeep Lamichhane',
        category: 'Sports',
        handle: '@Sandeep25',
        searchTerms: ['Sandeep Lamicchane'],
        image: 'https://pbs.twimg.com/profile_images/686208528088875008/7dN-KKz2_200x200.jpg'
    },
    {
        name: 'Paras Khadka',
        category: 'Sports',
        handle: '@paras77',
        searchTerms: ['Paras Khadka'],
        image: 'https://pbs.twimg.com/profile_images/1264936585008517122/QG3YAxGA_200x200.jpg'
    },
    {
        name: 'Gaurika Singh',
        category: 'Sports',
        handle: '@gaurika_singh',
        searchTerms: ['Gaurika Singh'],
        image: 'https://pbs.twimg.com/profile_images/1282074805026594819/stoZRfKq_200x200.jpg'
    },
    {
        name: 'Siporta Gurung',
        category: 'Sports',
        handle: '@GurungSipora',
        searchTerms: ['Sipora Gurung'],
        image: 'https://pbs.twimg.com/profile_images/996204655460978688/5WNzHlUg_200x200.jpg'
    },
    {
        name: 'Gyanendra Malla',
        category: 'Sports',
        handle: '@gyanu_gm11',
        searchTerms: 'Gyanendra Malla',
        image: 'https://pbs.twimg.com/profile_images/1024227850189254656/kzLSPbl8_200x200.jpg'
    },
    {
        name: 'Gyanendra Shah',
        category: 'Celebrity',
        handle: '@GBBShah',
        searchTerms: ['Gyanendra Shah'],
        image: 'https://pbs.twimg.com/profile_images/1249686060088451073/SmdhKkDN_200x200.jpg',
    },
]

module.exports = {
    categories,
    TrendingTwitterHandles
}