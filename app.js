// ── MULTILINGUAL TRANSLATION DICTIONARY ──
const translations = {
  en: {
    nav_home: "Home",
    nav_story: "Our Story",
    nav_products: "Products",
    nav_gallery: "Gallery",
    nav_news: "Updates & Analysis",
    nav_why: "Why Choose Us",
    nav_inquiry: "Inquiry",
    nav_gallery: "Gallery",
    nav_news: "Updates & Analysis",
    tab_agricultural: "Agricultural Products",
    tab_food_dehydrated: "Food Products",
    tab_fresh_produce: "Fresh Fruits & Vegetables",
    tab_handicrafts: "Handicrafts",
    btn_quote: "Request Quote",
    hero_badge: "ESTABLISHED SINCE 2021",
    hero_title: "Bridging Indian<br><em>Heritage</em> with Global<br>Markets.",
    hero_desc: "At JALPEX INTERNATIONAL, we export premium Indian spices, high-quality seeds, organic grains, and pulses directly to international clients. Sourced with absolute care, delivered with complete integrity.",
    hero_explore: "Explore Portfolio",
    hero_legacy: "Our Values",
    stat_heritage: "Heritage Quality",
    stat_organic: "Pure & Organic",
    stat_destinations: "Global Sourcing",
    story_label: "Global Agro Exporter",
    story_title: "Premium Quality, Ethical Sourcing & Trusted Global Delivery",
    story_p1: "At Jalpex International, we specialize in exporting premium Indian agricultural products to global markets. Sourced from the richest soils of India, our products maintain their natural flavor, rich aroma, and traditional quality. We are committed to ethical practices, strict quality control, and clean processing methods to ensure our products meet international standards.",
    story_p2: "We offer an extensive range of agricultural exports, categorized into authentic spices, nutritious seeds, and essential grains and pulses. Every product is processed and packaged with great care, preserving its goodness for our global customers. Partner with us for a seamless export experience backed by unmatched dedication.",
    story_link: "Explore our export collections &rarr;",
    ticker_text: "Reliable Worldwide Logistics Services • Delivering Indian Quality Globally • Premium Agricultural Export Solutions • Sourced with Care, Processed with Integrity • Trusted Global Export Partner • ",
    prod_label: "Featured Products",
    prod_title: "Our Premium Export Collection",
    prod_desc: "Explore our premium range of export-quality products carefully sourced, securely packed, and delivered worldwide with quality, freshness, and reliability.",
    tab_agricultural: "Agricultural Products",
    tab_food_dehydrated: "Food Products",
    tab_fresh_produce: "Fresh Fruits & Vegetables",
    tab_handicrafts: "Handicrafts",
    btn_inquire_product: "Inquire Now",
    wcu_label: "Our Strengths",
    wcu_title: "Why Global Partners Choose Us",
    wcu_1_title: "Quality Assurance",
    wcu_1_desc: "Strict adherence to international food safety regulations and quality testing.",
    wcu_2_title: "Premium Packaging",
    wcu_2_desc: "Customized, moisture-resistant packaging that preserves aroma, taste, and shelf life.",
    wcu_3_title: "Ethical Sourcing",
    wcu_3_desc: "Direct partnership with local farmers to ensure fair trade and sustainable agriculture.",
    wcu_4_title: "Global Logistics",
    wcu_4_desc: "Efficient custom clearance and fast shipping networks to deliver fresh batches worldwide.",
    process_label: "Step-by-Step Flow",
    process_title: "Our Export Process",
    process_1_step: "Step 01",
    process_1_title: "Direct Sourcing",
    process_1_desc: "We handpick materials directly from agricultural hubs and certified farms in India.",
    process_2_step: "Step 02",
    process_2_title: "Quality Inspection",
    process_2_desc: "Products undergo thorough testing to ensure compliance with global sanitary standards.",
    process_3_step: "Step 03",
    process_3_title: "Modern Processing",
    process_3_desc: "State-of-the-art cleaning, sorting, and grounding technology maintains purity.",
    process_4_step: "Step 04",
    process_4_title: "Secure Packaging",
    process_4_desc: "Advanced vacuum and airtight packaging shields products during long sea routes.",
    process_5_step: "Step 05",
    process_5_title: "Global Distribution",
    process_5_desc: "Handled by trusted freight forwarders, ensuring on-time delivery at destination ports.",
    inquiry_label: "Get in Touch",
    inquiry_title: "Start Your Export Inquiry",
    inquiry_desc: "Send us your requirement, packaging needs, and destination port. Our trade desk will reply with competitive CNF/FOB quotes within 24 hours.",
    info_address_title: "Registered Office",
    info_address_val: "23, Dayakunj, Vrundavan Nagar, Near Madhuram Bypass, Junagadh, Gujarat, India, 362001",
    info_email_title: "Email Support",
    info_phone_title: "Direct Trade Desk",
    form_name: "Your Full Name / Company Name",
    form_email: "Corporate Email Address",
    form_phone: "Phone Number (with Country Code)",
    form_product: "Select Main Product Category",
    form_prod_opt1: "Spices (Whole / Ground)",
    form_prod_opt2: "Nutritious Seeds",
    form_prod_opt3: "Pulses and Grains",
    form_message: "Detail your requirement (Quantity, Destination Port, Packaging preference)",
    form_btn: "Send Export Inquiry",
    form_success: "Thank you! Your export inquiry has been logged. Our trade desk will contact you shortly.",
    form_error: "Please fill out all required fields.",
    footer_desc: "Jalpex International is a premium export house of agricultural commodities. We represent the pinnacle of Indian farming heritage, catering to import networks in 40+ countries.",
    footer_quick_links: "Quick Navigation",
    footer_products: "Our Offerings",
    footer_contact: "Contact Sourcing Desk",
    footer_rights: "All Rights Reserved.",
    footer_terms: "Terms of Trade",
    footer_privacy: "Privacy Policy",
    btn_view_all: "View All Products",
    logistics_label: "Our Logistics Services!",
    logistics_title: "Reliable Worldwide Freight Services",
    logistics_desc: "Seamless Import Export Transportation solutions designed to ensure secure, timely, and efficient global delivery of premium agricultural products.",
    logistics_road_title: "Road Freight",
    logistics_road_desc: "Reliable inland transportation solutions ensuring safe and timely delivery of agricultural products across domestic and international supply chains with efficiency and professionalism.",
    logistics_ocean_title: "Ocean Freight",
    logistics_ocean_desc: "Cost-effective global sea freight services designed for bulk agricultural exports, secure container handling, and seamless trade operations across worldwide markets with reliability and efficiency.",
    logistics_air_title: "Air Freight",
    logistics_air_desc: "Fast and dependable air cargo solutions for urgent shipments, delivering premium agricultural products quickly while maintaining quality and freshness standards.",
    pl_label: "Value-Added Services",
    pl_title: "Private Labeling & Custom Packaging Solutions",
    pl_desc: "We help global brands, distributors, and supermarkets build their own brand presence. Jalpex International offers complete private labeling contract services, taking your products from bulk sourcing to retail-ready custom packaging.",
    pl_f1_title: "Custom Brand Labeling",
    pl_f1_desc: "Your logos, colors, barcodes, and custom designs on premium export jars or pouches.",
    pl_f2_title: "Flexible Packing Sizes",
    pl_f2_desc: "Available in small retail pouches (50g - 1kg) to bulk bags (10kg - 50kg) based on requirements.",
    pl_f3_title: "Hygienic Pouch Packing",
    pl_f3_desc: "Modern multi-layer vacuum pouch setups that lock in flavor and avoid moisture entry.",
    pl_f4_title: "Compliance Ready",
    pl_f4_desc: "Label details conform with international custom laws and FDA regulations.",
    cert_label: "Global Standards",
    cert_title: "Accredited Quality Certifications",
    cert_desc: "We adhere strictly to global sanitary and phytosanitary requirements. Our sourcing operations carry internationally recognized benchmarks.",
    gallery_header_label: "Export Infrastructure",
    gallery_header_title: "Where Quality Meets <em>Scale</em>",
    gallery_header_subtitle: "A behind-the-scenes look at our warehousing, port logistics, quality labs, and farm sourcing operations powering global deliveries.",
    news_header_title: "Trade Intelligence & News",
    news_header_subtitle: "Access current crop updates, agricultural market trends, logistics developments, and company announcements from our trade desk.",
    news_filter_all: "All Articles",
    news_filter_market: "Market Reports",
    news_filter_company: "Company Updates",
    news_filter_sourcing: "Sourcing &amp; Logistics"
  },
  hi: {
    nav_home: "मुख्य पृष्ठ",
    nav_story: "हमारी कहानी",
    nav_products: "उत्पाद",
    nav_gallery: "गैलरी",
    nav_news: "अपडेट और विश्लेषण",
    nav_why: "हमें क्यों चुनें",
    nav_inquiry: "पूछताछ",
    nav_gallery: "गैलरी",
    nav_news: "अपडेट और विश्लेषण",
    tab_agricultural: "कृषि उत्पाद",
    tab_food_dehydrated: "खाद्य उत्पाद",
    tab_fresh_produce: "ताजे फल और सब्जियां",
    tab_handicrafts: "हस्तशिल्प",
    btn_quote: "कोटेशन मांगें",
    hero_badge: "स्थापना वर्ष २०२१",
    hero_title: "भारतीय <em>विरासत</em> को<br>वैश्विक बाजारों से जोड़ना।",
    hero_desc: "जालपेक्स इंटरनेशनल में, हम प्रीमियम भारतीय मसालों, उच्च गुणवत्ता वाले बीजों, जैविक अनाज और दालों को सीधे अंतरराष्ट्रीय ग्राहकों को निर्यात करते हैं। पूर्ण देखभाल के साथ सोर्स और ईमानदारी के साथ डिलीवर किया जाता है।",
    hero_explore: "पोर्टफोलियो देखें",
    hero_legacy: "हमारे मूल्य",
    stat_heritage: "विरासत गुणवत्ता",
    stat_organic: "शुद्ध और जैविक",
    stat_destinations: "वैश्विक सोर्सिंग",
    story_label: "वैश्विक कृषि निर्यातक",
    story_title: "प्रीमियम गुणवत्ता, नैतिक सोर्सिंग और विश्वसनीय वैश्विक वितरण",
    story_p1: "जालपेक्स इंटरनेशनल में, हम वैश्विक बाजारों में प्रीमियम भारतीय कृषि उत्पादों के निर्यात में विशेषज्ञ हैं। भारत की सबसे समृद्ध मिट्टी से प्राप्त, हमारे उत्पाद अपने प्राकृतिक स्वाद, समृद्ध सुगंध और पारंपरिक गुणवत्ता बनाए रखते हैं।",
    story_p2: "हम कृषि निर्यातों की एक विस्तृत श्रृंखला प्रदान करते हैं, जिन्हें मसालों, पौष्टिक बीजों और आवश्यक अनाजों व दालों में वर्गीकृत किया गया है। हर उत्पाद को हमारे वैश्विक ग्राहकों के लिए उसकी गुणवत्ता बनाए रखने के लिए सावधानीपूर्वक संसाधित किया जाता है।",
    story_link: "हमारे निर्यात संग्रह देखें &rarr;",
    ticker_text: "विश्वसनीय वैश्विक रसद सेवाएं • भारतीय गुणवत्ता को विश्व स्तर पर वितरित करना • प्रीमियम कृषि निर्यात समाधान • देखभाल के साथ सोर्स, अखंडता के साथ संसाधित • ",
    prod_label: "विशेष रुप से प्रदर्शित उत्पाद",
    prod_title: "हमारा प्रीमियम निर्यात संग्रह",
    prod_desc: "गुणवत्ता, ताजगी और विश्वसनीयता के साथ दुनिया भर में वितरित हमारे प्रीमियम निर्यात-गुणवत्ता वाले उत्पादों की श्रृंखला का अन्वेषण करें।",
    tab_agricultural: "कृषि उत्पाद",
    tab_food_dehydrated: "खाद्य उत्पाद",
    tab_fresh_produce: "ताजे फल और सब्जियां",
    tab_handicrafts: "हस्तशिल्प",
    btn_inquire_product: "अभी पूछताछ करें",
    wcu_label: "हमारी ताकत",
    wcu_title: "वैश्विक भागीदार हमें क्यों चुनते हैं",
    wcu_1_title: "गुणवत्ता आश्वासन",
    wcu_1_desc: "अंतरराष्ट्रीय खाद्य सुरक्षा नियमों और गुणवत्ता परीक्षणों का कड़ा पालन।",
    wcu_2_title: "प्रीमियम पैकेजिंग",
    wcu_2_desc: "अनुकूलित, नमी-प्रतिरोधी पैकेजिंग जो सुगंध और स्वाद को बरकरार रखती है।",
    wcu_3_title: "नैतिक सोर्सिंग",
    wcu_3_desc: "स्थानीय किसानों के साथ सीधी साझेदारी जो स्थायी कृषि सुनिश्चित करती है।",
    wcu_4_title: "वैश्विक रसद",
    wcu_4_desc: "ताजा बैचों को वितरित करने के लिए कुशल सीमा शुल्क निकासी और तेज़ शिपिंग नेटवर्क।",
    process_label: "चरण-दर-चरण प्रक्रिया",
    process_title: "हमारी निर्यात प्रक्रिया",
    process_1_step: "चरण ०१",
    process_1_title: "सीधी सोर्सिंग",
    process_1_desc: "हम भारत में प्रमाणित खेतों और कृषि केंद्रों से सीधे कच्चे माल का चयन करते हैं।",
    process_2_step: "चरण ०२",
    process_2_title: "गुणवत्ता निरीक्षण",
    process_2_desc: "वैश्विक स्वच्छता मानकों के अनुपालन सुनिश्चित करने के लिए उत्पादों का गहन परीक्षण किया जाता है।",
    process_3_step: "चरण ०३",
    process_3_title: "आधुनिक प्रसंस्करण",
    process_3_desc: "अत्याधुनिक सफाई, छँटाई और पीसने की तकनीक शुद्धता बनाए रखती है।",
    process_4_step: "चरण ०४",
    process_4_title: "सुरक्षित पैकेजिंग",
    process_4_desc: "उन्नत वैक्यूम और एयरटाइट पैकेजिंग लंबे समुद्री मार्गों के दौरान उत्पादों की रक्षा करती है।",
    process_5_step: "चरण ०५",
    process_5_title: "वैश्विक वितरण",
    process_5_desc: "विश्वसनीय फ्रेट फॉरवर्डर्स द्वारा संभाला जाता है, जो गंतव्य बंदरगाहों पर समय पर डिलीवरी सुनिश्चित करता है।",
    inquiry_label: "संपर्क करें",
    inquiry_title: "अपनी निर्यात पूछताछ शुरू करें",
    inquiry_desc: "हमें अपनी आवश्यकता, पैकेजिंग और गंतव्य बंदरगाह भेजें। हमारा ट्रेड डेस्क २४ घंटे के भीतर प्रतिस्पर्धी कीमतों के साथ उत्तर देगा।",
    info_address_title: "पंजीकृत कार्यालय",
    info_address_val: "23, Dayakunj, Vrundavan Nagar, Near Madhuram Bypass, Junagadh, Gujarat, India, 362001",
    info_email_title: "ईमेल समर्थन",
    info_phone_title: "डायरेक्ट ट्रेड डेस्क",
    form_name: "आपका नाम / कंपनी का नाम",
    form_email: "कॉर्पोरेट ईमेल पता",
    form_phone: "फोन नंबर (देश कोड के साथ)",
    form_product: "मुख्य उत्पाद श्रेणी चुनें",
    form_prod_opt1: "मसाले (साबुत / पिसे)",
    form_prod_opt2: "पौष्टिक बीज",
    form_prod_opt3: "दालें और अनाज",
    form_message: "अपनी आवश्यकता का विवरण दें (मात्रा, गंतव्य बंदरगाह, पैकेजिंग प्राथमिकता)",
    form_btn: "निर्यात पूछताछ भेजें",
    form_success: "धन्यवाद! आपकी निर्यात पूछताछ दर्ज कर ली गई है। हमारा ट्रेड डेस्क जल्द ही आपसे संपर्क करेगा।",
    form_error: "कृपया सभी आवश्यक फ़ील्ड भरें।",
    footer_desc: "जालपेक्स इंटरनेशनल कृषि उत्पादों का एक प्रीमियम निर्यात गृह है। हम भारतीय कृषि विरासत के शिखर का प्रतिनिधित्व करते हैं।",
    footer_quick_links: "त्वरित नेविगेशन",
    footer_products: "हमारे उत्पाद",
    footer_contact: "स्रोतों के डेस्क से संपर्क",
    footer_rights: "सर्वाधिकार सुरक्षित।",
    footer_terms: "व्यापार की शर्तें",
    footer_privacy: "गोपनीयता नीति",
    btn_view_all: "सभी उत्पाद देखें",
    logistics_label: "हमारी लॉजिस्टिक्स सेवाएं!",
    logistics_title: "विश्वसनीय वैश्विक माल ढुलाई सेवाएं",
    logistics_desc: "प्रीमियम कृषि उत्पादों की सुरक्षित, समयबद्ध और कुशल वैश्विक डिलीवरी सुनिश्चित करने के लिए डिज़ाइन किए गए सहज आयात-निर्यात परिवहन समाधान।",
    logistics_road_title: "सड़क माल ढुलाई",
    logistics_road_desc: "घरेलू और अंतरराष्ट्रीय आपूर्ति श्रृंखलाओं में कृषि उत्पादों की सुरक्षित और समय पर डिलीवरी सुनिश्चित करने वाले विश्वसनीय अंतर्देशीय परिवहन समाधान, दक्षता और व्यावसायिकता के साथ।",
    logistics_ocean_title: "समुद्री माल ढुलाई",
    logistics_ocean_desc: "थोक कृषि निर्यात, सुरक्षित कंटेनर हैंडलिंग और वैश्विक बाजारों में विश्वसनीयता व दक्षता के साथ सहज व्यापार संचालन के लिए डिज़ाइन की गई किफायती वैश्विक समुद्री माल ढुलाई सेवाएं।",
    logistics_air_title: "हवाई माल ढुलाई",
    logistics_air_desc: "तत्काल शिपमेंट के लिए तेज़ और भरोसेमंद हवाई कार्गो समाधान, जो गुणवत्ता और ताज़गी के मानकों को बनाए रखते हुए प्रीमियम कृषि उत्पादों को शीघ्रता से पहुंचाते हैं।",
    pl_label: "मूल्य-वर्धित सेवाएं",
    pl_title: "प्राइवेट लेबलिंग और कस्टम पैकेजिंग समाधान",
    pl_desc: "हम वैश्विक ब्रांडों, वितरकों और सुपरमार्केट को अपनी खुद की ब्रांड उपस्थिति बनाने में मदद करते हैं। जालपेक्स इंटरनेशनल संपूर्ण प्राइवेट लेबलिंग अनुबंध सेवाएं प्रदान करता है, जो आपके उत्पादों को थोक सोर्सिंग से लेकर रिटेल-तैयार कस्टम पैकेजिंग तक ले जाता है।",
    pl_f1_title: "कस्टम ब्रांड लेबलिंग",
    pl_f1_desc: "प्रीमियम निर्यात जार या पाउच पर आपके लोगो, रंग, बारकोड और कस्टम डिज़ाइन।",
    pl_f2_title: "लचीले पैकिंग आकार",
    pl_f2_desc: "आवश्यकता के अनुसार छोटे रिटेल पाउच (50 ग्राम - 1 किग्रा) से लेकर थोक बैग (10 किग्रा - 50 किग्रा) तक उपलब्ध।",
    pl_f3_title: "स्वच्छ पाउच पैकिंग",
    pl_f3_desc: "आधुनिक मल्टी-लेयर वैक्यूम पाउच सेटअप जो स्वाद को सुरक्षित रखते हैं और नमी के प्रवेश से बचाते हैं।",
    pl_f4_title: "अनुपालन के लिए तैयार",
    pl_f4_desc: "लेबल विवरण अंतरराष्ट्रीय सीमा शुल्क कानूनों और FDA नियमों के अनुरूप हैं।",
    cert_label: "वैश्विक मानक",
    cert_title: "मान्यता प्राप्त गुणवत्ता प्रमाणन",
    cert_desc: "हम वैश्विक स्वच्छता और पादप स्वच्छता आवश्यकताओं का सख्ती से पालन करते हैं। हमारे सोर्सिंग कार्य अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त मानकों को वहन करते हैं।",
    gallery_header_label: "निर्यात अवसंरचना",
    gallery_header_title: "जहां गुणवत्ता मिलती है <em>स्केल</em> से",
    gallery_header_subtitle: "हमारे वेयरहाउसिंग, पोर्ट लॉजिस्टिक्स, गुणवत्ता प्रयोगशालाओं और वैश्विक डिलीवरी को शक्ति देने वाले फार्म सोर्सिंग कार्यों की एक झलक।",
    news_header_title: "व्यापार बुद्धिमत्ता और समाचार",
    news_header_subtitle: "हमारे ट्रेड डेस्क से मौजूदा फसल अपडेट, कृषि बाजार के रुझान, लॉजिस्टिक्स विकास और कंपनी की घोषणाओं तक पहुंचें।",
    news_filter_all: "सभी लेख",
    news_filter_market: "बाजार रिपोर्ट",
    news_filter_company: "कंपनी अपडेट",
    news_filter_sourcing: "सोर्सिंग और लॉजिस्टिक्स"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_story: "قصتنا",
    nav_products: "المنتجات",
    nav_gallery: "معرض الصور",
    nav_news: "التحديثات والتحليلات",
    nav_why: "لماذا تختارنا",
    nav_inquiry: "الاستفسار",
    nav_gallery: "معرض الصور",
    nav_news: "التحديثات والتحليلات",
    tab_agricultural: "المنتجات الزراعية",
    tab_food_dehydrated: "المنتجات الغذائية",
    tab_fresh_produce: "الفواكه والخضروات الطازجة",
    tab_handicrafts: "الحرف اليدوية",
    btn_quote: "طلب اقتباس",
    hero_badge: "تأسست منذ عام 2021",
    hero_title: "ربط <em>التراث</em> الهندي<br>بالأسواق العالمية.",
    hero_desc: "في جالبيكس إنترناشيونال، نقوم بتصدير البهارات الهندية الممتازة، والبذور عالية الجودة، والحبوب العضوية، والبقوليات مباشرة إلى العملاء الدوليين. يتم الحصول عليها بعناية فائقة وتسليمها بنزاهة تامة.",
    hero_explore: "استكشف المنتجات",
    hero_legacy: "قيمنا",
    stat_heritage: "جودة التراث",
    stat_organic: "نقي وعضوي",
    stat_destinations: "مصادر عالمية",
    story_label: "مصدر زراعي عالمي",
    story_title: "جودة ممتازة، مصادر أخلاقية وتسليم عالمي موثوق",
    story_p1: "في جالبيكس إنترناشيونال، نحن متخصصون في تصدير المنتجات الزراعية الهندية المتميزة إلى الأسواق العالمية. يتم الحصول عليها من أغنى التربة في الهند، وتحافظ منتجاتنا على نكهتها الطبيعية ورائعتها الغنية وجودتها التقليدية.",
    story_p2: "نحن نقدم مجموعة واسعة من الصادرات الزراعية، المصنفة إلى بهارات أصلية، وبذور مغذية، وحبوب وبقوليات أساسية. تتم معالجة وتعبئة كل منتج بعناية فائقة للحفاظ على جودته لعملائنا العالميين.",
    story_link: "استكشف مجموعات التصدير لدينا &rarr;",
    ticker_text: "خدمات لوجستية عالمية موثوقة • تقديم الجودة الهندية عالميًا • حلول تصدير زراعية ممتازة • تم الحصول عليها بعناية ومعالجتها بنزاهة • ",
    prod_label: "منتجات مميزة",
    prod_title: "مجموعة التصدير الممتازة لدينا",
    prod_desc: "استكشف مجموعتنا المتميزة من المنتجات ذات الجودة التصديرية التي يتم الحصول عليها بعناية وتعبئتها بأمان وتسليمها إلى جميع أنحاء العالم بجودة ونضارة وموثوقية.",
    tab_agricultural: "المنتجات الزراعية",
    tab_food_dehydrated: "المنتجات الغذائية",
    tab_fresh_produce: "الفواكه والخضروات الطازجة",
    tab_handicrafts: "الحرف اليدوية",
    btn_inquire_product: "استفسر الآن",
    wcu_label: "نقاط قوتنا",
    wcu_title: "لماذا يختارنا الشركاء العالميون",
    wcu_1_title: "ضمان الجودة",
    wcu_1_desc: "الالتزام الصارم باللوائح الدولية لسلامة الأغذية واختبار الجودة.",
    wcu_2_title: "تعبئة ممتازة",
    wcu_2_desc: "تعبئة مخصصة ومقاومة للرطوبة تحافظ على الرائحة والمذاق ومدة الصلاحية.",
    wcu_3_title: "مصادر أخلاقية",
    wcu_3_desc: "شراكة مباشرة مع المزارعين المحليين لضمان التجارة العادلة والزراعة المستدامة.",
    wcu_4_title: "الخدمات اللوجستية العالمية",
    wcu_4_desc: "تخليص جمركي فعال وشبكات شحن سريعة لتقديم دفعات طازجة في جميع أنحاء العالم.",
    process_label: "خطوة بخطوة",
    process_title: "عملية التصدير لدينا",
    process_1_step: "الخطوة 01",
    process_1_title: "المصادر المباشرة",
    process_1_desc: "نحن نختار المواد يدويًا مباشرة من المراكز الزراعية والمزارع المعتمدة في الهند.",
    process_2_step: "الخطوة 02",
    process_2_title: "فحص الجودة",
    process_2_desc: "تخضع المنتجات لاختبارات شاملة لضمان الامتثال للمعايير الصحية العالمية.",
    process_3_step: "الخطوة 03",
    process_3_title: "معالجة حديثة",
    process_3_desc: "تحافظ تقنيات التنظيف والفرز والطحن الحديثة على النقاء.",
    process_4_step: "الخطوة 04",
    process_4_title: "التعبئة الآمنة",
    process_4_desc: "تعبئة متطورة ومفرغة من الهواء تحمي المنتجات خلال الطرق البحرية الطويلة.",
    process_5_step: "الخطوة 05",
    process_5_title: "التوزيع العالمي",
    process_5_desc: "يتم التعامل معها من قبل وكلاء شحن موثوقين، مما يضمن التسليم في الوقت المحدد في موانئ الوصول.",
    inquiry_label: "تواصل معنا",
    inquiry_title: "ابدأ استفسار التصدير الخاص بك",
    inquiry_desc: "أرسل لنا متطلباتك واحتياجات التعبئة وميناء الوصول. سيرد مكتب التجارة لدينا بأسعار تنافسية في غضون 24 ساعة.",
    info_address_title: "المكتب المسجل",
    info_address_val: "23, Dayakunj, Vrundavan Nagar, Near Madhuram Bypass, Junagadh, Gujarat, India, 362001",
    info_email_title: "دعم البريد الإلكتروني",
    info_phone_title: "مكتب التجارة المباشر",
    form_name: "الاسم الكامل / اسم الشركة",
    form_email: "البريد الإلكتروني للشركة",
    form_phone: "رقم الهاتف (مع رمز البلد)",
    form_product: "اختر فئة المنتج الرئيسية",
    form_prod_opt1: "بهارات (كاملة / مطحونة)",
    form_prod_opt2: "بذور مغذية",
    form_prod_opt3: "بقوليات وحبوب",
    form_message: "تفاصيل متطلباتك (الكمية، ميناء الوصول، تفضيل التعبئة)",
    form_btn: "إرسال استفسار التصدير",
    form_success: "شكرًا لك! تم تسجيل استفسار التصدير الخاص بك. سيتصل بك مكتب التجارة لدينا قريبًا.",
    form_error: "يرجى ملء جميع الحقول المطلوبة.",
    footer_desc: "جالبيكس إنترناشيونال هي دار تصدير ممتازة للسلع الزراعية. نحن نمثل قمة التراث الزراعي الهندي.",
    footer_quick_links: "تنقل سريع",
    footer_products: "عروضنا",
    footer_contact: "مكتب تواصل المصادر",
    footer_rights: "جميع الحقوق محفوظة.",
    footer_terms: "شروط التجارة",
    footer_privacy: "سياسة الخصوصية",
    btn_view_all: "عرض جميع المنتجات",
    logistics_label: "خدمات الخدمات اللوجستية لدينا!",
    logistics_title: "خدمات شحن عالمية موثوقة",
    logistics_desc: "حلول نقل استيراد وتصدير سلسة مصممة لضمان تسليم عالمي آمن وفي الوقت المحدد وفعال للمنتجات الزراعية الفاخرة.",
    logistics_road_title: "الشحن البري",
    logistics_road_desc: "حلول نقل داخلي موثوقة تضمن تسليم المنتجات الزراعية بأمان وفي الوقت المحدد عبر سلاسل التوريد المحلية والدولية بكفاءة واحترافية.",
    logistics_ocean_title: "الشحن البحري",
    logistics_ocean_desc: "خدمات شحن بحري عالمية فعالة من حيث التكلفة، مصممة للصادرات الزراعية بالجملة، والمناولة الآمنة للحاويات، والعمليات التجارية السلسة عبر الأسواق العالمية بموثوقية وكفاءة.",
    logistics_air_title: "الشحن الجوي",
    logistics_air_desc: "حلول شحن جوي سريعة وموثوقة للشحنات العاجلة، لتوصيل المنتجات الزراعية الفاخرة بسرعة مع الحفاظ على معايير الجودة والنضارة.",
    pl_label: "خدمات ذات قيمة مضافة",
    pl_title: "حلول العلامة الخاصة والتغليف المخصص",
    pl_desc: "نساعد العلامات التجارية والموزعين والمتاجر الكبرى العالمية على بناء حضور علامتهم التجارية الخاصة. تقدم جالبكس إنترناشيونال خدمات تعاقدية كاملة للعلامة الخاصة، لتحويل منتجاتك من التوريد بالجملة إلى تغليف مخصص جاهز للبيع بالتجزئة.",
    pl_f1_title: "وضع علامات تجارية مخصصة",
    pl_f1_desc: "شعاراتك وألوانك وأكواد الباركود والتصاميم المخصصة على جرار أو أكياس تصدير فاخرة.",
    pl_f2_title: "أحجام تعبئة مرنة",
    pl_f2_desc: "متوفرة في أكياس تجزئة صغيرة (50 جم - 1 كجم) إلى أكياس بالجملة (10 كجم - 50 كجم) حسب المتطلبات.",
    pl_f3_title: "تعبئة أكياس صحية",
    pl_f3_desc: "إعدادات أكياس تفريغ هوائي حديثة متعددة الطبقات تحافظ على النكهة وتمنع دخول الرطوبة.",
    pl_f4_title: "جاهز للامتثال",
    pl_f4_desc: "تتوافق تفاصيل الملصقات مع قوانين الجمارك الدولية ولوائح إدارة الغذاء والدواء الأمريكية (FDA).",
    cert_label: "المعايير العالمية",
    cert_title: "شهادات جودة معتمدة",
    cert_desc: "نلتزم بدقة بالمتطلبات الصحية والصحة النباتية العالمية. تحمل عمليات التوريد لدينا معايير معترف بها دوليًا.",
    gallery_header_label: "البنية التحتية للتصدير",
    gallery_header_title: "حيث تلتقي الجودة <em>بالحجم</em>",
    gallery_header_subtitle: "نظرة من وراء الكواليس على عمليات التخزين، والخدمات اللوجستية للموانئ، ومختبرات الجودة، وعمليات التوريد الزراعي التي تدعم عمليات التسليم العالمية.",
    news_header_title: "معلومات وأخبار التجارة",
    news_header_subtitle: "اطلع على أحدث تحديثات المحاصيل، واتجاهات السوق الزراعي، وتطورات الخدمات اللوجستية، وإعلانات الشركة من مكتب التجارة لدينا.",
    news_filter_all: "جميع المقالات",
    news_filter_market: "تقارير السوق",
    news_filter_company: "تحديثات الشركة",
    news_filter_sourcing: "التوريد والخدمات اللوجستية"
  },
  fr: {
    nav_home: "Accueil",
    nav_story: "Notre Histoire",
    nav_products: "Produits",
    nav_gallery: "Galerie",
    nav_news: "Mises à jour et Analyses",
    nav_why: "Pourquoi Nous Choisir",
    nav_inquiry: "Demande",
    nav_gallery: "Galerie",
    nav_news: "Mises à jour et Analyses",
    tab_agricultural: "Produits Agricoles",
    tab_food_dehydrated: "Produits Alimentaires",
    tab_fresh_produce: "Fruits & Légumes Frais",
    tab_handicrafts: "Artisanat",
    btn_quote: "Demander un Devis",
    hero_badge: "ÉTABLI DEPUIS 2021",
    hero_title: "Relier l'<em>Héritage</em> Indien<br>aux Marchés Globaux.",
    hero_desc: "Chez JALPEX INTERNATIONAL, nous exportons des épices indiennes de qualité supérieure, des graines nutritives, des céréales et légumineuses biologiques directement aux clients internationaux.",
    hero_explore: "Explorer le Portfolio",
    hero_legacy: "Nos Valeurs",
    stat_heritage: "Qualité Héritage",
    stat_organic: "Pur & Biologique",
    stat_destinations: "Sourcing Global",
    story_label: "Exportateur Agro Global",
    story_title: "Qualité Supérieure, Sourcing Éthique et Livraison Fiable",
    story_p1: "Chez Jalpex International, nous sommes spécialisés dans l'exportation de produits agricoles indiens de qualité supérieure. Issus des sols les plus riches de l'Inde, nos produits conservent leur saveur naturelle, leur arôme riche et leur qualité traditionnelle.",
    story_p2: "Nous proposons une large gamme d'exportations agricoles, classées en épices authentiques, graines nutritives et grains essentiels. Chaque produit est traité et emballé avec le plus grand soin.",
    story_link: "Découvrez nos collections d'exportation &rarr;",
    ticker_text: "Services logistiques mondiaux fiables • Livraison de la qualité indienne dans le monde entier • Solutions d'exportation agricole de premier ordre • ",
    prod_label: "Produits Vedettes",
    prod_title: "Notre Collection d'Exportation Premium",
    prod_desc: "Explorez notre gamme de produits de qualité supérieure, soigneusement sourcés, emballés de manière sécurisée et livrés dans le monde entier.",
    tab_agricultural: "Produits Agricoles",
    tab_food_dehydrated: "Produits Alimentaires",
    tab_fresh_produce: "Fruits & Légumes Frais",
    tab_handicrafts: "Artisanat",
    btn_inquire_product: "Demander des Infos",
    wcu_label: "Nos Points Forts",
    wcu_title: "Pourquoi les Partenaires Globaux Nous Choisissent",
    wcu_1_title: "Assurance Qualité",
    wcu_1_desc: "Respect strict des réglementations internationales de sécurité alimentaire.",
    wcu_2_title: "Emballage Premium",
    wcu_2_desc: "Emballage personnalisé et résistant à l'humidité qui préserve les arômes.",
    wcu_3_title: "Sourcing Éthique",
    wcu_3_desc: "Partenariat direct avec les agriculteurs locaux pour une agriculture durable.",
    wcu_4_title: "Logistique Globale",
    wcu_4_desc: "Dédouanement efficace et expédition rapide dans le monde entier.",
    process_label: "Étape par Étape",
    process_title: "Notre Processus d'Exportation",
    process_1_step: "Étape 01",
    process_1_title: "Sourcing Direct",
    process_1_desc: "Sélection rigoureuse directement auprès des coopératives agricoles certifiées.",
    process_2_step: "Étape 02",
    process_2_title: "Contrôle Qualité",
    process_2_desc: "Tests complets pour garantir la conformité aux normes sanitaires mondiales.",
    process_3_step: "Étape 03",
    process_3_title: "Traitement Moderne",
    process_3_desc: "Technologie de pointe pour le nettoyage et le tri afin de préserver la pureté.",
    process_4_step: "Étape 04",
    process_4_title: "Emballage Sécurisé",
    process_4_desc: "Emballage sous vide avancé protégeant les produits pendant le transport maritime.",
    process_5_step: "Étape 05",
    process_5_title: "Distribution Globale",
    process_5_desc: "Logistique gérée par des transporteurs de confiance jusqu'aux ports de destination.",
    inquiry_label: "Contactez-nous",
    inquiry_title: "Initier votre Demande d'Exportation",
    inquiry_desc: "Envoyez-nous vos besoins, volume et port de destination. Notre bureau commercial vous répondra sous 24h.",
    info_address_title: "Siège Social",
    info_address_val: "23, Dayakunj, Vrundavan Nagar, Near Madhuram Bypass, Junagadh, Gujarat, India, 362001",
    info_email_title: "Support E-mail",
    info_phone_title: "Bureau Commercial Direct",
    form_name: "Nom complet / Entreprise",
    form_email: "Adresse e-mail professionnelle",
    form_phone: "Numéro de téléphone (avec indicatif)",
    form_product: "Catégorie de produit principale",
    form_prod_opt1: "Épices (Entières / Moulues)",
    form_prod_opt2: "Graines Nutritives",
    form_prod_opt3: "Légumineuses et Grains",
    form_message: "Détails (Quantité, Port de destination, Emballage)",
    form_btn: "Envoyer la Demande",
    form_success: "Merci! Votre demande a été enregistrée. Notre équipe vous contactera sous peu.",
    form_error: "Veuillez remplir tous les champs obligatoires.",
    footer_desc: "Jalpex International est une maison d'exportation de produits agricoles haut de gamme. Nous représentons le meilleur du patrimoine agricole indien.",
    footer_quick_links: "Navigation Rapide",
    footer_products: "Nos Produits",
    footer_contact: "Contact Sourcing",
    footer_rights: "Tous droits réservés.",
    footer_terms: "Conditions Générales",
    footer_privacy: "Politique de Confidentialité",
    btn_view_all: "Voir Tous les Produits",
    logistics_label: "Nos Services Logistiques !",
    logistics_title: "Services de Fret Fiables à l'Échelle Mondiale",
    logistics_desc: "Des solutions de transport import-export fluides conçues pour garantir une livraison mondiale sûre, ponctuelle et efficace de produits agricoles premium.",
    logistics_road_title: "Fret Routier",
    logistics_road_desc: "Solutions de transport intérieur fiables garantissant une livraison sûre et ponctuelle des produits agricoles à travers les chaînes d'approvisionnement nationales et internationales avec efficacité et professionnalisme.",
    logistics_ocean_title: "Fret Maritime",
    logistics_ocean_desc: "Services de fret maritime mondiaux rentables conçus pour les exportations agricoles en vrac, la manutention sécurisée des conteneurs et des opérations commerciales fluides sur les marchés mondiaux avec fiabilité et efficacité.",
    logistics_air_title: "Fret Aérien",
    logistics_air_desc: "Solutions de fret aérien rapides et fiables pour les expéditions urgentes, livrant rapidement des produits agricoles premium tout en maintenant les normes de qualité et de fraîcheur.",
    pl_label: "Services à Valeur Ajoutée",
    pl_title: "Marque Privée et Solutions d'Emballage Personnalisé",
    pl_desc: "Nous aidons les marques mondiales, les distributeurs et les supermarchés à construire leur propre présence de marque. Jalpex International propose des services complets de marque privée, faisant passer vos produits de l'approvisionnement en vrac à un emballage personnalisé prêt pour la vente au détail.",
    pl_f1_title: "Étiquetage de Marque Personnalisé",
    pl_f1_desc: "Vos logos, couleurs, codes-barres et designs personnalisés sur des bocaux ou sachets d'exportation premium.",
    pl_f2_title: "Tailles d'Emballage Flexibles",
    pl_f2_desc: "Disponible en petits sachets de détail (50g - 1kg) jusqu'aux sacs en vrac (10kg - 50kg) selon les besoins.",
    pl_f3_title: "Conditionnement Hygiénique en Sachets",
    pl_f3_desc: "Configurations modernes de sachets sous vide multicouches qui préservent la saveur et évitent l'infiltration d'humidité.",
    pl_f4_title: "Conforme aux Réglementations",
    pl_f4_desc: "Les détails de l'étiquette sont conformes aux lois douanières internationales et aux réglementations de la FDA.",
    cert_label: "Normes Mondiales",
    cert_title: "Certifications de Qualité Accréditées",
    cert_desc: "Nous respectons strictement les exigences sanitaires et phytosanitaires mondiales. Nos opérations d'approvisionnement répondent à des normes reconnues internationalement.",
    gallery_header_label: "Infrastructure d'Exportation",
    gallery_header_title: "Où la Qualité Rencontre <em>l'Échelle</em>",
    gallery_header_subtitle: "Un aperçu des coulisses de nos opérations d'entreposage, de logistique portuaire, de laboratoires de qualité et d'approvisionnement agricole qui alimentent les livraisons mondiales.",
    news_header_title: "Intelligence Commerciale et Actualités",
    news_header_subtitle: "Accédez aux mises à jour actuelles des récoltes, aux tendances du marché agricole, aux développements logistiques et aux annonces de l'entreprise depuis notre bureau commercial.",
    news_filter_all: "Tous les Articles",
    news_filter_market: "Rapports de Marché",
    news_filter_company: "Actualités de l'Entreprise",
    news_filter_sourcing: "Approvisionnement et Logistique"
  },
  es: {
    nav_home: "Inicio",
    nav_story: "Nuestra Historia",
    nav_products: "Productos",
    nav_gallery: "Galería",
    nav_news: "Actualizaciones y Análisis",
    nav_why: "Por Qué Elegirnos",
    nav_inquiry: "Consulta",
    nav_gallery: "Galería",
    nav_news: "Actualizaciones y Análisis",
    tab_agricultural: "Productos Agrícolas",
    tab_food_dehydrated: "Productos Alimenticios",
    tab_fresh_produce: "Frutas y Verduras Frescas",
    tab_handicrafts: "Artesanías",
    btn_quote: "Solicitar Cotización",
    hero_badge: "ESTABLECIDO DESDE 2021",
    hero_title: "Uniendo la <em>Herencia</em> India<br>con los Mercados Globales.",
    hero_desc: "En JALPEX INTERNATIONAL, exportamos especias indias de primera calidad, semillas nutritivas, cereales y legumbres orgánicas directamente a clientes internacionales.",
    hero_explore: "Explorar Portafolio",
    hero_legacy: "Nuestros Valores",
    stat_heritage: "Calidad de Herencia",
    stat_organic: "Puro y Orgánico",
    stat_destinations: "Sourcing Global",
    story_label: "Exportador Agrícola Global",
    story_title: "Calidad Premium, Abastecimiento Ético y Entrega Global de Confianza",
    story_p1: "En Jalpex International, nos especializamos en la exportación de productos agrícolas indios premium. Obtenidos de los suelos más ricos de la India, conservan su sabor natural y calidad tradicional.",
    story_p2: "Ofrecemos una amplia gama de exportaciones agrícolas, divididas en especias auténticas, semillas nutritivas y granos esenciales.",
    story_link: "Explore nuestras colecciones de exportación &rarr;",
    ticker_text: "Servicios logísticos mundiales confiables • Entrega de calidad india a nivel mundial • Soluciones premium de exportación • ",
    prod_label: "Productos Destacados",
    prod_title: "Nuestra Colección de Exportación Premium",
    prod_desc: "Explore nuestra gama de productos de calidad de exportación, cuidadosamente seleccionados y entregados en todo el mundo.",
    tab_agricultural: "Productos Agrícolas",
    tab_food_dehydrated: "Productos Alimenticios",
    tab_fresh_produce: "Frutas y Verduras Frescas",
    tab_handicrafts: "Artesanías",
    btn_inquire_product: "Consultar Ahora",
    wcu_label: "Nuestras Fortalezas",
    wcu_title: "Por qué nos eligen los socios globales",
    wcu_1_title: "Garantía de Calidad",
    wcu_1_desc: "Adhesión estricta a las normativas internacionales de seguridad alimentaria.",
    wcu_2_title: "Embalaje Premium",
    wcu_2_desc: "Embalaje personalizado y resistente a la humedad que preserva el sabor.",
    wcu_3_title: "Abastecimiento Ético",
    wcu_3_desc: "Alianzas directas con agricultores locales para asegurar el comercio justo.",
    wcu_4_title: "Logística Global",
    wcu_4_desc: "Despacho de aduanas rápido y eficiente a todos los destinos.",
    process_label: "Paso a Paso",
    process_title: "Nuestro Proceso de Exportación",
    process_1_step: "Paso 01",
    process_1_title: "Sourcing Directo",
    process_1_desc: "Selección directa en fincas certificadas de la India.",
    process_2_step: "Paso 02",
    process_2_title: "Control de Calidad",
    process_2_desc: "Pruebas exhaustivas para cumplir con los estándares sanitarios mundiales.",
    process_3_step: "Paso 03",
    process_3_title: "Procesamiento Moderno",
    process_3_desc: "Tecnología moderna de limpieza y clasificación para mantener la pureza.",
    process_4_step: "Paso 04",
    process_4_title: "Embalaje Seguro",
    process_4_desc: "Sellado al vacío avanzado para proteger el producto en tránsito marítimo.",
    process_5_step: "Paso 05",
    process_5_title: "Distribución Global",
    process_5_desc: "Envíos puntuales manejados por transitarios internacionales confiables.",
    inquiry_label: "Contacto",
    inquiry_title: "Inicie su Consulta de Exportación",
    inquiry_desc: "Envíenos sus requerimientos de volumen, embalaje y puerto de destino. Responderemos en 24 horas.",
    info_address_title: "Oficina Registrada",
    info_address_val: "23, Dayakunj, Vrundavan Nagar, Near Madhuram Bypass, Junagadh, Gujarat, India, 362001",
    info_email_title: "Soporte de Email",
    info_phone_title: "Línea de Comercio Directo",
    form_name: "Nombre completo / Empresa",
    form_email: "Correo electrónico corporativo",
    form_phone: "Número de teléfono (con código de país)",
    form_product: "Seleccione categoría de producto",
    form_prod_opt1: "Especias (Enteras / Molidas)",
    form_prod_opt2: "Semillas Nutritivas",
    form_prod_opt3: "Legumbres y Granos",
    form_message: "Detalles (Cantidad, Puerto de Destino, Embalaje)",
    form_btn: "Enviar Consulta",
    form_success: "¡Gracias! Su consulta ha sido registrada. Nos pondremos en contacto pronto.",
    form_error: "Por favor complete todos los campos obligatorios.",
    footer_desc: "Jalpex International es una casa exportadora premium de productos agrícolas. Representamos la herencia agrícola de la India.",
    footer_quick_links: "Navegación Rápida",
    footer_products: "Nuestros Productos",
    footer_contact: "Contacto de Sourcing",
    footer_rights: "Todos los derechos reservados.",
    footer_terms: "Términos de Comercio",
    footer_privacy: "Política de Privacidad",
    btn_view_all: "Ver Todos los Productos",
    logistics_label: "¡Nuestros Servicios Logísticos!",
    logistics_title: "Servicios de Flete Confiables a Nivel Mundial",
    logistics_desc: "Soluciones de transporte de importación y exportación fluidas, diseñadas para garantizar una entrega global segura, puntual y eficiente de productos agrícolas premium.",
    logistics_road_title: "Transporte por Carretera",
    logistics_road_desc: "Soluciones de transporte terrestre confiables que garantizan una entrega segura y puntual de productos agrícolas a través de cadenas de suministro nacionales e internacionales con eficiencia y profesionalismo.",
    logistics_ocean_title: "Transporte Marítimo",
    logistics_ocean_desc: "Servicios de transporte marítimo global rentables diseñados para exportaciones agrícolas a granel, manejo seguro de contenedores y operaciones comerciales fluidas en mercados mundiales con fiabilidad y eficiencia.",
    logistics_air_title: "Transporte Aéreo",
    logistics_air_desc: "Soluciones de carga aérea rápidas y confiables para envíos urgentes, entregando productos agrícolas premium rápidamente mientras se mantienen los estándares de calidad y frescura.",
    pl_label: "Servicios de Valor Añadido",
    pl_title: "Etiquetado Privado y Soluciones de Empaque Personalizado",
    pl_desc: "Ayudamos a marcas globales, distribuidores y supermercados a construir su propia presencia de marca. Jalpex International ofrece servicios completos de contrato de etiquetado privado, llevando sus productos desde el abastecimiento a granel hasta el empaque personalizado listo para la venta al por menor.",
    pl_f1_title: "Etiquetado de Marca Personalizado",
    pl_f1_desc: "Sus logotipos, colores, códigos de barras y diseños personalizados en frascos o bolsas de exportación premium.",
    pl_f2_title: "Tamaños de Empaque Flexibles",
    pl_f2_desc: "Disponible en bolsas pequeñas para minoristas (50g - 1kg) hasta bolsas a granel (10kg - 50kg) según los requisitos.",
    pl_f3_title: "Empaque Higiénico en Bolsas",
    pl_f3_desc: "Configuraciones modernas de bolsas de vacío multicapa que conservan el sabor y evitan la entrada de humedad.",
    pl_f4_title: "Listo para el Cumplimiento",
    pl_f4_desc: "Los detalles de la etiqueta cumplen con las leyes aduaneras internacionales y las regulaciones de la FDA.",
    cert_label: "Estándares Globales",
    cert_title: "Certificaciones de Calidad Acreditadas",
    cert_desc: "Cumplimos estrictamente con los requisitos sanitarios y fitosanitarios globales. Nuestras operaciones de abastecimiento cuentan con estándares reconocidos internacionalmente.",
    gallery_header_label: "Infraestructura de Exportación",
    gallery_header_title: "Donde la Calidad se Encuentra con la <em>Escala</em>",
    gallery_header_subtitle: "Una mirada entre bastidores a nuestras operaciones de almacenamiento, logística portuaria, laboratorios de calidad y abastecimiento agrícola que impulsan las entregas globales.",
    news_header_title: "Inteligencia Comercial y Noticias",
    news_header_subtitle: "Acceda a las actualizaciones actuales de cultivos, tendencias del mercado agrícola, desarrollos logísticos y anuncios de la empresa desde nuestra mesa de comercio.",
    news_filter_all: "Todos los Artículos",
    news_filter_market: "Informes de Mercado",
    news_filter_company: "Actualizaciones de la Empresa",
    news_filter_sourcing: "Abastecimiento y Logística"
  },
  de: {
    nav_home: "Startseite",
    nav_story: "Unsere Story",
    nav_products: "Produkte",
    nav_gallery: "Galerie",
    nav_news: "Updates & Analysen",
    nav_why: "Warum Uns Wählen",
    nav_inquiry: "Anfrage",
    nav_gallery: "Galerie",
    nav_news: "Updates & Analysen",
    tab_agricultural: "Agrarprodukte",
    tab_food_dehydrated: "Lebensmittel",
    tab_fresh_produce: "Frisches Obst & Gemüse",
    tab_handicrafts: "Kunsthandwerk",
    btn_quote: "Angebot Anfordern",
    hero_badge: "GEGRÜNDET SEIT 2021",
    hero_title: "Verbindung des indischen <em>Erbes</em><br>mit globalen Märkten.",
    hero_desc: "Bei JALPEX INTERNATIONAL exportieren wir erstklassige indische Gewürze, hochwertige Samen, Bio-Getreide und Hülsenfrüchte direkt an internationale Kunden.",
    hero_explore: "Portfolio Erkunden",
    hero_legacy: "Unsere Werte",
    stat_heritage: "Qualitätserbe",
    stat_organic: "Rein & Organisch",
    stat_destinations: "Globales Sourcing",
    story_label: "Globaler Agrar-Exporteur",
    story_title: "Erstklassige Qualität, ethische Beschaffung & zuverlässige Lieferung",
    story_p1: "Bei Jalpex International haben wir uns auf den Export von erstklassigen indischen Agrarprodukten spezialisiert. Direkt von den fruchtbarsten Böden Indiens stammend, bewahren unsere Produkte ihren natürlichen Geschmack.",
    story_p2: "Unser breites Sortiment umfasst authentische Gewürze, nährstoffreiche Samen sowie Getreide und Hülsenfrüchte, die sorgfältig verarbeitet werden.",
    story_link: "Unsere Export-Kollektionen ansehen &rarr;",
    ticker_text: "Zuverlässige weltweite Logistikdienstleistungen • Lieferung indischer Qualität weltweit • Erstklassige Agrarexportlösungen • ",
    prod_label: "Ausgewählte Produkte",
    prod_title: "Unsere Premium-Export-Kollektion",
    prod_desc: "Entdecken Sie unser erstklassiges Sortiment an Produkten in Exportqualität, die weltweit mit Fokus auf Frische und Zuverlässigkeit geliefert werden.",
    tab_agricultural: "Agrarprodukte",
    tab_food_dehydrated: "Lebensmittel",
    tab_fresh_produce: "Frisches Obst & Gemüse",
    tab_handicrafts: "Kunsthandwerk",
    btn_inquire_product: "Jetzt Anfragen",
    wcu_label: "Unsere Stärken",
    wcu_title: "Warum globale Partner uns wählen",
    wcu_1_title: "Qualitätssicherung",
    wcu_1_desc: "Strikte Einhaltung internationaler Lebensmittelsicherheitsvorschriften.",
    wcu_2_title: "Premium-Verpackung",
    wcu_2_desc: "Feuchtigkeitsbeständige Verpackung, die das Aroma und den Geschmack bewahrt.",
    wcu_3_title: "Ethisches Sourcing",
    wcu_3_desc: "Direkte Partnerschaft mit lokalen Bauern zur Sicherung fairen Handels.",
    wcu_4_title: "Globale Logistik",
    wcu_4_desc: "Effiziente Zollabwicklung und schnelle Transportnetzwerke weltweit.",
    process_label: "Schritt für Schritt",
    process_title: "Unser Exportprozess",
    process_1_step: "Schritt 01",
    process_1_title: "Direktbeschaffung",
    process_1_desc: "Handverlesene Auswahl direkt aus indischen Landwirtschaftszentren.",
    process_2_step: "Schritt 02",
    process_2_title: "Qualitätsprüfung",
    process_2_desc: "Gründliche Tests zur Einhaltung globaler Standards.",
    process_3_step: "Schritt 03",
    process_3_title: "Moderne Verarbeitung",
    process_3_desc: "Moderne Reinigungs- und Sortiertechnologien sichern höchste Reinheit.",
    process_4_step: "Schritt 04",
    process_4_title: "Sichere Verpackung",
    process_4_desc: "Fortschrittliche Vakuumverpackung schützt Produkte auf Seewegen.",
    process_5_step: "Schritt 05",
    process_5_title: "Globale Distribution",
    process_5_desc: "Zuverlässige Speditionen sorgen für eine pünktliche Ankunft im Hafen.",
    inquiry_label: "Kontakt",
    inquiry_title: "Starten Sie Ihre Exportanfrage",
    inquiry_desc: "Senden Sie uns Ihre Anforderungen bezüglich Menge, Verpackung und Bestimmungshafen. Wir antworten innerhalb von 24 Stunden.",
    info_address_title: "Eingetragener Sitz",
    info_address_val: "23, Dayakunj, Vrundavan Nagar, Near Madhuram Bypass, Junagadh, Gujarat, India, 362001",
    info_email_title: "E-Mail Support",
    info_phone_title: "Direkter Handels-Desk",
    form_name: "Name / Firmenname",
    form_email: "Geschäftliche E-Mail-Adresse",
    form_phone: "Telefonnummer (mit Ländervorwahl)",
    form_product: "Produktkategorie wählen",
    form_prod_opt1: "Gewürze (Ganz / Gemahlen)",
    form_prod_opt2: "Nährstoffreiche Samen",
    form_prod_opt3: "Hülsenfrüchte und Getreide",
    form_message: "Details (Menge, Bestimmungshafen, Verpackungspräferenz)",
    form_btn: "Anfrage Senden",
    form_success: "Vielen Dank! Ihre Anfrage wurde registriert. Unser Team meldet sich in Kürze.",
    form_error: "Bitte füllen Sie alle Pflichtfelder aus.",
    footer_desc: "Jalpex International ist ein erstklassiges Exporthaus für Agrarrohstoffe. Wir vertreten die Spitze der indischen Agrartradition.",
    footer_quick_links: "Schnelle Navigation",
    footer_products: "Unser Angebot",
    footer_contact: "Beschaffungskontakt",
    footer_rights: "Alle Rechte vorbehalten.",
    footer_terms: "Handelsbedingungen",
    footer_privacy: "Datenschutzerklärung",
    btn_view_all: "Alle Produkte Anzeigen",
    logistics_label: "Unsere Logistikdienstleistungen!",
    logistics_title: "Zuverlässige Weltweite Frachtdienste",
    logistics_desc: "Nahtlose Import-Export-Transportlösungen, die eine sichere, pünktliche und effiziente weltweite Lieferung von Premium-Agrarprodukten gewährleisten.",
    logistics_road_title: "Straßenfracht",
    logistics_road_desc: "Zuverlässige Binnentransportlösungen, die eine sichere und pünktliche Lieferung von Agrarprodukten über nationale und internationale Lieferketten mit Effizienz und Professionalität gewährleisten.",
    logistics_ocean_title: "Seefracht",
    logistics_ocean_desc: "Kosteneffiziente globale Seefrachtdienste für Massenexporte landwirtschaftlicher Produkte, sichere Containerabwicklung und nahtlose Handelsabläufe auf weltweiten Märkten mit Zuverlässigkeit und Effizienz.",
    logistics_air_title: "Luftfracht",
    logistics_air_desc: "Schnelle und zuverlässige Luftfrachtlösungen für dringende Sendungen, die Premium-Agrarprodukte schnell liefern und dabei Qualitäts- und Frischestandards einhalten.",
    pl_label: "Mehrwertdienste",
    pl_title: "Private-Label- und Individuelle Verpackungslösungen",
    pl_desc: "Wir helfen globalen Marken, Distributoren und Supermärkten, ihre eigene Markenpräsenz aufzubauen. Jalpex International bietet komplette Private-Label-Vertragsdienstleistungen und führt Ihre Produkte von der Großbeschaffung bis zur verkaufsfertigen individuellen Verpackung.",
    pl_f1_title: "Individuelle Markenkennzeichnung",
    pl_f1_desc: "Ihre Logos, Farben, Barcodes und individuellen Designs auf hochwertigen Exportgläsern oder -beuteln.",
    pl_f2_title: "Flexible Verpackungsgrößen",
    pl_f2_desc: "Erhältlich in kleinen Einzelhandelsbeuteln (50g - 1kg) bis zu Großgebinden (10kg - 50kg) je nach Bedarf.",
    pl_f3_title: "Hygienische Beutelverpackung",
    pl_f3_desc: "Moderne mehrschichtige Vakuumbeutel-Systeme, die den Geschmack bewahren und das Eindringen von Feuchtigkeit verhindern.",
    pl_f4_title: "Konform und Einsatzbereit",
    pl_f4_desc: "Die Etikettendetails entsprechen internationalen Zollgesetzen und FDA-Vorschriften.",
    cert_label: "Globale Standards",
    cert_title: "Akkreditierte Qualitätszertifizierungen",
    cert_desc: "Wir halten uns strikt an globale sanitäre und phytosanitäre Anforderungen. Unsere Beschaffungsvorgänge erfüllen international anerkannte Standards.",
    gallery_header_label: "Exportinfrastruktur",
    gallery_header_title: "Wo Qualität auf <em>Größenordnung</em> Trifft",
    gallery_header_subtitle: "Ein Blick hinter die Kulissen unserer Lagerhaltung, Hafenlogistik, Qualitätslabore und landwirtschaftlichen Beschaffungsvorgänge, die weltweite Lieferungen antreiben.",
    news_header_title: "Handelsinformationen und Nachrichten",
    news_header_subtitle: "Erhalten Sie aktuelle Ernteupdates, landwirtschaftliche Markttrends, Logistikentwicklungen und Unternehmensankündigungen von unserem Handelsschreibtisch.",
    news_filter_all: "Alle Artikel",
    news_filter_market: "Marktberichte",
    news_filter_company: "Unternehmens-Updates",
    news_filter_sourcing: "Beschaffung & Logistik"
  },
  pt: {
    nav_home: "Início",
    nav_story: "Nossa História",
    nav_products: "Produtos",
    nav_gallery: "Galeria",
    nav_news: "Atualizações e Análises",
    nav_why: "Por Que Escolher-nos",
    nav_inquiry: "Inquérito",
    nav_gallery: "Galeria",
    nav_news: "Atualizações e Análises",
    tab_agricultural: "Produtos Agrícolas",
    tab_food_dehydrated: "Produtos Alimentícios",
    tab_fresh_produce: "Frutas e Vegetais Frescos",
    tab_handicrafts: "Artesanato",
    btn_quote: "Solicitar Cotação",
    hero_badge: "ESTABELECIDO DESDE 2021",
    hero_title: "Unindo a <em>Herança</em> Indiana<br>aos Mercados Globais.",
    hero_desc: "Na JALPEX INTERNATIONAL, exportamos especiarias indianas premium, sementes de alta qualidade, grãos e leguminosas orgânicas diretamente para clientes internacionais.",
    hero_explore: "Explorar Portfólio",
    hero_legacy: "Nossos Valores",
    stat_heritage: "Qualidade de Herança",
    stat_organic: "Puro e Orgânico",
    stat_destinations: "Sourcing Global",
    story_label: "Exportador Agrícola Global",
    story_title: "Qualidade Premium, Fornecimento Ético e Entrega Global Confiável",
    story_p1: "Na Jalpex International, somos especializados em exportar produtos agrícolas indianos premium para mercados globais. Cultivados nos solos mais ricos da Índia, nossos produtos mantêm seus sabores naturais.",
    story_p2: "Oferecemos uma ampla variedade de produtos de exportação, classificados em especiarias autênticas, sementes nutritivas e grãos essenciais.",
    story_link: "Explore nossas coleções de exportação &rarr;",
    ticker_text: "Serviços logísticos mundiais confiáveis • Entregando a qualidade indiana globalmente • Soluções premium de exportação • ",
    prod_label: "Produtos em Destaque",
    prod_title: "Nossa Coleção de Exportação Premium",
    prod_desc: "Explore a nossa gama de produtos de qualidade de exportação, cuidadosamente selecionados, embalados com segurança e entregues em todo o mundo.",
    tab_agricultural: "Produtos Agrícolas",
    tab_food_dehydrated: "Produtos Alimentícios",
    tab_fresh_produce: "Frutas e Vegetais Frescos",
    tab_handicrafts: "Artesanato",
    btn_inquire_product: "Inspecionar Agora",
    wcu_label: "Nossos Pontos Fortes",
    wcu_title: "Por que os parceiros globais nos escolhem",
    wcu_1_title: "Garantia de Qualidade",
    wcu_1_desc: "Adesão estrita aos regulamentos internacionais de segurança alimentar.",
    wcu_2_title: "Embalagem Premium",
    wcu_2_desc: "Embalagem personalizada e resistente à humidade que preserva aroma e sabor.",
    wcu_3_title: "Sourcing Ético",
    wcu_3_desc: "Parcerias diretas com produtores locais para assegurar um comércio justo.",
    wcu_4_title: "Logística Global",
    wcu_4_desc: "Desalfandegamento eficiente e redes de transporte rápido em todo o mundo.",
    process_label: "Passo a Passo",
    process_title: "Nosso Processo de Exportação",
    process_1_step: "Passo 01",
    process_1_title: "Sourcing Direto",
    process_1_desc: "Selecionamos matérias-primas diretamente de centros agrícolas na Índia.",
    process_2_step: "Passo 02",
    process_2_title: "Controlo de Qualidade",
    process_2_desc: "Os produtos passam por testes rigorosos para conformidade sanitária global.",
    process_3_step: "Passo 03",
    process_3_title: "Processamento Moderno",
    process_3_desc: "Tecnologia avançada de limpeza e moagem para manter a pureza.",
    process_4_step: "Passo 04",
    process_4_title: "Embalagem Segura",
    process_4_desc: "Embalagem a vácuo avançada que protege os produtos durante longas rotas.",
    process_5_step: "Passo 05",
    process_5_title: "Distribuição Global",
    process_5_desc: "Entrega pontual gerida por transitários internacionais de confiança.",
    inquiry_label: "Contacto",
    inquiry_title: "Inicie seu Inquérito de Exportação",
    inquiry_desc: "Envie-nos os seus requisitos de volume, embalagem e porto de destino. Responderemos dentro de 24 horas.",
    info_address_title: "Escritório Registado",
    info_address_val: "23, Dayakunj, Vrundavan Nagar, Near Madhuram Bypass, Junagadh, Gujarat, India, 362001",
    info_email_title: "Suporte por Email",
    info_phone_title: "Mesa de Negócios Direta",
    form_name: "Nome Completo / Empresa",
    form_email: "Endereço de Email Corporativo",
    form_phone: "Número de Telefone (com código do país)",
    form_product: "Selecione a categoria de produto",
    form_prod_opt1: "Especiarias (Inteiras / Moídas)",
    form_prod_opt2: "Sementes Nutritivas",
    form_prod_opt3: "Leguminosas e Grãos",
    form_message: "Detalhes do seu pedido (Quantidade, Porto de Destino, Embalagem)",
    form_btn: "Enviar Pedido de Cotação",
    form_success: "Obrigado! O seu pedido de cotação foi registado. Entraremos em contacto brevemente.",
    form_error: "Por favor, preencha todos os campos obrigatórios.",
    footer_desc: "Jalpex International é uma casa de exportação premium de commodities agrícolas. Representamos o topo do património agrícola indiano.",
    footer_quick_links: "Navegação Rápida",
    footer_products: "Nossos Produtos",
    footer_contact: "Contacto de Sourcing",
    footer_rights: "Todos os direitos reservados.",
    footer_terms: "Termos de Comércio",
    footer_privacy: "Política de Privacidade",
    btn_view_all: "Ver Todos os Produtos",
    logistics_label: "Nossos Serviços de Logística!",
    logistics_title: "Serviços de Frete Confiáveis em Todo o Mundo",
    logistics_desc: "Soluções de transporte de importação e exportação perfeitas, projetadas para garantir uma entrega global segura, pontual e eficiente de produtos agrícolas premium.",
    logistics_road_title: "Frete Rodoviário",
    logistics_road_desc: "Soluções de transporte interno confiáveis que garantem a entrega segura e pontual de produtos agrícolas em cadeias de suprimentos nacionais e internacionais com eficiência e profissionalismo.",
    logistics_ocean_title: "Frete Marítimo",
    logistics_ocean_desc: "Serviços de frete marítimo global econômicos, projetados para exportações agrícolas a granel, manuseio seguro de contêineres e operações comerciais perfeitas em mercados mundiais com confiabilidade e eficiência.",
    logistics_air_title: "Frete Aéreo",
    logistics_air_desc: "Soluções de carga aérea rápidas e confiáveis para envios urgentes, entregando produtos agrícolas premium rapidamente enquanto mantém os padrões de qualidade e frescor.",
    pl_label: "Serviços de Valor Agregado",
    pl_title: "Rotulagem Privada e Soluções de Embalagem Personalizada",
    pl_desc: "Ajudamos marcas globais, distribuidores e supermercados a construir sua própria presença de marca. A Jalpex International oferece serviços completos de contrato de rotulagem privada, levando seus produtos do fornecimento a granel até a embalagem personalizada pronta para o varejo.",
    pl_f1_title: "Rotulagem de Marca Personalizada",
    pl_f1_desc: "Seus logotipos, cores, códigos de barras e designs personalizados em potes ou sacos de exportação premium.",
    pl_f2_title: "Tamanhos de Embalagem Flexíveis",
    pl_f2_desc: "Disponível em pequenos sacos de varejo (50g - 1kg) até sacos a granel (10kg - 50kg), de acordo com as necessidades.",
    pl_f3_title: "Embalagem Higiênica em Sacos",
    pl_f3_desc: "Configurações modernas de sacos a vácuo multicamadas que preservam o sabor e evitam a entrada de umidade.",
    pl_f4_title: "Pronto para Conformidade",
    pl_f4_desc: "Os detalhes do rótulo estão em conformidade com as leis alfandegárias internacionais e os regulamentos da FDA.",
    cert_label: "Padrões Globais",
    cert_title: "Certificações de Qualidade Acreditadas",
    cert_desc: "Aderimos estritamente aos requisitos sanitários e fitossanitários globais. Nossas operações de fornecimento atendem a padrões reconhecidos internacionalmente.",
    gallery_header_label: "Infraestrutura de Exportação",
    gallery_header_title: "Onde a Qualidade Encontra a <em>Escala</em>",
    gallery_header_subtitle: "Um olhar nos bastidores de nossas operações de armazenamento, logística portuária, laboratórios de qualidade e fornecimento agrícola que impulsionam as entregas globais.",
    news_header_title: "Inteligência Comercial e Notícias",
    news_header_subtitle: "Acesse atualizações atuais de safras, tendências do mercado agrícola, desenvolvimentos logísticos e anúncios da empresa de nossa mesa de comércio.",
    news_filter_all: "Todos os Artigos",
    news_filter_market: "Relatórios de Mercado",
    news_filter_company: "Atualizações da Empresa",
    news_filter_sourcing: "Fornecimento e Logística"
  },
  zh: {
    nav_home: "首页",
    nav_story: "品牌故事",
    nav_products: "出口产品",
    nav_gallery: "画廊",
    nav_news: "更新与分析",
    nav_why: "合作优势",
    nav_inquiry: "在线询盘",
    nav_gallery: "画廊",
    nav_news: "更新与分析",
    tab_agricultural: "农产品",
    tab_food_dehydrated: "食品",
    tab_fresh_produce: "新鲜果蔬",
    tab_handicrafts: "手工艺品",
    btn_quote: "获取报价",
    hero_badge: "始创于2021年",
    hero_title: "架起印度<em>传统农业</em>与<br>全球市场的桥梁。",
    hero_desc: "在 JALPEX INTERNATIONAL，我们直接向国际客户出口印度优质香料、高品质种子、有机谷物和豆类。精挑细选，诚信交付。",
    hero_explore: "浏览产品组合",
    hero_legacy: "我们的价值观",
    stat_heritage: "传统品质",
    stat_organic: "纯净与有机",
    stat_destinations: "全球采购",
    story_label: "全球农产品出口商",
    story_title: "优质品质、道德采购与值得信赖的全球交付",
    story_p1: "在 Jalpex International，我们专注于向全球市场出口优质的印度农产品。我们的产品源自印度最肥沃的土地，保持了其天然风味、浓郁香气和传统品质。",
    story_p2: "我们提供广泛的农业出口，分类为正宗香料、营养种子以及基本谷物和豆类。每件产品都经过精心加工和包装，确保其最佳品质。",
    story_link: "浏览我们的出口系列 &rarr;",
    ticker_text: "可靠的全球物流服务 • 将印度品质送达全球 • 优质农产品出口解决方案 • 精心采购，诚信加工 • ",
    prod_label: "特色产品",
    prod_title: "我们的优质出口系列",
    prod_desc: "探索我们精心采购、安全包装并销往全球的高品质出口农产品系列，确保新鲜与可靠。",
    tab_agricultural: "农产品",
    tab_food_dehydrated: "食品",
    tab_fresh_produce: "新鲜果蔬",
    tab_handicrafts: "手工艺品",
    btn_inquire_product: "立即询价",
    wcu_label: "我们的优势",
    wcu_title: "为什么全球合作伙伴选择我们",
    wcu_1_title: "质量保证",
    wcu_1_desc: "严格遵守国际食品安全法规，并通过质量检测。",
    wcu_2_title: "优质包装",
    wcu_2_desc: "定制的防潮包装，完好保留香气、口感与保质期。",
    wcu_3_title: "道德采购",
    wcu_3_desc: "与当地农民直接合作，确保公平贸易和可持续农业。",
    wcu_4_title: "全球物流",
    wcu_4_desc: "高效的海关清关及快速的运输网络，向全球交付最新鲜的产品。",
    process_label: "出口流程",
    process_title: "我们的出口流程",
    process_1_step: "步骤 01",
    process_1_title: "直接采购",
    process_1_desc: "我们直接从印度的农业中心和认证农场亲手挑选原料。",
    process_2_step: "步骤 02",
    process_2_title: "质量检验",
    process_2_desc: "产品经过严格测试，以确保符合全球卫生标准。",
    process_3_step: "步骤 03",
    process_3_title: "现代加工",
    process_3_desc: "先进的清洁、分拣和磨粉技术保持了产品的纯度。",
    process_4_step: "步骤 04",
    process_4_title: "安全包装",
    process_4_desc: "先进的真空和气密包装在漫长的海运过程中保护产品。",
    process_5_step: "步骤 05",
    process_5_title: "全球配送",
    process_5_desc: "由值得信赖的货运代理处理，确保准时送达目的港。",
    inquiry_label: "联系我们",
    inquiry_title: "开始您的出口询盘",
    inquiry_desc: "发送您的数量需求、包装要求和目的港。我们的贸易服务台将在24小时内回复极具竞争力的价格。",
    info_address_title: "注册办公室",
    info_address_val: "23, Dayakunj, Vrundavan Nagar, Near Madhuram Bypass, Junagadh, Gujarat, India, 362001",
    info_email_title: "电子邮件支持",
    info_phone_title: "直接贸易台",
    form_name: "您的姓名 / 公司名称",
    form_email: "企业电子邮箱",
    form_phone: "电话号码 (含国家代码)",
    form_product: "选择主要产品类别",
    form_prod_opt1: "香料 (整粒 / 研磨粉)",
    form_prod_opt2: "营养种子",
    form_prod_opt3: "豆类和谷物",
    form_message: "详细说明您的要求 (数量、目的港、包装偏好)",
    form_btn: "发送出口询盘",
    form_success: "谢谢！您的出口询盘已记录。我们的贸易服务台将尽快与您联系。",
    form_error: "请填写所有必填字段。",
    footer_desc: "Jalpex International 是一家优质的农产品出口商。我们代表了印度农业传统的巅峰。",
    footer_quick_links: "快速导航",
    footer_products: "我们的产品",
    footer_contact: "联系采购台",
    footer_rights: "版权所有。",
    footer_terms: "贸易条款",
    footer_privacy: "隐私政策",
    btn_view_all: "查看所有产品",
    logistics_label: "我们的物流服务！",
    logistics_title: "可靠的全球货运服务",
    logistics_desc: "无缝的进出口运输解决方案，确保优质农产品的安全、准时和高效的全球交付。",
    logistics_road_title: "陆运",
    logistics_road_desc: "可靠的内陆运输解决方案，以高效和专业的方式确保农产品在国内外供应链中安全准时交付。",
    logistics_ocean_title: "海运",
    logistics_ocean_desc: "经济高效的全球海运服务，专为大宗农产品出口、安全集装箱操作以及在全球市场中可靠高效的无缝贸易运营而设计。",
    logistics_air_title: "空运",
    logistics_air_desc: "快速可靠的空运解决方案，适用于紧急货运，在保持质量和新鲜度标准的同时快速交付优质农产品。",
    pl_label: "增值服务",
    pl_title: "私人贴牌与定制包装解决方案",
    pl_desc: "我们帮助全球品牌、经销商和超市建立自己的品牌形象。Jalpex International 提供完整的私人贴牌合同服务，将您的产品从大宗采购到零售就绪的定制包装一站式完成。",
    pl_f1_title: "定制品牌贴标",
    pl_f1_desc: "在优质出口罐子或袋子上印制您的标志、颜色、条形码和定制设计。",
    pl_f2_title: "灵活的包装规格",
    pl_f2_desc: "根据需求提供从小型零售袋（50克-1公斤）到散装袋（10公斤-50公斤）的多种规格。",
    pl_f3_title: "卫生袋装包装",
    pl_f3_desc: "现代多层真空袋装设置，锁住风味并防止水分进入。",
    pl_f4_title: "合规就绪",
    pl_f4_desc: "标签细节符合国际海关法律和FDA法规。",
    cert_label: "全球标准",
    cert_title: "认证质量认证",
    cert_desc: "我们严格遵守全球卫生和植物检疫要求。我们的采购业务达到国际公认的标准。",
    gallery_header_label: "出口基础设施",
    gallery_header_title: "品质与<em>规模</em>的交汇",
    gallery_header_subtitle: "深入了解我们的仓储、港口物流、质量实验室和农场采购业务，这些业务为全球交付提供动力。",
    news_header_title: "贸易情报与新闻",
    news_header_subtitle: "获取我们贸易部门提供的最新作物动态、农产品市场趋势、物流发展和公司公告。",
    news_filter_all: "所有文章",
    news_filter_market: "市场报告",
    news_filter_company: "公司动态",
    news_filter_sourcing: "采购与物流"
  }
};

