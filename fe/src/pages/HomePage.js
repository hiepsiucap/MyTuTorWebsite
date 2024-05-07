/** @format */
import Hero from "../components/Hero";
import Rate from "../components/Rate";
import Faq from "../components/faq";
import Subject from "../components/subject";
import Featured from "../components/featured";
import FeaturedProduct from "../components/FeaturedProduct";
import StudyResource from "../components/StudyResource";
import Testimonial from "../components/testimonial";
import CTA from "../components/CTA";
import { useSelector } from "react-redux";

const HomePage = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <>
      <Hero></Hero>
      <Rate></Rate>
      <FeaturedProduct></FeaturedProduct>
      <Featured></Featured>
      <Faq></Faq>
      <Subject></Subject>
      <StudyResource></StudyResource>
      <Testimonial></Testimonial>
      <CTA></CTA>
    </>
  );
};
export default HomePage;
