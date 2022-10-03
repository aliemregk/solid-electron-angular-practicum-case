import { CookingDegree } from './cookingDegree';
import { Ingredient } from './ingredient';

export const Bread: Ingredient = { name: "Bread", canOrdered: true, stock: 5 };

export const Ingredients: Ingredient[] = [
    { name: "Lettuce", canOrdered: true, stock: 5 },
    { name: "Pickle", canOrdered: true, stock: 5 },
    { name: "Tomato", canOrdered: true, stock: 5 },
    { name: "Onion", canOrdered: true, stock: 5 }
];

export const Extras: Ingredient[] = [
    { name: "Packet Sauce", canOrdered: true, stock: 5 },
    { name: "Potato", canOrdered: true, stock: 5 },
    { name: "Coke", canOrdered: true, stock: 5 }
];

export const Meats: Ingredient[] = [
    { name: "Meatball", canOrdered: true, stock: 5 },
    { name: "Chicken", canOrdered: true, stock: 5 }
];

export const CookingDegrees: CookingDegree[] = [
    { name: "Rare", time: 2000 },
    { name: "Medium", time: 3000 },
    { name: "Well", time: 4000 }
];

export const OrderDetails: Ingredient[] = []
export const LogMessages: string[] = [];
