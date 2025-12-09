import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = '世和智能 | 綠能光儲與智慧農業專家';
    const brandName = '世和智能 | Shi-He Intelligent';
    const isHome = title === '首頁' || !title;

    const defaultDescription = '世和智能提供全方位的綠能光儲、機電工程、EMS能源管理系統、碳盤查顧問及智慧農業解決方案。我們致力於協助企業達成淨零碳排目標，創造永續價值。';
    const defaultKeywords = '綠能, 太陽能, 儲能, EMS, 能源管理, 機電工程, 智慧農業, 碳盤查, ESG, 淨零碳排';
    const defaultImage = '/photos/logo.svg';
    const siteUrl = 'https://shiheintelligent.com';

    // If it's Home, just show the Brand Name (or Site Title if preferred, but user asked for "世和智能")
    // User specifically asked for "世和智能" not "世和智能：首頁"
    const fullTitle = isHome ? '世和智能' : `${title} | 世和智能`;

    // For open graph, we might still want a descriptive title
    const socialTitle = isHome ? siteTitle : fullTitle;

    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
    const fullImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;

    // Breadcrumb Schema Generator
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "首頁",
                "item": siteUrl
            },
            ...(url && !isHome ? [{
                "@type": "ListItem",
                "position": 2,
                "name": title,
                "item": fullUrl
            }] : [])
        ]
    };

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:locale" content="zh_TW" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={fullImage} />

            {/* Geo Targeting (Taiwan/Taoyuan) */}
            <meta name="geo.region" content="TW-TAO" />
            <meta name="geo.placename" content="Taoyuan, Zhongli" />
            <meta name="geo.position" content="24.9653;121.2248" />
            <meta name="ICBM" content="24.9653, 121.2248" />

            {/* Structured Data: Breadcrumb */}
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
