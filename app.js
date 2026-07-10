// ── MULTILINGUAL TRANSLATION DICTIONARY ──
const translations = {
  en: {
    nav_home: "Home",
    nav_story: "Our Story",
    nav_products: "Products",
    nav_why: "Why Choose Us",
    nav_inquiry: "Inquiry",
    btn_quote: "Request Quote",
    hero_badge: "ESTABLISHED SINCE 2026",
    hero_title: "Bridging Indian <em>Heritage</em> with Global Markets.",
    hero_desc: "At MEGAYUG GLOBAL, we export premium Indian spices, high-quality seeds, organic grains, and pulses directly to international clients. Sourced with absolute care, delivered with complete integrity.",
    hero_explore: "Explore Portfolio",
    hero_legacy: "Our Values",
    stat_heritage: "Heritage Quality",
    stat_organic: "Pure & Organic",
    stat_destinations: "Global Sourcing",
    story_label: "Global Agro Exporter",
    story_title: "Premium Quality, Ethical Sourcing & Trusted Global Delivery",
    story_p1: "At Megayug Global, we specialize in exporting premium Indian agricultural products to global markets. Sourced from the richest soils of India, our products maintain their natural flavor, rich aroma, and traditional quality. We are committed to ethical practices, strict quality control, and clean processing methods to ensure our products meet international standards.",
    story_p2: "We offer an extensive range of agricultural exports, categorized into authentic spices, nutritious seeds, and essential grains and pulses. Every product is processed and packaged with great care, preserving its goodness for our global customers. Partner with us for a seamless export experience backed by unmatched dedication.",
    story_link: "Explore our export collections &rarr;",
    ticker_text: "Reliable Worldwide Logistics Services • Delivering Indian Quality Globally • Premium Agricultural Export Solutions • Sourced with Care, Processed with Integrity • Trusted Global Export Partner • ",
    prod_label: "Featured Products",
    prod_title: "Our Premium Export Collection",
    prod_desc: "Explore our premium range of export-quality products carefully sourced, securely packed, and delivered worldwide with quality, freshness, and reliability.",
    tab_spices: "Spices",
    tab_seeds: "Seeds",
    tab_pulses: "Pulses & Grains",
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
    info_address_val: "128, 1st Floor, Shivalika Complex, Opp V.J Patel Vegetable Market, Deesa, Banaskantha - 385535",
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
    footer_desc: "Megayug Global is a premium export house of agricultural commodities. We represent the pinnacle of Indian farming heritage, catering to import networks in 40+ countries.",
    footer_quick_links: "Quick Navigation",
    footer_products: "Our Offerings",
    footer_contact: "Contact Sourcing Desk",
    footer_rights: "All Rights Reserved.",
    footer_terms: "Terms of Trade",
    footer_privacy: "Privacy Policy"
  },
  hi: {
    nav_home: "मुख्य पृष्ठ",
    nav_story: "हमारी कहानी",
    nav_products: "उत्पाद",
    nav_why: "हमें क्यों चुनें",
    nav_inquiry: "पूछताछ",
    btn_quote: "कोटेशन मांगें",
    hero_badge: "स्थापना वर्ष २०२६",
    hero_title: "भारतीय <em>विरासत</em> को वैश्विक बाजारों से जोड़ना।",
    hero_desc: "मेगायुग ग्लोबल में, हम प्रीमियम भारतीय मसालों, उच्च गुणवत्ता वाले बीजों, जैविक अनाज और दालों को सीधे अंतरराष्ट्रीय ग्राहकों को निर्यात करते हैं। पूर्ण देखभाल के साथ सोर्स और ईमानदारी के साथ डिलीवर किया जाता है।",
    hero_explore: "पोर्टफोलियो देखें",
    hero_legacy: "हमारे मूल्य",
    stat_heritage: "विरासत गुणवत्ता",
    stat_organic: "शुद्ध और जैविक",
    stat_destinations: "वैश्विक सोर्सिंग",
    story_label: "वैश्विक कृषि निर्यातक",
    story_title: "प्रीमियम गुणवत्ता, नैतिक सोर्सिंग और विश्वसनीय वैश्विक वितरण",
    story_p1: "मेगायुग ग्लोबल में, हम वैश्विक बाजारों में प्रीमियम भारतीय कृषि उत्पादों के निर्यात में विशेषज्ञ हैं। भारत की सबसे समृद्ध मिट्टी से प्राप्त, हमारे उत्पाद अपने प्राकृतिक स्वाद, समृद्ध सुगंध और पारंपरिक गुणवत्ता बनाए रखते हैं।",
    story_p2: "हम कृषि निर्यातों की एक विस्तृत श्रृंखला प्रदान करते हैं, जिन्हें मसालों, पौष्टिक बीजों और आवश्यक अनाजों व दालों में वर्गीकृत किया गया है। हर उत्पाद को हमारे वैश्विक ग्राहकों के लिए उसकी गुणवत्ता बनाए रखने के लिए सावधानीपूर्वक संसाधित किया जाता है।",
    story_link: "हमारे निर्यात संग्रह देखें &rarr;",
    ticker_text: "विश्वसनीय वैश्विक रसद सेवाएं • भारतीय गुणवत्ता को विश्व स्तर पर वितरित करना • प्रीमियम कृषि निर्यात समाधान • देखभाल के साथ सोर्स, अखंडता के साथ संसाधित • ",
    prod_label: "विशेष रुप से प्रदर्शित उत्पाद",
    prod_title: "हमारा प्रीमियम निर्यात संग्रह",
    prod_desc: "गुणवत्ता, ताजगी और विश्वसनीयता के साथ दुनिया भर में वितरित हमारे प्रीमियम निर्यात-गुणवत्ता वाले उत्पादों की श्रृंखला का अन्वेषण करें।",
    tab_spices: "मसाले",
    tab_seeds: "बीज",
    tab_pulses: "दालें और अनाज",
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
    info_address_val: "128, 1st Floor, Shivalika Complex, Opp V.J Patel Vegetable Market, Deesa, Banaskantha - 385535",
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
    footer_desc: "मेगायुग ग्लोबल कृषि उत्पादों का एक प्रीमियम निर्यात गृह है। हम भारतीय कृषि विरासत के शिखर का प्रतिनिधित्व करते हैं।",
    footer_quick_links: "त्वरित नेविगेशन",
    footer_products: "हमारे उत्पाद",
    footer_contact: "स्रोतों के डेस्क से संपर्क",
    footer_rights: "सर्वाधिकार सुरक्षित।",
    footer_terms: "व्यापार की शर्तें",
    footer_privacy: "गोपनीयता नीति"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_story: "قصتنا",
    nav_products: "المنتجات",
    nav_why: "لماذا تختارنا",
    nav_inquiry: "الاستفسار",
    btn_quote: "طلب اقتباس",
    hero_badge: "تأسست منذ عام 2026",
    hero_title: "ربط <em>التراث</em> الهندي بالأسواق العالمية.",
    hero_desc: "في ميغايوغ غلوبال، نقوم بتصدير البهارات الهندية الممتازة، والبذور عالية الجودة، والحبوب العضوية، والبقوليات مباشرة إلى العملاء الدوليين. يتم الحصول عليها بعناية فائقة وتسليمها بنزاهة تامة.",
    hero_explore: "استكشف المنتجات",
    hero_legacy: "قيمنا",
    stat_heritage: "جودة التراث",
    stat_organic: "نقي وعضوي",
    stat_destinations: "مصادر عالمية",
    story_label: "مصدر زراعي عالمي",
    story_title: "جودة ممتازة، مصادر أخلاقية وتسليم عالمي موثوق",
    story_p1: "في ميغايوغ غلوبال، نحن متخصصون في تصدير المنتجات الزراعية الهندية المتميزة إلى الأسواق العالمية. يتم الحصول عليها من أغنى التربة في الهند، وتحافظ منتجاتنا على نكهتها الطبيعية ورائحتها الغنية وجودتها التقليدية.",
    story_p2: "نحن نقدم مجموعة واسعة من الصادرات الزراعية، المصنفة إلى بهارات أصلية، وبذور مغذية، وحبوب وبقوليات أساسية. تتم معالجة وتعبئة كل منتج بعناية فائقة للحفاظ على جودته لعملائنا العالميين.",
    story_link: "استكشف مجموعات التصدير لدينا &rarr;",
    ticker_text: "خدمات لوجستية عالمية موثوقة • تقديم الجودة الهندية عالميًا • حلول تصدير زراعية ممتازة • تم الحصول عليها بعناية ومعالجتها بنزاهة • ",
    prod_label: "منتجات مميزة",
    prod_title: "مجموعة التصدير الممتازة لدينا",
    prod_desc: "استكشف مجموعتنا المتميزة من المنتجات ذات الجودة التصديرية التي يتم الحصول عليها بعناية وتعبئتها بأمان وتسليمها إلى جميع أنحاء العالم بجودة ونضارة وموثوقية.",
    tab_spices: "بهارات",
    tab_seeds: "بذور",
    tab_pulses: "البقوليات والحبوب",
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
    info_address_val: "128, 1st Floor, Shivalika Complex, Opp V.J Patel Vegetable Market, Deesa, Banaskantha - 385535",
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
    footer_desc: "ميغايوغ غلوبال هي دار تصدير ممتازة للسلع الزراعية. نحن نمثل قمة التراث الزراعي الهندي.",
    footer_quick_links: "تنقل سريع",
    footer_products: "عروضنا",
    footer_contact: "مكتب تواصل المصادر",
    footer_rights: "جميع الحقوق محفوظة.",
    footer_terms: "شروط التجارة",
    footer_privacy: "سياسة الخصوصية"
  },
  fr: {
    nav_home: "Accueil",
    nav_story: "Notre Histoire",
    nav_products: "Produits",
    nav_why: "Pourquoi Nous Choisir",
    nav_inquiry: "Demande",
    btn_quote: "Demander un Devis",
    hero_badge: "ÉTABLI DEPUIS 2026",
    hero_title: "Relier l'<em>Héritage</em> Indien aux Marchés Globaux.",
    hero_desc: "Chez MEGAYUG GLOBAL, nous exportons des épices indiennes de qualité supérieure, des graines nutritives, des céréales et légumineuses biologiques directement aux clients internationaux.",
    hero_explore: "Explorer le Portfolio",
    hero_legacy: "Nos Valeurs",
    stat_heritage: "Qualité Héritage",
    stat_organic: "Pur & Biologique",
    stat_destinations: "Sourcing Global",
    story_label: "Exportateur Agro Global",
    story_title: "Qualité Supérieure, Sourcing Éthique et Livraison Fiable",
    story_p1: "Chez Megayug Global, nous sommes spécialisés dans l'exportation de produits agricoles indiens de qualité supérieure. Issus des sols les plus riches de l'Inde, nos produits conservent leur saveur naturelle, leur arôme riche et leur qualité traditionnelle.",
    story_p2: "Nous proposons une large gamme d'exportations agricoles, classées en épices authentiques, graines nutritives et grains essentiels. Chaque produit est traité et emballé avec le plus grand soin.",
    story_link: "Découvrez nos collections d'exportation &rarr;",
    ticker_text: "Services logistiques mondiaux fiables • Livraison de la qualité indienne dans le monde entier • Solutions d'exportation agricole de premier ordre • ",
    prod_label: "Produits Vedettes",
    prod_title: "Notre Collection d'Exportation Premium",
    prod_desc: "Explorez notre gamme de produits de qualité supérieure, soigneusement sourcés, emballés de manière sécurisée et livrés dans le monde entier.",
    tab_spices: "Épices",
    tab_seeds: "Graines",
    tab_pulses: "Légumineuses & Grains",
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
    info_address_val: "128, 1st Floor, Shivalika Complex, Opp V.J Patel Vegetable Market, Deesa, Banaskantha - 385535",
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
    footer_desc: "Megayug Global est une maison d'exportation de produits agricoles haut de gamme. Nous représentons le meilleur du patrimoine agricole indien.",
    footer_quick_links: "Navigation Rapide",
    footer_products: "Nos Produits",
    footer_contact: "Contact Sourcing",
    footer_rights: "Tous droits réservés.",
    footer_terms: "Conditions Générales",
    footer_privacy: "Politique de Confidentialité"
  },
  es: {
    nav_home: "Inicio",
    nav_story: "Nuestra Historia",
    nav_products: "Productos",
    nav_why: "Por Qué Elegirnos",
    nav_inquiry: "Consulta",
    btn_quote: "Solicitar Cotización",
    hero_badge: "ESTABLECIDO DESDE 2026",
    hero_title: "Conectando la <em>Herencia</em> India con Mercados Globales.",
    hero_desc: "En MEGAYUG GLOBAL, exportamos especias indias de primera calidad, semillas nutritivas, cereales y legumbres orgánicas directamente a clientes internacionales.",
    hero_explore: "Explorar Portafolio",
    hero_legacy: "Nuestros Valores",
    stat_heritage: "Calidad de Herencia",
    stat_organic: "Puro y Orgánico",
    stat_destinations: "Sourcing Global",
    story_label: "Exportador Agrícola Global",
    story_title: "Calidad Premium, Abastecimiento Ético y Entrega Global de Confianza",
    story_p1: "En Megayug Global, nos especializamos en la exportación de productos agrícolas indios premium. Obtenidos de los suelos más ricos de la India, conservan su sabor natural y calidad tradicional.",
    story_p2: "Ofrecemos una amplia gama de exportaciones agrícolas, divididas en especias auténticas, semillas nutritivas y granos esenciales.",
    story_link: "Explore nuestras colecciones de exportación &rarr;",
    ticker_text: "Servicios logísticos mundiales confiables • Entrega de calidad india a nivel mundial • Soluciones premium de exportación • ",
    prod_label: "Productos Destacados",
    prod_title: "Nuestra Colección de Exportación Premium",
    prod_desc: "Explore nuestra gama de productos de calidad de exportación, cuidadosamente seleccionados y entregados en todo el mundo.",
    tab_spices: "Especias",
    tab_seeds: "Semillas",
    tab_pulses: "Legumbres y Granos",
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
    info_address_val: "128, 1st Floor, Shivalika Complex, Opp V.J Patel Vegetable Market, Deesa, Banaskantha - 385535",
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
    footer_desc: "Megayug Global es una casa exportadora premium de productos agrícolas. Representamos la herencia agrícola de la India.",
    footer_quick_links: "Navegación Rápida",
    footer_products: "Nuestros Productos",
    footer_contact: "Contacto de Sourcing",
    footer_rights: "Todos los derechos reservados.",
    footer_terms: "Términos de Comercio",
    footer_privacy: "Política de Privacidad"
  },
  de: {
    nav_home: "Startseite",
    nav_story: "Unsere Story",
    nav_products: "Produkte",
    nav_why: "Warum Uns Wählen",
    nav_inquiry: "Anfrage",
    btn_quote: "Angebot Anfordern",
    hero_badge: "GEGRÜNDET SEIT 2026",
    hero_title: "Verbindung indischer <em>Tradition</em> mit globalen Märkten.",
    hero_desc: "Bei MEGAYUG GLOBAL exportieren wir erstklassige indische Gewürze, hochwertige Samen, Bio-Getreide und Hülsenfrüchte direkt an internationale Kunden.",
    hero_explore: "Portfolio Erkunden",
    hero_legacy: "Unsere Werte",
    stat_heritage: "Qualitätserbe",
    stat_organic: "Rein & Organisch",
    stat_destinations: "Globales Sourcing",
    story_label: "Globaler Agrar-Exporteur",
    story_title: "Erstklassige Qualität, ethische Beschaffung & zuverlässige Lieferung",
    story_p1: "Bei Megayug Global haben wir uns auf den Export von erstklassigen indischen Agrarprodukten spezialisiert. Direkt von den fruchtbarsten Böden Indiens stammend, bewahren unsere Produkte ihren natürlichen Geschmack.",
    story_p2: "Unser breites Sortiment umfasst authentische Gewürze, nährstoffreiche Samen sowie Getreide und Hülsenfrüchte, die sorgfältig verarbeitet werden.",
    story_link: "Unsere Export-Kollektionen ansehen &rarr;",
    ticker_text: "Zuverlässige weltweite Logistikdienstleistungen • Lieferung indischer Qualität weltweit • Erstklassige Agrarexportlösungen • ",
    prod_label: "Ausgewählte Produkte",
    prod_title: "Unsere Premium-Export-Kollektion",
    prod_desc: "Entdecken Sie unser erstklassiges Sortiment an Produkten in Exportqualität, die weltweit mit Fokus auf Frische und Zuverlässigkeit geliefert werden.",
    tab_spices: "Gewürze",
    tab_seeds: "Samen",
    tab_pulses: "Hülsenfrüchte & Getreide",
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
    info_address_val: "128, 1st Floor, Shivalika Complex, Opp V.J Patel Vegetable Market, Deesa, Banaskantha - 385535",
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
    footer_desc: "Megayug Global ist ein erstklassiges Exporthaus für Agrarrohstoffe. Wir vertreten die Spitze der indischen Agrartradition.",
    footer_quick_links: "Schnelle Navigation",
    footer_products: "Unser Angebot",
    footer_contact: "Beschaffungskontakt",
    footer_rights: "Alle Rechte vorbehalten.",
    footer_terms: "Handelsbedingungen",
    footer_privacy: "Datenschutzerklärung"
  },
  pt: {
    nav_home: "Início",
    nav_story: "Nossa História",
    nav_products: "Produtos",
    nav_why: "Por Que Escolher-nos",
    nav_inquiry: "Inquérito",
    btn_quote: "Solicitar Cotação",
    hero_badge: "ESTABELECIDO DESDE 2026",
    hero_title: "Unindo a <em>Herança</em> Indiana aos Mercados Globais.",
    hero_desc: "Na MEGAYUG GLOBAL, exportamos especiarias indianas premium, sementes de alta qualidade, grãos e leguminosas orgânicas diretamente para clientes internacionais.",
    hero_explore: "Explorar Portfólio",
    hero_legacy: "Nossos Valores",
    stat_heritage: "Qualidade de Herança",
    stat_organic: "Puro e Orgânico",
    stat_destinations: "Sourcing Global",
    story_label: "Exportador Agrícola Global",
    story_title: "Qualidade Premium, Fornecimento Ético e Entrega Global Confiável",
    story_p1: "Na Megayug Global, somos especializados em exportar produtos agrícolas indianos premium para mercados globais. Cultivados nos solos mais ricos da Índia, nossos produtos mantêm seus sabores naturais.",
    story_p2: "Oferecemos uma ampla variedade de produtos de exportação, classificados em especiarias autênticas, sementes nutritivas e grãos essenciais.",
    story_link: "Explore nossas coleções de exportação &rarr;",
    ticker_text: "Serviços logísticos mundiais confiáveis • Entregando a qualidade indiana globalmente • Soluções premium de exportação • ",
    prod_label: "Produtos em Destaque",
    prod_title: "Nossa Coleção de Exportação Premium",
    prod_desc: "Explore a nossa gama de produtos de qualidade de exportação, cuidadosamente selecionados, embalados com segurança e entregues em todo o mundo.",
    tab_spices: "Especiarias",
    tab_seeds: "Sementes",
    tab_pulses: "Leguminosas & Grãos",
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
    info_address_val: "128, 1st Floor, Shivalika Complex, Opp V.J Patel Vegetable Market, Deesa, Banaskantha - 385535",
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
    footer_desc: "Megayug Global é uma casa de exportação premium de commodities agrícolas. Representamos o topo do património agrícola indiano.",
    footer_quick_links: "Navegação Rápida",
    footer_products: "Nossos Produtos",
    footer_contact: "Contacto de Sourcing",
    footer_rights: "Todos os direitos reservados.",
    footer_terms: "Termos de Comércio",
    footer_privacy: "Política de Privacidade"
  },
  zh: {
    nav_home: "首页",
    nav_story: "品牌故事",
    nav_products: "出口产品",
    nav_why: "合作优势",
    nav_inquiry: "在线询盘",
    btn_quote: "获取报价",
    hero_badge: "始创于2026年",
    hero_title: "架起印度<em>传统农业</em>与全球市场的桥梁。",
    hero_desc: "在 MEGAYUG GLOBAL，我们直接向国际客户出口印度优质香料、高品质种子、有机谷物和豆类。精挑细选，诚信交付。",
    hero_explore: "浏览产品组合",
    hero_legacy: "我们的价值观",
    stat_heritage: "传统品质",
    stat_organic: "纯净与有机",
    stat_destinations: "全球采购",
    story_label: "全球农产品出口商",
    story_title: "优质品质、道德采购与值得信赖的全球交付",
    story_p1: "在 Megayug Global，我们专注于向全球市场出口优质的印度农产品。我们的产品源自印度最肥沃的土地，保持了其天然风味、浓郁香气和传统品质。",
    story_p2: "我们提供广泛的农业出口，分类为正宗香料、营养种子以及基本谷物和豆类。每件产品都经过精心加工和包装，确保其最佳品质。",
    story_link: "浏览我们的出口系列 &rarr;",
    ticker_text: "可靠的全球物流服务 • 将印度品质送达全球 • 优质农产品出口解决方案 • 精心采购，诚信加工 • ",
    prod_label: "特色产品",
    prod_title: "我们的优质出口系列",
    prod_desc: "探索我们精心采购、安全包装并销往全球的高品质出口农产品系列，确保新鲜与可靠。",
    tab_spices: "香料",
    tab_seeds: "种子",
    tab_pulses: "豆类与谷物",
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
    info_address_val: "128, 1st Floor, Shivalika Complex, Opp V.J Patel Vegetable Market, Deesa, Banaskantha - 385535",
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
    footer_desc: "Megayug Global 是一家优质的农产品出口商。我们代表了印度农业传统的巅峰。",
    footer_quick_links: "快速导航",
    footer_products: "我们的产品",
    footer_contact: "联系采购台",
    footer_rights: "版权所有。",
    footer_terms: "贸易条款",
    footer_privacy: "隐私政策"
  }
};

