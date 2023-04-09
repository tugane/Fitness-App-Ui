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
  set: number;
}

// list of workouts exercises
export const exercises: Exercise[] = [
  {
    id: 1,
    name: "Squats",
    time: "30 sec",
    image: require("../assets/images/exercises/Squats.jpeg"),
    set:2
  },
  {
    id: 2,
    name: "Pushup",
    time: "30 sec",
    image: require("../assets/images/exercises/Pushup.jpeg"),
    set:2
  },
  {
    id: 3,
    name: "Jumping",
    time: "30 sec",
    image: require("../assets/images/exercises/Jumping.jpeg"),
    set:2
  },
];

export interface Workout {
  id: number;
  name: string;
  coach: string;
  image: ImageSourcePropType;
  exercises: Exercise[];
  rating: number;
  minutes: number;
  calories: number;
  description: string;
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
    minutes: 52,
    calories: 350,
    description:
      "Proident cupidatat laboris deserunt aute irure commodo do nisi cillum ullamco sint dolore magna. Cillum ad fugiat velit tempor nostrud. Non pariatur irure ea dolor nulla exercitation. Amet quis adipisicing ullamco do in et ullamco mollit excepteur ipsum tempor.",
  },
  {
    id: 2,
    name: "Body Pump",
    coach: "Dasha Gaivoronski",
    image: require("../assets/images/workouts/photo-1434682966726-19ad3a76e143.jpeg"),
    exercises,
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Amet pariatur non ullamco non tempor nostrud in occaecat amet enim qui. Est deserunt ut eiusmod ipsum. Consectetur ex aute dolore magna voluptate Lorem pariatur aliqua elit ex consequat non ex.",
  },
  {
    id: 3,
    name: "Leg muscle strength",
    coach: "Dasha Gaivoronski",
    image: require("../assets/images/workouts/alora-griffiths-AkEr0jc5Lvs-unsplash.jpeg"),
    exercises,
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Anim aliquip et labore est voluptate. Mollit mollit Lorem anim quis veniam laborum irure esse. Quis pariatur enim id magna non et occaecat Lorem ad deserunt reprehenderit magna esse. Consequat aliqua aliquip proident et fugiat dolor eu dolor Lorem elit duis exercitation pariatur. Enim tempor veniam eiusmod deserunt est excepteur laborum id id pariatur non ipsum. Tempor id irure ipsum anim minim commodo dolor veniam. Eiusmod reprehenderit aliquip officia elit sit ex.",
  },
  {
    id: 4,
    name: "Leg muscle strength",
    coach: "Dasha Gaivoronski",
    image: require("../assets/images/workouts/photo-1546483875-ad9014c88eba.jpeg"),
    exercises,
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Cupidatat ad deserunt elit mollit deserunt dolor aliquip velit eu. Consequat culpa aute labore aliqua excepteur proident sint eiusmod sunt ea anim magna ea. Eiusmod minim nostrud anim sunt fugiat aliqua nisi quis adipisicing consectetur. Velit elit amet labore ullamco ea enim nulla.",
  },
  {
    id: 5,
    name: "Leg muscle strength",
    coach: "Dasha Gaivoronski",
    image: require("../assets/images/workouts/photo-1541534741688-6078c6bfb5c5.jpeg"),
    exercises,
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Reprehenderit ut nisi irure duis irure velit laborum irure aliqua. Eiusmod dolor culpa mollit occaecat minim Lorem ex occaecat voluptate. Nisi esse velit veniam laborum sunt. Incididunt velit quis do id reprehenderit deserunt. Sint magna excepteur aute elit non ut in ex et nostrud.",
  },
  {
    id: 6,
    name: "Leg muscle strength",
    coach: "Dasha Gaivoronski",
    image: require("../assets/images/workouts/spencer-davis-0ShTs8iPY28-unsplash.jpeg"),
    exercises,
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Nulla consequat ullamco proident labore exercitation enim consectetur. Cillum ex veniam mollit id exercitation. Quis in labore labore elit reprehenderit elit eiusmod.",
  },
  {
    id: 7,
    name: "Leg muscle strength",
    coach: "Dasha Gaivoronski",
    image: require("../assets/images/workouts/victor-freitas-KkYWWpurqbE-unsplash.jpeg"),
    exercises,
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Minim eu exercitation laboris tempor voluptate est voluptate cillum. Ad tempor eu minim esse enim. Ex reprehenderit exercitation deserunt reprehenderit minim irure consectetur et.",
  },
  {
    id: 8,
    name: "Leg muscle strength",
    coach: "Dasha Gaivoronski",
    image: require("../assets/images/workouts/photo-1434682966726-19ad3a76e143.jpeg"),
    exercises,
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Ullamco commodo nostrud esse excepteur labore enim elit excepteur. Et non minim enim fugiat culpa sit sint irure irure amet reprehenderit enim non velit. Consectetur incididunt velit velit voluptate velit. Sint ex magna in aliquip. Dolore sunt deserunt cillum nostrud.",
  },
];

interface Plan {
  id: number;
  name: string;
  duration: string;
  image: ImageSourcePropType;
  location: string;
  rating: number;
  minutes: number;
  calories: number;
  description: string;
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
    minutes: 52,
    calories: 350,
    description:
      "Quis consequat esse laborum enim eiusmod duis culpa enim nulla consequat aute. Amet exercitation deserunt nulla et sit do. Eu fugiat et anim labore. Minim non laboris in anim.",
  },
  {
    id: 2,
    name: "Body Pump",
    duration: "8 weeks",
    location: "Home",
    image: require("../assets/images/workouts/photo-1541534741688-6078c6bfb5c.jpeg"),
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Velit aute culpa et sit aliqua quis incididunt consectetur esse do minim. Cupidatat cillum labore aliqua cupidatat exercitation minim occaecat nostrud Lorem culpa do proident ea. Voluptate amet irure nulla velit cillum magna dolore. Cillum labore ea ut Lorem adipisicing excepteur laboris ullamco magna dolor do consectetur ipsum. Magna aliquip est pariatur exercitation aute.",
  },
  {
    id: 3,
    name: "Leg muscle strength",
    duration: "8 weeks",
    location: "Home",
    image: require("../assets/images/workouts/photo-1546483875-ad9014c88eba.jpeg"),
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Labore laborum laborum dolore laboris occaecat commodo. Do dolore commodo laborum exercitation non dolore nostrud elit voluptate velit excepteur officia ullamco reprehenderit. Quis nostrud tempor ullamco exercitation. Est reprehenderit elit ex consequat adipisicing laborum.",
  },
  {
    id: 4,
    name: "Leg muscle strength",
    duration: "8 weeks",
    location: "Home",
    image: require("../assets/images/workouts/photo-1434682966726-19ad3a76e143.jpeg"),
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "In velit culpa dolor in amet amet pariatur consectetur enim ea. Minim in labore nostrud labore officia labore velit proident labore aliquip ipsum ipsum ullamco aliquip. Magna anim reprehenderit nisi irure pariatur non. Ipsum minim ad ipsum cillum consequat. Ipsum aliquip ad nulla laborum reprehenderit esse commodo non.",
  },
];
