var pricingDB = {
  featured: [
    {
      title: "Pricing",
      text:
        "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
      image: "hero.jpg",
    },
  ],
  plans: [
    {
      name: "Basic",
      desc: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
      priceMonth: 19.00,
      priceYear: 19 * 10,
    },
    {
      name: "Pro",
      desc: "More advanced features available. Recommended for photography veterans and professionals.",
      priceMonth: 39.00,
      priceYear: 39 * 10,
    },
    {
      name: "Business",
      desc: "Additional features available such as more detailed metrics. Recommended for business owners.",
      priceMonth: 99.00,
      priceYear: 99 * 10,
    },
  ],
  features: [
    {
      name: "Unlimited Story Posting",
      plan_0: true,
      plan_1: true,
      plan_2: true
    },
    {
      name: "Unlimited Photo Upload",
      plan_0: true,
      plan_1: true,
      plan_2: true
    },
    {
      name: "Embedding Custom Content",
      plan_0: false,
      plan_1: true,
      plan_2: true
    },
    {
      name: "Customize Metadata",
      plan_0: false,
      plan_1: true,
      plan_2: true
    },
    {
      name: "Advanced Metrics",
      plan_0: false,
      plan_1: false,
      plan_2: true
    },
    {
      name: "Photo Downloads",
      plan_0: false,
      plan_1: false,
      plan_2: true
    },
    {
      name: "Search Engine Indexing",
      plan_0: false,
      plan_1: false,
      plan_2: true
    },
    {
      name: "Custom Analytics",
      plan_0: false,
      plan_1: false,
      plan_2: true
    },
  ]
};

module.exports = pricingDB;