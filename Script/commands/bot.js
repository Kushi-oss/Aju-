const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
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

  var tl = ["বেশি bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼তুমি আমাকে বিয়ের প্রস্তাব দেওনি🥺পচা তুমি🥺" , "আমি আবাল দের সাথে কথা বলি না,ok😒" , "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈" , "Bolo , শুনলাম তোরে নাকি রাইতে দিনে তোর মা ঝাড়ু দিয়ে কেলায়🙂🫶🏽?  " , "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?" , "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬" , "তোর মুখ টাই কেমন বেকা ভাল্লাগে না" , "আরে Bolo আমার জান ,কেমন আছো?😚 " , "Bot বলে অসম্মান করছি,😰😿" , "Hop beda😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , boss bol boss 😘 " , "বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে বিজি আছি" , " এতো ডাকিস কেন🤬 চুটিয়ে লাল করে দিব নোংরামি বের করে দিব 😒🔪" , "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 " , "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒" , "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আছি" , "কি হলো , মিস্টেক করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "হুম বলো কি বলবে😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒","আজ পর্জন্ত জানলাম না হুম এর রিপ্লাই কি দিব🥹" , "আহ শুনা আমার খুব কষ্ট হইছে বলো" , " jang hanga korba😒😬" , "ভাই দুঃখ পাইসনা তোর জন্যে কিরিম আফা আছে 🙂🫶🏽" , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰" , "দিল টুটকে বিখার গেয়া 🙂💔" , "আমাকে এতো না ডেকছ কেন ভলো টালো বাসো নাকি🤭🙈" , "🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻","আমি এখন বস Aj'mira xu'zen এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাস-🤝🌻","আমাকে না ডেকে আমার গিয়ে বাড়ির কাজ কর আকাইম্ম-😒🔪","ঝাং থুমালে আইলাপিউ পেপি-💝😽","উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡😈","জান তোমার  সম্পত্তি আমার হাতে তুলে দিবা-🙊🙆🏼‍♀️","আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧","ভাই তোরে দেখলে ভমি আসে🫵-🤮","চুনা ও চুনা ডেকো না বাসন না মজলে আম্মু মারে 🤧😭","স্বপ্ন তোমারে নিয়ে দেখতে চাই তুমি যদি আমার হয়ে থেকে যাও-💝🌺🌻","জান হাঙ্গা করবা-🙊😝🌻","আসো ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-🙊🙈 আসো বিয়া করি😽","ইসস এতো ডাকো কেনো লজ্জা লাগে তো-🙈🖤🌼","আমার  পক্ষ থেকে তোমারে এতো এতো ভালোবাসা-🥰😽🫶 আমার জন্য দোয়া করবেন-💝💚 কারণ আমি শশুর বাড়ি চলে যাচ্ছি🌺🌻","- ভালোবাসা নামক আব্লামি করতে মন চাইলে আমাকে নক দেও","জান তুমি শুধু আমার আমি তোমারে দিয়ে ৩৬৫ দিন বাড়ির সব কাজ করাই-💝🌺😽","জান তোমার কিডনি দিবা -🙂 I ph নিতাম 🥱","-আন্টি-🙆-আপনার ছেলে-- আমাকে একটুও ভালোবাসে না 🥺🥹","oii-🥺🥹-এক🥄 চামচ ভালোবাসা দিবা-🤏🏻🙂","-আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বস উল্লাস কে দান করেন-🥱🐰🍒","-ও মিম ও মিম-😇-তুমি কেন চুরি করলা সাদিয়ার ফর্সা হওয়ার ক্রীম-🌚🤧","-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর তোর crush কে-🐸😾🔪","-𝙂𝙖𝙮𝙚𝙨-🤗- কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂️🤧","-𝗢𝗶𝗶 আন্টি-তোমার ছেলে খালি রাগ করে-🥺🥴","তাকাই আছো কেন চুমু দিবা-🙄🐸😘","আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇","-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗","কি বেপার আপনি শ্বশুর বাড়িতে যাচ্ছেন না কেন-🤔🥱🌻","দিনশেষে আমি goribxz -☹️🤧","-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻","-ছোটবেলা ভাবতাম বিয়ে করলে অটোমেটিক বাচ্চা হয়-🥱-ওমা এখন দেখি কাহিনী অন্যরকম-😦🙂🌻","-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে নিয়ে সিরিয়াল বানাতে পারলাম না -🐸🥲","-20 থাকতে তোরা বিড়ি খাস কেন বুঝা আমারে-😑😒🐸⚒️","—যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗","—হাজারো লুচ্চা লুচ্চির ভিরে -🥱 আমি এক নিষ্পাপ মানুষ🤗🙆🏼‍♀️","-রূপের অহংকার করো না-🙂❤️চকচকে সূর্যটাও দিনশেষে অন্ধকারে পরিণত হয়-🤗💜","সুন্দর মাইয়া মানেই-🥱আমার বস উল্লাস' এর বউ-😽🫶আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗","এত অহংকার করে লাভ নেই-🌸মৃত্যুটা নিশ্চিত শুধু সময়টা অ'নিশ্চিত-🖤🙂","-দিন দিন কিছু মানুষের কাছে অপ্রিয় হয়ে যাইতেছি-🙂😿🌸","হুদাই আমারে  শয়তানে লারে-😝😑☹️","-𝗜 𝗟𝗢𝗩𝗢 𝗬𝗢𝗨-😽-আহারে ভাবছো তোমারে প্রোপজ করছি-🥴-থাপ্পর দিয়া কিডনী লক করে দিব-😒-ভুল পড়া বের করে দিবো-🤭🐸","-আমি একটা দুধের শিশু-😇-🫵𝗬𝗢𝗨🐸","-কতদিন হয়ে গেলো বিছনায় মুতি না-😿-মিস ইউ নেংটা কাল-🥺🤧","--𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি ডিম -- ভাজতে পারি-🥱😏","- খালি বলে ভাগ্যে কেউ নাই-🫢- চেহারার দিকে একবারও দেখে না 🫶-","-ইস কেউ যদি বলতো-🙂- আজ থেকে আমার সব সম্পত্তি তোমার নামে লিখে দিলাম-🙂🫶🏽","-ভাই তোরে আগেই কইছি তোর কপালে মাইয়া নাই-🙄🤧","-একদিন সে ঠিকই ফিরে আসবে-😇- আর এসে দেখবে আমি বাড়িতে নাই-🙂 শশুর বাড়ি চলে গেছি😹","-হুদাই গ্রুপে আছি-🥺🐸-কেও ইনবক্সে নক দিয়ে বলে না জান চলো বিরিয়ানিখেতে যাই-🥺🤧","কি'রে গ্রুপে দেখি একটাও এক্টিভ মেম্বার নাই-🤦‍🥱","-দেশের সব কিছুই চুরি হচ্ছে-🙄-শুধু আমার বান্ডুপির কিডনি ছাড়া-🥴😑😏","-🫵তোমারে প্রচুর ভাল্লাগে-😽- আসো বিয়া করি-🔨😼🥱🐸","-আজ থেকে আর কাউকে পাত্তা দিমু না -!😏-কারণ আমি ফর্সা হওয়ার ক্রিম কিনছি -!🙂🐸","বেশি Bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼 তুমি আমাকে বিয়েতে দাওয়াত দেওনি🥺 পচা তুমি🥺 " , "আমি আবাল দের সাতে কথা বলি না,ok😒" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈 " , "বার বার ডাকলে মাথা গরম হয় কিন্তু😑", "হা বলো😒,কি করতে পারি😐😑?" , "এতো ডাকছিস কোনো?মরবি  নাকি? ","মেয়ে হলে বুঝতিস বাসন মাজার কি জ্বালা 😭??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop bedi😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার বস Aj'mira xu'zen এর এর সাথে ব্যাস্ত আসি😋" , "আমি গরীব এর সাথে কথা বলি না😼😼" , "আমাকে ডাকলে ,আমি কিন্তু টাকা নিবো 😒 " , "আরে আমি মজা করার mood এ নাই😒" , "যে সারা দিন txt দেইনি সে রাতে বিয়া করতে আসবে না 😮‍💨 যা ভাই ghuma-😴" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, ?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "ভাই সাইডে আয় একটু কথা আছে 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না বস ,বল 😌" , "বল ভাই🌚" , "তোর কি চোখে পড়ে না আমি বস Aj'mira xu'zen এর সাথে ব্যাস্ত আসি😒" , "༊━━🦋নামাজি মানুষেরা সব থেকে বেশি সুন্দর হয়..!!😇🥀 🦋 কারণ.!! -অজুর পানির মত শ্রেষ্ঠ মেকআপ দুনিয়াতে নেই༊━ღ━༎🥰🥀 🥰-আলহামদুলিল্লাহ-🥰","- শখের মানুষ  বিছানায় মু'তে..!🙃🥴","- আইডি তে রিচ নাই নাহলে আমিও তোদের মত সেলিব্রেটি হতে পারতাম ","🥛-🍍👈 -লে খাহ্..!😒🥺","- অনুমতি দিলে 𝚈𝚘𝚞𝚃𝚞𝚋𝚎-এ কল দিতাম..!😒","~আমি মারা গেলে..!🙂 ~অনেক মানুষ বিরক্ত হওয়া থেকে বেঁচে  যাবে..!😅💔","🍒---আমি সেই গল্পের বই-🙂 -যে বই সবাই পড়তে পারলেও-😌 -অর্থ বোঝার ক্ষমতা কারো নেই..!☺️🥀💔","~কার জন্য এতো মায়া...!😌🥀 ~এই শহরে আপন বলতে...!😔🥀 ~শুধুই তো নিজের ছায়া...!😥🥀","- কারেন্ট একদম বেডি'গো মতো- 🤧 -খালি ঢং করে আসে আবার চলে যায়-😤😾🔪","- ভাই ডাকিস না শুনবো ন- 😒-🫵 কারণ তুই একটা বলদ..!🥱😼","- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমাকে সন্দেহ করে.!🐸","- আমার থেকে ভালো অনেক পাবা-🙂 -কিন্তু সব ভালো তে কি আর ভালোবাসা থাকে..!💔🥀","- মানুষকে সবচেয়ে বেশি কষ্ট দেয় তার শখের মানুষ...!🥺💔👈","- তোমার লগে দেখা হবে আবার - 😌 -আমার স্বামী সন্তানের সাথে..!😛🤣👈","- থাপ্পড় চিনোস থাপ্পড়- 👋👋😡 -চিন্তা করিস না তরে মারমু না-🤗 -ami inochen- 🥱 - টাকা পয়সা হাতের ময়েলা 😮‍💨 আর আমি পরিষ্কার মানুষ ময়লা টয়েলা হাতে রাখি না 😏🥱","- অবহেলা করিস না-😑😪 - যখন নিজেকে বদলে ফেলবো -😌 - তখন আমার চেয়েও বেশি কষ্ট পাবি..!🙂💔","- বন্ধুর সাথে ছেকা খাওয়া গান শুনতে শুনতে-🤧 -এখন আমিও বন্ধুর 𝙴𝚇 কে অনেক 𝙼𝙸𝚂𝚂 করি-🤕🥺","-৯৯টাকায় ৯৯জিবি ৯৯বছর-☺️🐸 -অফারটি পেতে এখনই আমাকে প্রোপস করুন-🤗😂👈","- পিও-🥺 -তোমাকে না পেলে আমি সত্যি-😪 -আরেকজন কে-😼 -পটাতে বাধ্য হবো-😑🤧","•-কিরে🫵🏽 তরা নাকি  prem করস..😐🐸•ছিঃ ভাই তোরা প্রেম কেমনে করিস-🤮🐸","- যেই আইডির মায়ায় পড়ে ভুল্লি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.!🙂" ,];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "Bot") || (event.body.toLowerCase() == "KuShiNa")) {
     return api.sendMessage("< কেনো পোষণ্ডের মানুষ ব্লক মারছে যে আমাকে ডাকিস😹🫵🏽:))", threadID);
   };

    if ((event.body.toLowerCase() == "Bot") || (event.body.toLowerCase() == "bot")) {
     return api.sendMessage("এতো ডাকিস না ভাই আমি তোর মতো আকাঈম্মা না 🤬", threadID);
   };
   
    if ((event.body.toLowerCase() == "help") || (event.body.toLowerCase() == "help")) {
     return api.sendMessage("type /help", threadID);
   };
  
   if ((event.body.toLowerCase() == "!") || (event.body.toLowerCase() == "Bot")) {
     return api.sendMessage("simsimi কমান্ড এড নাই টাইপ করুন baby", threadID);
   };
  
   if ((event.body.toLowerCase() == "Bot") || (event.body.toLowerCase() == "bot") ||(event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙂")) {
     return api.sendMessage("তোর মাথা🐸🤣", threadID);
   };

   if ((event.body.toLowerCase() == "gay") || (event.body.toLowerCase() == "luiccha")) {
     return api.sendMessage("SAME TO YOU😊 ", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "👅")) {
     return api.sendMessage("কিরে হালা লুচ্চা, এগুলো কি ইমুজি দেস ।", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚", threadID);
   };

   if ((event.body.toLowerCase() == "Amr matha") || (event.body.toLowerCase() == "Tomar matha")) {
     return api.sendMessage("~ তোমার মাথায়ে ঘিলু নাই নাকি গাধা 😹🫵🏽?? ", threadID);
   };

  if ((event.body.toLowerCase() == "Kushina") || (event.body.toLowerCase() == "ভাবি") || (event.body.toLowerCase() == "Aju") || (event.body.toLowerCase() == "@Aj'mira xu'zen")) {
     return api.sendMessage("উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "ceo")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞ Aj'mira xu'zen☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 Her - Aju.\n𝐇er 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/profile.php?id=100000654976375\nতার সাতে যোগা যোগ করবেন WhatsApp :- +904684****", threadID);
   };

   if ((event.body.toLowerCase() == "Tor boss ke") || (event.body.toLowerCase() == "admin ")) {
     return api.sendMessage(" হাই আমি মেছেন্জার ROBOT  আামার বস Aj'mira xu'zen আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য আমি চাই আপনারা সব সময় হাসি খুশি থাকেন", threadID);
   };

  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "boter admin")) {
     return api.sendMessage("He is Ullash ッ❤️ তাকে সবাই Aj'mira xu'zen নামে  চিনে🤙", threadID);
   };
