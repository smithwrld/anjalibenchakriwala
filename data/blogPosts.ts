export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // Markdown or HTML string
    date: string;
    readTime: string;
    image: string;
    keywords: string[];
    faqs: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'what-is-chakri',
        title: "What is Chakri? Complete Guide to Gujarat's Favorite Snack",
        excerpt: "Discover everything about Chakri - the traditional spiral snack loved across India. Learn about its history, ingredients, and why it's a must-have for every household.",
        date: 'December 15, 2025',
        readTime: '5 min read',
        image: '/images/Chakri.jpg',
        keywords: ['what is chakri', 'chakri recipe', 'gujarati chakri', 'traditional snacks', 'indian spiral snack', 'rice flour chakri'],
        content: `
      <h2>The Iconic Spiral Snack of India</h2>
      <p>If there's one snack that defines Gujarati festive culture, it's <strong>Chakri</strong>. This spiral, crunchy delight is a staple in households across India, especially during Diwali and other major celebrations. But what exactly is Chakri, and why has it captured the hearts (and stomachs) of millions?</p>

      <h3>Origins and Variations</h3>
      <p>Chakri, also known as <em>Murukku</em> in South India, is a savory snack made typically from a blend of flours. While the South Indian version largely uses rice and urad dal flour, the Gujarati Chakri often incorporates wheat flour (gehu ka atta), spices, and sesame seeds (til). The name "Chakri" comes from the word "Chakra," referring to its distinctive wheel-like spiral shape.</p>

      <h3>The Perfect Taste Profile</h3>
      <p>A perfect Chakri is a symphony of textures and flavors. It should be:</p>
      <ul>
        <li><strong>Crispy and Crunchy:</strong> It should snap with a satisfying sound.</li>
        <li><strong>Lightly Spiced:</strong> Hints of ginger, green chili, and ajwain (carom seeds) give it a subtle kick.</li>
        <li><strong>Aromatic:</strong> The addition of sesame seeds adds a nutty aroma that is unmistakable.</li>
      </ul>

      <h3>Why It's a Tea-Time Essential</h3>
      <p>In Gujarat, no evening tea is complete without a side of Farsan. Chakri is the perfect accompaniment to Masala Chai. Its savory nature cuts through the sweetness of the tea, creating a balanced snacking experience that is hard to stop at just one.</p>

      <h3>How We Make It at Anjaliben Chakriwala</h3>
      <p>At Anjaliben Chakriwala, we stick to the traditional "boil and steam" method for our dough, ensuring the Chakri absorbs less oil and remains light. We use premium wheat flour, pure groundnut oil, and fresh spices. Our Chakris are hand-pressed to ensure the authentic texture that machines simply cannot replicate.</p>
    `,
        faqs: [
            { question: "Is Chakri gluten-free?", answer: "Traditionally, Gujarati Chakri is made with wheat flour, so it is not gluten-free. However, South Indian Murukku made from rice flour can be gluten-free." },
            { question: "How long does Chakri stay fresh?", answer: "When stored in an airtight container, homemade Chakri stays fresh and crunchy for up to 30-45 days." },
            { question: "Is your Chakri Jain-friendly?", answer: "Yes! Our classic Chakri is 100% Jain-friendly, containing no onion, garlic, or root vegetables." }
        ]
    },
    {
        slug: 'chakri-vs-bhakharwadi',
        title: "Chakri vs Bhakharwadi: Which Gujarati Snack is Right for You?",
        excerpt: "A detailed comparison of Gujarat's two most popular snacks. Understand the taste profiles, ingredients, and perfect occasions for each.",
        date: 'December 10, 2025',
        readTime: '4 min read',
        image: '/images/Bhakharwadi.jpg',
        keywords: ['chakri vs bhakharwadi', 'gujarati snacks comparison', 'best namkeen', 'bhakharwadi taste', 'spicy indian snacks'],
        content: `
      <h2>The Clash of the Titans: Sweet & Spicy vs Savory & Crunchy</h2>
      <p>When it comes to Gujarati Farsan, two names often top the list: <strong>Chakri</strong> and <strong>Bhakharwadi</strong>. Both are iconic, delicious, and deeply rooted in tradition. But if you had to pick one, which should it be? Let's break down the differences to help you decide.</p>

      <h3>Flavor Profile</h3>
      <ul>
        <li><strong>Chakri:</strong> Savory, slightly spicy, and aromatic with sesame and carom seeds. It has a uniform taste throughout.</li>
        <li><strong>Bhakharwadi:</strong> A complex explosion of flavors. It starts sweet, turns tangy, and ends with a spicy kick. The filling usually contains coconut, sesame, poppy seeds, and chili powder.</li>
      </ul>

      <h3>Texture</h3>
      <ul>
        <li><strong>Chakri:</strong> Known for its hard crunch. It's a "snap and chew" kind of snack.</li>
        <li><strong>Bhakharwadi:</strong> Has a crispy outer layer with a softer, crumbly filling inside. It offers a dual-texture experience.</li>
      </ul>

      <h3>Best Paired With</h3>
      <ul>
        <li><strong>Chakri:</strong> Best with Masala Chai or simply as a munching snack while watching TV.</li>
        <li><strong>Bhakharwadi:</strong> Pairs excellently with sweet tea or coffee, as well as a side dish in a traditional Gujarati Thali.</li>
      </ul>

      <h3>The Verdict</h3>
      <p>If you prefer simple, savory crunches, go for <strong>Chakri</strong>. If you love a roller-coaster of sweet, sour, and spicy notes, <strong>Bhakharwadi</strong> is your true calling. Reluctant to choose? Why not order a combo pack from Anjaliben Chakriwala and enjoy the best of both worlds!</p>
    `,
        faqs: [
            { question: "Which is spicier, Chakri or Bhakharwadi?", answer: "Generally, Bhakharwadi feels spicier due to the concentrated masala filling, whereas Chakri has a milder, dough-infused spice level." },
            { question: "Does Bhakharwadi contain sugar?", answer: "Yes, Bhakharwadi traditionally contains sugar or jaggery to balance the spicy and tangy tamarind flavors." }
        ]
    },
    {
        slug: 'jain-diet-snacks',
        title: "Best Gujarati Snacks for Jain Diet: Complete Guide",
        excerpt: "Looking for Jain-friendly snacks? Here's your complete guide to delicious namkeen options that comply with Jain dietary restrictions - no onion, no garlic.",
        date: 'December 5, 2025',
        readTime: '6 min read',
        image: '/images/Jain Soya stick.jpg',
        keywords: ['jain snacks', 'jain diet namkeen', 'no onion garlic snacks', 'jain food india', 'vegetarian snacks'],
        content: `
      <h2>Snacking Without Compromise: The Jain Way</h2>
      <p>Followers of Jainism adhere to strict dietary guidelines that exclude root vegetables (like onions, garlic, potatoes, carrots) to prevent injury to microorganisms living in the soil. Finding tasty packaged snacks that strictly follow these rules can often be a challenge. But did you know that Gujarati cuisine offers some of the best Jain-friendly snacks in the world?</p>

      <h3>Top Jain Snacks at Anjaliben Chakriwala</h3>
      <p>We take pride in offering a wide range of snacks that are 100% compliant with Jain dietary laws, without compromising on flavor.</p>

      <h4>1. Jain Soya Sticks</h4>
      <p>Unlike regular soya sticks that might use garlic powder for flavoring, our Jain Soya Sticks use a special blend of "Magic Masala" derived from dry ginger (soonth), black pepper, and unique spice mixes that provide a tangy kick without restricted ingredients.</p>

      <h4>2. Chakri</h4>
      <p>Our classic Wheat Chakri is naturally Jain. We use ginger powder instead of fresh ginger root if required, and absolutely no onion or garlic flavorings.</p>

      <h4>3. Bhakharwadi (Jain Version)</h4>
      <p>Traditional Bhakharwadi often has garlic in the masala. Our special Jain Bhakharwadi replaces garlic with asafoetida (hing) and other spices to recreate that depth of flavor.</p>

      <h4>4. Kelwa (Banana Chips)</h4>
      <p>Since potatoes are restricted, raw banana chips are the perfect alternative for chip lovers. They are crispy, salty, and completely Jain-friendly.</p>

      <h3>Why Choose Our Jain Snacks?</h3>
      <p>We process our Jain snacks in batches where we ensure no cross-contamination with onion or garlic products. When you see the "Jain Friendly" label on our website, you can trust it completely.</p>
    `,
        faqs: [
            { question: "What makes a snack Jain-friendly?", answer: "A Jain-friendly snack contains no root vegetables (onion, garlic, potato, carrot, etc.) and is often made before sunset in strict households." },
            { question: "Do Jain snacks taste bland?", answer: "Not at all! Jain cuisine uses rich spices like cumin, coriander, black pepper, dry mango powder, and asafoetida to create bold and delicious flavors." }
        ]
    },
    {
        slug: 'kathiyawadi-snacks-explained',
        title: "Traditional Kathiyawadi Snacks Explained: A Culinary Journey",
        excerpt: "Explore the rich snacking traditions of the Kathiyawad region. From Sakarpara to authentic farsan, discover what makes Kathiyawadi snacks special.",
        date: 'November 28, 2025',
        readTime: '7 min read',
        image: '/images/Sakarpara.jpg',
        keywords: ['kathiyawadi snacks', 'kathiyawad food', 'traditional farsan', 'sakarpara', 'spicy gujarati food'],
        content: `
      <h2>The Bold Flavors of Kathiyawad</h2>
      <p>Gujarat is divided into various culinary regions, and Kathiyawad (the Saurashtra peninsula) is famous for its bold, spicy, and rustic flavors. While mainstream Gujarati food is often associated with sweetness, Kathiyawadi food is celebrated for its heat and generous use of garlic and chilies.</p>

      <h3>Sakarpara vs. Shankarpali</h3>
      <p>One of the most beloved snacks from this region is <strong>Sakarpara</strong> (or Shankarpali). These are sweet, diamond-shaped fried dough biscuits. In Kathiyawad, they are made slightly thicker and softer, melting in your mouth instantly. They are the perfect sweet counterpart to the spicy Fafda and Gathiya.</p>

      <h3>Gathiya: The King of Kathiyawad</h3>
      <p>No article on Kathiyawadi snacks is complete without mentioning Gathiya. Made from chickpea flour (besan), these come in various forms:</p>
      <ul>
        <li><strong>Vanela Gathiya:</strong> Twisted and soft, served with raw papaya salad.</li>
        <li><strong>Tikha Gathiya:</strong> Spicy and crunchy.</li>
        <li><strong>Bhavnagari Gathiya:</strong> Extremely soft and mild, a specialty of Bhavnagar.</li>
      </ul>

      <h3>The Culture of "Dayro"</h3>
      <p>In rural Saurashtra, community gatherings called "Dayro" are incomplete without generous platters of Bhajiyas, Gathiya, and tea. Snacking is not just about eating; it's a social activity that brings people together.</p>

      <p>At Anjaliben Chakriwala, our Sakarpara and spicy sticks pay homage to this rich culinary heritage of Kathiyawad.</p>
    `,
        faqs: [
            { question: "Are Kathiyawadi snacks always spicy?", answer: "While the region is known for spice, snacks like Sakarpara are sweet, and Bhavnagari Gathiya is mild. The cuisine offers a balance." },
            { question: "What is the main ingredient in Kathiyawadi snacks?", answer: "Gram flour (Besan) is the backbone of most Kathiyawadi farsan, along with generous use of oil and garlic." }
        ]
    },
    {
        slug: 'how-chakri-is-made',
        title: "How Chakri is Made: Traditional vs Modern Methods",
        excerpt: "Go behind the scenes to understand how authentic chakri is crafted. Compare traditional handmade methods with modern production techniques.",
        date: 'November 20, 2025',
        readTime: '5 min read',
        image: '/images/Chakri.jpg',
        keywords: ['chakri making process', 'how to make chakri', 'chakri production', 'handmade vs machine snacks'],
        content: `
      <h2>The Art of the Spiral</h2>
      <p>Have you ever wondered how Chakri gets its perfect spiral shape and distinct crunch? The process is a labor of love that balances science and art. Let's compare how we do it traditionally versus how mass-market brands manufacture it.</p>

      <h3>The Traditional "Khandani" Method</h3>
      <p>This is the method we follow at Anjaliben Chakriwala:</p>
      <ol>
        <li><strong>Steaming the Flour:</strong> Instead of directly mixing water, wheat flour is tied in a cloth and steamed in a pressure cooker. This "cooked flour" creates a lighter, airier dough.</li>
        <li><strong>Spicing the Dough:</strong> We add hot oil (mohan), ginger chili paste, sesame seeds, and spices to the steamed flour.</li>
        <li><strong>Hand Pressing:</strong> The dough is put into a brass "Sancha" (press) and hand-cranked to release the spiked strands.</li>
        <li><strong>Spiraling by Hand:</strong> Skilled artisans (mostly women from our family) manually twist the strands into concentric circles. This requires immense practice to get uniform sizes.</li>
        <li><strong>Frying:</strong> Deep fried in small batches to ensure even golden-brown color.</li>
      </ol>

      <h3>The Modern Industrial Method</h3>
      <p>Large factories use extruders that push dough out at high pressure. Automated conveyor belts cut the spirals. While this is faster, the high pressure often compresses the dough too much, leading to a harder, denser Chakri that loses that "melt-in-the-mouth" feel.</p>

      <h3>Why Handmade Wins Every Time</h3>
      <p>Handmade Chakri has a rustic texture and better layer separation. The human touch ensures that every piece is inspected for quality before it hits the oil. It's not just a snack; it's craftsmanship.</p>
    `,
        faqs: [
            { question: "Why is steaming the flour important?", answer: "Steaming denatures the gluten and removes raw smell, resulting in a Chakri that is crispy but not rock-hard." },
            { question: "What oil do you use for frying?", answer: "We use filtered groundnut oil or refined sunflower oil depending on the specific batch requirements, ensuring high smoke points for safe frying." }
        ]
    },
    {
        slug: 'healthy-snacking-with-namkeen',
        title: "Healthy Snacking: Are Traditional Indian Snacks Good for You?",
        excerpt: "Discover the nutritional benefits of traditional namkeen. Learn about protein-rich options like Soya Sticks and Kathol Sticks for health-conscious snacking.",
        date: 'November 15, 2025',
        readTime: '6 min read',
        image: '/images/Kathol stick.jpg',
        keywords: ['healthy indian snacks', 'protein snacks india', 'nutritious namkeen', 'soya stick benefits', 'kathol benefits'],
        content: `
      <h2>Guilt-Free Munching: Myth or Reality?</h2>
      <p>Indian Namkeen often gets a bad rap for being "unhealthy" because it is fried. But compared to highly processed western chips loaded with preservatives and artificial flavors, traditional homemade snacks can inevitably be a distinctive part of a balanced diet when consumed in moderation.</p>

      <h3>Protein Powerhouses</h3>
      <p>Did you know many Gujarati snacks are legume-based? This makes them excellent sources of plant-based protein.</p>
      <ul>
        <li><strong>Kathol Sticks:</strong> "Kathol" translates to pulses. Our Kathol sticks are made from a mix of lentil flours (Moong, Urad, Chana). They are high in fiber and protein, keeping you full for longer.</li>
        <li><strong>Soya Sticks:</strong> Made from Soya flour, these are a fantastic option for vegetarians looking to boost their protein intake. Soya is a complete protein, containing all nine essential amino acids.</li>
        <li><strong>Sing Bhujiya:</strong> Peanuts are a dense source of energy, good fats, and protein. A small handful gives you a major energy boost.</li>
      </ul>

      <h3>The "Homemade" Advantage</h3>
      <p>The biggest health factor is <strong>ingredients</strong>. At Anjaliben Chakriwala, we use:</p>
      <ul>
        <li>No Palm Oil (we use quality vegetable oils)</li>
        <li>No Artificial Preservatives (BHT/BHA free)</li>
        <li>Fresh Spices (rich in antioxidants)</li>
      </ul>

      <p>So next time you reach for a snack, skip the chemical-laden packet and choose a traditional Kathol stick or Soya stick. Your taste buds and your body will thank you!</p>
    `,
        faqs: [
            { question: "Are Soya sticks fried or baked?", answer: "Our Soya sticks are deep-fried to achieve the traditional crunch, but we ensure proper oil drainage to keep them as light as possible." },
            { question: "Which is the healthiest snack you sell?", answer: "Kathol Sticks and Roasted Maggie Chips are our top recommendations for health-conscious snackers due to their protein content and lower oil absorption." }
        ]
    }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPosts.find(post => post.slug === slug);
};

export const getAllBlogPostSlugs = () => {
    return blogPosts.map(post => ({
        params: {
            slug: post.slug
        }
    }));
};
