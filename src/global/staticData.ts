import { cat1Png, cat2Png, cat3Png, cat4Png, cat5Png, cat6Png, cat7Png, cat8Png } from "../assets/assets";

export interface CategoryData {
    id: number;
    name: string;
    image: any;
}
export const categoryData:CategoryData[] = [
    {
        id: 1,
        name: "Plays",
        image: cat1Png
    },
    {
        id: 2,
        name: "Pets Show",
        image: cat2Png
    },
    {
        id: 3,
        name: "Concert",
        image: cat3Png
    },
    {
        id: 4,
        name: "Magician",
        image: cat4Png
    },
    {
        id: 5,
        name: "Food Fest",
        image: cat5Png
    },
    {
        id: 6,
        name: "Dance",
        image: cat6Png
    },
    {
        id: 7,
        name: "Premiere",
        image: cat7Png
    },
    {
        id: 8,
        name: "Sports",
        image: cat8Png
    },
    {
        id: 9,
        name: "Music",
        image: cat1Png
    },
    {
        id: 10,
        name: "Drama",
        image: cat2Png
    }
]


export const dashboardButtonData = [
    { id: 1, name: 'Entertainment', isActive: true },
    { id: 2, name: 'Academic', isActive: false },
    { id: 3, name: 'Volunteering', isActive: false },
]