// Extend translations with new categories
translations.en.tab_agriculture = "Agriculture Product";
translations.en.tab_handicraft = "Handicraft";
translations.en.tab_textile = "Textile";
translations.en.tab_construction = "Construction Machinery";

translations.hi.tab_agriculture = "कृषि उत्पाद";
translations.hi.tab_handicraft = "हस्तशिल्प";
translations.hi.tab_textile = "कपड़ा";
translations.hi.tab_construction = "निर्माण मशीनरी";

translations.ar.tab_agriculture = "المنتجات الزراعية";
translations.ar.tab_handicraft = "الحرف اليدوية";
translations.ar.tab_textile = "المنسوجات";
translations.ar.tab_construction = "آلات البناء";

translations.fr.tab_agriculture = "Produits Agricoles";
translations.fr.tab_handicraft = "Artisanat";
translations.fr.tab_textile = "Textiles";
translations.fr.tab_construction = "Machines de Construction";

translations.es.tab_agriculture = "Productos Agrícolas";
translations.es.tab_handicraft = "Artesanías";
translations.es.tab_textile = "Textil";
translations.es.tab_construction = "Maquinaria de Construcción";

translations.de.tab_agriculture = "Agrarprodukte";
translations.de.tab_handicraft = "Kunsthandwerk";
translations.de.tab_textile = "Textil";
translations.de.tab_construction = "Baumaschinen";

