import React from 'react';

// Organization Schema for the brand
export const OrganizationSchema: React.FC = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Anjaliben Chakriwala",
        "alternateName": "Anjali's Chakriwala",
        "url": "https://anjalibenchakriwala.com",
        "logo": "https://anjalibenchakriwala.com/logo.png",
        "description": "Authentic homemade Gujarati snacks and traditional Indian namkeen. Handcrafted chakri, bhakharwadi, and more with PAN India delivery.",
        "foundingDate": "2020",
        "founder": {
            "@type": "Person",
            "name": "Anjali"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "telephone": "+91 84600 78518",
            "email": "anjalibenchakriwala@gmail.com",
            "availableLanguage": ["English", "Hindi", "Gujarati"]
        },
        "sameAs": [],
        "areaServed": {
            "@type": "Country",
            "name": "India"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// WebSite Schema with search action
export const WebSiteSchema: React.FC = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Anjaliben Chakriwala",
        "url": "https://anjalibenchakriwala.com",
        "description": "Buy authentic Gujarati snacks online. Traditional chakri, bhakharwadi, namkeen with PAN India delivery.",
        "publisher": {
            "@type": "Organization",
            "name": "Anjaliben Chakriwala"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// Product Schema
interface ProductSchemaProps {
    name: string;
    description: string;
    image: string;
    price: string;
    weight: string;
    ingredients: string;
    isJainFriendly?: boolean;
    slug: string;
}

export const ProductSchema: React.FC<ProductSchemaProps> = ({
    name,
    description,
    image,
    price,
    weight,
    ingredients,
    isJainFriendly = false,
    slug
}) => {
    const priceValue = price.replace('₹', '').trim();

    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${name} - Authentic Gujarati Snack`,
        "description": description,
        "image": `https://anjalibenchakriwala.com${image}`,
        "brand": {
            "@type": "Brand",
            "name": "Anjaliben Chakriwala"
        },
        "manufacturer": {
            "@type": "Organization",
            "name": "Anjaliben Chakriwala"
        },
        "offers": {
            "@type": "Offer",
            "url": `https://anjalibenchakriwala.com/products/${slug}`,
            "priceCurrency": "INR",
            "price": priceValue,
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "Anjaliben Chakriwala"
            },
            "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingDestination": {
                    "@type": "DefinedRegion",
                    "addressCountry": "IN"
                },
                "deliveryTime": {
                    "@type": "ShippingDeliveryTime",
                    "handlingTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 1,
                        "maxValue": 2,
                        "unitCode": "DAY"
                    },
                    "transitTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 3,
                        "maxValue": 7,
                        "unitCode": "DAY"
                    }
                }
            }
        },
        "weight": {
            "@type": "QuantitativeValue",
            "value": weight.replace('gm', ''),
            "unitCode": "GRM"
        },
        "additionalProperty": [
            {
                "@type": "PropertyValue",
                "name": "Ingredients",
                "value": ingredients
            },
            {
                "@type": "PropertyValue",
                "name": "Jain Friendly",
                "value": isJainFriendly ? "Yes" : "No"
            },
            {
                "@type": "PropertyValue",
                "name": "Vegetarian",
                "value": "Yes"
            }
        ],
        "category": "Food & Beverages > Snacks > Indian Snacks"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// Breadcrumb Schema
interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbSchemaProps {
    items: BreadcrumbItem[];
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// FAQ Schema
interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSchemaProps {
    faqs: FAQItem[];
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// Local Business Schema
export const LocalBusinessSchema: React.FC = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FoodEstablishment",
        "name": "Anjaliben Chakriwala",
        "image": "https://anjalibenchakriwala.com/logo.png",
        "url": "https://anjalibenchakriwala.com",
        "description": "Authentic homemade Gujarati snacks. Traditional chakri, bhakharwadi, namkeen made fresh with premium ingredients.",
        "servesCuisine": ["Indian", "Gujarati"],
        "priceRange": "₹70-₹150",
        "telephone": "+91 84600 78518",
        "email": "anjalibenchakriwala@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.1702",
            "longitude": "72.8311"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "21:00"
        },
        "hasMenu": {
            "@type": "Menu",
            "hasMenuSection": {
                "@type": "MenuSection",
                "name": "Traditional Snacks",
                "hasMenuItem": [
                    {
                        "@type": "MenuItem",
                        "name": "Chakri",
                        "description": "Traditional spiral snack with perfect seasoning"
                    },
                    {
                        "@type": "MenuItem",
                        "name": "Bhakharwadi",
                        "description": "Classic Gujarati snack with sweet and spicy filling"
                    }
                ]
            }
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// Article Schema for blog posts
interface ArticleSchemaProps {
    title: string;
    description: string;
    image: string;
    publishedDate: string;
    authorName?: string;
    url: string;
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
    title,
    description,
    image,
    publishedDate,
    authorName = "Anjaliben Chakriwala",
    url
}) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": `https://anjalibenchakriwala.com${image}`,
        "author": {
            "@type": "Person",
            "name": authorName
        },
        "publisher": {
            "@type": "Organization",
            "name": "Anjaliben Chakriwala",
            "logo": {
                "@type": "ImageObject",
                "url": "https://anjalibenchakriwala.com/logo.png"
            }
        },
        "datePublished": publishedDate,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
