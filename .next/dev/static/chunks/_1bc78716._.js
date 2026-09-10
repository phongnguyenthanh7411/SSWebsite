(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/context/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "translations",
    ()=>translations,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const translations = {
    vi: {
        nav: {
            home: 'Trang chủ',
            products: 'Sản phẩm',
            team: 'Đội ngũ',
            faqs: 'Hỏi đáp',
            contact: 'Liên hệ'
        },
        common: {
            exploreNow: 'Khám phá ngay',
            ourDemo: 'Xem Demo',
            learnMore: 'Tìm hiểu thêm',
            details: 'Chi tiết',
            contactUs: 'Liên hệ tư vấn',
            live: 'HOẠT ĐỘNG',
            encrypted: 'MÃ HÓA',
            verified: 'ĐÃ XÁC THỰC',
            allRightsReserved: 'Bảo lưu mọi quyền.'
        },
        hero: {
            badge: 'ĐỐI TÁC CÔNG NGHỆ TOÀN DIỆN',
            title: 'Full-Stack Technology & AI Solutions Partner',
            subtitle: 'Phát triển phần mềm Full-Stack toàn diện, hệ thống backend chịu tải cao, kiến trúc dữ liệu hiện đại, BI và giải pháp AI doanh nghiệp bạn hoàn toàn có thể tin cậy.',
            explore: 'Khám phá ngay',
            demo: 'Xem Demo',
            flowBadge: 'Hệ sinh thái công nghệ',
            flowTitle: 'Full-Stack Technology Matrix Architecture',
            flowSeeAll: 'Xem chi tiết 5 trụ cột →'
        },
        soul: {
            badge: 'TRIẾT LÝ & GIÁ TRỊ CỐT LÕI',
            title: 'Our Soul & Strategic Vision',
            subtitle: 'Định hình tương lai doanh nghiệp bằng công nghệ Full-Stack chuẩn mực, nền tảng dữ liệu vững chãi và trách nhiệm đồng hành bền bỉ.',
            missionTitle: 'Our Mission',
            missionSub: 'Sứ mệnh đồng hành',
            missionText: 'Với sứ mệnh trao quyền cho doanh nghiệp bằng công nghệ Full-Stack hiện đại, kiến trúc dữ liệu hiệu năng cao và các bộ công cụ AI thông minh, đồng hành cùng sự phát triển bền vững của doanh nghiệp.',
            visionTitle: 'Our Vision',
            visionSub: 'Tầm nhìn chiến lược',
            visionText: 'Trở thành đối tác công nghệ hàng đầu cung cấp giải pháp kỹ thuật phần mềm Full-Stack toàn diện, nền tảng dữ liệu vững chắc và các giải pháp AI doanh nghiệp tiên tiến.',
            valuesTitle: 'Nguyên Tắc DNA Cốt Lõi SIGMA',
            missionPills: [
                '⚡ Kiến trúc Full-Stack',
                '🧠 Trí tuệ nhân tạo AI',
                '📊 Nền tảng Dữ liệu'
            ],
            visionPills: [
                '🌐 Dẫn đầu Kỹ thuật',
                '🛡️ Bảo mật Tuyệt đối',
                '🚀 Giá trị Bền vững'
            ],
            valS: {
                title: 'atisfaction',
                tag: 'Khách hàng là trọng tâm',
                desc: 'Chúng tôi luôn làm việc bằng tất cả tâm huyết và nỗ lực để mang lại sự hài lòng cao nhất cho khách hàng khi sử dụng dịch vụ.'
            },
            valI: {
                title: 'ntegrity',
                tag: 'Chính trực tuyệt đối',
                desc: 'Trung thực và minh bạch trong mọi kế hoạch và giải pháp để mang lại lợi ích tối ưu nhất cho khách hàng.'
            },
            valG: {
                title: 'rowth',
                tag: 'Đổi mới liên tục',
                desc: 'Không ngừng phát triển, nghiên cứu và nâng cấp công nghệ để mang lại giá trị ngày càng vượt trội.'
            },
            valM: {
                title: 'indful',
                tag: 'Cân nhắc kỹ lưỡng',
                desc: 'Cân nhắc thấu đáo và sâu sắc trong từng quyết định kỹ thuật để đảm bảo kết quả tốt nhất cho khách hàng.'
            },
            valA: {
                title: 'fter-Service',
                tag: 'Đồng hành bền bỉ',
                desc: 'Nỗ lực đồng hành bền bỉ không chỉ trong quá trình triển khai dự án mà bất cứ khi nào khách hàng cần.'
            }
        },
        whyUs: {
            badge: 'LỢI THẾ CẠNH TRANH',
            title: 'Why Choose Us?',
            subtitle: 'Kiến trúc phần mềm chuẩn tương lai, phân tích dữ liệu siêu tốc và an ninh tối mật dành riêng cho doanh nghiệp phát triển bền vững.',
            speedy: 'Speedy',
            speedySub: 'Tốc độ & Phản hồi tức thì',
            speedyDesc: 'Chúng tôi tối ưu hóa quy trình và chuẩn hóa dữ liệu để chuyển giao báo cáo đến khách hàng và nhà quản trị siêu tốc, giúp đưa ra quyết định dựa trên dữ liệu kịp thời.',
            speedyMetric: '⚡ Tăng tốc 10x hiệu năng',
            accuracy: 'Accuracy',
            accuracySub: 'Chính xác & Chuẩn hóa ACID',
            accuracyDesc: 'Độ chính xác dữ liệu trong quá trình xây dựng và chuẩn hóa là nguyên tắc tối thượng, giúp các nhà quản trị đánh giá và thực thi kế hoạch chính xác tuyệt đối.',
            accuracyMetric: '🎯 Độ chính xác 99.99%',
            insightful: 'Insightful',
            insightfulSub: 'Trí tuệ AI & Quyết định sâu',
            insightfulDesc: 'Bên cạnh việc chuẩn hóa và báo cáo, chúng tôi chú trọng phân tích chỉ số kinh doanh cốt lõi, gợi mở insight chuyên sâu giúp doanh nghiệp có góc nhìn toàn diện.',
            insightfulMetric: '📈 Trí tuệ Thời gian thực',
            safety: 'Safety',
            safetySub: 'Bảo mật & Chủ quyền dữ liệu',
            safetyDesc: 'Ưu tiên số một của chúng tôi là xây dựng cơ sở dữ liệu với tiêu chuẩn an ninh cao nhất, bảo mật tuyệt đối thông tin và mang lại sự an tâm trọn vẹn cho khách hàng.',
            safetyMetric: '🛡️ Không rò rỉ dữ liệu'
        },
        metrics: {
            badge: 'VIỄN TRẮC & THÀNH TÍCH',
            title: 'Performance Metrics & Impact',
            subtitle: 'Những con số thực tế chứng minh hiệu năng và độ tin cậy của các giải pháp công nghệ chúng tôi xây dựng.',
            clients: 'Our Clients',
            clientsSub: 'Đối tác doanh nghiệp',
            deployments: 'Apps Deployment',
            deploymentsSub: 'Hệ thống đã triển khai',
            users: 'Active Users',
            usersSub: 'Người dùng trực tiếp',
            transactions: 'Daily Transactions',
            transactionsSub: 'Giao dịch mỗi ngày'
        },
        footer: {
            hqTitle: 'TRỤ SỞ HOẠT ĐỘNG',
            address: 'Ho Chi Minh City, VIET NAM',
            addressSub: 'Khu vực: Việt Nam & Đông Nam Á',
            companyBio: 'Đối tác công nghệ toàn diện cung cấp giải pháp kỹ thuật phần mềm Full-Stack, Kiến trúc Dữ liệu, BI Hiện đại và Trí tuệ Nhân tạo doanh nghiệp an toàn, chuẩn tương lai.',
            email: 'EMAIL LIÊN HỆ',
            emailSub: 'Tư vấn báo giá & giải pháp',
            hotline: 'HOTLINE HỖ TRỢ',
            hotlineSub: 'Hỗ trợ kỹ thuật 24/7',
            sla: 'TIÊU CHUẨN DOANH NGHIỆP',
            slaSub: 'Bảo Mật & SLA 99.9%',
            slaDesc: 'Kiến trúc an toàn dữ liệu nội bộ',
            taxCode: '079212300631',
            taxLabel: 'Mã số thuế: 079212300631',
            rights: '© 2026 Sigma Solution Company Limited. Bảo lưu mọi quyền.',
            operational: 'Sigma Core • Hệ thống vận hành ổn định'
        },
        faqs: {
            badge: 'TRUNG TÂM TRI THỨC // GIAO THỨC TRUY VẤN',
            title: 'Everything You Need to Know',
            subtitle: 'Giải đáp chi tiết về công nghệ, quy trình triển khai, cam kết bảo mật và hỗ trợ kỹ thuật tại Sigma Solution.',
            all: 'Tất cả câu hỏi',
            architecture: 'Kiến trúc & Công nghệ',
            security: 'Bảo mật & Quyền riêng tư AI',
            deployment: 'Triển khai & Cam kết SLA',
            onboarding: 'Đào tạo & Chuyển giao',
            directLine: '[ KÊNH HỖ TRỢ KỸ THUẬT TRỰC TIẾP ]',
            askPrompt: 'Bạn có câu hỏi riêng về bài toán công nghệ của doanh nghiệp?',
            askSub: 'Đội ngũ kỹ sư trưởng và chuyên gia dữ liệu của Sigma Solution luôn sẵn sàng tư vấn trực tiếp và demo giải pháp kỹ thuật cụ thể.',
            btnContact: 'Liên hệ tư vấn kỹ thuật'
        },
        contact: {
            badge: 'GIAO THỨC TIẾP NHẬN // KÊNH TRỰC TIẾP',
            title: 'Connect With Our Team',
            subtitle: 'Sẵn sàng lắng nghe yêu cầu bài toán, tư vấn kiến trúc công nghệ Full-Stack, giải pháp dữ liệu và triển khai AI chuyên sâu cho doanh nghiệp của bạn.',
            sla1: '⚡ Phản hồi trong 2 giờ',
            sla2: '🛡️ Bảo mật tuyệt đối & Ký kết NDA',
            sla3: '🎯 Tư vấn kiến trúc miễn phí',
            terminalTitle: '[ TRANSMISSION TERMINAL // NEW QUERY ]',
            name: '[01] Họ và tên',
            namePlaceholder: 'Họ và tên của bạn',
            emailLabel: '[02] Địa chỉ Email',
            company: '[03] Tên Doanh nghiệp / Tổ chức',
            companyPlaceholder: 'Tên công ty đại diện',
            subject: '[04] Chủ đề bài toán',
            subjectPlaceholder: 'Chủ đề / Bài toán cần tư vấn',
            message: '[05] Yêu cầu kỹ thuật / Lời nhắn',
            messagePlaceholder: 'Mô tả sơ lược về nhu cầu bài toán, quy mô dữ liệu, thời gian mong muốn...',
            submitBtn: 'GỬI YÊU CẦU TƯ VẤN // TRANSMIT QUERY',
            submitting: 'ĐANG TRUYỀN DỮ LIỆU...',
            channelsTitle: '[ DIRECT DISPATCH // HOT CHANNELS ]',
            hotlineLabel: 'Hotline Tư Vấn Trực Tiếp 24/7',
            emailLabelContact: 'Email Tiếp Nhận Hồ Sơ & Dự Án',
            clockLabel: 'Thời Gian Hoạt Động (SLA Support)',
            clockHours: 'Thứ Hai – Thứ Bảy: 09:00 – 18:00 (GMT+7)',
            clockSub: 'Hỗ trợ sự cố kỹ thuật 24/7',
            mapTitle: 'HO CHI MINH CITY // HEADQUARTERS',
            mapSub: 'Ho Chi Minh City, Viet Nam • Trụ sở điều hành kỹ thuật'
        },
        matrix: {
            tag: 'Hệ sinh thái công nghệ',
            title: 'Full-Stack Technology Matrix',
            desc: 'Chúng tôi cung cấp giải pháp công nghệ toàn diện và đa tầng, từ nền tảng lưu trữ dữ liệu an toàn, hệ thống Backend hiệu năng cao, giao diện Frontend mượt mà, cho đến các giải pháp AI thế hệ mới và Business Intelligence chuyên sâu.',
            dbSub: 'Lưu trữ & Quản trị dữ liệu',
            beSub: 'API & Xử lý logic tải cao',
            feSub: 'Web hiện đại & Di động',
            aiSub: 'Trí tuệ nhân tạo & LLMs',
            biSub: 'Trực quan hóa & Tự động hóa',
            details: 'Chi tiết'
        },
        flow: {
            dbText1: 'SQL Server, PostgreSQL - chuẩn hóa ACID, giao dịch an toàn',
            dbText2: 'NoSQL tài liệu, in-memory cache hiệu năng cao & nhúng',
            beText1: 'Golang tải cao, C# / .NET doanh nghiệp, Node.js bất đồng bộ',
            beText2: 'API bất đồng bộ tốc độ cao, cầu nối dữ liệu và xử lý mô hình AI',
            feText1: 'Giao diện người dùng hiện đại, chuẩn SEO, responsive linh hoạt',
            feText2: 'Ứng dụng di động iOS/Android mượt mà và Progressive Web Apps',
            aiText1: 'Mô hình LLM thương mại hàng đầu & Private Local AI trên máy chủ nội bộ',
            aiText2: 'RAG hỏi đáp tài liệu doanh nghiệp, Agent tự động hóa thông minh',
            biText1: 'Power BI theo dõi KPI, Power Automate xử lý quy trình, SharePoint',
            biText2: 'Ứng dụng trực quan hóa phân tích khoa học dữ liệu bằng Python'
        },
        pillars: {
            p1Sub: 'Hệ thống quản trị dữ liệu quan hệ ACID, NoSQL linh hoạt, bộ nhớ đệm In-Memory siêu tốc và cơ sở dữ liệu nhúng ngoại tuyến.',
            p2Sub: 'Khung kiến trúc microservices chịu tải cao, xử lý nghiệp vụ sạch sẽ chuẩn doanh nghiệp và API thời gian thực bất đồng bộ.',
            p3Sub: 'Giao diện web hiệu năng cao chuẩn SEO, ứng dụng di động Native 120 FPS và trải nghiệm tương tác mượt mà đa nền tảng.',
            p4Sub: 'Tích hợp mô hình ngôn ngữ lớn (LLM), AI On-Premise bảo mật tuyệt đối, RAG hỏi đáp tài liệu và Agent tự động hóa thông minh.',
            p5Sub: 'Trực quan hóa chỉ số kinh doanh thông minh, tự động hóa quy trình RPA và ứng dụng phân tích dữ liệu chuyên sâu.'
        },
        team: {
            ceo: {
                bio: "Chuyên gia Dữ liệu và Phân tích với hơn 10 năm kinh nghiệm thực chiến trong các lĩnh vực: Bán lẻ (Retail), Bất động sản (Real Estate), Thương mại điện tử và MLM tại các tập đoàn lớn như {companies}. Nhiều năm kinh nghiệm sử dụng các ngôn ngữ lập trình (Python, JavaScript,...), ngôn ngữ truy vấn (SQL) và các nền tảng báo cáo phân tích chuyên sâu (Excel, Power BI, SSRS, Streamlit, Plotly Dash). Trực tiếp lãnh đạo và triển khai các dự án xây dựng cơ sở dữ liệu lớn và hệ thống báo cáo tự động hóa cho doanh nghiệp.",
                companiesLabel: 'Tập đoàn & Doanh nghiệp đã đồng hành:',
                skillsLabel: 'Công nghệ & Năng lực chủ lực:'
            },
            cpo: {
                bio: "Kỹ sư Dữ liệu và Hệ thống (Data & System Engineer) với hơn 7 năm kinh nghiệm chuyên sâu trong phát triển kiến trúc hệ thống và xây dựng cơ sở dữ liệu lớn cho các tập đoàn đa quốc gia như {companies}. Am hiểu sâu sắc quy trình tổng hợp, làm sạch, tối ưu hóa đường ống dữ liệu (ETL/ELT). Dày dặn kinh nghiệm quản lý và triển khai các mô hình dữ liệu cho tập đoàn sản xuất lớn, xây dựng báo cáo tự động hóa nhằm tối ưu hóa tối đa năng suất lao động cho doanh nghiệp.",
                companiesLabel: 'Tập đoàn & Doanh nghiệp đã đồng hành:',
                skillsLabel: 'Công nghệ & Năng lực chủ lực:'
            },
            sd: {
                bio: "Chuyên gia trong lĩnh vực kinh doanh chiến lược với nhiều năm kinh nghiệm quản trị và phát triển các dự án công nghệ cho nhiều tập đoàn lớn trong các ngành {areas}. Có thế mạnh vượt trội trong việc xây dựng và phát triển đội ngũ, thấu hiểu bài toán nghiệp vụ của khách hàng để tư vấn các giải pháp số hóa tối ưu nhất, đồng thời thiết lập mối quan hệ hợp tác chiến lược bền vững lâu dài.",
                areasLabel: 'Lĩnh vực & Mô hình chuyên sâu:',
                skillsLabel: 'Trọng tâm chiến lược & Cam kết:'
            },
            wwb: {
                badge: 'TRIẾT LÝ ĐỒNG HÀNH',
                title: 'What We Believe',
                subtitle: 'Những nguyên tắc tối thượng dẫn lối mọi quyết định kỹ thuật và mối quan hệ hợp tác chiến lược của chúng tôi.',
                valA: {
                    tag: 'Bình dân hóa công nghệ',
                    desc: 'Chúng tôi tin rằng mọi doanh nghiệp — bất kể quy mô — đều xứng đáng tiếp cận các giải pháp thông minh, hiện đại để tăng tốc tăng trưởng và mở khóa tiềm năng.'
                },
                valP1: {
                    tag: 'Giải pháp thực chất',
                    desc: 'Chúng tôi tin vào việc xây dựng sản phẩm giải quyết bài toán thực tế, không chỉ đơn thuần tạo ra tính năng.'
                },
                valT: {
                    tag: 'Minh bạch & Tin cậy',
                    desc: 'Chúng tôi tin vào sự minh bạch, tinh thần hợp tác và kiến tạo niềm tin qua từng tương tác.'
                },
                valV: {
                    tag: 'Giá trị thực tiễn',
                    desc: 'Chúng tôi tin rằng công nghệ chỉ thực sự ý nghĩa khi tạo ra giá trị đích thực cho con người.'
                },
                valP2: {
                    tag: 'Đồng hành dài lâu',
                    desc: 'Chúng tôi tin vào sự đồng hành — bởi đổi mới sáng tạo diễn ra nhanh hơn khi cùng lớn mạnh với khách hàng.'
                }
            }
        }
    },
    en: {
        nav: {
            home: 'Home',
            products: 'Our Products',
            team: 'Core Team',
            faqs: 'FAQs',
            contact: 'Contact Us'
        },
        common: {
            exploreNow: 'Explore Now',
            ourDemo: 'Our Demo',
            learnMore: 'Learn More',
            details: 'Details',
            contactUs: 'Contact Us',
            live: 'LIVE',
            encrypted: 'ENCRYPTED',
            verified: 'VERIFIED',
            allRightsReserved: 'All rights reserved.'
        },
        hero: {
            badge: 'FULL-STACK TECHNOLOGY & AI SOLUTIONS',
            title: 'Full-Stack Technology & AI Solutions Partner',
            subtitle: 'Comprehensive Full-Stack Development, High-Performance Backend, Modern Data Architecture, BI & Enterprise AI Solutions That You Can Absolutely Trust.',
            explore: 'Explore Now',
            demo: 'Our Demo',
            flowBadge: 'Technology Ecosystem',
            flowTitle: 'Full-Stack Technology Matrix Architecture',
            flowSeeAll: 'Explore 5 Pillars →'
        },
        soul: {
            badge: 'PHILOSOPHY & CORE VALUES',
            title: 'Our Soul & Strategic Vision',
            subtitle: 'Shaping the future of enterprises with standard Full-Stack engineering, robust data platforms, and dedicated long-term partnership.',
            missionTitle: 'Our Mission',
            missionSub: 'Active Commitment',
            missionText: 'With the mission to empower enterprises with modern Full-Stack technology, high-performance data architectures, and intelligent AI toolkits, accompanying sustainable business growth.',
            visionTitle: 'Our Vision',
            visionSub: 'Strategic Future',
            visionText: 'Become a premier technology partner delivering comprehensive Full-Stack software engineering, robust data platforms, and cutting-edge enterprise AI solutions.',
            valuesTitle: 'SIGMA Core DNA Principles',
            missionPills: [
                '⚡ Full-Stack Scalable',
                '🧠 Enterprise AI',
                '📊 Modern Data Platform'
            ],
            visionPills: [
                '🌐 Engineering Leader',
                '🛡️ Private & Secure',
                '🚀 Sustainable Value'
            ],
            valS: {
                title: 'atisfaction',
                tag: 'Customer-Centric',
                desc: 'We always work with all our heart and effort to bring customers the most satisfaction when using our services.'
            },
            valI: {
                title: 'ntegrity',
                tag: 'Zero-Compromise',
                desc: 'Honesty in all plans and solutions to bring the best benefits to customers.'
            },
            valG: {
                title: 'rowth',
                tag: 'Continuous Innovation',
                desc: 'Continuous development and improvement to deliver better value to our customers.'
            },
            valM: {
                title: 'indful',
                tag: 'Context-Aware',
                desc: 'Thoughtful consideration in every decision to ensure the best outcomes for our clients.'
            },
            valA: {
                title: 'fter-Service',
                tag: '24/7 Reliability',
                desc: 'Our consistent efforts are not only during the service implementation but also whenever our customers need us.'
            }
        },
        whyUs: {
            badge: 'COMPETITIVE ADVANTAGES',
            title: 'Why Choose Us?',
            subtitle: 'Future-ready software architecture, lightning-fast data analytics, and top-tier enterprise security.',
            speedy: 'Speedy',
            speedySub: 'Sub-second Latency',
            speedyDesc: 'We build processes and standardize data so that reporting is delivered to our customers, analysts and administrators at speed, enabling them to take timely data-driven actions and reactions.',
            speedyMetric: '⚡ 10x Performance Boost',
            accuracy: 'Accuracy',
            accuracySub: 'ACID Standardization',
            accuracyDesc: 'Data accuracy in construction and standardization as a mandatory attribute for managers and analysts. From there, it helps managers and analysts evaluate and execute plans accurately.',
            accuracyMetric: '🎯 99.99% Data Precision',
            insightful: 'Insightful',
            insightfulSub: 'AI & Deep Analytics',
            insightfulDesc: 'In addition to helping our clients, analysts and administrators standardize and build reports, we also pay special attention to business indicators, suggesting additional insights to help clients have the most in-depth views.',
            insightfulMetric: '📈 Real-Time Intelligence',
            safety: 'Safety',
            safetySub: 'Zero Data Leakage',
            safetyDesc: 'One of our top priorities is helping customers build databases with the highest security, giving customers complete peace of mind when using our services.',
            safetyMetric: '🛡️ Zero Data Leakage'
        },
        metrics: {
            badge: 'TELEMETRY & TRACK RECORD',
            title: 'Performance Metrics & Impact',
            subtitle: 'Real-world numbers demonstrating the performance and reliability of the technology solutions we engineer.',
            clients: 'Our Clients',
            clientsSub: 'Enterprise Partners',
            deployments: 'Apps Deployment',
            deploymentsSub: 'Production Systems',
            users: 'Active Users',
            usersSub: 'Operator Seats',
            transactions: 'Daily Transactions',
            transactionsSub: 'Sub-second Processing'
        },
        footer: {
            hqTitle: 'HEADQUARTERS',
            address: 'Ho Chi Minh City, VIET NAM',
            addressSub: 'Region: APAC / Vietnam',
            companyBio: 'Comprehensive technology partner delivering Full-Stack software engineering, Data Architecture, Modern BI, and future-ready, secure Enterprise AI solutions.',
            email: 'OFFICIAL EMAIL',
            emailSub: 'Direct Technical Inquiries',
            hotline: 'PRIORITY HOTLINE',
            hotlineSub: '24/7 Technical Support',
            sla: 'ENTERPRISE STANDARD',
            slaSub: 'Security & 99.9% SLA',
            slaDesc: 'Private & secure internal data architecture',
            taxCode: '079212300631',
            taxLabel: 'Tax Code: 079212300631',
            rights: '© 2026 Sigma Solution Company Limited. All rights reserved.',
            operational: 'Sigma Core • All Systems Operational'
        },
        faqs: {
            badge: 'KNOWLEDGE BASE // QUERY PROTOCOL',
            title: 'Everything You Need to Know',
            subtitle: 'Detailed answers regarding technology, implementation timelines, security policies, and technical support.',
            all: 'All Queries',
            architecture: 'Architecture & Stack',
            security: 'Security & AI Privacy',
            deployment: 'Deployment & SLA',
            onboarding: 'Onboarding & Training',
            directLine: '[ DIRECT TECHNICAL LINE ]',
            askPrompt: 'Have specific technical questions regarding your business challenge?',
            askSub: 'Our chief architects and data experts are always ready to consult directly and demonstrate specific technical solutions.',
            btnContact: 'Schedule Technical Consultation'
        },
        contact: {
            badge: 'INTAKE PROTOCOL // DIRECT DISPATCH',
            title: 'Connect With Our Team',
            subtitle: "We're here to answer your questions, discuss your project, and help you find the best solutions for your software and data needs.",
            sla1: '⚡ 2-Hour Response Time',
            sla2: '🛡️ 100% Data Confidentiality & NDA',
            sla3: '🎯 Free Architecture Consultation',
            terminalTitle: '[ TRANSMISSION TERMINAL // NEW QUERY ]',
            name: '[01] Full Name',
            namePlaceholder: 'Your full name',
            emailLabel: '[02] Email Address',
            company: '[03] Organization',
            companyPlaceholder: 'Let us know who you represent',
            subject: '[04] Project Subject',
            subjectPlaceholder: "What's this about?",
            message: '[05] Technical Requirements / Message',
            messagePlaceholder: 'Tell us how we can help with your software, data or AI needs...',
            submitBtn: 'SEND MESSAGE // TRANSMIT QUERY',
            submitting: 'TRANSMITTING DATA...',
            channelsTitle: '[ DIRECT DISPATCH // HOT CHANNELS ]',
            hotlineLabel: '24/7 Priority Hotline',
            emailLabelContact: 'Official Project Inboxes',
            clockLabel: 'Working Hours (SLA Support)',
            clockHours: 'Monday – Saturday: 09:00 – 18:00 (GMT+7)',
            clockSub: '24/7 Technical Incident Response',
            mapTitle: 'HO CHI MINH CITY // HEADQUARTERS',
            mapSub: 'Ho Chi Minh City, Viet Nam • Engineering HQ'
        },
        matrix: {
            tag: 'Technology Ecosystem',
            title: 'Full-Stack Technology Matrix',
            desc: 'We deliver comprehensive, multi-tiered technology solutions, spanning robust data storage, high-throughput backend services, modern web/mobile interfaces, next-generation AI architectures, and enterprise business intelligence.',
            dbSub: 'Data Storage & Governance',
            beSub: 'APIs & High-Load Logic',
            feSub: 'Modern Web & Cross-Platform Mobile',
            aiSub: 'Artificial Intelligence & LLMs',
            biSub: 'BI Analytics & Process Automation',
            details: 'Details'
        },
        flow: {
            dbText1: 'SQL Server, PostgreSQL - ACID compliant, transactional safety',
            dbText2: 'Document NoSQL, high-throughput in-memory cache & embedded engines',
            beText1: 'High-concurrency Golang, enterprise C# / .NET, asynchronous Node.js',
            beText2: 'High-speed async APIs, data science bridge & AI model pipelines',
            feText1: 'Modern responsive UI, SEO optimized, high-performance web',
            feText2: 'Smooth native iOS/Android apps & Progressive Web Apps',
            aiText1: 'Frontier commercial LLMs & Private Local AI on on-premise GPUs',
            aiText2: 'Enterprise RAG knowledge base & autonomous multi-agent workflows',
            biText1: 'Power BI KPI analytics, Power Automate workflow RPA, SharePoint',
            biText2: 'Interactive Python data science & machine learning web dashboards'
        },
        pillars: {
            p1Sub: 'Relational ACID databases, flexible NoSQL, ultra-low latency in-memory cache, and offline-first embedded engines.',
            p2Sub: 'High-concurrency microservices, clean enterprise architectures, and real-time asynchronous APIs.',
            p3Sub: 'High-performance SEO web interfaces, 120 FPS native mobile apps, and fluid cross-platform UX.',
            p4Sub: 'Frontier LLM integrations, zero-leakage private on-premise AI, enterprise RAG, and autonomous agents.',
            p5Sub: 'Intelligent executive BI dashboards, robotic process automation (RPA), and deep data science apps.'
        },
        team: {
            ceo: {
                bio: "Data & Analytics expert with over 10 years of hands-on experience across Retail, Real Estate, E-commerce and MLM at leading corporations such as {companies}. Years of proficiency in programming languages (Python, JavaScript,...), SQL, and advanced reporting platforms (Excel, Power BI, SSRS, Streamlit, Plotly Dash). Directly leads large-scale database architecture and automated reporting system deployments.",
                companiesLabel: 'Corporations & enterprises we have partnered with:',
                skillsLabel: 'Core technologies & capabilities:'
            },
            cpo: {
                bio: "Data & System Engineer with over 7 years of specialized experience in systems architecture and large-scale data engineering for multinational corporations such as {companies}. Deep expertise in ETL/ELT orchestration, data cleansing, and pipeline optimization. Extensive track record deploying enterprise data models and automated reporting for global manufacturers to maximize operational productivity.",
                companiesLabel: 'Corporations & enterprises we have partnered with:',
                skillsLabel: 'Core technologies & capabilities:'
            },
            sd: {
                bio: "Strategic sales expert with years of experience managing and growing technology initiatives for major enterprises across {areas}. Outstanding at team building and development, deeply understanding client business challenges to advise optimal digitalization strategies while forging durable, long-term strategic partnerships.",
                areasLabel: 'Specialized domains & operating models:',
                skillsLabel: 'Strategic focus & commitments:'
            },
            wwb: {
                badge: 'SHARED PHILOSOPHY',
                title: 'What We Believe',
                subtitle: 'The guiding principles behind every engineering decision and strategic partnership we build.',
                valA: {
                    tag: 'Technology for everyone',
                    desc: 'We believe every business — no matter its size — deserves access to intelligent, modern solutions that accelerate growth and unlock new possibilities.'
                },
                valP1: {
                    tag: 'Solving real problems',
                    desc: 'We believe in building products that solve real problems, not just create features.'
                },
                valT: {
                    tag: 'Transparency & Trust',
                    desc: 'We believe in transparency, collaboration, and earning trust through every interaction.'
                },
                valV: {
                    tag: 'Practical value',
                    desc: 'We believe great technology only matters when it creates real value for real people.'
                },
                valP2: {
                    tag: 'Long-term partnership',
                    desc: 'We believe in partnership — because innovation happens faster when we grow together with our customers.'
                }
            }
        }
    }
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider({ children }) {
    _s();
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('vi');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            try {
                const savedLang = localStorage.getItem('sigma_language');
                if (savedLang === 'vi' || savedLang === 'en') {
                    setLanguageState(savedLang);
                }
            } catch  {
            // ignore
            }
        }
    }["LanguageProvider.useEffect"], []);
    const setLanguage = (lang)=>{
        setLanguageState(lang);
        try {
            localStorage.setItem('sigma_language', lang);
        } catch  {
        // ignore
        }
    };
    const toggleLanguage = ()=>{
        setLanguage(language === 'vi' ? 'en' : 'vi');
    };
    const t = translations[language];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            toggleLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/LanguageContext.tsx",
        lineNumber: 487,
        columnNumber: 5
    }, this);
}
_s(LanguageProvider, "AnRWCAeNc2bkwf0FTBDwzBbMucE=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_1bc78716._.js.map