translations.pt.tab_agriculture = "Produtos Agrícolas";
translations.pt.tab_handicraft = "Artesanato";
translations.pt.tab_textile = "Têxteis";
translations.pt.tab_construction = "Máquinas de Construção";

translations.zh.tab_agriculture = "农业产品";
translations.zh.tab_handicraft = "手工艺品";
translations.zh.tab_textile = "纺织品";
translations.zh.tab_construction = "工程机械";

// ── PRODUCTS DATA ──
const productsData = [
  // AGRICULTURE PRODUCT
  { id: "turmeric", category: "agriculture", name: "Turmeric Finger", desc: "Premium quality golden-yellow Indian turmeric fingers, high in curcumin content and ground powder.", tags: ["finger", "powder", "high-curcumin"], image: "products/turmeric.png" },
  { id: "red_chilli", category: "agriculture", name: "Red Chilli", desc: "Vibrant red and fiery Indian red chillies, available as stemless whole pods or ground powder.", tags: ["whole", "powder", "stemless"], image: "products/red-chilli.png" },
  { id: "cumin", category: "agriculture", name: "Cumin Seeds", desc: "Highly aromatic cumin seeds with deep earthy flavor, thoroughly cleaned and processed.", tags: ["seeds", "powder", "earthy"], image: "products/cumin.png" },
  { id: "coriander", category: "agriculture", name: "Coriander Seeds", desc: "Uniform whole coriander seeds and premium finely milled coriander powder with fresh citrusy aroma.", tags: ["seeds", "powder", "aromatic"], image: "products/coriander.png" },
  { id: "sesame_seeds", category: "agriculture", name: "Sesame Seeds", desc: "Premium natural golden and mechanically hulled white sesame seeds, rich in healthy oils.", tags: ["natural", "hulled", "oil-seeds"], image: "products/sesame-seeds.png" },
  { id: "peanuts", category: "agriculture", name: "Groundnuts (Peanuts)", desc: "Bold and Java peanut kernels sorted by size, rich in flavor and oil content.", tags: ["bold", "java", "kernels"], image: "products/peanuts.png" },
  { id: "pulses", category: "agriculture", name: "Pulses & Lentils", desc: "Premium grade split and whole Indian pulses, including Moong Dal, Chana Dal, and Urad Dal.", tags: ["lentils", "splits", "whole"], image: "products/chickpeas.png" },
  { id: "rice", category: "agriculture", name: "Premium Basmati Rice", desc: "Long-grain, aromatic premium Indian Basmati rice, aged to perfection for exquisite flavor.", tags: ["basmati", "long-grain", "aged"], image: "products/rice.png" },
  { id: "wheat", category: "agriculture", name: "Premium Wheat", desc: "Golden high-protein wheat grains, ideal for milling into premium flour and baking.", tags: ["golden", "grains", "high-protein"], image: "products/wheat.png" },
  { id: "dehydrated_veg", category: "agriculture", name: "Dehydrated Vegetables", desc: "Premium quality dehydrated onion flakes, garlic powder, and ginger flakes that preserve natural flavor.", tags: ["dehydrated", "flakes", "powder"], image: "products/dehydrated-veg.png" },
  { id: "food_products", category: "agriculture", name: "Processed Food Products", desc: "Value-added food products, processed grains, and customized packaging solutions for global retail.", tags: ["retail-ready", "value-added", "packaged"], image: "products/process-packaging.png" },
  { id: "fresh_produce", category: "agriculture", name: "Fresh Fruits & Vegetables", desc: "Freshly harvested pomegranates, mangoes, potatoes, and red onions sourced from local farms.", tags: ["fresh", "farm-direct", "organic"], image: "products/fresh-produce.png" },

  // HANDICRAFT
  { id: "handicrafts", category: "handicraft", name: "Artisanal Handicrafts", desc: "Exquisite traditional Indian handicrafts made of brass, wood, and handcrafted textiles.", tags: ["handmade", "artisanal", "traditional"], image: "products/handicrafts.png" },

  // TEXTILE
  { id: "cotton", category: "textile", name: "Raw Cotton", desc: "High-staple raw cotton bolls and cotton fibers, clean and processed for textile industries.", tags: ["raw-cotton", "fiber", "textile-grade"], image: "products/cotton.png" },
  { id: "textile_yarn", category: "textile", name: "Cotton Yarn", desc: "Premium organic cotton yarn wound on cones, highly durable and ideal for weaving and knitting.", tags: ["yarn", "organic", "weaving"], image: "products/textile-yarn.png" },

  // CONSTRUCTION MACHINERY
  { id: "concrete_mixer", category: "construction", name: "Concrete Mixer Machine", desc: "Heavy-duty electric and diesel-powered concrete mixer machines with robust drum capacity.", tags: ["machinery", "concrete", "mixer"], image: "products/concrete-mixer.png" },
  { id: "excavator", category: "construction", name: "Hydraulic Excavator", desc: "High-performance hydraulic crawler excavator designed for heavy excavation, mining, and roadwork.", tags: ["excavator", "crawler", "hydraulic"], image: "products/excavator.png" },
  { id: "road_roller", category: "construction", name: "Heavy Road Roller", desc: "Double-drum vibratory road roller designed for soil, gravel, and asphalt compaction.", tags: ["road-roller", "compactor", "heavy"], image: "products/road-roller.png" }
];

