import { cat1Png, cat2Png, cat3Png, cat4Png, cat5Png, cat6Png, cat7Png, cat8Png, music1Png, music2Png, music3Png, music4Png } from "../assets/assets";

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

export const LocationData = {
    'Current Location': [
      {
        id:"1",
        city: 'Bangalore',
        address: '#2 KR Layout, 4th phase, Indiranagar',
        selected: true,
      },
    ],
    'Recent Location': [
      {
        id:"2",
        city: 'Pune',
        address: '#2 KR Layout, 4th phase, Indiranagar',
        selected: false,
      },
      {
        id:"3",
        city: 'Nagpur',
        address: '#2 KR Layout, 4th phase, Indiranagar',
        selected: false,
      },
      {
        id:"4",
        city: 'Mumbai',
        address: '#2 KR Layout, 4th phase, Indiranagar',
        selected: false,
      },
      {
        id:"5",
        city: 'Hyderabad',
        address: '#2 KR Layout, 4th phase, Indiranagar',
        selected: false,
      },
    ],
  }


export const dashboardButtonData = [
    { id: 1, name: 'Entertainment', isActive: true },
    { id: 2, name: 'Academic', isActive: false },
    { id: 3, name: 'Volunteering', isActive: false },
]

export interface MostPopularData {
        id: number;
        image: string;
    }
export const mostPopularData :MostPopularData[] = [
    {
        id: 1,
        image: music1Png
    },
    {
        id: 2,
        image: music2Png
    },
    {
        id: 3,
        image: music3Png
    },
    {
        id: 4,
        image: music4Png
    },
    
]
export interface ResumeBookingData {
    id: number;
    image: string;
}
export const resumeBookingData :ResumeBookingData[] = [
    {
        id: 1,
        image: music3Png
    },
    {
        id: 2,
        image: music4Png
    },
    
    
]