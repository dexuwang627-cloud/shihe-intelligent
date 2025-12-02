import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = '世和智能 | 綠能光儲與智慧農業專家';
    const defaultDescription = '世和智能提供全方位的綠能光儲、機電工程、EMS能源管理系統、碳盤查顧問及智慧農業解決方案。我們致力於協助企業達成淨零碳排目標，創造永續價值。';
    const defaultKeywords = '綠能, 太陽能, 儲能, EMS, 能源管理, 機電工程, 智慧農業, 碳盤查, ESG, 淨零碳排';
    const defaultImage = '/photos/logo.svg';
    const siteUrl = 'https://shiheintelligent.com';

    const fullTitle = title ? `${title} | 世和智能` : siteTitle;
    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
    const fullImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;

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

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={fullImage} />

            {/* Geo Targeting (Taiwan/Taipei) */}
            <meta name="geo.region" content="TW-TPE" />
            <meta name="geo.placename" content="Taipei" />
            <meta name="geo.position" content="25.0330;121.5654" />
            <meta name="ICBM" content="25.0330, 121.5654" />
        </Helmet>
    );
};

export default SEO;