// ── DOM ELEMENTS & GLOBAL STATE ──
let currentLang = "en";
let activeCategory = "agriculture";

// ── INITIALIZATION ──
document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initLanguagePicker();
  initMobileMenu();
  initProductTabs();
  initProductsSlider();
  renderProducts();
  initInquiryForm();
  initRevealAnimations();
  initHeroIntro();
  initScrollFx();
  initMorphSlider();
});

// ── NAVBAR SCROLL ──
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    if (document.getElementById("home")) {
      updateActiveNavLink();
    }
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section, header");
  const navLinks = document.querySelectorAll(".nav-links a");
  let currentId = "home";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentId = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentId}`) {
      link.classList.add("active");
    }
  });
}

// ── LANGUAGE PICKER ──
function initLanguagePicker() {
  const langToggle = document.getElementById("langToggle");
  const langPicker = document.querySelector(".lang-picker");
  const langDropdown = document.getElementById("langDropdown");
  const langItems = document.querySelectorAll(".lang-item");
  const mobLangBtns = document.querySelectorAll(".mob-lang-btn");

  // Toggle Dropdown
  langToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    langPicker.classList.toggle("open");
  });

  // Close Dropdown on click outside
  document.addEventListener("click", () => {
    langPicker.classList.remove("open");
  });

  // Handle language selection (Desktop)
  langItems.forEach(item => {
    item.addEventListener("click", () => {
      const selectedLang = item.getAttribute("data-lang");
      changeLanguage(selectedLang);
      langItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      // Update UI active label
      langToggle.querySelector("span").textContent = selectedLang.toUpperCase();
    });
  });

  // Handle language selection (Mobile)
  mobLangBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      changeLanguage(selectedLang);
      mobLangBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Close mobile menu
      document.getElementById("mobileToggle").click();
    });
  });
}

function changeLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  // Translate all marked elements
  const translateElements = document.querySelectorAll("[data-trans]");
  translateElements.forEach(el => {
    const key = el.getAttribute("data-trans");
    if (translations[lang][key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translations[lang][key];
      } else if (el.tagName === "OPTION") {
        el.textContent = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
}

// ── MOBILE MENU ──
function initMobileMenu() {
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  mobileToggle.addEventListener("click", () => {
    mobileToggle.classList.toggle("open");
    mobileMenu.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileToggle.classList.remove("open");
      mobileMenu.classList.remove("open");
      document.body.classList.remove("no-scroll");
    });
  });
}

// ── HERO INTRO ANIMATION (BLUEBIRD-STYLE FLY-IN) ──
function initHeroIntro() {
  // ── 1. Staggered entry animations ──
  const animEls = document.querySelectorAll('[data-anim]');
  if (animEls.length) {
    animEls.forEach(el => {
      const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
      setTimeout(() => {
        el.classList.add('anim-visible');
      }, delay + 120); // base delay so page fully paints
    });
  }

  // ── 2. Ticker word cycling ──
  const tickerWords = [
    'Indian Spices', 'Basmati Rice', 'Oil Seeds',
    'Raw Cotton', 'Fresh Fruits', 'Dehydrated Vegs', 'Pulses & Lentils'
  ];
  let tickerIdx = 0;
  const hdtWordEl = document.getElementById('hdtWord');

  if (hdtWordEl) {
    setInterval(() => {
      // Exit animation
      hdtWordEl.style.opacity = '0';
      hdtWordEl.style.transform = 'translateY(-16px)';
      hdtWordEl.style.filter = 'blur(4px)';
      setTimeout(() => {
        tickerIdx = (tickerIdx + 1) % tickerWords.length;
        hdtWordEl.textContent = tickerWords[tickerIdx];
        hdtWordEl.style.transform = 'translateY(16px)';
        // Enter animation
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            hdtWordEl.style.opacity = '1';
            hdtWordEl.style.transform = 'translateY(0)';
            hdtWordEl.style.filter = 'blur(0)';
          });
        });
      }, 340);
    }, 3000);
    // Set transition once
    hdtWordEl.style.transition = 'all 0.45s cubic-bezier(0.16,1,0.3,1)';
  }

  // Also handle the old dynamicWord if it still exists
  const wordElement = document.getElementById('dynamicWord');
  if (wordElement) {
    const words = ['Indian Spices', 'Basmati Rice', 'Oil Seeds', 'Raw Cotton', 'Fresh Fruits', 'Dehydrated Vegetables'];
    let currentWordIndex = 0;
    wordElement.style.transition = 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
    setInterval(() => {
      wordElement.style.opacity = '0';
      wordElement.style.transform = 'translateY(12px)';
      wordElement.style.filter = 'blur(3px)';
      setTimeout(() => {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        wordElement.textContent = words[currentWordIndex];
        wordElement.style.opacity = '1';
        wordElement.style.transform = 'translateY(0)';
        wordElement.style.filter = 'blur(0)';
      }, 400);
    }, 3200);
  }

  // ── 3. Canvas particle system ──
  const canvas = document.getElementById('heroParticles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const PARTICLE_COUNT = window.innerWidth < 768 ? 40 : 80;
  const particles = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x:    Math.random() * canvas.width,
      y:    Math.random() * canvas.height,
      vx:   (Math.random() - 0.5) * 0.4,
      vy:   (Math.random() - 0.5) * 0.4,
      r:    Math.random() * 1.8 + 0.4,
      // vary between gold and navy — brand colors
      hue:  Math.random() > 0.6 ? 38 : 220,
      sat:  Math.random() * 30 + 50,
      alpha: Math.random() * 0.35 + 0.1,
    });
  }

  const MAX_DIST = 120;

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update & draw dots
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, ${p.sat}%, 75%, ${p.alpha})`;
      ctx.fill();
    });

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(194, 150, 82, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(drawParticles);
  }

  drawParticles();

  // GSAP fallback for old hero elements (if present on other pages)
  if (typeof gsap !== 'undefined') {
    gsap.fromTo('.vc-spices', { opacity: 0, y: 60, rotation: 10 }, { opacity: 1, y: 0, rotation: 4, duration: 1.2, ease: 'back.out(1.5)', delay: 0.6 });
    gsap.fromTo('.vc-logistics', { opacity: 0, y: 60, rotation: -12 }, { opacity: 1, y: 0, rotation: -5, duration: 1.2, ease: 'back.out(1.5)', delay: 0.8 });
    gsap.fromTo('.vc-warehouse', { opacity: 0, y: 60, rotation: 10 }, { opacity: 1, y: 0, rotation: 3, duration: 1.2, ease: 'back.out(1.5)', delay: 1.0 });
  }
}


