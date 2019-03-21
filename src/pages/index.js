import React from "react"
import { createMemoryHistory } from "history"
import { Route, Router, Switch } from "react-router-dom"

import "assets/scss/material-kit-pro-react.scss"
import "typeface-roboto"
import "typeface-roboto-slab"
// pages for this product
import AboutUsPage from "./about-us"
import BlogPostPage from "./blog-post"
import BlogPostsPage from "./blog-posts"
import ComponentsPage from "./components"
import ContactUsPage from "./contact-us"
import EcommercePage from "./ecommerce-page"
import ErrorPage from "./error-page"
import LandingPage from "./landing-page"
import LoginPage from "./login-page"
import PresentationPage from "views/PresentationPage/PresentationPage"
import PricingPage from "./pricing"
import ProductPage from "./product-page"
import ProfilePage from "./profile-page"
import SectionsPage from "./sections"
import ShoppingCartPage from "./shopping-cart-page"
import SignupPage from "./signup-page"

let hist = createMemoryHistory()

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/blog-post" component={BlogPostPage} />
      <Route path="/blog-posts" component={BlogPostsPage} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/ecommerce-page" component={EcommercePage} />
      <Route path="/error-page" component={ErrorPage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={PresentationPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/product-page" component={ProductPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/sections" component={SectionsPage} />
      <Route path="/shopping-cart-page" component={ShoppingCartPage} />
      <Route path="/signup-page" component={SignupPage} />
    </Switch>
  </Router>
)