ন
   if ((event.body.toLowerCase() == "ai") || (event.body.toLowerCase() == "Ai")) {
     return api.sendMessage("If you want to use the AI command, type /ai ", threadID);
   };

  
   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("তুই চুপ চুপ কর পাগল ছাগল", threadID);
   };

  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "Salam ")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "ami anna") || (event.body.toLowerCase() == "ami kushina") || (event.body.toLowerCase() == "ami tur boss") || (event.body.toLowerCase() == "gay")) {
     return api.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "@") || (event.body.toLowerCase() == "@")) {
     return api.sendMessage("খবরদার কেউ এই আইডি মেনশন দিবানা এই আইডি এর মালিক এখন ঘুমে বেস্ত আছে-😪😴 ", threadID);
   };

  if ((event.body.toLowerCase() == "bot") || (event.body.toLowerCase() == "Bot")) {
     return api.sendMessage("ভাই তোরে দেখলে ভমি আসে..!🤮", threadID);
   };
  
  if ((event.body.toLowerCase() == "Bot") || (event.body.toLowerCase() == "bot")) {
     return api.sendMessage("তুই সেই না রে যে রাতে মুরগি চুরি করতে গিয়ে মার খাইছিস..!🐸⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "Bot") || (event.body.toLowerCase() == "Kushina")) {
     return api.sendMessage("কিরে এতো ডাকিস কেন থাপ্পড় খাবি..!😠⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "Bot") || (event.body.toLowerCase() == "bot")) {
     return api.sendMessage("যা গিয়ে পড়তে বস এখানে আবলামি না করে😠⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "Bot") || (event.body.toLowerCase() == "bot")) {
     return api.sendMessage("️ তুমি পঁচা তোমার সাথে কথা নাই 🥺", threadID);
   };

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "ধন্যবাস") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("️এতো ধন্যবাস না দিয়ে পার্টি দিতে পারিস না 😒😤", threadID);
   };

   if ((event.body.toLowerCase() == "Bot") || (event.body.toLowerCase() == "bot") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage(" রএতো যে রাগ করিস তোর তো রাগ ভাঙ্গানোর মানুষ নাই 😹", threadID);
   };

   if ((event.body.toLowerCase() == "হুম") || (event.body.toLowerCase() == "Hm")) {
     return api.sendMessage(" হআজ পর্যন্ত হুম এর রিপ্লাই কি দিব জানলাম না 🐸কেউ জেনে থাকলে বলিস ভাই 😤", threadID);
   };

   if ((event.body.toLowerCase() == "Name") || (event.body.toLowerCase() == "nm") || (event.body.toLowerCase() == "Tor nam ki")) {
     return api.sendMessage("️MY NAME IS °_>Yor kushi", threadID);
   };

   if ((event.body.toLowerCase() == "Bot") || (event.body.toLowerCase() == "bot ")) {
     return api.sendMessage("️ভাই তুই এত লুইচ্চা কেন🙆🏼‍♀️ ", threadID);
   };

   if ((event.body.toLowerCase() == "bot") || (event.body.toLowerCase() == "Bot")) {
     return api.sendMessage("️এন থেকে সর দুরে গিয়া মর😒", threadID);
   };

   if ((event.body.toLowerCase() == "moriom") || (event.body.toLowerCase() == "ex")) {
     
   };

   if ((event.body.toLowerCase() == "Bot") || (event.body.toLowerCase() == "😞💔")) {
     return api.sendMessage("️Aj goribxz ble 😞🫶🏽", threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "🙂💔")) {
     return api.sendMessage("️কি রে ছাগল চেকা খাইছস নাকি মন খারাপ কেন😹", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো😘", threadID);
   };

   if ((event.body.toLowerCase() == "AMAKE KEW VALOBASHE NA") || (event.body.toLowerCase() == "amake kew valobashe na") || (event.body.toLowerCase() == "Aj kew nai bole🙂💔")) {
     return api.sendMessage(" শুধু বলে ভাগ্যে কেউ নাই নিজের চেহারার দিকে এক বারও দেখে না 🤨😒", threadID);
   };
((event.body.toLowerCase()=="ভাবি"
   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
     return api.sendMessage("আজ কেউ নাই বলে<🥺💔", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
   };

   if ((event.body.toLowerCase() == "😩🫶🏽") || (event.body.toLowerCase() == "😺🫶🏽") || (event.body.toLowerCase() == "Bot") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("ভালোবাসা নামক আবলামী করতে চাইলে  আমার ইনবক্সে আসো 😗", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "Kmon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("আলহামদুলিল্লাহ্ 😺 তোরে জিজ্ঞেস করুম না মর যা 😤", threadID);
   };

   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tmr ki mon kharap")) {
     return api.sendMessage("হ্যাঁ ভাই 20/25 লাখ টাকা পেলে মন টা একটু ভালো হতো 😒🔪", threadID);
   };

   if ((event.body.toLowerCase() == "bot") || (event.body.toLowerCase() == "Bot") || (event.body.toLowerCase() == "Ib te aso") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("তুই নিজেই ভাব কেউ তোকে ভালো কেনো বাসবে 🙆🏼‍♀️🤨", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস আমারে একা রেখে🥺", threadID);
   };

   if ((event.body.toLowerCase() == "tumi khaiso") || (event.body.toLowerCase() == "khaicho")) {
     return api.sendMessage("না ঝাং 🥹 তুমি রান্না করে রাখো আমি এসে খাবো >", threadID);
   };

   if ((event.body.toLowerCase() == "tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlo basho")) {
     return api.sendMessage("চুপ চাপ মন দিয়ে দে নইলে meaw মিও😺🔪", threadID);
   };

   if ((event.body.toLowerCase() == "ami ullash") || (event.body.toLowerCase() == "kire")) {
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