// ── GSAP SCROLL EFFECTS (SECTIONS) ──
function initScrollFx() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);

  // Story section soft rise-in
  gsap.fromTo(
    "#story .about-intro-inner",
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: { trigger: "#story", start: "top 78%" },
    }
  );

  // Services cards stagger-in + icon draw-on glow
  gsap.utils.toArray(".service-card").forEach((card) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
    });

    tl.fromTo(
      card,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    )
      .fromTo(
        card.querySelector(".wcu-card-title"),
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        "-=0.2"
      )
      .fromTo(
        card.querySelector(".icon-draw path"),
        { strokeDashoffset: 1, filter: "blur(6px)" },
        { strokeDashoffset: 0, filter: "blur(0px)", duration: 0.9, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        card.querySelector(".wcu-card-desc"),
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        "-=0.2"
      );
  });
}

// ── CARD-TO-FULLSCREEN MORPH SLIDER ──
const morphProducts = [
  {
    id: "turmeric",
    name: "TURMERIC FINGER",
    category: "Premium Spices • Organically Sourced",
    image: "products/turmeric.png",
    spec: "Curcumin Content: >3.5% | Moisture: <10%"
  },
  {
    id: "rice",
    name: "BASMATI RICE",
    category: "Grains & Rice • Premium Aged",
    image: "products/rice.png",
    spec: "Avg Length: >7.4mm | Broken: <1%"
  },
  {
    id: "cotton",
    name: "RAW COTTON",
    category: "Agricultural Exports • Textile Grade",
    image: "products/cotton.png",
    spec: "Staple Length: 28-32mm | Trash: <3%"
  },
  {
    id: "dehydrated_veg",
    name: "DEHYDRATED VEG",
    category: "Food Products • Natural Flakes",
    image: "products/dehydrated-veg.png",
    spec: "Moisture: <6% | Preservatives: None"
  },
  {
    id: "fresh_produce",
    name: "FRESH PRODUCE",
    category: "Fresh Fruits & Vegetables • Farm Direct",
    image: "products/fresh-produce.png",
    spec: "Quality: Grade A Export | Cold Chain Ready"
  },
  {
    id: "handicrafts",
    name: "ARTISANAL HANDICRAFTS",
    category: "Indian Handicrafts • Handcrafted Items",
    image: "products/handicrafts.png",
    spec: "Brassware & Woodwork | Custom Designs"
  }
];

