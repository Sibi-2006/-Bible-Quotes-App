export const BOOKS: Record<string, string> = {
  'genesis': 'Genesis', 'exodus': 'Exodus', 'leviticus': 'Leviticus',
  'numbers': 'Numbers', 'deuteronomy': 'Deuteronomy', 'joshua': 'Joshua',
  'judges': 'Judges', 'ruth': 'Ruth', 'samuel1': '1 Samuel', 'samuel2': '2 Samuel',
  'kings1': '1 Kings', 'kings2': '2 Kings', 'chronicles1': '1 Chronicles',
  'chronicles2': '2 Chronicles', 'ezra': 'Ezra', 'nehemiah': 'Nehemiah',
  'job': 'Job', 'psalms': 'Psalms', 'proverbs': 'Proverbs',
  'ecclesiastes': 'Ecclesiastes', 'isaiah': 'Isaiah', 'jeremiah': 'Jeremiah',
  'lamentations': 'Lamentations', 'ezekiel': 'Ezekiel', 'daniel': 'Daniel',
  'hosea': 'Hosea', 'joel': 'Joel', 'amos': 'Amos', 'obadiah': 'Obadiah',
  'jonah': 'Jonah', 'micah': 'Micah', 'nahum': 'Nahum', 'habakkuk': 'Habakkuk',
  'zephaniah': 'Zephaniah', 'haggai': 'Haggai', 'zechariah': 'Zechariah',
  'malachi': 'Malachi', 'matthew': 'Matthew', 'mark': 'Mark', 'luke': 'Luke',
  'john': 'John', 'acts': 'Acts', 'romans': 'Romans', 'corinthians1': '1 Corinthians',
  'corinthians2': '2 Corinthians', 'galatians': 'Galatians', 'ephesians': 'Ephesians',
  'philippians': 'Philippians', 'colossians': 'Colossians', 'thessalonians1': '1 Thessalonians',
  'thessalonians2': '2 Thessalonians', 'timothy1': '1 Timothy', 'timothy2': '2 Timothy',
  'titus': 'Titus', 'philemon': 'Philemon', 'hebrews': 'Hebrews', 'james': 'James',
  'peter1': '1 Peter', 'peter2': '2 Peter', 'john1': '1 John', 'john2': '2 John',
  'john3': '3 John', 'jude': 'Jude', 'revelation': 'Revelation'
};

export const CATEGORIES = ['All', 'Faith', 'Love', 'Hope', 'Wisdom', 'Guidance', 'Courage', 'Forgiveness', 'Peace', 'Strength'];

export const CATEGORY_VERSES: Record<string, any[]> = {
  'Faith': [
    { book: 'john', chapter: 3, verse: 16, meaning: "Faith in Jesus Christ is the ultimate path to eternal life, reflecting God's immense love." },
    { book: 'romans', chapter: 10, verse: 17, meaning: "Faith grows through hearing and absorbing the sacred Word of God." },
    { book: 'hebrews', chapter: 11, verse: 1, meaning: "Faith is the confident assurance and evidence of things hoped for but not yet seen." },
  ],
  'Love': [
    { book: 'john', chapter: 13, verse: 34, meaning: "Jesus gives us a new commandment: to love one another with the same love He has shown us." },
    { book: '1corinthians', chapter: 13, verse: 4, meaning: "Love is defined by patience, kindness, and selflessness, standing as the greatest virtue." },
    { book: '1john', chapter: 4, verse: 7, meaning: "Love originates from God, and those who love truly know and are born of God." },
  ],
  'Hope': [
    { book: 'psalms', chapter: 42, verse: 5, meaning: "When our souls are downcast, we find hope by refocusing our trust in God's presence." },
    { book: 'romans', chapter: 15, verse: 13, meaning: "May the God of hope fill you with all joy and peace as you trust in Him." },
    { book: 'jeremiah', chapter: 29, verse: 11, meaning: "God’s plans for us are for welfare and peace, not evil, providing a future filled with hope." },
  ],
  'Wisdom': [
    { book: 'proverbs', chapter: 3, verse: 5, meaning: "True wisdom begins by trusting in God's sovereignty rather than our own limited logic." },
    { book: 'proverbs', chapter: 27, verse: 12, meaning: "The wise foresee danger and take refuge, while the simple keep going and pay the penalty." },
    { book: 'james', chapter: 3, verse: 17, meaning: "Wisdom from above is pure, peaceable, gentle, and full of mercy and good fruits." },
  ],
  'Guidance': [
    { book: 'psalms', chapter: 23, verse: 1, meaning: "The Lord is our Shepherd, providing everything we need and guiding our steps." },
    { book: 'proverbs', chapter: 22, verse: 6, meaning: "Train up a child in the way he should go, and when he is old he will not depart from it." },
    { book: 'isaiah', chapter: 41, verse: 10, meaning: "God promises His presence and strength to guide us, so we need not fear." },
  ],
  'Courage': [
    { book: 'joshua', chapter: 1, verse: 9, meaning: "Be strong and courageous, for the Lord your God is with you wherever you go." },
    { book: 'psalms', chapter: 27, verse: 1, meaning: "With the Lord as our light and salvation, there is no reason to fear anyone or anything." },
    { book: '2timothy', chapter: 1, verse: 7, meaning: "God has not given us a spirit of fear, but of power, love, and a sound mind." },
  ],
  'Forgiveness': [
    { book: 'matthew', chapter: 6, verse: 14, meaning: "If you forgive others their trespasses, your heavenly Father will also forgive you." },
    { book: 'colossians', chapter: 3, verse: 13, meaning: "Bear with each other and forgive whatever grievances you may have, just as the Lord forgave you." },
    { book: '1john', chapter: 1, verse: 9, meaning: "If we confess our sins, He is faithful and just to forgive us and cleanse us from all unrighteousness." },
  ],
  'Peace': [
    { book: 'philippians', chapter: 4, verse: 7, meaning: "The peace of God, which surpasses all understanding, will guard your hearts and minds." },
    { book: 'john', chapter: 14, verse: 27, meaning: "Jesus leaves us His peace—not as the world gives, but a deep, spiritual peace that calms the heart." },
    { book: 'isaiah', chapter: 26, verse: 3, meaning: "God keeps those in perfect peace whose minds are stayed on Him, because they trust in Him." },
  ],
  'Strength': [
    { book: 'psalms', chapter: 28, verse: 7, meaning: "The Lord is our strength and shield; our hearts trust in Him, and we are helped." },
    { book: 'philippians', chapter: 4, verse: 13, meaning: "We can do all things through Christ who strengthens us and provides inner fortitude." },
    { book: 'nahum', chapter: 1, verse: 7, meaning: "The Lord is good, a stronghold in the day of trouble; He knows those who take refuge in Him." },
  ]
};