// ── PRODUCTS DATA ──
const productsData = [
  // SPICES
  { id: "turmeric", category: "spices", name: "Turmeric", desc: "Golden-yellow, aromatic spice available as whole fingers or ground powder. Sourced from high-curcumin farming belts.", tags: ["finger", "powder", "high-curcumin"], image: "products/turmeric.png" },
  { id: "red_chilli", category: "spices", name: "Red Chilli", desc: "Vibrant red and fiery, offered as stemless/with-stem whole pods or finely ground powder of varying heat levels.", tags: ["whole", "powder", "stemless"], image: "products/red-chilli.png" },
  { id: "cumin", category: "spices", name: "Cumin Seeds", desc: "Highly aromatic seeds with deep earthy flavor, available in whole premium grade seeds and fresh ground powder.", tags: ["whole", "powder", "earthy"], image: "products/cumin.png" },
  { id: "coriander", category: "spices", name: "Coriander", desc: "Sweet, citrusy flavor profile. Offered in uniform whole seeds or premium, finely milled spice powder.", tags: ["whole", "powder", "premium"], image: "products/coriander.png" },
  { id: "fennel", category: "spices", name: "Fennel Seeds", desc: "Sweet, licorice-like aroma. Excellent digestant and culinary flavoring, available whole or ground.", tags: ["whole", "powder", "aromatic"], image: "products/fennel.png" },
  { id: "black_pepper", category: "spices", name: "Black Pepper", desc: "Known as the King of Spices. Sourced from organic coastal farms, offered as whole peppercorns or cracked powder.", tags: ["whole", "powder", "coarse"], image: "products/black-pepper.png" },
  { id: "cardamom", category: "spices", name: "Cardamom", desc: "Premium green and black cardamom pods, sorted by size (7mm-8mm+) for intense sweet-spicy aroma.", tags: ["green", "black", "pods"], image: "products/cardamom.png" },
  { id: "fenugreek", category: "spices", name: "Fenugreek", desc: "Bitter-sweet seeds loaded with health benefits, used whole in tempering or grounded for spice mixtures.", tags: ["whole", "powder", "medicinal"], image: "products/fenugreek.png" },
  { id: "cloves", category: "spices", name: "Cloves", desc: "Fully grown, dried flower buds with high essential oil content, intense aroma, and warm spicy flavor.", tags: ["whole", "high-oil"], image: "products/cloves.png" },
  { id: "cinnamon", category: "spices", name: "Cinnamon", desc: "Premium rolls (quills) or ground powder with a delicate, sweet-spicy flavor profile.", tags: ["quills", "powder", "organic"], image: "products/cinnamon.png" },
  { id: "nutmeg", category: "spices", name: "Nutmeg", desc: "Whole oval nutmeg seeds and ground powder, rich in volatile oils for baking and spice blends.", tags: ["whole", "powder", "nutty"], image: "products/nutmeg.png" },
  { id: "bay_leaves", category: "spices", name: "Bay Leaves", desc: "Carefully shade-dried aromatic bay leaves with robust green color and distinct herbal fragrance.", tags: ["dried", "whole"], image: "products/bay-leaves.png" },
  { id: "ginger_powder", category: "spices", name: "Ginger Powder", desc: "Finely ground dry ginger (Sonth) with strong pungent heat and medicinal stomach-soothing qualities.", tags: ["ground", "dry-ginger"], image: "products/ginger-powder.png" },
  { id: "garlic_powder", category: "spices", name: "Garlic Powder", desc: "Dehydrated garlic cloves ground into fine aromatic powder. Dissolves easily, adding deep savory flavor.", tags: ["ground", "dehydrated"], image: "products/garlic-powder.png" },
  { id: "onion_powder", category: "spices", name: "Onion Powder", desc: "Premium dehydrated white and red onions processed into free-flowing powder with sweet, savory taste.", tags: ["ground", "free-flowing"], image: "products/onion-powder.png" },
  { id: "curry_powder", category: "spices", name: "Curry Powder", desc: "Proprietary spice blend containing turmeric, coriander, cumin, fenugreek, and warm spices in golden ratio.", tags: ["blend", "premium-grade"], image: "products/curry-powder.png" },

  // SEEDS
  { id: "sesame_seeds", category: "seeds", name: "Sesame Seeds", desc: "Rich in healthy oils. Offered in natural golden, premium mechanically hulled, and pure deep black variants.", tags: ["natural", "hulled", "black"], image: "products/sesame-seeds.png" },
  { id: "flax_seeds", category: "seeds", name: "Flax Seeds", desc: "Glossy brown seeds packed with Omega-3 fatty acids, fiber, and lignans. Ideal for healthy food formulations.", tags: ["brown", "omega-3", "clean"], image: "products/flax-seeds.png" },
  { id: "chia_seeds", category: "seeds", name: "Chia Seeds", desc: "Premium black and white chia seeds, highly hydrophilic. Rich source of protein and essential minerals.", tags: ["black", "white", "superfood"], image: "products/chia-seeds.png" },
  { id: "psyllium_seeds", category: "seeds", name: "Psyllium Seeds", desc: "High-mucilage plantago ovata seeds and processed psyllium husk, ideal for dietary fibers and digestive health.", tags: ["seeds", "husk", "digestive"], image: "products/psyllium-seeds.png" },
  { id: "quinoa_seeds", category: "seeds", name: "Quinoa Seeds", desc: "Saponin-free, thoroughly washed white, red, and black quinoa. A complete plant-based protein grain seed.", tags: ["white", "red", "black"], image: "products/quinoa-seeds.png" },
  { id: "amaranth_seeds", category: "seeds", name: "Amaranth Seeds", desc: "Gluten-free, highly nutritious ancient grain seeds, sorted and processed for snacks and flour blends.", tags: ["gluten-free", "ancient-grain"], image: "products/amaranth-seeds.png" },

  // PULSES AND GRAINS
  { id: "chickpeas", category: "pulses", name: "Chickpeas (Kabuli)", desc: "Premium white chickpeas (Kabuli) graded by count size (75-80, 42-44, etc.) with high protein content.", tags: ["kabuli", "whole", "white"], image: "products/chickpeas.png" },
  { id: "chickpeas_splits", category: "pulses", name: "Chickpeas Splits (Chana Dal)", desc: "Polished and unpolished split desi chickpeas, rich in protein, cleaned of all physical impurities.", tags: ["splits", "chana-dal"], image: "products/chickpeas-splits.png" },
  { id: "green_moong", category: "pulses", name: "Green Moong (Whole)", desc: "Shiny, bold green mung beans with high germination rate and rich nutritional value.", tags: ["whole", "green"], image: "products/green-moong.png" },
  { id: "green_moong_splits", category: "pulses", name: "Green Moong Splits (Moong Dal)", desc: "Dehusked yellow split and green split moong dal, easy to digest and quick cooking.", tags: ["splits", "yellow", "green"], image: "products/green-moong-splits.png" },
  { id: "black_gram", category: "pulses", name: "Black Gram (Urad Whole)", desc: "Whole black gram (Urad) seeds, key ingredient for traditional foods and rich source of plant protein.", tags: ["whole", "urad"], image: "products/black-gram.png" },
  { id: "black_gram_splits", category: "pulses", name: "Black Gram Splits (Urad Dal)", desc: "Split dehusked white urad dal and split black urad dal, thoroughly sorted and cleaned.", tags: ["splits", "white", "black"], image: "products/black-gram-splits.png" },
  { id: "pigeon_peas", category: "pulses", name: "Pigeon Peas (Toor Dal)", desc: "Premium split yellow pigeon peas (Arhar/Toor Dal), oily and non-oily varieties available.", tags: ["splits", "toor-dal", "yellow"], image: "products/pigeon-peas.png" },
  { id: "peanuts", category: "pulses", name: "Peanuts (Groundnuts)", desc: "Bold and Java peanut kernels sorted by count (38/42, 40/50, 50/60, etc.) with high oil yield.", tags: ["bold", "java", "kernels"], image: "products/peanuts.png" }
];

