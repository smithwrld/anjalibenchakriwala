import type { Product } from '../types';

export interface SEOProduct extends Product {
    slug: string;
    seoTitle: string;
    seoDescription: string;
    longDescription: string;
    isJainFriendly: boolean;
    shelfLife: string;
    keywords: string[];
    faqs: { question: string; answer: string }[];
}

export const seoProducts: SEOProduct[] = [
    {
        name: 'Chakri',
        slug: 'chakri',
        description: 'Traditional spiral snack with perfect seasoning and irresistible crunch.',
        seoTitle: 'Buy Chakri Online | Authentic Gujarati Snack | Anjaliben Chakriwala',
        seoDescription: 'Order authentic homemade Chakri online. Traditional Gujarati spiral snack made with wheat flour and aromatic spices. PAN India delivery. Fresh & crispy!',
        longDescription: `Chakri is an iconic traditional Gujarati snack that has been a beloved part of Indian households for generations. At Anjaliben Chakriwala, we handcraft each chakri using time-honored recipes passed down through generations, ensuring you experience the authentic taste of Gujarat in every bite.

Our chakri is made from premium wheat flour, carefully blended with aromatic ajwain (carom seeds), sesame seeds (til), and a perfect balance of chili powder and salt. The dough is traditionally prepared and pressed through special molds to create the signature spiral shape that chakri is known for. Each piece is then deep-fried to golden perfection in pure edible oil until it achieves that satisfying crunch that makes chakri irresistible.

What sets our chakri apart is the attention to detail in every step of preparation. We use only fresh, high-quality ingredients without any preservatives or artificial flavors. This makes our chakri not just delicious but also a healthier snacking option for your family.

Perfect for tea-time snacking, festival celebrations, or gifting to loved ones, our chakri stays fresh and crispy for weeks when stored properly. It's an excellent choice for Gujarati diaspora across India looking for a taste of home, as well as anyone who appreciates authentic Indian snacks.

We offer PAN India delivery, so whether you're in Mumbai, Delhi, Bangalore, Chennai, or any other city, you can enjoy our freshly made chakri delivered right to your doorstep. Each package is carefully sealed to maintain freshness during transit.`,
        weightOptions: [
            { weight: '200gm', price: '₹70' },
            { weight: '400gm', price: '₹140' }
        ],
        ingredients: 'wheat flour, salt, chilly powder, ajwain, til, edible oil',
        imageSeed: '/images/Chakri.jpg',
        isJainFriendly: true,
        shelfLife: '30 days when stored in airtight container',
        keywords: ['chakri online', 'buy chakri', 'gujarati chakri', 'authentic chakri', 'homemade chakri india', 'chakri delivery', 'traditional snacks'],
        faqs: [
            {
                question: 'Is Chakri suitable for Jains?',
                answer: 'Yes, our Chakri is 100% Jain-friendly. It contains no onion, garlic, or root vegetables. Made with pure vegetarian ingredients only.'
            },
            {
                question: 'How long does Chakri stay fresh?',
                answer: 'Our Chakri stays fresh and crispy for up to 30 days when stored in an airtight container at room temperature.'
            },
            {
                question: 'Do you deliver Chakri all over India?',
                answer: 'Yes! We offer PAN India delivery. Whether you are in Gujarat, Maharashtra, Delhi, Karnataka, or any other state, we deliver fresh Chakri to your doorstep.'
            },
            {
                question: 'What makes Anjaliben Chakri different?',
                answer: 'Our Chakri is handcrafted using traditional recipes with no preservatives. We use premium wheat flour, fresh spices, and pure edible oil to ensure authentic taste and quality.'
            }
        ]
    },
    {
        name: 'Joy Stick',
        slug: 'joy-stick',
        description: 'Crunchy wheat sticks with a perfect blend of spices.',
        seoTitle: 'Buy Joy Stick Namkeen Online | Crispy Wheat Sticks | Anjaliben Chakriwala',
        seoDescription: 'Order crunchy Joy Stick namkeen online. Delicious wheat sticks with aromatic spices. Perfect tea-time snack with PAN India delivery. Fresh & tasty!',
        longDescription: `Joy Stick is a delightful crunchy snack that brings joy to every bite! At Anjaliben Chakriwala, we create these crispy wheat sticks using a perfect blend of traditional spices that make them absolutely irresistible.

Made from premium wheat flour and seasoned with authentic Indian spices including turmeric (haldi), red chili powder, and tangy amchur (dried mango powder), our Joy Sticks offer a unique flavor profile that's both savory and slightly tangy. Each stick is carefully prepared to ensure consistent size and crunch in every piece.

The preparation process involves mixing the wheat flour dough with our special spice blend, extruding it into perfect stick shapes, and frying them until they achieve that golden color and satisfying crunch. We use only pure edible oil and ensure every batch meets our high quality standards.

Joy Sticks are perfect for evening chai time, kids' lunchboxes, or as a party snack. Their portable stick shape makes them convenient for snacking on-the-go. These crunchy delights are loved by people of all ages and are a staple in many Indian households.

Available in convenient pack sizes of 250gm and 500gm, our Joy Sticks are delivered fresh across India. We carefully package each order to ensure the sticks reach you in perfect condition, ready to be enjoyed with your favorite hot beverage or on their own.`,
        weightOptions: [
            { weight: '250gm', price: '₹80' },
            { weight: '500gm', price: '₹150' }
        ],
        ingredients: 'wheat flour, chilly powder, haldi, salt, aamchur powder, edible oil',
        imageSeed: '/images/Joy stick.jpg',
        isJainFriendly: true,
        shelfLife: '30 days when stored in airtight container',
        keywords: ['joy stick', 'wheat sticks', 'namkeen sticks', 'crispy sticks online', 'indian snacks', 'tea time snacks'],
        faqs: [
            {
                question: 'Are Joy Sticks suitable for vegetarians?',
                answer: 'Absolutely! Our Joy Sticks are 100% vegetarian and Jain-friendly, made without onion or garlic.'
            },
            {
                question: 'What is the shelf life of Joy Sticks?',
                answer: 'Joy Sticks stay fresh for up to 30 days when stored in an airtight container away from moisture.'
            },
            {
                question: 'Can I order Joy Sticks in bulk?',
                answer: 'Yes, we offer 250gm and 500gm packs. For bulk orders, please contact us via WhatsApp for special pricing.'
            }
        ]
    },
    {
        name: 'Kathol Stick',
        slug: 'kathol-stick',
        description: 'Protein-rich dal sticks with a savory and tangy flavor.',
        seoTitle: 'Buy Kathol Stick Online | Protein-Rich Dal Namkeen | Anjaliben Chakriwala',
        seoDescription: 'Order healthy Kathol Stick online. Protein-rich dal sticks with black pepper & tangy spices. Nutritious snack with PAN India delivery!',
        longDescription: `Kathol Stick is a unique and nutritious snack that combines the goodness of multiple protein-rich lentils in one delicious treat. At Anjaliben Chakriwala, we specially craft these sticks for health-conscious snackers who don't want to compromise on taste.

Our Kathol Sticks are made from a special blend of urad dal, soybean, moong dal, and tropical seasonings that create a distinctive savory and tangy flavor. The addition of black pepper and amchur powder gives these sticks a spicy kick that's perfectly balanced and not overwhelming.

What makes Kathol Sticks special is their high protein content from the dal combination. This makes them an excellent snacking option for those looking to increase their protein intake while enjoying traditional Indian flavors. They're especially popular among fitness enthusiasts and those following a vegetarian diet.

The preparation involves grinding the dals into a fine flour, mixing with our signature spice blend, and carefully frying to achieve the perfect crunch. Each stick is uniform in size and loaded with the authentic flavors of traditional Indian namkeen.

Perfect as a standalone snack or as an accompaniment to your evening tea, Kathol Sticks are slowly becoming a favorite among those who appreciate innovative yet traditional snacks. We deliver these protein-packed treats fresh across India, ensuring you get the best quality in every pack.`,
        weightOptions: [
            { weight: '250gm', price: '₹80' },
            { weight: '500gm', price: '₹150' }
        ],
        ingredients: 'udad dal, soyabean, dal, tropicano, mung, black pepper, salt, aamchuran, edible oil',
        imageSeed: '/images/Kathol stick.jpg',
        isJainFriendly: true,
        shelfLife: '30 days when stored in airtight container',
        keywords: ['kathol stick', 'dal sticks', 'protein snacks', 'healthy namkeen', 'indian protein snacks', 'urad dal snacks'],
        faqs: [
            {
                question: 'What makes Kathol Stick healthy?',
                answer: 'Kathol Sticks are made from protein-rich dals including urad dal, moong dal, and soybean, making them a nutritious snacking option.'
            },
            {
                question: 'Are Kathol Sticks spicy?',
                answer: 'They have a moderate spice level with black pepper and amchur providing a tangy kick. Not overly spicy and suitable for most palates.'
            },
            {
                question: 'Is it suitable for Jain diet?',
                answer: 'Yes, our Kathol Sticks are Jain-friendly with no onion, garlic, or root vegetables used in preparation.'
            }
        ]
    },
    {
        name: 'Bhakharwadi',
        slug: 'bhakharwadi',
        description: 'Classic Gujarati snack with sweet and spicy filling.',
        seoTitle: 'Buy Bhakharwadi Online | Traditional Gujarati Snack | Anjaliben Chakriwala',
        seoDescription: 'Order authentic Bhakharwadi online. Classic Gujarati snack with sweet & spicy filling. Homemade with PAN India delivery. Traditional taste!',
        longDescription: `Bhakharwadi is one of the most beloved snacks from Gujarat, known for its unique combination of sweet and spicy flavors rolled into crispy spiral bites. At Anjaliben Chakriwala, we prepare this classic snack exactly the way it has been made in Gujarati households for centuries.

Our Bhakharwadi features a thin, crispy outer layer made from refined flour (maida) that's filled with a delicious mixture of coriander powder (dhana), red chili powder, garam masala, fennel seeds (varyali), tamarind (imli), and jaggery. This unique filling creates that signature sweet-spicy-tangy taste profile that makes Bhakharwadi irresistible.

The preparation is an art form in itself. The dough is rolled thin, spread with the spice mixture, carefully rolled into a log, sliced into rounds, and then deep-fried until golden and crispy. Each Bhakharwadi is uniform in size and packed with the authentic flavors of traditional Gujarati cuisine.

Bhakharwadi is more than just a snack – it's a cultural icon. It's served during festivals like Diwali, at weddings, and is a must-have during tea time in Gujarati homes. Its unique taste has made it popular not just in Gujarat but across India and among the Indian diaspora worldwide.

We take pride in delivering this traditional delicacy fresh to your doorstep anywhere in India. Whether you're in Maharashtra, where Bhakharwadi is also hugely popular, or in any other state, we ensure our authentic Gujarati Bhakharwadi reaches you in perfect condition.`,
        weightOptions: [
            { weight: '250gm', price: '₹80' },
            { weight: '500gm', price: '₹150' }
        ],
        ingredients: 'maida, salt, haldi, dhana, mirch powder, garam masala, varyali, imily, jaggery, edible oil',
        imageSeed: '/images/Bhakharwadi.jpg',
        isJainFriendly: true,
        shelfLife: '30 days when stored in airtight container',
        keywords: ['bhakharwadi online', 'buy bhakharwadi', 'gujarati bhakharwadi', 'maharashtrian bhakharwadi', 'authentic bhakharwadi', 'traditional namkeen'],
        faqs: [
            {
                question: 'Is Bhakharwadi sweet or spicy?',
                answer: 'Our Bhakharwadi has a unique combination of both! The filling contains jaggery for sweetness balanced with chili and spices for a spicy kick.'
            },
            {
                question: 'What is the difference between Gujarati and Maharashtrian Bhakharwadi?',
                answer: 'Gujarati Bhakharwadi tends to be slightly sweeter with more jaggery, while Maharashtrian version is often spicier. Ours follows the traditional Gujarati recipe.'
            },
            {
                question: 'Can Bhakharwadi be given as gifts?',
                answer: 'Absolutely! Bhakharwadi is a traditional gifting item during festivals. We can pack it specially for gifting purposes.'
            },
            {
                question: 'Is Bhakharwadi suitable for Jains?',
                answer: 'Yes, our Bhakharwadi is 100% Jain-friendly with no onion, garlic, or root vegetables.'
            }
        ]
    },
    {
        name: 'Sakarpara',
        slug: 'sakarpara',
        description: 'Sweet and crispy diamond-shaped treats.',
        seoTitle: 'Buy Sakarpara Online | Sweet Gujarati Snack | Anjaliben Chakriwala',
        seoDescription: 'Order authentic Sakarpara online. Sweet & crispy diamond-shaped treats with Kathiyawadi taste. Perfect for festivals. PAN India delivery!',
        longDescription: `Sakarpara, also known as Shakarpara or Shankarpali, is a beloved sweet snack that holds a special place in Indian festive celebrations. At Anjaliben Chakriwala, we craft this traditional treat with authentic Kathiyawadi flavors that make every bite memorable.

Our Sakarpara is made from a simple yet perfect combination of wheat flour, refined flour (maida), sugar, and pure edible oil. The dough is rolled out thin, cut into beautiful diamond shapes, and deep-fried until they achieve a gorgeous golden color. The result is a crispy, mildly sweet snack that melts in your mouth.

What sets our Sakarpara apart is the authentic Kathiyawadi touch. We follow traditional recipes from the Kathiyawad region of Gujarat, known for its rich culinary heritage. The slightly caramelized edges and perfect crunch are hallmarks of well-made Sakarpara.

This sweet snack is an essential part of Diwali celebrations, Holi, and other Indian festivals. It's often prepared in large quantities during festive seasons and shared with family and friends. Sakarpara is also a popular tea-time snack and makes for excellent gifting during special occasions.

Our Sakarpara is made fresh without any preservatives, ensuring you get the authentic homemade taste. We carefully package each order to maintain freshness and deliver across India. Experience the sweet taste of tradition with every pack of our Kathiyawadi Sakarpara.`,
        weightOptions: [
            { weight: '200gm', price: '₹80' },
            { weight: '400gm', price: '₹150' }
        ],
        ingredients: 'wheat flour, maida, sugar, edible oil',
        imageSeed: '/images/Sakarpara.jpg',
        specialNote: 'Kathiyawadi authentic taste',
        isJainFriendly: true,
        shelfLife: '45 days when stored in airtight container',
        keywords: ['sakarpara online', 'shakarpara', 'shankarpali', 'sweet namkeen', 'diwali sweets', 'kathiyawadi snacks', 'gujarati sweets'],
        faqs: [
            {
                question: 'Is Sakarpara very sweet?',
                answer: 'Our Sakarpara has a mild sweetness that is perfectly balanced. It is not overly sweet, making it enjoyable for all taste preferences.'
            },
            {
                question: 'When is Sakarpara typically eaten?',
                answer: 'Sakarpara is popular during festivals like Diwali and Holi, but it is enjoyed year-round as a tea-time snack or sweet treat.'
            },
            {
                question: 'Is Sakarpara suitable for diabetics?',
                answer: 'Sakarpara contains sugar, so diabetics should consume it in moderation. Please consult your doctor for dietary advice.'
            },
            {
                question: 'What is special about Kathiyawadi Sakarpara?',
                answer: 'Kathiyawadi Sakarpara follows traditional recipes from the Kathiyawad region of Gujarat, known for its authentic flavors and perfect texture.'
            }
        ]
    },
    {
        name: 'Soya Stick',
        slug: 'soya-stick',
        description: 'Healthy soya-based sticks with Manchurian flavor.',
        seoTitle: 'Buy Jain Soya Stick Online | Healthy Protein Snack | Anjaliben Chakriwala',
        seoDescription: 'Order healthy Jain Soya Sticks online. Protein-rich with Manchurian flavor. No onion garlic. Perfect diet snack with PAN India delivery!',
        longDescription: `Soya Stick is a modern twist on traditional Indian snacks, combining the health benefits of soybean with exciting Manchurian flavors. At Anjaliben Chakriwala, we've created a snack that's both nutritious and incredibly tasty, perfect for the health-conscious snacker.

Our Soya Sticks are made from premium quality soybean, carefully selected and processed to create crispy, flavorful sticks. We season them with our special Manchurian masala blend that includes black pepper, amchur, and aromatic spices – all while keeping it 100% Jain-friendly with no onion or garlic.

Soybean is known for being one of the best plant-based protein sources, making our Soya Sticks an excellent snacking option for vegetarians, vegans, and anyone looking to increase their protein intake. Each serving provides substantial protein while being low in carbohydrates compared to traditional flour-based snacks.

The Manchurian flavor profile gives these sticks an Indo-Chinese twist that's become wildly popular across India. The combination of tangy, spicy, and savory notes makes these sticks incredibly addictive. They're perfect as a standalone snack, salad topping, or party appetizer.

We prepare these sticks fresh without any preservatives, ensuring maximum nutrition and flavor. Our Soya Sticks are delivered across India, carefully packaged to maintain their crunch and freshness. Try them once and they'll become your go-to healthy snack!`,
        weightOptions: [
            { weight: '250gm', price: '₹80' },
            { weight: '500gm', price: '₹150' }
        ],
        ingredients: 'soyabean, tropicano, salt, mirch powder, black pepper, aamchuran, manchurian masala, edible oil',
        imageSeed: '/images/Jain Soya stick.jpg',
        isJainFriendly: true,
        shelfLife: '30 days when stored in airtight container',
        keywords: ['soya stick', 'jain soya stick', 'protein snacks', 'healthy namkeen', 'manchurian snacks', 'soybean snacks', 'diet snacks'],
        faqs: [
            {
                question: 'Are Soya Sticks Jain-friendly?',
                answer: 'Yes! Our Soya Sticks are 100% Jain-friendly. Despite the Manchurian flavor, we use no onion or garlic in preparation.'
            },
            {
                question: 'How much protein is in Soya Sticks?',
                answer: 'Soybean is naturally high in protein. Our Soya Sticks provide a good source of plant-based protein, making them ideal for vegetarians.'
            },
            {
                question: 'Are Soya Sticks good for weight loss?',
                answer: 'Soya Sticks are protein-rich and can be a better snacking option compared to carb-heavy snacks. However, they are fried, so consume in moderation.'
            },
            {
                question: 'What does Manchurian flavor taste like?',
                answer: 'It is a popular Indo-Chinese flavor profile that is tangy, slightly spicy, and savory – very addictive and loved across India!'
            }
        ]
    },
    {
        name: 'Sing Bhujiya',
        slug: 'sing-bhujiya',
        description: 'Crunchy peanut bhujiya with aromatic spices.',
        seoTitle: 'Buy Sing Bhujiya Online | Peanut Namkeen | Anjaliben Chakriwala',
        seoDescription: 'Order crunchy Sing Bhujiya online. Delicious peanut namkeen with aromatic spices. Protein-rich snack with PAN India delivery!',
        longDescription: `Sing Bhujiya is a classic Indian namkeen that combines the nutty goodness of peanuts with crispy besan coating and aromatic spices. At Anjaliben Chakriwala, we prepare this beloved snack using traditional methods that bring out the best flavors.

Our Sing Bhujiya starts with carefully selected peanuts (sing/moongfali) that are coated in a perfectly spiced besan (gram flour) batter. We add black pepper, salt, and tangy amchur to create that irresistible flavor combination. Each peanut is evenly coated and fried to golden perfection.

Peanuts are a nutritional powerhouse, providing protein, healthy fats, and essential nutrients. Combined with besan, which is also protein-rich, our Sing Bhujiya becomes a satisfying snack that keeps you energized. It's much more filling than regular chips or fried snacks.

This snack is incredibly versatile – enjoy it on its own, mix it with other namkeens for a custom trail mix, or use it as a topping for chaats and salads. The combination of crunchy peanuts and crispy coating creates a satisfying texture that's hard to stop eating.

Sing Bhujiya is popular across India, from Gujarat to Maharashtra to North India. It's a staple in many households and is especially loved during tea time. We deliver our freshly made Sing Bhujiya across India, ensuring you get that just-made taste and crunch in every pack.`,
        weightOptions: [
            { weight: '250gm', price: '₹80' },
            { weight: '500gm', price: '₹150' }
        ],
        ingredients: 'peanuts, besan, black pepper, salt, aamchuran, edible oil',
        imageSeed: '/images/Sing bhujiya.jpg',
        isJainFriendly: true,
        shelfLife: '30 days when stored in airtight container',
        keywords: ['sing bhujiya', 'peanut bhujiya', 'peanut namkeen', 'moongfali bhujiya', 'protein snacks', 'besan coated peanuts'],
        faqs: [
            {
                question: 'Is Sing Bhujiya healthy?',
                answer: 'Peanuts are rich in protein and healthy fats. While our Sing Bhujiya is fried, it provides good nutrition and is more filling than regular snacks.'
            },
            {
                question: 'Can people with peanut allergies eat this?',
                answer: 'No, Sing Bhujiya contains peanuts as the main ingredient. Those with peanut allergies should avoid this product.'
            },
            {
                question: 'Is Sing Bhujiya suitable for Jains?',
                answer: 'Yes, our Sing Bhujiya is 100% Jain-friendly with no onion, garlic, or root vegetables used.'
            },
            {
                question: 'How should I store Sing Bhujiya?',
                answer: 'Store in an airtight container at room temperature. Keep away from moisture to maintain crunch for up to 30 days.'
            }
        ]
    },
    {
        name: 'Maggie Chips',
        slug: 'maggie-chips',
        description: 'Crispy chips with popular Maggie flavor.',
        seoTitle: 'Buy Roasted Maggie Chips Online | Low Oil Snack | Anjaliben Chakriwala',
        seoDescription: 'Order healthy Roasted Maggie Chips online. Crispy chips with minimal oil & Maggie masala flavor. Guilt-free snack with PAN India delivery!',
        longDescription: `Maggie Chips are a unique fusion snack that combines the beloved Maggie masala flavor with crispy, roasted chips. At Anjaliben Chakriwala, we've created a healthier version of this popular snack using minimal oil and maximum flavor.

Our Maggie Chips are made from soybean and tropical seasonings, coated with the iconic Maggie masala that has been a favorite across India for decades. What makes our version special is that we use only 0.01% edible oil, making these chips significantly lighter than regular fried snacks.

The roasting process we use creates a satisfying crunch without the heaviness of deep-fried snacks. This makes our Maggie Chips an excellent choice for those watching their oil intake but still craving a tasty snack. The familiar Maggie flavor ensures you won't miss the taste while enjoying a lighter option.

These chips are perfect for kids and adults alike who love the Maggie flavor. They make great lunchbox additions, movie-time snacks, or party appetizers. The unique combination of protein-rich soybean base with the tangy-savory Maggie masala creates an addictive flavor profile.

We carefully package our Maggie Chips to maintain their crunch during transit. Whether you're in a metropolitan city or a smaller town, we deliver fresh across India. Try our healthier take on this beloved flavor combination!`,
        weightOptions: [
            { weight: '180gm', price: '₹100' }
        ],
        ingredients: 'soyabean, tropicano, maggie masala, salt, 0.01% edible oil',
        imageSeed: '/images/Roasted Maggie chips.jpg',
        isJainFriendly: false,
        shelfLife: '30 days when stored in airtight container',
        keywords: ['maggie chips', 'roasted chips', 'low oil snacks', 'healthy chips', 'maggie masala snacks', 'diet snacks'],
        faqs: [
            {
                question: 'Are Maggie Chips Jain-friendly?',
                answer: 'Our Maggie Chips may contain onion/garlic in the Maggie masala. They are vegetarian but may not be suitable for strict Jain diet. Please check if this is a concern.'
            },
            {
                question: 'How are these chips healthier?',
                answer: 'We use only 0.01% edible oil and roast instead of deep frying, making them significantly lighter than regular fried chips.'
            },
            {
                question: 'Do these taste exactly like Maggie noodles?',
                answer: 'They have the iconic Maggie masala flavor that is familiar and loved. The base is crispy chips made from soybean, not noodles.'
            },
            {
                question: 'Are these suitable for children?',
                answer: 'Yes! Kids love the Maggie flavor and these make a great snack option. Being low in oil, they are a better choice than regular chips.'
            }
        ]
    },
    {
        name: 'Pudina Chips',
        slug: 'pudina-chips',
        description: 'Refreshing mint-flavored crispy chips.',
        seoTitle: 'Buy Roasted Pudina Chips Online | Mint Flavor Snack | Anjaliben Chakriwala',
        seoDescription: 'Order refreshing Roasted Pudina Chips online. Crispy mint-flavored chips with minimal oil. Cool & tangy snack with PAN India delivery!',
        longDescription: `Pudina Chips bring a refreshing twist to the world of snacks with their cool mint flavor and satisfying crunch. At Anjaliben Chakriwala, we create these unique chips using our signature low-oil roasting method for a guilt-free snacking experience.

Our Pudina Chips are made from protein-rich soybean base, seasoned with aromatic pudina (mint) masala, black pepper, and salt. The refreshing mint flavor combined with a hint of spice from black pepper creates a taste sensation that's both cooling and exciting.

Like our Maggie Chips, these are roasted with just 0.01% edible oil, making them one of the healthiest chip options available. You get all the crunch and flavor without the heavy, oily feeling that comes with regular fried snacks. This makes Pudina Chips perfect for health-conscious snackers.

The mint flavor makes these chips particularly refreshing during summer months. They're excellent as a palate cleanser between meals or as a light evening snack. The unique flavor profile also makes them a conversation starter at parties and gatherings.

Pudina Chips are gaining popularity across India as more people discover this unique flavor combination. We ensure fresh preparation and careful packaging to deliver the perfect crunch and flavor to your doorstep, no matter where you are in India.`,
        weightOptions: [
            { weight: '180gm', price: '₹100' }
        ],
        ingredients: 'soyabean, tropicano, pudina masala, black pepper, salt, 0.01% edible oil',
        imageSeed: '/images/Roasted Maggie chips.jpg',
        isJainFriendly: true,
        shelfLife: '30 days when stored in airtight container',
        keywords: ['pudina chips', 'mint chips', 'roasted chips', 'healthy chips', 'mint flavored snacks', 'low oil snacks'],
        faqs: [
            {
                question: 'Do Pudina Chips taste very minty?',
                answer: 'They have a pleasant, refreshing mint flavor that is not overpowering. The mint is balanced with black pepper for a rounded taste.'
            },
            {
                question: 'Are Pudina Chips Jain-friendly?',
                answer: 'Yes! Our Pudina Chips are 100% Jain-friendly with no onion, garlic, or root vegetables used.'
            },
            {
                question: 'Are these the same as mint-flavored potato chips?',
                answer: 'No, our Pudina Chips are made from soybean, not potatoes. They are protein-rich and use minimal oil through roasting.'
            },
            {
                question: 'Can I eat these if I have acidity issues?',
                answer: 'The mint flavor may actually help with digestion. However, as with any fried snack, consume in moderation if you have digestive concerns.'
            }
        ]
    }
];

// Helper function to get product by slug
export const getProductBySlug = (slug: string): SEOProduct | undefined => {
    return seoProducts.find(p => p.slug === slug);
};

// Helper to get all product slugs for routing
export const getAllProductSlugs = (): string[] => {
    return seoProducts.map(p => p.slug);
};