export const TAMIL_MAP: Record<string, string> = {
  'john:3:16': 'தேவன், தம்முடைய ஒரேபேறான குமாரனை விசுவாசிக்கிறவன் எவனோ அவன் கெட்டுப்போகாமல் நித்தியஜீவனை அடையும்படிக்கு, அவரைத் தந்தருளி, இவ்வளவாய் உலகத்தில் அன்பு கூர்ந்தார்.',
  'romans:10:17': 'ஆதலால் விசுவாசம் கேள்வியினாலே வரும், கேள்வி தேவனுடைய வசனத்தினாலே வரும்.',
  'hebrews:11:1': 'விசுவாசமானது நம்பப்படுகிறவைகளின் உறுதியும், காணப்படாதவைகளின் நிச்சயமுமாயிருக்கிறது.',
  'john:13:34': 'நீங்கள் ஒருவரிலொருவர் அன்பாயிருங்கள்; நான் உங்களில் அன்பாயிருந்ததுபோல நீங்களும் ஒருவரிலொருவர் அன்பாயிருக்கவேண்டுமென்கிற புதிய கட்டளையை உங்களுக்குக் கொடுக்கிறேன்.',
  '1corinthians:13:4': 'அன்பு நீடிய சாந்தமும் தயவுமுள்ளது; அன்புக்குப் பொறாமையில்லை; அன்பு தன்னைப் புகழாது, அது இறுமாப்பாயிராது.',
  '1john:4:7': 'பிரியமானவர்களே, ஒருவரிலொருவர் அன்பாயிருக்கக்கடவோம்; ஏனெனில் அன்பு தேவனால் உண்டாயிருக்கிறது; அன்புள்ள எவனும் தேவனால் பிறந்து, அவரை அறிந்திருக்கிறான்.',
  'psalms:42:5': 'என் ஆத்துமாவே, நீ ஏன் கலங்குகிறாய்? ஏன் எனக்குள் திகைக்கிறாய்? தேவனை நோக்கிக் காத்திரு; அவர் சமூகத்து இரட்சிப்பினிமித்தம் நான் இன்னும் அவரைத் துதிப்பேன்.',
  'romans:15:13': 'நம்பிக்கையின் தேவன் விசுவாசத்தினால் உண்டாகும் எல்லாச் சந்தோஷத்தினாலும் சமாதானத்தினாலும் உங்களை நிரப்புவாராக.',
  'jeremiah:29:11': 'நீங்கள் எதிர்பார்க்கும் முடிவை உங்களுக்குக் கொடுக்கும்படிக்கு, நான் உங்களைக் குறித்துக்கொண்டிருக்கிற நினைவுகளை அறிவேன் என்று கர்த்தர் சொல்லுகிறார்; அவைகள் தீமைக்கல்ல, சமாதானத்துக்கேதுவான நினைவுகளே.',
  'proverbs:3:5': 'உன் சுயபுத்தியின்மேல் சாயாமல், உன் முழு இருதயத்தோடும் கர்த்தரில் நம்பிக்கையாயிருந்து, உன் வழிகளிலெல்லாம் அவரை நினைத்துக்கொள்; அப்பொழுது அவர் உன் பாதைகளைச் செவ்வைப்படுத்துவார்.',
  'proverbs:27:12': 'புத்திமான் ஆபத்தைக் கண்டு மறைந்துகொள்ளுகிறான்; பேதைகள் போய்த் தண்டிக்கப்படுகிறார்கள்.',
  'james:3:17': 'பரத்திலிருந்து வருகிற ஞானமோ முதலாவது சுத்தமுள்ளதாயும், பின்பு சமாதானமும் சாந்தமும் இணக்கமுமுள்ளதாயும், இரக்கத்தாலும் நற்கனிகளாலும் நிறைந்ததாயும், பட்சபாதமில்லாததாயும், மாயமற்றதாயுமிருக்கிறது.',
  'psalms:23:1': 'கர்த்தர் என் மேய்ப்பராயிருக்கிறார்; நான் தாழ்ச்சியடையேன்.',
  'proverbs:22:6': 'பிள்ளையானவன் நடக்கவேண்டிய வழியிலே அவனை நடத்து; அவன் முதிர்வயதிலும் அதை விடான்.',
  'isaiah:41:10': 'நீ பயப்படாதே, நான் உன்னுடனே இருக்கிறேன்; திகையாதே, நான் உன் தேவன்; நான் உன்னைப் பலப்படுத்தி உனக்குச் சகாயம்பண்ணுவேன்; என் நீதியின் வலதுகரத்தினால் உன்னைத் தாங்குவேன்.',
  'joshua:1:9': 'நான் உனக்குக் கட்டளையிடவில்லையா? பலங்கொண்டு திடமனதாயிரு; பீதியடையாதே, கலங்காதே; நீ போகும் இடமெல்லாம் உன் தேவனாகிய கர்த்தர் உன்னோடு இருக்கிறார்.',
  'psalms:27:1': 'கர்த்தர் என் வெளிச்சமும் என் இரட்சிப்புமானவர், யாருக்குப் பயப்படுவேன்? கர்த்தர் என் ஜீவனின் பெலனானவர், யாருக்கு அஞ்சுவேன்?',
  '2timothy:1:7': 'தேவன் நமக்குப் பயமுள்ள ஆவியைக் கொடாமல், பலமும் அன்பும் தெளிந்த புத்தியுமுள்ள ஆவியையே கொடுத்திருக்கிறார்.',
  'matthew:6:14': 'மனுஷருடைய தப்பிதங்களை நீங்கள் அவர்களுக்கு மன்னித்தால், உங்கள் பரம பிதா உங்களுக்கும் மன்னிப்பார்.',
  'colossians:3:13': 'ஒருவரையொருவர் தாங்கி, ஒருவர்பேரில் ஒருவருக்குக் குறைபாடு உண்டானால், கிறிஸ்து உங்களுக்கு மன்னித்ததுபோல, நீங்களும் ஒருவருக்கொருவர் மன்னியுங்கள்.',
  '1john:1:9': 'நம்முடைய பாவங்களை நாம் அறிக்கையிட்டால், பாவங்களை நமக்கு மன்னித்து எல்லா அநியாயத்தையும் நீக்கி நம்மைச் சுத்திகரிப்பதற்கு அவர் உண்மையும் நீதியுமுள்ளவராயிருக்கிறார்.',
  'philippians:4:7': 'அப்பொழுது எல்லாப் புத்திக்கும் மேலான தேவசமாதானம் உங்கள் இருதயங்களையும் உங்கள் சிந்தைகளையும் கிறிஸ்து இயேசுவுக்குள்ளாகக் காத்துக்கொள்ளும்.',
  'john:14:27': 'சமாதானத்தை உங்களுக்கு வைத்துப்போகிறேன், என்னுடைய சமாதானத்தையே உங்களுக்குக் கொடுக்கிறேன்; உலகம் கொடுக்கிறபிரகாரம் நான் உங்களுக்குக் கொடுக்கிறதில்லை; உங்கள் இருதயம் கலங்காமலும் பயப்படாமலும் இருப்பதாக.',
  'isaiah:26:3': 'உம்மை உறுதியாய்ப் பற்றிக்கொண்ட மனதையுடையவன் உம்மையே நம்பியிருக்கிறபடியால், நீர் அவனைப் பூரண சமாதானத்துடன் காத்துக்கொள்வீர்.',
  'psalms:28:7': 'கர்த்தர் என் பெலனும் என் கேடகமுமாயிருக்கிறார்; என் இருதயம் அவரை நம்பியிருந்தது, நான் சகாயம் பெற்றேன்.',
  'philippians:4:13': 'என்னைப் பெலப்படுத்துகிற கிறிஸ்துவினாலே எல்லாவற்றையும் செய்ய எனக்குப் பெலன் உண்டு.',
  'nahum:1:7': 'கர்த்தர் நல்லவர், இக்கட்டு நாளிலே அரணான கோட்டை; தம்மை நம்புகிறவர்களை அறிந்திருக்கிறார்.'
};
