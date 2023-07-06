import { BrowserRouter, Route, Routes } from "react-router-dom"
import LabelBottomNavigation from "../../components/Category/Category"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import ButtonAppBar from "../../components/NavBar/NavBar"
import ItemDetailContainer from "../../components/ItemListContainer/ItemDetailContainer"


const Home = () => {

    return(
        <BrowserRouter>
            <ButtonAppBar />
            <LabelBottomNavigation /> 
            

            <Routes>
                <Route path="/" element={<ItemListContainer titulo='PRODUCTOS'/>} />
                <Route path="category/:id" element={<ItemListContainer />} />
                <Route path="item/:id" element={<ItemDetailContainer />} />
            </Routes>

        </BrowserRouter>

    )
}

export default Home