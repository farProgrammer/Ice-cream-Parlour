const flavours = [
  {
    name: "Vanilla Ice Cream",
    varient: ["small", "medium", "large"],
    prices: [{ small: 10, medium: 20, large: 25 }],
    category: "cone",
    image: require("./assets/img/van.png"),
    description: "yummy natural whole milk ice cream with cherry topping",
  },
  {
    name: "Chocolate Ice Cream",
    varient: ["small", "medium", "large"],
    prices: [{ small: 17, medium: 28, large: 35 }],
    category: "cone",
    image: require("./assets/img/choc.png"),
    description: "yummy natural whole milk ice cream with chocolate",
  },
  {
    name: "Rainbow Ice Cream",
    varient: ["small", "medium", "large"],
    prices: [{ small: 12, medium: 20, large: 35 }],
    category: "cone",
    image: require("./assets/img/rain.png"),
    description:
      "yummy natural whole milk ice cream with colorful rainbow color ice cream kids favorite ice cream",
  },
  {
    name: "triple Ice Cream",
    varient: ["small", "medium", "large"],
    prices: [{ small: 40, medium: 50, large: 75 }],
    category: "cup",
    image: require("./assets/img/cup1.png"),
    description:
      "yummy natural whole milk ice cream with triple flavor cherry topping",
  },
  {
    name: "Strawberry Ice Cream",
    varient: ["small", "medium", "large"],
    prices: [{ small: 30, medium: 50, large: 75 }],
    category: "cup",
    image: require("./assets/img/cup2.png"),
    description: "yummy natural whole milk  strawberries ice cream ",
  },
  {
    name: " Ice Cream with cookies",
    varient: ["small", "medium", "large"],
    prices: [{ small: 40, medium: 60, large: 85 }],
    category: "cup",
    image: require("./assets/img/cup3.png"),
    description:
      "yummy natural whole milk ice cream with mixture of cookies and toppings",
  },
];
export default flavours;