let morphCurrentIndex = 0;
let morphAutoplayTween = null;

function initMorphSlider() {
  const nextBtn = document.querySelector(".morph-controls .nav-arrow.next");
  const prevBtn = document.querySelector(".morph-controls .nav-arrow.prev");
  const cards = document.querySelectorAll(".product-stack .stack-card");

  if (!nextBtn || !cards.length) return;

  // Click on cards
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const targetId = card.getAttribute("data-product");
      const targetIndex = morphProducts.findIndex(p => p.id === targetId);
      if (targetIndex !== -1) {
        morphSlideTo(targetIndex);
      }
    });
  });

  // Next / Prev arrows
  nextBtn.addEventListener("click", () => {
    const nextIdx = (morphCurrentIndex + 1) % morphProducts.length;
    morphSlideTo(nextIdx);
  });

  prevBtn.addEventListener("click", () => {
    const prevIdx = (morphCurrentIndex - 1 + morphProducts.length) % morphProducts.length;
    morphSlideTo(prevIdx);
  });

  // Start initial autoplay
  startMorphAutoplay();
}

function startMorphAutoplay() {
  if (morphAutoplayTween) morphAutoplayTween.kill();

  morphAutoplayTween = gsap.fromTo(
    ".morph-controls .progress-fill",
    { scaleX: 0 },
    {
      scaleX: 1,
      duration: 6,
      ease: "none",
      transformOrigin: "left center",
      onComplete: () => {
        const nextIdx = (morphCurrentIndex + 1) % morphProducts.length;
        morphSlideTo(nextIdx);
      }
    }
  );
}

