import Header from "./components/Layout/Header/Header.js";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart.js";

const App = () => (
  <>
    <Cart />
    <Header />
    <main>
      <Meals />
    </main>
  </>
);

export default App;
