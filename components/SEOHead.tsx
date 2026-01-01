import React from 'react';

interface SEOHeadProps {
    title: string;
    description: string;
    keywords?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: 'website' | 'article' | 'product';
    articlePublishedTime?: string;
    productPrice?: string;
    productCurrency?: string;
}

/**
 * SEO Head Component
 * Updates document head with SEO meta tags
 * Usage: Place at top of any page component
 */
const SEOHead: React.FC<SEOHeadProps> = ({
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage = '/images/Chakri.jpg',
    ogType = 'website',
    articlePublishedTime,
    productPrice,
    productCurrency = 'INR'
}) => {
    React.useEffect(() => {
        // Update document title
        document.title = title;

        // Helper to update/create meta tag
        const updateMeta = (name: string, content: string, isProperty = false) => {
            const attr = isProperty ? 'property' : 'name';
            let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute(attr, name);
                document.head.appendChild(meta);
            }
            meta.content = content;
        };

        // Helper to update/create link tag
        const updateLink = (rel: string, href: string) => {
            let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
            if (!link) {
                link = document.createElement('link');
                link.rel = rel;
                document.head.appendChild(link);
            }
            link.href = href;
        };

        // Basic meta tags
        updateMeta('description', description);
        if (keywords) updateMeta('keywords', keywords);
        updateMeta('robots', 'index, follow');
        updateMeta('author', 'Anjaliben Chakriwala');

        // Open Graph tags
        updateMeta('og:title', title, true);
        updateMeta('og:description', description, true);
        updateMeta('og:type', ogType, true);
        updateMeta('og:image', `https://anjalibenchakriwala.com${ogImage}`, true);
        updateMeta('og:site_name', "Anjaliben Chakriwala", true);
        updateMeta('og:locale', 'en_IN', true);

        // Twitter Card tags
        updateMeta('twitter:card', 'summary_large_image');
        updateMeta('twitter:title', title);
        updateMeta('twitter:description', description);
        updateMeta('twitter:image', `https://anjalibenchakriwala.com${ogImage}`);

        // Canonical URL
        if (canonicalUrl) {
            updateLink('canonical', canonicalUrl);
            updateMeta('og:url', canonicalUrl, true);
        }

        // Article specific
        if (articlePublishedTime) {
            updateMeta('article:published_time', articlePublishedTime, true);
        }

        // Product specific
        if (productPrice) {
            updateMeta('product:price:amount', productPrice, true);
            updateMeta('product:price:currency', productCurrency, true);
        }

        // Geo targeting for India
        updateMeta('geo.region', 'IN');
        updateMeta('geo.placename', 'India');

    }, [title, description, keywords, canonicalUrl, ogImage, ogType, articlePublishedTime, productPrice, productCurrency]);

    return null;
};

export default SEOHead;