function morphSlideTo(targetIndex) {
  if (targetIndex === morphCurrentIndex) return;

  // Pause autoplay
  if (morphAutoplayTween) morphAutoplayTween.kill();

  const targetProduct = morphProducts[targetIndex];
  const oldProduct = morphProducts[morphCurrentIndex];

  // 1. Get the card elements
  const cards = document.querySelectorAll(".product-stack .stack-card");
  let clickedCard = null;
  cards.forEach(c => {
    if (c.getAttribute("data-product") === targetProduct.id) {
      clickedCard = c;
    }
  });

  if (!clickedCard) return;

  // 2. Measure state
  const state = Flip.getState(clickedCard);

  // Create temporary container for FLIP
  const container = document.querySelector(".morph-hero-container");
  const imageWrap = document.querySelector(".morph-hero-image-wrap");

  // Create incoming image
  const incomingImg = document.createElement("img");
  incomingImg.className = "hero-image incoming";
  incomingImg.src = targetProduct.image;
  incomingImg.style.position = "absolute";
  incomingImg.style.inset = "0";
  incomingImg.style.width = "100%";
  incomingImg.style.height = "100%";
  incomingImg.style.objectFit = "cover";
  incomingImg.style.zIndex = "1";

  // Append new image to the container
  imageWrap.appendChild(incomingImg);

  // Play morph animation on the incoming image, originating from the clicked thumbnail card
  Flip.from(state, {
    targets: incomingImg,
    duration: 0.9,
    ease: "power3.inOut",
    scale: true,
    absolute: true,
    onStart: () => {
      // Apply brief motion blur
      gsap.fromTo(incomingImg, { filter: "blur(6px)" }, { filter: "blur(0px)", duration: 0.5 });

      // Slide copy out
      gsap.to(".morph-hero-copy .caption", { opacity: 0, y: -10, duration: 0.3 });
      gsap.to(".morph-hero-copy .title", { opacity: 0, y: -16, duration: 0.3 });
      gsap.to(".morph-hero-copy .spec", { opacity: 0, y: -10, duration: 0.3 });
    },
    onComplete: () => {
      // Remove old image
      const oldHeroImg = imageWrap.querySelector("img:not(.incoming)");
      if (oldHeroImg) oldHeroImg.remove();
      incomingImg.className = "hero-image";
      incomingImg.style.position = "";
      incomingImg.style.zIndex = "";

      // Update text details
      document.querySelector(".morph-hero-copy .caption").textContent = targetProduct.category;
      document.querySelector(".morph-hero-copy .title").textContent = targetProduct.name;
      document.querySelector(".morph-hero-copy .spec").textContent = targetProduct.spec;
      document.querySelector(".morph-hero-copy .cta").setAttribute("href", `product.html?id=${targetProduct.id}`);
      document.querySelector(".morph-hero-copy .cta").removeAttribute("onclick");

      // Update indices
      document.querySelector(".morph-controls .slide-number").textContent = `0${targetIndex + 1} / 0${morphProducts.length}`;

      // Slide copy in
      gsap.fromTo(".morph-hero-copy .caption", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 });
      gsap.fromTo(".morph-hero-copy .title", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.1 });
      gsap.fromTo(".morph-hero-copy .spec", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, delay: 0.2 });

      // Shift global state index
      morphCurrentIndex = targetIndex;

      // Update stack cards mapping
      updateStackCards();

      // Restart autoplay
      startMorphAutoplay();
    }
  });
}

