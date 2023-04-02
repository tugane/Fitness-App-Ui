import { ImageSourcePropType } from "react-native";

interface User {
  name: string;
  profile: ImageSourcePropType;
}
export const user: User = {
  name: "tugane",
  profile: require("../assets/images/avatar.jpeg"),
};

export interface Category {
  id: number;
  name: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Squats",
  },
  {
    id: 2,
    name: "Pushup",
  },
  {
    id: 3,
    name: "Jumping",
  },
  {
    id: 4,
    name: "Squats",
  },
];

interface Exercise {
  id: number;
  name: string;
  time: string;
  image: ImageSourcePropType;
}

// list of workouts exercises
export const exercises: Exercise[] = [
  {
    id: 1,
    name: "Squats",
    time: "30 sec",
    image: require("../assets/images/exercises/Squats.jpeg"),
  },
  {
    id: 2,
    name: "Pushup",
    time: "30 sec",
    image: require("../assets/images/exercises/Pushup.jpeg"),
  },
  {
    id: 3,
    name: "Jumping",
    time: "30 sec",
    image: require("../assets/images/exercises/Jumping.jpeg"),
  },
];

interface Workout {
  id: number;
  name: string;
  coach: string;
  image: ImageSourcePropType;
  exercises: Exercise[];
  rating: number;
}

// list of workouts
export const workouts: Workout[] = [
  {
    id: 1,
    name: "Leg muscle strength",
    coach: "Dasha Gaivoronski",
    image: require("../assets/images/workouts/frederik-rosar-uQOBWxjSd-4-unsplash.jpg"),
    exercises,
    rating: 5,
  },
  {
    id: 2,
    name: "Body Pump",
    coach: "Dasha Gaivoronski",
    image: require("../assets/images/workouts/photo-1434682966726-19ad3a76e143.jpeg"),
    exercises,
    rating: 5,
  },
  {
    id: 3,
    name: "Leg muscle strength",
    coach: "Dasha Gaivoronski",
    image: require("../assets/images/workouts/alora-griffiths-AkEr0jc5Lvs-unsplash.jpeg"),
    exercises,
    rating: 5,
  },
  {
    id: 4,
    name: "Leg muscle strength",
    coach: "Dasha Gaivoronski",
    image: require("../assets/images/workouts/photo-1546483875-ad9014c88eba.jpeg"),
    exercises,
    rating: 5,
  },
  {
    id: 5,
    name: "Leg muscle strength",
    coach: "Dasha Gaivoronski",
    image: require("../assets/images/workouts/photo-1541534741688-6078c6bfb5c5.jpeg"),
    exercises,
    rating: 5,
  },
  {
    id: 6,
    name: "Leg muscle strength",
    coach: "Dasha Gaivoronski",
    image: require("../assets/images/workouts/spencer-davis-0ShTs8iPY28-unsplash.jpeg"),
    exercises,
    rating: 5,
  },
  {
    id: 7,
    name: "Leg muscle strength",
    coach: "Dasha Gaivoronski",
    image: require("../assets/images/workouts/victor-freitas-KkYWWpurqbE-unsplash.jpeg"),
    exercises,
    rating: 5,
  },
  {
    id: 8,
    name: "Leg muscle strength",
    coach: "Dasha Gaivoronski",
    image: require("../assets/images/workouts/photo-1434682966726-19ad3a76e143.jpeg"),
    exercises,
    rating: 5,
  },
];

interface Plan {
  id: number;
  name: string;
  duration: string;
  image: ImageSourcePropType;
  location: string;
  rating: number;
}

// list of workout plans
export const workoutPlans: Plan[] = [
  {
    id: 1,
    name: "Leg muscle strength",
    duration: "8 weeks",
    location: "Home",
    image: require("../assets/images/workouts/photo-1434682966726-19ad3a76e143.jpeg"),
    rating: 5,
  },
  {
    id: 2,
    name: "Body Pump",
    duration: "8 weeks",
    location: "Home",
    image: require("../assets/images/workouts/photo-1541534741688-6078c6bfb5c.jpeg"),
    rating: 5,
  },
  {
    id: 3,
    name: "Leg muscle strength",
    duration: "8 weeks",
    location: "Home",
    image: require("../assets/images/workouts/photo-1546483875-ad9014c88eba.jpeg"),
    rating: 5,
  },
  {
    id: 4,
    name: "Leg muscle strength",
    duration: "8 weeks",
    location: "Home",
    image: require("../assets/images/workouts/photo-1434682966726-19ad3a76e143.jpeg"),
    rating: 5,
  },
];