// ── DOM ELEMENTS & GLOBAL STATE ──
let currentLang = "en";
let activeCategory = "spices";

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
    updateActiveNavLink();
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
  if (typeof gsap === "undefined") return;
  const flyer = document.querySelector(".hero-flyer");
  if (!flyer) return;

  // Split the giant ghost text into individual letters for staggering
  const ghost = document.querySelector(".hero-ghost");
  if (ghost) {
    const letters = ghost.textContent.trim().split("");
    ghost.innerHTML = letters
      .map(l => `<span class="ghost-letter">${l}</span>`)
      .join("");
  }

  // Initial hidden states
  gsap.set(".hero-content > *", { opacity: 0, y: 34 });
  gsap.set(".hero-glass-card", { opacity: 0, y: 46, scale: 0.92 });
  gsap.set(".hero-users-pill", { opacity: 0, x: 40 });

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // 1. The bowl of chillies flies in from off-screen with motion blur
  tl.fromTo(
    flyer,
    {
      xPercent: -170,
      yPercent: -55,
      rotation: -22,
      scale: 1.28,
      opacity: 0,
      filter: "blur(24px)",
    },
    {
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.7,
      ease: "power4.out",
    },
    0.15
  )
    // 2. Ghost "MEGAYUG" letters materialise behind it
    .fromTo(
      ".ghost-letter",
      { opacity: 0, y: 60, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, stagger: 0.07 },
      0.55
    )
    // 3. Copy block staggers in
    .to(".hero-content > *", { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }, 1.0)
    // 4. Glass cards pop in
    .to(
      ".hero-glass-card",
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.14, ease: "back.out(1.4)" },
      1.25
    )
    // 5. Markets pill slides in
    .to(".hero-users-pill", { opacity: 1, x: 0, duration: 0.7 }, 1.55);

  // Continuous gentle float (like the bird hovering)
  gsap.to(flyer, {
    y: -14,
    duration: 3.2,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    delay: 2.1,
  });

  // Scroll parallax: bowl drifts down, ghost text drifts up
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".hero-flyer-wrap", {
      yPercent: 16,
      ease: "none",
      scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true },
    });
    gsap.to(".hero-ghost", {
      yPercent: -30,
      opacity: 0.25,
      ease: "none",
      scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true },
    });
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
    id: "cinnamon",
    name: "CINNAMON STICKS",
    category: "Premium Spices • Authentic Quality",
    image: "products/cinnamon.png",
    spec: "Moisture: <12% | Volatile Oil: >1.5%"
  },
  {
    id: "sesame_seeds",
    name: "SESAME SEEDS",
    category: "Nutritious Seeds • Export Standard",
    image: "products/sesame-seeds.png",
    spec: "Purity: >99.9% | Admixture: <0.05%"
  },
  {
    id: "chickpeas",
    name: "KABULI CHICKPEAS",
    category: "Nutritious Pulses • High Protein",
    image: "products/chickpeas.png",
    spec: "Size: 8-9mm (75-80 Count/Oz) | Admixture: <1%"
  },
  {
    id: "green_moong_splits",
    name: "GREEN MOONG SPLITS",
    category: "Nutritious Grains & Pulses • Cleaned",
    image: "products/green-moong-splits.png",
    spec: "Splits Proportion: >95% | Foreign Matter: <0.5%"
  },
  {
    id: "ginger_powder",
    name: "GINGER POWDER",
    category: "Premium Spices • Ground & Dehydrated",
    image: "products/ginger-powder.png",
    spec: "Mesh Size: 60-80 | Total Ash: <8%"
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
let sliderCurrentIndex = 0;

function initProductsSlider() {
  const prevBtn = document.getElementById("sliderPrev");
  const nextBtn = document.getElementById("sliderNext");
  const track = document.getElementById("productsSliderTrack");
  const dotsContainer = document.getElementById("sliderDots");

  if (!prevBtn || !nextBtn || !track || !dotsContainer) return;

  function getCardsPerPage() {
    if (window.innerWidth <= 580) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 4;
  }

  function updateSlider() {
    const cards = track.querySelectorAll(".product-card");
    const cardsPerPage = getCardsPerPage();
    const totalCards = cards.length;
    
    // Max index is totalCards - cardsPerPage
    const maxIndex = Math.max(0, totalCards - cardsPerPage);
    if (sliderCurrentIndex > maxIndex) {
      sliderCurrentIndex = maxIndex;
    }
    if (sliderCurrentIndex < 0) {
      sliderCurrentIndex = 0;
    }

    if (cards.length > 0) {
      const cardWidth = cards[0].offsetWidth;
      const gap = 30;
      const translateX = sliderCurrentIndex * (cardWidth + gap);
      track.style.transform = `translateX(-${translateX}px)`;
    }

    // Render Dots
    dotsContainer.innerHTML = "";
    const totalDots = Math.max(1, totalCards - cardsPerPage + 1);
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement("div");
      dot.className = `slider-dot ${i === sliderCurrentIndex ? 'active' : ''}`;
      dot.addEventListener("click", () => {
        sliderCurrentIndex = i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    }

    // Enable/disable arrows
    prevBtn.style.opacity = sliderCurrentIndex === 0 ? "0.3" : "1";
    prevBtn.style.pointerEvents = sliderCurrentIndex === 0 ? "none" : "auto";
    
    nextBtn.style.opacity = sliderCurrentIndex === maxIndex ? "0.3" : "1";
    nextBtn.style.pointerEvents = sliderCurrentIndex === maxIndex ? "none" : "auto";
  }

  prevBtn.addEventListener("click", () => {
    sliderCurrentIndex--;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    sliderCurrentIndex++;
    updateSlider();
  });

  window.addEventListener("resize", () => {
    updateSlider();
  });

  window.updateProductsSlider = updateSlider;
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
    document.getElementById("sliderPrev").style.opacity = "0";
    document.getElementById("sliderPrev").style.pointerEvents = "none";
    document.getElementById("sliderNext").style.opacity = "0";
    document.getElementById("sliderNext").style.pointerEvents = "none";
    document.getElementById("sliderDots").innerHTML = "";
    return;
  }

  // Show navigation arrows
  document.getElementById("sliderPrev").style.opacity = "1";
  document.getElementById("sliderPrev").style.pointerEvents = "auto";
  document.getElementById("sliderNext").style.opacity = "1";
  document.getElementById("sliderNext").style.pointerEvents = "auto";

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

  sliderCurrentIndex = 0;
  if (window.updateProductsSlider) {
    window.updateProductsSlider();
  }
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
  if (product) {
    if (product.category === "spices") categorySelect.value = "spices";
    else if (product.category === "seeds") categorySelect.value = "seeds";
    else if (product.category === "pulses") categorySelect.value = "pulses";
  }

  messageArea.value = `Hello, I'm interested in importing Megayug Global's premium "${productName}". Please send me pricing specification, packing sizes, and details.`;

  // Smooth scroll to inquiry form
  inquirySection.scrollIntoView({ behavior: "smooth" });
}

// ── REVEAL ON SCROLL ANIMATIONS ──
function initRevealAnimations() {
  const reveals = document.querySelectorAll("[data-reveal]");

  const revealOnScroll = () => {
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger initial
}