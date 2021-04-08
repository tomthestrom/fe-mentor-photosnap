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
      priceYear: this.priceMonth * 10,
    },
    {
      name: "Pro",
      desc: "More advanced features available. Recommended for photography veterans and professionals.",
      priceMonth: 39.00,
      priceYear: this.priceMonth * 10,
    },
    {
      name: "Business",
      desc: "Additional features available such as more detailed metrics. Recommended for business owners.",
      priceMonth: 99.00,
      priceYear: this.priceMonth * 10,
    },
  ],
  features: [

  ]
};

module.exports = pricingDB;