import 
{BrowserRouter,
Routes,
Route
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

//IMPORT ALL COMPONENTS
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";


//MAIN CSS
import "./styles/app.scss"; 

//ALL CSS
import "./styles/cart.scss"
import "./styles/colors.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/mediaquery.scss"

function App() {
  return (

   <BrowserRouter>
        <Header/>
         <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
          </Routes>
          <Toaster/>
    </BrowserRouter>
    


  );
}

export default App;
