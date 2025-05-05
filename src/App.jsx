import { BrowserRouter, Routes, Route } from "react-router";

import Mainpage from "./pages/Mainpage";
import Program from "./pages/Program";
import Advantages from "./pages/Advantages";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import AppLayout from "./pages/AppLayout";
import Exercises from "./pages/Exercises";
import Plans from "./pages/Plans";
import Login from "./pages/Login";
import Details from "./pages/Details";
import Terms from "./pages/Terms";

import RequireAuth from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

const options = [
  {
    id: "1",
    name: "Yoga",
    route: "yoga",
    description: "90 minutes training for your mental strength",
    img: "myfitness/public/yoga.jpg",
  },
  {
    id: "12",
    name: "Cardio",
    route: "cardio",
    description: "Improve cardio and train your stamina",
    img: "myfitness/public/cardio-img.jpg",
  },
  {
    id: "13",
    name: "Group Exercises",
    route: "group",
    description: "Choose what you like most and meet new people",
    img: "myfitness/public/group-img.jpg",
  },
  {
    id: "14",
    name: "Gym Workout",
    route: "gym",
    description: "Gain muscle,strength & build your body",
    img: "myfitness/public/gym-img.jpg",
  },
];

const plans = [
  {
    id: 11,
    name: "Begginer",
    price: 9.99,
    description:
      "This plan is perfectly fit the clients, who just started their active sport life",
  },
  {
    id: 12,
    name: "Proffesional",
    price: 19.99,
    description:
      "This plan is for the clients, who made sport the common thing in life",
  },
  {
    id: 13,
    name: "Ultra",
    price: 39.99,
    description:
      "This plan is clients,who are athletes and want to prepare themself for upcoming competiotions ",
  },
];

const exercises = [
  {
    exerciseName: "Exercise 1",
    repeats: "4 set of 10 times",
    img: "https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    burnedCalories: "50 calories",
    id: 73930385,
  },
  {
    exerciseName: "Exercise 2",
    repeats: "4 set of 10 times",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    burnedCalories: "50 calories",
    id: 17806751,
  },
  {
    exerciseName: "Exercise 3",
    repeats: "4 set of 10 times",
    img: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    burnedCalories: "50 calories",
    id: 98443197,
  },
];

function App() {
  // const [exercises, setExercises] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(function () {
  //   async function fetchExercises() {
  //     try {
  //       setLoading(true);
  //       const data = await fetch("http://localhost:8000/exercises");
  //       const res = await data.json();
  //       setExercises(res);
  //     } catch {
  //       alert("Sorry, something wrong...");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchExercises();
  // }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="myfitness" element={<Mainpage />} />
          <Route path="login" element={<Login />} />
          <Route
            path="app"
            element={
              <RequireAuth>
                <AppLayout options={options} />
              </RequireAuth>
            }
          />
          <Route
            path="app/:training"
            element={<Exercises exercises={exercises} />}
          />
          <Route path="app/:training/plans" element={<Plans plans={plans} />} />
          <Route path="app/:training/plans/details" element={<Details />} />
          <Route path="app/:training/plans/details/terms" element={<Terms />} />
          <Route path="program" element={<Program />} />
          <Route path="advantages" element={<Advantages />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<AboutUs />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
