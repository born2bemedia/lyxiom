export const getServices = (t) => [
  {
    category: `${t('0.category.0', {fallback: "Brand"})} <span>${t('0.category.1', {fallback: "Design"})}</span>`,
    link: "brand-design",
    seo_title: "Brand Design Services | Lyxiom",
    seo_description: "Transform your brand identity with professional design services. Create a memorable and impactful brand presence with Lyxiom's expert solutions.",
    overview: {
      title: t('0.overview.title', {fallback: "Solid foundations. Seamless systems. Stronger brands."}),
      highlightsText: t('0.overview.highlightsText', {fallback: "Why Your Brand Matters"}),
      highlights: [
        {
          stat: "3",
          title: t('0.overview.highlights.0.title', {fallback: "Engagement"}),
          description:
            t('0.overview.highlights.0.description', {fallback: "Brands with strong identity and messaging capture attention and retain audiences more effectively."}),
        },
        {
          stat: "1.7",
          title: t('0.overview.highlights.1.title', {fallback: "Higher Loyalty"}),
          description:
            t('0.overview.highlights.1.description', {fallback: "Consistent branding builds trust, fostering long-term customer relationships."}),
        },
        {
          stat: "2.5",
          title: t('0.overview.highlights.2.title', {fallback: "Profitability"}),
          description:
            t('0.overview.highlights.2.description', {fallback: "Well-crafted brands drive higher conversion rates and greater return on investment."}),
        },
      ],
    },
    servicesList: [
      {
        name: t('0.list.0.name', {fallback: "Brand Concept and Ideation"}),
        description:
          t('0.list.0.description', {fallback: "A distinct and compelling brand idea is developed to define your market position and differentiate your offering, ensuring lasting impact in a crowded landscape."}),
      },
      {
        name: t('0.list.1.name', {fallback: "Growth Strategy"}),
        description:
          t('0.list.1.description', {fallback: "Opportunities for growth are uncovered through in-depth analysis of market trends and customer behaviour, helping to identify new audience segments and markets."}),
      },
      {
        name: t('0.list.2.name', {fallback: "Brand Identity"}),
        description:
          t('0.list.2.description', {fallback: "A cohesive brand image is developed, incorporating naming, tone of voice, and visual elements that align with your vision and resonate with your audience."}),
      },
      {
        name: t('0.list.3.name', {fallback: "Brand Foundation"}),
        description:
          t('0.list.3.description', {fallback: "The foundation of your brand is established by defining its purpose, positioning, and guiding principles to ensure consistent and impactful messaging."}),
      },
      {
        name: t('0.list.4.name', {fallback: "Brand Systems"}),
        description:
          t('0.list.4.description', {fallback: "Optimal systems and tools are set up to enhance your brand’s performance. From Google Analytics to tailored CRMs and data analysis platforms, every solution is carefully selected to meet your brand's unique needs and drive success."}),
      },
      {
        name: t('0.list.5.name', {fallback: "Brand Architecture"}),
        description:
          t('0.list.5.description', {fallback: "The structure of your brand is strategically organised to enhance clarity and align with expansion goals, ensuring a clear and effective presentation of offerings."}),
      },
    ],
  },
  {
    category: `${t('1.category.0', {fallback: "Product, Service"})} <br/>${t('1.category.1', {fallback: "Experience"})} <span>${t('1.category.2', {fallback: "Design"})}</span>`,
    link: "product-service-experience-design",
    seo_title: "Product, Service, Experience Design | Lyxiom",
    seo_description: "Discover how Lyxiom's product, service, and experience design can transform your brand. Tailored solutions to elevate customer experiences.",
    overview: {
      title: `${t('1.overview.title.0', {fallback: "Service or experience as a"})} <br/>${t('1.overview.title.1', {fallback: "product. Market-ready solutions."})}`,
      highlightsText: t('1.overview.highlightsText', {fallback: "Why Your Product Matters"}),
      highlights: [
        {
          stat: "4",
          title: t('1.overview.highlights.0.title', {fallback: "User Satisfaction"}),
          description:
            t('1.overview.highlights.0.description', {fallback: "Optimised products meet customer needs, improving experiences and building trust."}),
        },
        {
          stat: "2.2",
          title: t('1.overview.highlights.1.title', {fallback: "Faster Market Entry"}),
          description:
            t('1.overview.highlights.1.description', {fallback: "Efficient product development reduces time to launch, gaining a competitive edge."}),
        },
        {
          stat: "3",
          title: t('1.overview.highlights.2.title', {fallback: "Customer Retention"}),
          description:
            t('1.overview.highlights.2.description', {fallback: "Well-designed products ensure repeat usage and long-term loyalty."}),
        },
      ],
    },
    servicesList: [
      {
        name: t('1.list.0.name', {fallback: "Experience Strategy & Product Vision"}),
        description:
          t('1.list.0.description', {fallback: "Shaping innovative solutions and customer experiences that address emerging needs and position your brand for growth."}),
      },
      {
        name: t('1.list.1.name', {fallback: "Product Concepting"}),
        description:
          t('1.list.1.description', {fallback: "Turning ideas into actionable concepts by combining data insights and design sprints to refine product and experience visions."}),
      },
      {
        name: t('1.list.2.name', {fallback: "Platform Optimization"}),
        description:
          t('1.list.2.description', {fallback: "Enhancing existing web interfaces and accounts through in-depth analysis and tailored improvements to align with user expectations and platform standards."}),
      },
      {
        name: t('1.list.3.name', {fallback: "UX / UI Design"}),
        description:
          t('1.list.3.description', {fallback: "Designing intuitive interfaces and seamless user experiences that align with industry best practices and amplify product value."}),
      },
      {
        name: t('1.list.4.name', {fallback: "Commerce Experiences"}),
        description:
          t('1.list.4.description', {fallback: "Building unique omnichannel experiences that enhance customer journeys, increase sales, and strengthen relationships."}),
      },
      {
        name: t('1.list.5.name', {fallback: "Technology Consulting"}),
        description:
          t('1.list.5.description', {fallback: "Discovering and deploying new technological capabilities to enhance your operations and future-proof your offerings."}),
      },
    ],
  },
  {
    category: "Content and Brand <br/>Story <span>Design</span>",
    link: "content-and-brand-story-design",
    seo_title: "Content and Brand Story Design | Lyxiom",
    seo_description: "Create compelling content and a powerful brand story with Lyxiom. Let us help you build a brand narrative that resonates and drives engagement.",
    overview: {
      title: "One vision. One voice. Your brand DNA brought to life.",
      highlightsText: "Why Your Content Matters",
      highlights: [
        {
          stat: "2.6",
          title: "Stronger Connection",
          description:
            "Tailored content builds deeper emotional ties with your audience.",
        },
        {
          stat: "1.8",
          title: "Customer Retention",
          description:
            "Consistent and relatable brand stories foster stronger loyalty.",
        },
        {
          stat: "3",
          title: "Campaign ROI",
          description:
            "Optimised and strategically planned content drives measurable profitability.",
        },
      ],
    },
    servicesList: [
      {
        name: t('2.list.0.name', {fallback: "Custom Research & Creative Optimization"}),
        description:
          t('2.list.0.description', {fallback: "Comprehensive research to refine your content. We analyse technical factors, platform requirements, and audience behaviour to maximise creative impact."}),
      },
      {
        name: t('2.list.1.name', {fallback: "Content Design"}),
        description:
          t('2.list.1.description', {fallback: "Developing branded templates, banners, and visual assets aligned with your identity, including colour schemes, fonts, and design elements."}),
      },
      {
        name: t('2.list.2.name', {fallback: "Brand Story Creation"}),
        description:
          t('2.list.2.description', {fallback: "Crafting a compelling narrative that resonates with your target audience, ensuring your story aligns with their values and aspirations."}),
      },
      {
        name: t('2.list.3.name', {fallback: "Content Strategy Development"}),
        description:
          t('2.list.3.description', {fallback: "Structuring a roadmap for consistent, high-performing content across platforms, tailored to your audience's preferences and needs."}),
      },
      {
        name: t('2.list.4.name', {fallback: "Global Content Production"}),
        description:
          t('2.list.4.description', {fallback: "Leveraging a global network of expert resources to produce high-quality content at scale, ensuring consistency across markets."}),
      },
      {
        name: t('2.list.5.name', {fallback: "Content Performance Monitoring"}),
        description:
          t('2.list.5.description', {fallback: "Ongoing analysis of content effectiveness with actionable insights to improve results."}),
      },
    ],
  },
  {
    category: t('3.category', {fallback: "SMM"}),
    link: "smm",
    seo_title: "Social Media Marketing | Lyxiom",
    seo_description: "Boost your brand's visibility and engagement with targeted social media marketing strategies. Explore our expert SMM services designed for brand growth.",
    overview: {
      title: t('3.overview.title', {fallback: "Building visibility. Growing audiences. Driving engagement."}),
      highlightsText: t('3.overview.highlightsText', {fallback: "Why Going Social Matters"}),
      highlights: [
        {
          stat: "2",
          title: t('3.overview.highlights.0.title', {fallback: "Audience Growth"}),
          description: t('3.overview.highlights.0.description', {fallback: "through targeted social media campaigns."}),
        },
        {
          stat: "1.8",
          title: t('3.overview.highlights.1.title', {fallback: "Customer Retention"}),
          description: t('3.overview.highlights.1.description', {fallback: "driven by consistent social engagement."}),
        },
        {
          stat: "3.5",
          title: t('3.overview.highlights.2.title', {fallback: "ROI Improvement"}),
          description: t('3.overview.highlights.2.description', {fallback: "with optimised social ad strategies."}),
        },
      ],
    },
    servicesList: [
      {
        name: t('3.list.0.name', {fallback: "Platform Analysis & Strategy"}),
        description:
          t('3.list.0.description', {fallback: "Evaluating social media channels to determine the best platforms for your brand and crafting tailored strategies for maximum impact."}),
      },
      {
        name: t('3.list.1.name', {fallback: "Social Media Branding"}),
        description:
          t('3.list.1.description', {fallback: "Ensuring brand consistency across profiles by integrating your visual identity, voice, and messaging into each platform’s unique environment."}),
      },
      {
        name: t('3.list.2.name', {fallback: "Community Engagement"}),
        description:
          t('3.list.2.description', {fallback: "Fostering meaningful interactions through active responses, conversations, and content that resonates with your audience."}),
      },
      {
        name: t('3.list.3.name', {fallback: "Content Planning & Scheduling"}),
        description:
          t('3.list.3.description', {fallback: "Developing a calendar of impactful posts and campaigns to maintain consistent, engaging presence."}),
      },
      {
        name: t('3.list.4.name', {fallback: "Ad Campaign Optimization"}),
        description:
          t('3.list.4.description', {fallback: "Creating and optimising paid social media campaigns to ensure cost-effective targeting and high conversion rates."}),
      },
      {
        name: t('3.list.5.name', {fallback: "Analytics & Performance Tracking"}),
        description:
          t('3.list.5.description', {fallback: "Monitoring key metrics to measure success, identify opportunities, and refine strategies for continued growth."}),
      },
    ],
  },
  {
    category: t('4.title', {fallback: "SEO"}),
    link: "seo",
    seo_title: "SEO | Lyxiom",
    seo_description: "Increase your online visibility and drive organic traffic with our expert SEO strategies. Discover how we can improve your search rankings.",
    overview: {
      title: t('4.overview.title', {fallback: "Top positions. Organic traffic. Visibility beyond the basics."}),
      highlightsText: t('4.overview.highlightsText', {fallback: "Why Going Top Matters"}),
      highlights: [
        {
          stat: "5",
          title: t('4.overview.highlights.0.title', {fallback: "Organic Traffic"}),
          description: t('4.overview.highlights.0.description', {fallback: "with well-optimised content and keywords."}),
        },
        {
          stat: "2.3",
          title: t('4.overview.highlights.1.title', {fallback: "Lead Conversion Rates"}),
          description: t('4.overview.highlights.1.description', {fallback: "from improved SERP visibility."}),
        },
        {
          stat: "1.7",
          title: t('4.overview.highlights.2.title', {fallback: "Authority Boost"}),
          description: t('4.overview.highlights.2.description', {fallback: "through consistent top-ranking performance."}),
        },
      ],
    },
    servicesList: [
      {
        name: t('4.list.0.name', {fallback: "Website Audit and SEO Analysis"}),
        description:
          t('4.list.0.description', {fallback: "A deep dive into your website's performance to identify optimization opportunities, from technical issues to content gaps."}),
      },
      {
        name: t('4.list.1.name', {fallback: "Keyword Research and Strategy"}),
        description:
          t('4.list.1.description', {fallback: "Defining high-impact keywords aligned with your industry and audience to improve search rankings and attract qualified traffic."}),
      },
      {
        name: t('4.list.2.name', {fallback: "On-Page SEO Optimization"}),
        description:
          t('4.list.2.description', {fallback: "Refining website content, structure, and metadata for better search engine compatibility and user experience."}),
      },
      {
        name: t('4.list.3.name', {fallback: "Technical SEO Enhancements"}),
        description:
          t('4.list.3.description', {fallback: "Addressing backend issues like load speed, mobile-friendliness, and site architecture to meet evolving search engine standards."}),
      },
      {
        name: t('4.list.4.name', {fallback: "Link Building and Outreach"}),
        description:
          t('4.list.4.description', {fallback: "Creating high-quality backlinks through strategic partnerships and outreach to boost domain authority and brand’s reputation."}),
      },
      {
        name: t('4.list.5.name', {fallback: "SEO Performance Tracking and Reporting"}),
        description:
          t('4.list.5.description', {fallback: "Comprehensive monitoring of rankings, traffic, and conversion rates, with actionable insights to refine strategies."}),
      },
    ],
  },
  {
    category: t('5.category', {fallback: "Performance"}),
    link: "performance",
    seo_title: "Performance Marketing Services to Boost Your Brand | Lyxiom",
    seo_description: "Maximise your brand's performance with targeted advertising strategies. Explore how our tailored solutions can drive results and growth.",
    overview: {
      title: t('5.overview.title', {fallback: "Precision targeting. Data-driven decisions. Results that scale."}),
      highlightsText: t('5.overview.highlightsText', {fallback: "Why Brand's Performance Matters"}),
      highlights: [
        {
          stat: "3",
          title: t('5.overview.highlights.0.title', {fallback: "Return On Ad Spend"}),
          description: t('5.overview.highlights.0.description', {fallback: "through optimised campaigns and strategic targeting."}),
        },
        {
          stat: "4.5",
          title: t('5.overview.highlights.1.title', {fallback: "Customer Acquisition"}),
          description: t('5.overview.highlights.1.description', {fallback: "with tailored ad placements and messaging."}),
        },
        {
          stat: "2",
          title: t('5.overview.highlights.2.title', {fallback: "Conversion Rates"}),
          description: t('5.overview.highlights.2.description', {fallback: "driven by data-backed performance strategies."}),
        },
      ],
    },
    servicesList: [
      {
        name: t('5.list.0.name', {fallback: "Paid Search Advertising"}),
        description:
          t('5.list.0.description', {fallback: "Creating and optimising campaigns on Google Ads and other search platforms to capture high-intent audiences."}),
      },
      {
        name: t('5.list.1.name', {fallback: "Display and Programmatic Advertising"}),
        description:
          t('5.list.1.description', {fallback: "Leveraging visually impactful ads and automated systems for precise audience targeting across multiple networks."}),
      },
      {
        name: t('5.list.2.name', {fallback: "Social Media Advertising"}),
        description:
          t('5.list.2.description', {fallback: "Crafting engaging campaigns on platforms like Facebook, Instagram, and LinkedIn to reach and convert your ideal audience."}),
      },
      {
        name: t('5.list.3.name', {fallback: "Video and Streaming Ad Campaigns"}),
        description:
          t('5.list.3.description', {fallback: "Driving engagement with creative video ads optimised for YouTube, TikTok, and streaming platforms."}),
      },
      {
        name: t('5.list.4.name', {fallback: "Performance Analytics and Reporting"}),
        description:
          t('5.list.4.description', {fallback: "Providing detailed insights into campaign performance with metrics-driven adjustments for continuous improvement."}),
      },
      {
        name: t('5.list.5.name', {fallback: "Audience Segmentation and Retargeting"}),
        description:
          t('5.list.5.description', {fallback: "Utilising behavioural data to create targeted segments and retargeting strategies that re-engage potential customers."}),
      },
      {
        name: t('5.list.6.name', {fallback: "Affiliate Marketing Campaigns"}),
        description:
          t('5.list.6.description', {fallback: "Establishing and managing partnerships with affiliates to drive performance-based results."}),
      },
      {
        name: t('5.list.7.name', {fallback: "Budget Optimization and Scaling"}),
        description:
          t('5.list.7.description', {fallback: "Maximising ad spend efficiency by reallocating budgets to high-performing channels and scaling successful campaigns."}),
      },
      {
        name: t('5.list.8.name', {fallback: "Cross-Channel Advertising Integration"}),
        description:
          t('5.list.8.description', {fallback: "Synchronising campaigns across platforms for consistent messaging and amplified reach."}),
      },
    ],
  },
  {
    category: t('6.category', {fallback: "Brand Scaling"}),
    link: "brand-scaling",
    seo_title: "Brand Scaling | Lyxiom",
    seo_description: "Get the support you need to scale your brand effectively. Unlock growth opportunities, outperform competitors, and reach new heights with expert strategies.",
    overview: {
      title:
        t('6.overview.title', {fallback: "Reaching new heights. Building your presence. Achieving your potential."}),
      highlightsText: t('6.overview.highlightsText', {fallback: "Why Scaling Matters"}),
      highlights: [
        {
          stat: "3",
          title: t('6.overview.highlights.0.title', {fallback: "Audience Growth"}),
          description:
            t('6.overview.highlights.0.description', {fallback: "by tapping into the right strategies for individuals and small ventures."}),
        },
        {
          stat: "2.5",
          title: t('6.overview.highlights.1.title', {fallback: "Engagement Rates"}),
          description: t('6.overview.highlights.1.description', {fallback: "through tailored brand development and outreach."}),
        },
        {
          stat: "4",
          title: t('6.overview.highlights.2.title', {fallback: "Increased Visibility"}),
          description: t('6.overview.highlights.2.description', {fallback: "in niche markets, ensuring your brand gets noticed."}),
        },
      ],
    },
    servicesList: [
      {
        name: t('6.list.0.name', {fallback: "Personalized Growth Strategies"}),
        description:
          t('6.list.0.description', {fallback: "Crafting step-by-step plans to expand your personal brand or small venture with limited resources."}),
      },
      {
        name: t('6.list.1.name', {fallback: "Competitor Insights and Positioning"}),
        description:
          t('6.list.1.description', {fallback: "Analysing competitors to carve out your unique space and highlight your strengths."}),
      },
      {
        name: t('6.list.2.name', {fallback: "Niche Audience Targeting"}),
        description:
          t('6.list.2.description', {fallback: "Focusing on the right market segments to maximise your brand's appeal and impact."}),
      },
      {
        name: t('6.list.3.name', {fallback: "Social Media Growth Support"}),
        description:
          t('6.list.3.description', {fallback: "Developing strategies to grow your followers, engagement, and influence on key platforms."}),
      },
      {
        name: t('6.list.4.name', {fallback: "Brand Identity Scaling"}),
        description:
          t('6.list.4.description', {fallback: "Ensuring your identity evolves cohesively as your audience grows and your presence expands."}),
      },
      {
        name: t('6.list.5.name', {fallback: "Outreach Campaigns"}),
        description:
          t('6.list.5.description', {fallback: "Designing cost-effective campaigns to connect with a wider audience and build recognition."}),
      },
      {
        name: t('6.list.6.name', {fallback: "Content Amplification Strategies"}),
        description:
          t('6.list.6.description', {fallback: "Optimising content for reach and resonance to grow your influence in chosen niches."}),
      },
      {
        name: t('6.list.7.name', {fallback: "Growth-Focused Tools and Resources"}),
        description:
          t('6.list.7.description', {fallback: "Providing access to essential tools and strategies for scaling effectively at an individual level."}),
      },
    ],
  },
];
