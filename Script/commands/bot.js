const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Aju-",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["বেশি bot Bot করলে থাপড়াবো কিন্তূ 😒😒 " , "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺" , "আমি আবাল দের সাথে কথা বলি না,ok😒" , "এতো ডাকিস না ভাই তোর মতো আকাইম্মা না আমি 🥱" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো?🥺" , "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?" , "এতো ডাকছিস কেন ভাই পড়তে বস গিয়ে" , "ভন্ডামি বাদ দিয়ে ধর্মের পথে আয় ভাই 😒" , "আরে Bol Bhai ?😚 " , "Bot বলে অসম্মান করছিস,😰😿" , "Hop beda😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , boss bol boss😘 " , "বার বার Disturb করছিস কোনো😾,বাসন না মাঝল আম্মু মারবে 🥺" ,"ছাগল এতো ডাকিস কেন🤬" , "আমাকে ডাকলে ,আমি কিন্তু kick দিবো 😒" , "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒" , "হ্যাঁ ভাই সাইডে আয় তোর সাথে কথা আছে  😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আছি" , "কি হলো , মিস্টেক করচ্ছিস নাকি🤣" , "বলো কি বলবা, আমার সময় নাই বেশি ?🤭🤏" , "কালকে দেখা করিস তো একটু 😒" , "হা বলো, শুনছি আমি 😏" , "ভাই তোরে দেখলে ভোমি আসে 🤮" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না boss,বল 😌" , "বলো পিও🌚" , "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒","" , "ভাই একটা সত্যি কথা শুনবি " , " ভাই তুই এত লুইচ্ছা কেন😤" , "আজ পর্যন্ত জানলাম না হুম এর রিপ্লাই কি দিব " , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰" , "আমাকে এতো না ডেকে বস aju কে 10 কোটি টাকা দে 🙄" , "আমাকে এতো না ডেকছ কেন ভলো টালো বাসো নাকি🤭🙈" , "🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻","আমি এখন বস Aj'mira xu'zen এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻","আমাকে না ডেকে আমার বস গিয়ে পড়তে বোস-😽🫶🌺","তুই সে না যে রাতে মুরগি চুরি করতে গিয়ে ধরা পড়ছিস","উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡😈","জান তোমার অর্ধেক যায়গা জমি আমার হাতে তুলে দিবা-🙊🙆‍♂","আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧","ঝাং 🫵থুমালে আমি ভালুপাসি i la piu 🫶🏽🐸","চুনা যে সারা দিন মেসেজ দেইনি সে রাতে বিয়া করতে আসবে না😪🤧যা গিয়ে পড়তে বস😭","স্বপ্ন তোমারে নিয়ে দেখতে চাই তুমি যদি আমার হয়ে থেকে যাও-💝🌺🌻","জান হাঙ্গা করবা-🙊😝"ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-🙊🙈😽","ইসস এতো ডাকো কেনো লজ্জা লাগে তো-🙈🖤🌼","আমার বচ হিরো আলমের পক্ষ থেকে তোমারে এতো এতো ভালোবাসা-🥰😽🫶 আমার বস আলভী চৌধুরী'র  জন্য দোয়া করবেন-💝💚🌺🌻","- ভালোবাসা নামক আব্লামি করতে মন চাইলে আমার ইনবক্সে নক দাও-🙊🥱 🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 𝐋𝐈𝐍𝐊 🌻:- https://www.facebook.com/profile.php?id=100086680386976","জান তুমি শুধু আমার আমি তোমারে দিয়ে 365 দিন বাড়ির সব কাজ করাই-💝😗😽","জান ফুচকা খাবা🙂🥱🙆‍♂","-আন্টি-🙆-আপনার ছেলে-আমারে ভালুপাশে না ","oii-🥺🥹-এক🥄 চামচ ভালোবাসা দিবা-🤏🏻🙂","- চেকা খাইছো নাকি 🥱🐰🍒","-ও মিম ও মিম-😇-তুমি কেন চুরি করলা সাদিয়ার ফর্সা হওয়ার ক্রীম-🌚🤧","-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস Ajmira কে-🐸😾🔪","-𝙂𝙖𝙮𝙚𝙨-🤗-কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂️"আজ কেউ নাই বলে 😞💔-","তাকাই আছো কেন  ভালুপাসো নাকি-🙄🐸😘","আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇","-আমার গল্পে তোমার নানা সেরা-🙊🙆‍♂️🤗","কি বেপার আপনি শ্বশুর বাড়িতে যাচ্ছেন না কেন-🤔🥱🌻","দিনশেষে পরের আমি গরীব -☹️🤧","-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻","-ছোটবেলা ভাবতাম বিয়ে করলে অটোমেটিক বাচ্চা হয়-🥱-ওমা এখন দেখি কাহিনী অন্যরকম-😦🙂🌻","-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে নিয়ে মুভি বানাতে পারছি না -🐸🥲","- ভাই তুই এখনো সিঙ্গেল তাইলে ভাব তুই দেখতে কত খারাপ -🙆🏼‍♀️😒🐸⚒️","—যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার  সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗","—হাজারো লুচ্চা লুচ্চির ভিরে-🙂আমি এক নিস্পাপ ভালো মানুষ-🥱🤗🙆🏼‍♀️","-রূপের অহংকার করো না-🙂❤️চকচকে সূর্যটাও দিনশেষে অন্ধকারে পরিণত হয়-🤗💜","ভাই তোরে এখনো কইতাছি তোর কপালে মাইয়া নাই 😹😏","এত অহংকার করে লাভ নেই-🌸মৃত্যুটা নিশ্চিত শুধু সময়টা অ'নিশ্চিত-🖤🙂","-দিন দিন কিছু মানুষের কাছে অপ্রিয় হয়ে যাইতেছি-🙂😿🌸","হুদাই আমারে  শয়তানে লারে-😝😑☹️","- ভাই ভবি তো সেই -😽🥴-"থাপ্পর দিয়া কিডনী লক করে দিব-😒-ভুল পড়া বের করে দিবো-🤭🐸","-আমি একটা দুধের শিশু-😇-🫵𝗬𝗢𝗨🐸","-কতদিন হয়ে গেলো বিছনায় মুতি না-😿-মিস ইউ নেংটা কাল-🥺🤧","-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱","- আজ আপনার মত সেলিব্রিটি না বলে 😞🫶🏽","-ইস কেউ যদি বলতো-🙂- মন খারাপ করিও না আমার সব সম্পত্তিতোমার নামে লিখে দিবো-🥺🌸","- দেখ ভাই তুই আমার মুখের ওপর 10/12 কোটি টাকা ছুঁড়ে মার আমি কিছু মনে করব না 🥺সব অপমান মুখ বুঝে সহ্য করব 😊","-একদিন সে ঠিকই ফিরে আসবে -😇- এসে দেখবে  আমি বাড়িতে নাই 😅বিয়ে করে শশুর বাড়ি চলে গেছি 🐸🫶🏽","-হুদাই গ্রুপে আছি-🥺🐸-কেও ইনবক্সে নক দিয়ে বলে না আসো বিরিয়ানি খেতে যাই-🥺🤧","কি'রে গ্রুপে দেখি একটাও এক্টিভ মেম্বার নাই 😒😑","-চিনোস আমারে 😏চিনবি কেমনে আমি তো ঘর থেকে বের হইনি -🥴😑😏","-🫵তোমারে প্রচুর ভাল্লাগে-😽-সময় মতো প্রপোজ করমু বুঝছো-🔨😼-আমার বন্ধু কুত্তার মত লোয়াল -!😏" আর তোরে পাত্তা দিমু না-কারণ আমি ফর্সা হওয়ার ক্রিম কিনছি -!🙂🐸","বেশি Bot Bot করলে কোপাবো কিন্তু😒😒 " , "শুনবো না😼 তুমি আমাকে বিয়েতে দাওয়াত দেওনি 🥺 পচা তুমি🥺 " , "আমি আবাল দের সাতে কথা বলি না,ok😒" , "তোর বিয়ে খাওয়ার অপেক্ষাতে শুকিয়ে যাচ্ছি 😑" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো?  " , "বার বার ডাকলে মাথা গরম হয় কিন্তু😑", "হা বলো😒,কি করতে পারি😐😑?" , "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬","মেয়ে হলে বস উল্লাস'এর সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop bedi😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , hop beda 😒 " , "বার বার Disturb করেছিস কোনো😾,আমার বস উল্লাস এর এর সাথে ব্যাস্ত আসি😋" , "আমি গরীব এর সাথে কথা বলি না😼😼" , "আমাকে ডাকলে ,আমি কিন্তূ পুলিস কেস করে দিবো" , "আরে আমি মজা করার mood এ নাই😒" , "কেউ দুঃখ বুঝে না 😞💔" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "ভাই তোরে এখনো বলতাছি বিয়ে টা কর 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি বস Aj'mira xu'zen এর সাথে ব্যাস্ত আসি😒" , "༊━━🦋নামাজি মানুষেরা সব থেকে বেশি সুন্দর হয়..!!😇🥀 🦋 কারণ.!! -অজুর পানির মত শ্রেষ্ঠ মেকআপ দুনিয়াতে নেই༊━ღ━༎🥰🥀 🥰-আলহামদুলিল্লাহ-🥰","- শখের পুরুষ বিছানায় মু'তে..!🙃🥴","- এখনো সময় আছে ভালো হয়ে যা 😒","- অনুমতি দিলে 𝚈𝚘𝚞𝚃𝚞𝚋𝚎-এ কল দিতাম..!😒","~আমি মারা গেলে..!🙂 ~অনেক মানুষ বিরক্ত হওয়া থেকে বেঁচে  যাবে..!😅💔","🍒---আমি সেই গল্পের বই-🙂 -যে বই সবাই পড়তে পারলেও-😌 -অর্থ বোঝার ক্ষমতা কারো নেই..!☺️🥀💔","~কার জন্য এতো মায়া...!😌🥀 ~এই শহরে আপন বলতে...!😔🥀 ~শুধুই তো নিজের ছায়া...!😥🥀","- কারেন্ট একদম বেডি'গো মতো- 🤧 -খালি ঢং করে আসে আবার চলে যায়-😤😾🔪","- সানিলিওন  আফারে ধর্ষনের হুমকি দিয়ে আসলাম - 🤗 -আর 🫵তুমি য়ামারে খেয়ে দিবা সেই ভয় দেখাও ননসেন বেডি..!🥱😼","- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস উল্লাস কে সন্দেহ করে.!🐸","- আমার থেকে ভালো অনেক পাবা-🙂 -কিন্তু সব ভালো তে কি আর ভালোবাসা থাকে..!💔🥀","- পুরুষকে সবচেয়ে বেশি কষ্ট দেয় তার শখের নারী...!🥺💔👈","- তোমার লগে দেখা হবে আবার - 😌 -কোনো এক অচেনা গলির চিপায়..!😛🤣👈","- থাপ্পড় চিনোস থাপ্পড়- 👋👋😡 -চিন্তা করিস না তরে মারমু না-🤗" আজকে আমার মন ভালো নেই 🥺🫶🏽"- 🥱- ভাই তুই এত গরীব কেন 😒","- অবহেলা করিস না-😑😪 - যখন নিজেকে বদলে ফেলবো -😌 - তখন আমার চেয়েও বেশি কষ্ট পাবি..!🙂💔","- বন্ধুর সাথে ছেকা খাওয়া গান শুনতে শুনতে-🤧 -এখন আমিও বন্ধুর 𝙴𝚇 কে অনেক 𝙼𝙸𝚂𝚂 করি-🤕🥺","-৯৯টাকায় ৯৯জিবি ৯৯বছর-☺️🐸 -অফারটি পেতে এখনই আমাকে প্রোপস করুন-🤗😂👈","-প্রিয়-🥺 -তোমাকে না পেলে আমি সত্যি-😪 -আরেকজন কে-😼 -পটাতে বাধ্য হবো-😑🤧","•-কিরে🫵 তরা নাকি  prem করস..😐🐸. ছিঃ ভাই তোরা প্রেম করিস কেমনে -🐸","- যেই আইডির মায়ায় পড়ে ভুল্লি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.!😹" ,];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂")) {
     return api.sendMessage("<শুনলাম তোরে নাকি রাইতে দিনে তোর মা ঝাড়ু দিয়ে কেলায়ে 😹:))", threadID);
   };

    if ((event.body.toLowerCase() == "🫶🏽") || (event.body.toLowerCase() == "🫶🏽")) {
     return api.sendMessage("হায় রে ভালুপাশা", threadID);
   };
   
    if ((event.body.toLowerCase() == "help") || (event.body.toLowerCase() == "help")) {
     return api.sendMessage("type /help", threadID);
   };
  
   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("simsimi কমান্ড এড় নাই টাইপ করুন baby", threadID);
   };
  
   if ((event.body.toLowerCase() == "🙂💔") || (event.body.toLowerCase() == "o🙂💔") ||(event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "...")) {
     return api.sendMessage("চেকা খাইছো নাকি 😒🫶🏽", threadID);
   };

   if ((event.body.toLowerCase() == "tui gadha") || (event.body.toLowerCase() == "chagol")) {
     return api.sendMessage("SAME TO YOU😊 ", threadID);
   };

   if ((event.body.toLowerCase() == "🥲💔") || (event.body.toLowerCase() == "🙃🫶🏽")) {
     return api.sendMessage("দিল টুটকে বিখার গায়া 🐸💔।", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚", threadID);
   };

   if ((event.body.toLowerCase() == "Broh🙂") || (event.body.toLowerCase() == "ভাই")) {
     return api.sendMessage("~ যা ভাই গিয়ে পড়তে বস 😒তুই তো বাড়ির কাজও পারিস না 🥲?? ", threadID);
   };

  if ((event.body.toLowerCase() == "aju") || (event.body.toLowerCase() == "aju") || (event.body.toLowerCase() == "aju ッ") || (event.body.toLowerCase() == "aju")) {
     return api.sendMessage( "এত ডাকিস না ভাই বাসন ন মাঝলে আম্মু কেলায় 😩",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "ceo")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞ Ullash ッ ☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 ullash.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/profile.php?id=100000654976375\nতার সাতে যোগা যোগ করবেন WhatsApp :- +0175570***", threadID);
   };

   if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("ভাই তুই সে না যে রাতে মুরগি চুরি করতে গিয়ে ধরা পড়ছে 😒", threadID);
   };

  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "boter admin")) {
     return api.sendMessage("He is Ullash ッ❤️ তাকে সবাই aju নামে  চিনে😒", threadID);
   };

   if ((event.body.toLowerCase() == "ai") || (event.body.toLowerCase() == "Ai")) {
     return api.sendMessage("If you want to use the AI command, type /ai ", threadID);
   };

  
   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("তুই চুপ চুপ কর পাগল ছাগল", threadID);
   };

  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "Salam ")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "sala ami tor boss") || (event.body.toLowerCase() == "sala ami ullas") || (event.body.toLowerCase() == "cup sala ami ullash") || (event.body.toLowerCase() == "madari")) {
     return api.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "বোট") || (event.body.toLowerCase() == "Bot")) {
     return api.sendMessage("অনুমতি দিলে আপনাকে থাপড়াতাম-🥺🫶🏽", threadID);
   };

  if ((event.body.toLowerCase() == "বোট") || (event.body.toLowerCase() == "Bot")) {
     return api.sendMessage("তোরে কোপাইতে ইচ্ছা করে ⛏️", threadID);
   };
  
  if ((event.body.toLowerCase() == "বোট") || (event.body.toLowerCase() == "bot")) {
     return api.sendMessage("চেহারা দেখসোস বউ পাবি কেমনে 😤", threadID);
   };

  if ((event.body.toLowerCase() == "bot") || (event.body.toLowerCase() == "bot")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা 😤 জানু বলো 🤧", threadID);
   };

  if ((event.body.toLowerCase() == ") || (event.body.toLowerCase() == "bump")) {
     return api.sendMessage("আজ গরীব বলে 😞💔", threadID);
   };

   if ((event.body.toLowerCase() == "bot") || (event.body.toLowerCase() == "bot")) {
     return api.sendMessage("️ তুমি পঁচা তোমার সাথে কথা বলব না 🥺", threadID);
   };

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "ধন্যবাদ") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("ধন্যবাস না দিয়ে 10 কোটি টাকা তো দিতে পারো ?😒", threadID);
   };

   if ((event.body.toLowerCase() == "....") || (event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️ এতো যে রাগ করিস রাগ ভাঙ্গানোর মানুষ আছে ?😒", threadID);
   };

   if ((event.body.toLowerCase() == "হুম") || (event.body.toLowerCase() == "Hum")) {
     return api.sendMessage("️আজ পর্যন্ত জানলাম না হুম এর রিপ্লাই কি দিব 😑", threadID);
   };

   if ((event.body.toLowerCase() == "Name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "Tor nam ki")) {
     return api.sendMessage("️MY NAME IS °_তোর মাথা", threadID);
   };

   if ((event.body.toLowerCase() == "BOT ") || (event.body.toLowerCase() == "Bot er bacca")) {
     return api.sendMessage("ভাই চিন্তা করিস না তোর জন্যে কিরিম আফা আসে🐸🙏🏽", threadID);
   };

   if ((event.body.toLowerCase() == "bot") || (event.body.toLowerCase() == "bot")) {
     return api.sendMessage("️এন থেকে সর দুরে গিয়া মর😒", threadID);
   };

   if ((event.body.toLowerCase() == "bot") || (event.body.toLowerCase() == "বোট")) {
     return api.sendMessage("️ ভাই তোরে দেখতে একদম সেই হিরো আলমের মতো পুরাই ☺️🫶🏽", threadID);
   };

   if ((event.body.toLowerCase() == "bot") || (event.body.toLowerCase() == "bot")) {
     return api.sendMessage("️ আমাতে তেউ ভালুপাসে না তেন 🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😞💔") || (event.body.toLowerCase() == "...")) {
     return api.sendMessage("️ মন খারাপ করিস না ভাই কচু গাছে ফাঁসি দে 😵‍💫", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো🙃", threadID);
   };

   if ((event.body.toLowerCase() == "Aj keu nai ble😞💔") || (event.body.toLowerCase() == "Aj goribxz ble 😞💔") || (event.body.toLowerCase() == "Aj kew nai bole")) {
     return api.sendMessage("️ এটা শোনার পর আকাশ থেকে পড়লাম😳🙀/", threadID);
   };

   if ((event.body.toLowerCase() == "-") || (event.body.toLowerCase() == "bot")) {
     return api.sendMessage("আজ আপনার মত সেলিব্রিটি না বলে😞💔<", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
   };

   if ((event.body.toLowerCase() == "❤️‍🩹") || (event.body.toLowerCase() =="🫶🏽") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("ভালোবাসা নামক আবলামী করতে চাইলে  ইনবক্সে চলে যা পাগল ছাগল🌚🐸", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "Kmon acho") || (event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🙂")) {
     return api.sendMessage("এতো সেন্টি না খেয়ে 20 খা ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tmr ki mon kharap")) {
     return api.sendMessage("আমার সাদা মনে কোনো কাদা নাই...!🌝", threadID);
   };

   if ((event.body.toLowerCase() == "তুর বস রে ভালবাসি") || (event.body.toLowerCase() == "😩🫶🏽") || (event.body.toLowerCase() == "Kushina") || (event.body.toLowerCase() == "Pio") || (event.body.toLowerCase() == "aju")) {
     return api.sendMessage("সব মাইর খাওনোর ধান্দা 😒", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই মরতে যাস ⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "tumi khaiso") || (event.body.toLowerCase() == "khaicho")) {
     return api.sendMessage("না পিও 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <🫶🏽🙃", threadID);
   };

   if ((event.body.toLowerCase() == "bot") || (event.body.toLowerCase() == "Bot")) {
     return api.sendMessage("তোরে দেখলে ভমি আসে ভাই 🤮", threadID);
   };

   if ((event.body.toLowerCase() == "ami kushina") || (event.body.toLowerCase() == "kire")) {
     return api.sendMessage("হ্যা বস কেমন আছেন..?☺️", threadID);
   };
  mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
