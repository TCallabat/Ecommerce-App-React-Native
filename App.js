/**
 * App.js
 */


/* Import modules */
import React, { Component } from 'react';
import { Image } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

/* Import components */
import Splashscreen from "./components/loading/Splashscreen";
import Home from "./components/app/Home";

import ProductHome from "./components/app/product/ProductHome";
import Computer from "./components/app/product/Computer";
import Smartphone from "./components/app/product/Smartphone";
import Detail from "./components/app/product/Detail";

import AuthHome from "./components/app/user/AuthHome";
import Profile from "./components/app/user/Profile";
import SignIn from "./components/app/user/Signin";
import SignUp from "./components/app/user/Signup";
import Forget from "./components/app/user/Forget";

import Basket from "./components/app/basket/Basket";


const ProductPage = createStackNavigator({
  Home: { screen: ProductHome, navigationOptions: { headerTitle: "PRODUITS", headerTitleAlign: "center", headerTintColor: "white", headerStyle: { height: 45, backgroundColor: "cadetblue" } }, },
  Computer: { screen: Computer, navigationOptions: { headerTitle: "Ordinateurs", headerTitleAlign: "center", headerTintColor: "white", headerStyle: { height: 45, backgroundColor: "cadetblue" } } },
  Smartphone: { screen: Smartphone, navigationOptions: { headerTitle: "Téléphones", headerTitleAlign: "center", headerTintColor: "white", headerStyle: { height: 45, backgroundColor: "cadetblue" } } },
  Detail: { screen: Detail, navigationOptions: { headerTitle: "Détail produit", headerTitleAlign: "center", headerTintColor: "white", headerStyle: { height: 45, backgroundColor: "cadetblue" } } },
}, {
  initialRouteName: "Home",
});

const UserPage = createStackNavigator({
  Home: { screen: AuthHome, navigationOptions: { headerTitle: "UTILISATEURS", headerTitleAlign: "center", headerTintColor: "white", headerStyle: { height: 45, backgroundColor: "cadetblue" } }, },
  Profile: { screen: Profile, navigationOptions: { headerTitle: "Profil", headerTitleAlign: "center", headerTintColor: "white", headerStyle: { height: 45, backgroundColor: "cadetblue" } }, },
  SignIn: { screen: SignIn, navigationOptions: { headerTitle: "Connexion", headerTitleAlign: "center", headerTintColor: "white", headerStyle: { height: 45, backgroundColor: "cadetblue" } }, },
  SignUp: { screen: SignUp, navigationOptions: { headerTitle: "Créer un compte", headerTitleAlign: "center", headerTintColor: "white", headerStyle: { height: 45, backgroundColor: "cadetblue" } }, },
  Forget: { screen: Forget, navigationOptions: { headerTitle: "Mot de passe oublié", headerTitleAlign: "center", headerTintColor: "white", headerStyle: { height: 45, backgroundColor: "cadetblue" } }, },
}, {
  initialRouteName: "Home"
});

const MainTabs = createBottomTabNavigator({
  Accueil: { screen: Home, navigationOptions: { tabBarIcon: () => (<Image style={{ width: 20, height: 20 }} source={require("./components/img/home.png")} />) } },
  Produits: { screen: ProductPage, navigationOptions: { tabBarIcon: () => (<Image style={{ width: 20, height: 20 }} source={require("./components/img/menu.png")} />) } },
  Compte: { screen: UserPage, navigationOptions: { tabBarIcon: () => (<Image style={{ width: 20, height: 20 }} source={require("./components/img/user.png")} />) } },
  Panier: { screen: Basket, navigationOptions: { tabBarIcon: () => (<Image style={{ width: 20, height: 20 }} source={require("./components/img/shopping-cart.png")} />) } }
}, {
  initialRouteName: "Accueil"
});

const App = createAppContainer(createSwitchNavigator({
  Loading: Splashscreen,
  App: MainTabs,
}, {
  initialRouteName: "Loading"
}));

/* Export */
export default App;