function updateStackCards() {
  const stack = document.querySelector(".product-stack");
  if (!stack) return;

  // Clear current stack children
  stack.innerHTML = "";

  // The 3 items to show next in the stack
  for (let offset = 1; offset <= 3; offset++) {
    const stackIdx = (morphCurrentIndex + offset) % morphProducts.length;
    const prod = morphProducts[stackIdx];

    const card = document.createElement("button");
    card.className = "stack-card";
    card.setAttribute("data-product", prod.id);
    card.setAttribute("data-index", offset);

    card.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}">
      <div class="stack-card-info">
        <span class="stack-card-cat">${prod.category.split("•")[0].trim()}</span>
        <span class="stack-card-name">${prod.name.toLowerCase()}</span>
      </div>
    `;

    card.addEventListener("click", () => {
      morphSlideTo(stackIdx);
    });

    stack.appendChild(card);
  }
}

// ── GLOBE CANVAS (CANVAS 2D) ──
function initGlobeCanvas() {
  const canvas = document.getElementById("hero-globe-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = canvas.offsetWidth;
  let height = canvas.offsetHeight;
  canvas.width = width;
  canvas.height = height;

  window.addEventListener("resize", () => {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  });

  // Globe parameters
  const globeRadius = Math.min(width, height) * 0.38;
  const globeCenter = { x: width * 0.75, y: height * 0.5 };

  let angleX = 0.001;
  let angleY = 0.003;

  // Generate 3D grid points on sphere
  const points = [];
  const totalRings = 14;
  const pointsPerRing = 20;

  for (let i = 0; i < totalRings; i++) {
    const phi = (Math.PI * i) / totalRings;
    for (let j = 0; j < pointsPerRing; j++) {
      // Add slight random jitter for low-poly molecular wireframe look
      const jitter = (Math.random() - 0.5) * 0.08;
      const theta = (2 * Math.PI * j) / pointsPerRing + jitter;
      const x = globeRadius * Math.sin(phi) * Math.cos(theta);
      const y = globeRadius * Math.cos(phi);
      const z = globeRadius * Math.sin(phi) * Math.sin(theta);

      // Determine if this is a glowing ember node
      const isEmber = Math.random() < 0.15;
      points.push({ x, y, z, isEmber });
    }
  }

  // Mouse interactivity
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };
  let currentRotation = { x: 0, y: 0 };

  canvas.addEventListener("mousedown", (e) => {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  canvas.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;
    currentRotation.y += deltaX * 0.003;
    currentRotation.x += deltaY * 0.003;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Render loop
  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Adjust center based on screensize
    if (width < 768) {
      globeCenter.x = width * 0.5;
      globeCenter.y = height * 0.55;
    } else {
      globeCenter.x = width * 0.75;
      globeCenter.y = height * 0.5;
    }

    // Auto rotate
    if (!isDragging) {
      currentRotation.y += angleY;
      currentRotation.x += angleX;
    }

    const cosRotX = Math.cos(currentRotation.x);
    const sinRotX = Math.sin(currentRotation.x);
    const cosRotY = Math.cos(currentRotation.y);
    const sinRotY = Math.sin(currentRotation.y);

    const projectedPoints = points.map(pt => {
      let x1 = pt.x * cosRotY - pt.z * sinRotY;
      let z1 = pt.z * cosRotY + pt.x * sinRotY;
      let y2 = pt.y * cosRotX - z1 * sinRotX;
      let z2 = z1 * cosRotX + pt.y * sinRotX;

      const perspective = 350 / (350 - z2);
      return {
        x: x1 * perspective + globeCenter.x,
        y: y2 * perspective + globeCenter.y,
        z: z2,
        isEmber: pt.isEmber
      };
    });

    // Draw large thin static ring behind the sphere
    ctx.strokeStyle = "rgba(231, 163, 61, 0.15)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(globeCenter.x, globeCenter.y, globeRadius + 40, 0, 2 * Math.PI);
    ctx.stroke();

    // Moving molten core center (orbiting coordinates)
    const time = Date.now() * 0.0015;
    const coreX = globeCenter.x + Math.sin(time) * (globeRadius * 0.5);
    const coreY = globeCenter.y + Math.cos(time * 0.8) * (globeRadius * 0.5);

    // Draw mesh lines
    ctx.lineWidth = 1.2;
    for (let i = 0; i < totalRings; i++) {
      for (let j = 0; j < pointsPerRing; j++) {
        const idx = i * pointsPerRing + j;
        const pt1 = projectedPoints[idx];

        // Connect to next point on the same ring
        const nextIdx = i * pointsPerRing + ((j + 1) % pointsPerRing);
        const pt2 = projectedPoints[nextIdx];

        // Connect to point on the next ring
        const downIdx = ((i + 1) % totalRings) * pointsPerRing + j;
        const pt3 = projectedPoints[downIdx];

        [pt2, pt3].forEach(ptTarget => {
          // Calculate distance from molten core
          const distToCore = Math.hypot((pt1.x + ptTarget.x) / 2 - coreX, (pt1.y + ptTarget.y) / 2 - coreY);

          if (distToCore < 100) {
            // Molten crack golden-white glow
            const factor = (100 - distToCore) / 100;
            ctx.strokeStyle = `rgba(231, 163, 61, ${0.15 + factor * 0.7})`;
            ctx.lineWidth = 1.2 + factor * 1.5;
          } else {
            // Dark gray wireframe line
            ctx.strokeStyle = "rgba(38, 38, 42, 0.25)";
            ctx.lineWidth = 1.2;
          }

          ctx.beginPath();
          ctx.moveTo(pt1.x, pt1.y);
          ctx.lineTo(ptTarget.x, ptTarget.y);
          ctx.stroke();
        });
      }
    }

    // Draw point nodes
    projectedPoints.forEach(pt => {
      const distToCore = Math.hypot(pt.x - coreX, pt.y - coreY);

      if (distToCore < 80) {
        // Molten core nodes (white-gold)
        const factor = (80 - distToCore) / 80;
        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 + factor * 0.2})`;
        ctx.shadowColor = "var(--accent-gold-bright)";
        ctx.shadowBlur = 12 * factor;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 4 + factor * 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.shadowBlur = 0;
      } else if (pt.isEmber) {
        // Glowing orange-red ember nodes
        ctx.fillStyle = "var(--accent-ember)";
        ctx.shadowColor = "var(--accent-ember)";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 3.5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.shadowBlur = 0;
      } else {
        // Standard dark nodes
        ctx.fillStyle = "rgba(38, 38, 42, 0.6)";
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2, 0, 2 * Math.PI);
        ctx.fill();
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// ── PRODUCTS RENDERING & TABS ──
// ── PRODUCTS RENDERING & TABS ──
let sliderCurrentIndex = 0;

function initProductsSlider() {
  // Slider is disabled in favor of the scrollable grid
  window.updateProductsSlider = () => {};
}

function renderProducts() {
  const track = document.getElementById("productsSliderTrack");
  if (!track) return;
  track.innerHTML = "";

  if (!activeCategory) {
    track.innerHTML = `
      <div style="width: 100%; text-align: center; padding: 60px 20px; color: var(--text-mid); border: 1.5px dashed rgba(255,255,255,0.08); border-radius: var(--radius-lg); background: rgba(11, 19, 43, 0.25);">
        <span style="font-size: 42px; display: block; margin-bottom: 16px;">🌾</span>
        <h3 style="font-family: var(--font-heading); font-size: 20px; color: #FFFFFF; margin-bottom: 8px;">Explore Our Collections</h3>
        <p style="font-size: 14px; font-weight: 300; max-width: 420px; margin: 0 auto;">Click on any of the product categories above to view our premium certified exports.</p>
      </div>
    `;
    const prevBtn = document.getElementById("sliderPrev");
    const nextBtn = document.getElementById("sliderNext");
    const dotsContainer = document.getElementById("sliderDots");
    if (prevBtn) prevBtn.style.display = "none";
    if (nextBtn) nextBtn.style.display = "none";
    if (dotsContainer) dotsContainer.style.display = "none";
    return;
  }

  // Hide navigation elements for grid layout
  const prevBtn = document.getElementById("sliderPrev");
  const nextBtn = document.getElementById("sliderNext");
  const dotsContainer = document.getElementById("sliderDots");
  if (prevBtn) prevBtn.style.display = "none";
  if (nextBtn) nextBtn.style.display = "none";
  if (dotsContainer) dotsContainer.style.display = "none";

  const filtered = productsData.filter(p => p.category === activeCategory);
  const featuredTagText = (translations[currentLang] && translations[currentLang].tag_featured) || "Featured Product";

  filtered.forEach(prod => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      window.location.href = `product.html?id=${prod.id}`;
    });
    card.innerHTML = `
      <div class="product-image-container">
        <img src="${prod.image}" alt="${prod.name}" class="product-card-image" loading="lazy">
      </div>
      <div class="featured-tag-label">${featuredTagText}</div>
      <div class="product-info-wrap">
        <h3 class="product-name">${prod.name}</h3>
      </div>
    `;
    track.appendChild(card);
  });
}

function initProductTabs() {
  const tabs = document.querySelectorAll(".psc-tab-btn");
  tabs.forEach(tab => {
    if (tab.getAttribute("data-category") === activeCategory) {
      tab.classList.add("active");
    }
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.getAttribute("data-category");
      renderProducts();
    });
  });
}

// ── FORM INTERACTION ──
function initInquiryForm() {
  const form = document.getElementById("inquiryForm");
  const status = document.getElementById("formStatus");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("formName").value.trim();
    const email = document.getElementById("formEmail").value.trim();
    const phone = document.getElementById("formPhone").value.trim();
    const message = document.getElementById("formMessage").value.trim();

    if (!name || !email || !phone || !message) {
      status.className = "form-status error";
      status.textContent = translations[currentLang].form_error;
      return;
    }

    // Log values & mock success
    console.log("Inquiry Submitted:", { name, email, phone, category: document.getElementById("formProduct").value, message });

    status.className = "form-status success";
    status.textContent = translations[currentLang].form_success;
    form.reset();

    setTimeout(() => {
      status.textContent = "";
    }, 6000);
  });
}

function inquireProduct(productName) {
  // Pre-fill form dropdown and message
  const categorySelect = document.getElementById("formProduct");
  const messageArea = document.getElementById("formMessage");
  const inquirySection = document.getElementById("inquiry");

  const product = productsData.find(p => p.name === productName);
  if (product && categorySelect) {
    categorySelect.value = product.category;
  }

  if (messageArea) {
    messageArea.value = `Hello, I'm interested in importing Jalpex International's premium "${productName}". Please send me pricing specification, packing sizes, and details.`;
  }

  // Smooth scroll to inquiry form
  if (inquirySection) {
    inquirySection.scrollIntoView({ behavior: "smooth" });
  }
}

// ── REVEAL ON SCROLL ANIMATIONS ──
function initRevealAnimations() {
  const reveals = document.querySelectorAll("[data-reveal]");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: "0px 0px -50px 0px"
  });

  reveals.forEach(el => observer.observe(el));
}