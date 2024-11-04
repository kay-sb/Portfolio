// home
import Profile from "@/components/ProfileCart";
import About from "@/components/About";
import ProjectList from "@/components/RecentProjects";
import Form from "@/components/Form";
import ExperoenceList from "@/components/ExperienceList";
import PremiumTools from "@/components/PremiumTools";
import Thoughts from "@/components/InspirationThoughts";


const HomePage: React.FC = () => {
  return (
    
    <div>
      <div className="min-h-screen flex flex-col items-center ">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center mt-20  ">
          <Profile />
          <div className="flex-1 text-center md:text-left mt-10 md:mt-5">
            <About />
            <ProjectList />
            <ExperoenceList />
            <PremiumTools />
            <Thoughts />
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
