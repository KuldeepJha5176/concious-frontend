import LinkIcon from "@mui/icons-material/Link";

import { Button } from "./components/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Chips } from "./components/Chips";
import Card from "./components/Card";

function App() {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="   bg-zinc-900  mx-10  flex flex-col justify-center items-center ">
        <div className="flex flex-col md:flex-row w-full items-center md:gap-3 gap-3 md:justify-between m-4 ">
          <div className="shadow-xl shadow-black/30">
            <img
              src="../public/f523bb5a1e9f3b67816ed619f8657428.jpg"
              alt=""
              className="h-10 rounded-lg hover:h-10 hover:border-orange-600 hover:border-2 transition-all duration-300 "
            />
          </div>

          <div className=" flex gap-2 p-2 bg-zinc-600/30 w-fit rounded-lg shadow-xl shadow-black/30 ">
            <Button variant="secondary" />
          </div>
        </div>
        <div className="bg-zinc-600/30 md:mt-14 mt-14 flex shadow-xl shadow-black/30 w-[355px] rounded-xl md:w-[550px] border-gray-50/10 justify-between  border  p-1 text-gray-300 px-2">
          <input
            type="text"
            className=" placeholder:opacity-50 bg-zinc-800 px-4 p-2 bg-transparent w-[305px] focus:outline-none rounded-l-xl md:w-[550px]"
            placeholder="Search in natural language.."
          />
          <button className="border-l-[1px] border-gray-500/50 px-2 bg-zinc-800 rounded-r-xl hover:bg-zinc-700">
            <SearchIcon style={{ color: "gray" }} />
          </button>
        </div>
        <div className="flex gap-2 mt-2">
          <Chips text={"Urls"} />
          <Chips text={"Notes"} />
          <Chips text={"Randomize"} />
          <Chips text={"Date: Default"} />
        </div>
        <div className="flex gap-2 md:justify-center max-w-6xl md:min-w-[1024px] border-gray-100/10 border  mx-auto justify-center flex-wrap mt-8 p-6 rounded-lg bg-zinc-600/30">
          <Card
            title="Meeting Notes"
            type="note"
            content="Important poHere’s a 300-word paragraph on the importance of lifelong learning:  
 
 Lifelong learning is an essential pillar for personal and professional growth in today’s rapidly evolving world. With technology advancing at an unprecedented pace and industries undergoing constant transformation, the ability to adapt and acquire new skills has never been more crucial. Unlike traditional education, which often concludes in formal institutions, lifelong learning is a continuous process driven by curiosity and a desire to stay relevant. It fosters critical thinking, creativity, and resilience, enabling individuals to navigate challenges with confidence. Moreover, the accessibility of online platforms, workshops, and educational resources has democratized learning, making it easier than ever to explore diverse subjects from coding to philosophy. Lifelong learning also contributes to emotional well-being, as it encourages a growth mindset and a sense of accomplishment. Studies show that engaging in intellectual activities can improve cognitive functions, reduce stress, and even delay age-related cognitive decline. In the workplace, professionals who embrace lifelong learning are more likely to achieve career advancement, as they bring fresh perspectives and innovative ideas to their roles. Employers increasingly value adaptability and a willingness to learn over static expertise, recognizing that these qualities are key to sustaining organizational growth. Beyond career benefits, lifelong learning enriches personal life by expanding horizons and deepening understanding of the world. Whether it’s learning a new language, mastering a musical instrument, or exploring scientific concepts, the joy of discovery fosters a sense of purpose and connection to the broader community. Ultimately, lifelong learning is not just a tool for success but a philosophy that transforms how individuals perceive themselves and their potential. By cultivating curiosity and embracing change, we unlock opportunities to thrive in a dynamic world while contributing meaningfully to society.  
 
 Let me know if you'd like this refined or expanded!y's meeting...Important points from ay's meeting...Important points from ay's meeting...Important points from ay's meeting...Important points from today's meeting..."
          />

          <Card
            title="outbe video"
            type="url"
            url="https://www.youtube.com/watch?v=5JYJlQpni6o&t=833s"
          />

          <Card
            title="Big twitter heading"
            type="url"
            url="https://x.com/merishabh_singh/status/1879431445946745266"
          />
          <Card
            title="Tweet Link"
            type="url"
            url="https://x.com/salehdotdev/status/1879506316689039384"
          />
          <Card
            title="frist note"
            type="note"
            content="this is the first note i have written in this app and i am very happy to be here and write this note. i hope to write more notes in the future and"
          />

          <Card
            title="How-to get started with UNMS Research"
            type="url"
            url="https://www.youtube.com/watch?v=Es_l2JM12m8"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
