import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip"
import { useState } from "react"
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"
import { createDataSet } from "./data/dataset"
import "./App.css"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {
  //states
  const [selectCategory, setSelectCategory] = useState("");
  const [selectRestaurant, setSelectRestaurant] = useState("");
  const [selectMenu, setSelectMenu] = useState([]);
  //event handler
  function handleClickedCategory(category){
    setSelectCategory(category);
  }  
  function handleClickedRestaurant(restaurant){
    setSelectRestaurant(restaurant);
  }  

  function handleClickedMenu(items){
    console.log(1111,items);
    setSelectMenu(items);
  }
  var currentMenuItems = data.filter(category => category.food_category == selectCategory && category.restaurant == selectRestaurant);


  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {categories.map((category) => (
            <Chip
            
            onClick = {() => handleClickedCategory(category)}
            isActive = {selectCategory == category}
            label={category} 
            key={category} 
            //isActive={category=="Burgers"}
            />
          ))}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header header={appInfo}/>
        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">{restaurants.map((restaurant)=>(
            <Chip onClick = {() => handleClickedRestaurant(restaurant)}
            isActive = {selectRestaurant == restaurant}
            label={restaurant} 
            key={restaurant} 
            //isActive={restaurant=="In-N-Out Burger"}
            />
          ))}</div>
        </div>
        {/* INSTRUCTIONS GO HERE */}
        <Instructions instructions={appInfo.instructions}/>
        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((food, index) =>(
              <Chip
              onClick={()=> handleClickedMenu(food)}
              isActive = {selectMenu==food}
              label = {food.item_name}
              key ={index}
              />
              ))}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">{
            <NutritionalLabel item ={selectMenu}/>
          }</div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
