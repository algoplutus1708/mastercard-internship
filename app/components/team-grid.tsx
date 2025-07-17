"use client"

import { useEffect, useState } from "react"
import { TeamCard } from "./team-card"

const teamMembers = [
  {
    id: 1,
    name: "Sakshi Agarwal",
    role: "Sakshi",
    image: "/placeholder1.jpg?height=300&width=300",
    statement:
      "I learned a lot from you—especially about leadership and professionalism. Thank you so much for inviting me to your house party; I had a great time, and it’s a memory I’ll always cherish—getting to visit my VP’s house during my internship is truly special. Thank you for making my journey so memorable, and also for showing genuine interest in the projects I worked on.",
    cardStyle: "neon-orange",
    shape: "rounded-3xl",
    animation: "hover:rotate-3",
  },
  {
    id: 2,
    name: "James Herrmann",
    role: "Jim",
    image: "/placeholder2.jpg?height=300&width=300",
    statement:
      "I truly appreciated your down-to-earth nature. You're my VP—so much more senior than me—but the way you interacted with me and genuinely listened to my ideas was honestly amazing. Please try corn caesar salad.",
    cardStyle: "gradient-pink",
    shape: "rounded-[2rem]",
    animation: "hover:-rotate-2",
  },
  {
    id: 3,
    name: "Roger Sequeira",
    role: "Sundar Pichai",
    image: "/placeholder3.jpg?height=300&width=300",
    statement:
      "You’re my Director, but over the course of those seven days, I found a true mentor in you. I was genuinely fascinated by the depth of your technical knowledge. Most importantly, I truly admired your personality. I really love Bombay.",
    cardStyle: "holographic",
    shape: "rounded-2xl",
    animation: "hover:scale-105",
  },
  {
    id: 4,
    name: "Shawn Hilleary",
    role: "Shawan",
    image: "/placeholder4.jpg?height=300&width=300",
    statement:
      "I truly cherished the time I got to spend with you. Thank you so much for taking the time to listen to the ideas I had and for giving them your thoughtful attention. It meant a lot to feel heard and valued.",
    cardStyle: "neon-purple",
    shape: "rounded-3xl",
    animation: "hover:rotate-1",
  },
  {
    id: 5,
    name: "Abhishek Ringsia",
    role: "Abhishek",
    image: "/placeholder5.jpg?height=300&width=300",
    statement:
      "The most important thing I learned from you is how you balance fun with a strong sense of seriousness toward your work. Initially, I was heading in the wrong direction, but you guided me—and I’m truly thankful to you for that.",
    cardStyle: "gradient-blue",
    shape: "rounded-[2.5rem]",
    animation: "hover:-rotate-1",
  },
  {
    id: 6,
    name: "Shreyata Kulkarni",
    role: "My Buddy",
    image: "/placeholder6.jpg?height=300&width=300",
    statement:
      "You are really a very good mentor. You’ve inspired me to keep pushing my limits and to never settle. Your dedication and perfectionist nature have truly motivated me. I’ve learned so much from you—and the help, guidance, and encouragement I’ve received from you mean the world to me.Once again, I’m really sorry for disturbing you again and again with my childish questions, but thank you from the bottom of my heart for always being so patient with me.",
    cardStyle: "neon-cyan",
    shape: "rounded-2xl",
    animation: "hover:rotate-2",
  },
  {
    id: 7,
    name: "Swapnil Badera",
    role: "Swapnil",
    image: "/placeholder7.jpg?height=300&width=300",
    statement:
      "I still remember our first conversation—it was about Rally, how to search for information on the test cases, and also about ZULU. I genuinely enjoyed your company. You made me feel very comfortable, and I truly enjoyed our conversations about real-world tech problems and their solutions. And yeah... I still feel like that cake wasn’t eggless! Also, wishing you a very Happy Birthday in advance!",
    cardStyle: "holographic",
    shape: "rounded-2xl",
    animation: "hover:rotate-1",
  },
  {
    id: 8,
    name: "Aditya Raj Pandey",
    role: "Aditya",
    image: "/placeholder8.jpg?height=300&width=300",
    statement:
      "I still remember the first day I spoke with you—it was about a doubt I had while setting up the repo. You actually scolded me for my mistakes, but that kind of guidance means a lot. I really enjoyed your company, and I’ll definitely miss the coffee sessions we had.",
    cardStyle: "gradient-orange",
    shape: "rounded-3xl",
    animation: "hover:scale-110",
  },
  {
    id: 9,
    name: "Vikas Raghav",
    role: "Vikas",
    image: "/placeholder9.jpg?height=300&width=300",
    statement:
      "We have the same Delhi vibe. I learned a lot of techinal stuffs from you. Our conversations were really special",
    cardStyle: "neon-pink",
    shape: "rounded-[2rem]",
    animation: "hover:-rotate-3",
  },
  {
    id: 10,
    name: "Shreeti Kag",
    role: "Shreeti",
    image: "/placeholder10.jpg?height=300&width=300",
    statement:
      "Thanks for the Fries but some of your treats are actually pending - Setting up your laptop, Birthday Treat. But jokes apart thanks for the moral support that you have given. Also thanks for accepting my childish behaviour",
    cardStyle: "gradient-purple",
    shape: "rounded-3xl",
    animation: "hover:scale-105",
  },
  {
    id: 11,
    name: "Rahul Tiwari",
    role: "Rahul",
    image: "/placeholder11.jpg?height=300&width=300",
    statement:
      "First of all, thank you for helping me set up the repo. You’re actually very senior to me, but I always got the vibe that you’re super chill and approachable. It’s cool how we have a similar taste in music—I’d love to create a Spotify Blend with you sometime!",
    cardStyle: "neon-orange",
    shape: "rounded-[2.5rem]",
    animation: "hover:-rotate-2",
  },
  {
    id: 12,
    name: "Macdickson Fernandes",
    role: "Mac",
    image: "/placeholder12.jpg?height=300&width=300",
    statement:
      "Mac actually owns a Mac. I really enjoyed you company and most imporantly our discussions about the latest tech in the industry. I am really fascinated by your tech knowledges",
    cardStyle: "gradient-cyan",
    shape: "rounded-2xl",
    animation: "hover:rotate-2",
  },
  {
    id: 13,
    name: "Chetan Patel",
    role: "Chetan",
    image: "/placeholder13.jpg?height=300&width=300",
    statement:
      "I still remember about my first conversation with you regarding setting up my laptop. The advices and guidances given by you is surely priceless. Jai Maharashtra",
    cardStyle: "neon-purple",
    shape: "rounded-3xl",
    animation: "hover:scale-110",
  },
  {
    id: 14,
    name: "Manjush Borse",
    role: "Manjush",
    image: "/placeholder14.jpg?height=300&width=300",
    statement:
      "Thanks for reviving cricket into me. Maybe silently I am also an RCB Fan.",
    cardStyle: "gradient-pink",
    shape: "rounded-[2rem]",
    animation: "hover:-rotate-1",
  },
  {
    id: 15,
    name: "Yogesh Kumare",
    role: "Yogesh",
    image: "/placeholder15.jpg?height=300&width=300",
    statement:
      "Thanks for the lovely conversations we had. Happy 2 months Anniversary.",
    cardStyle: "holographic",
    shape: "rounded-2xl",
    animation: "hover:rotate-3",
  },
  {
    id: 16,
    name: "Bhumika Kohli",
    role: "Bhumika",
    image: "/placeholder16.jpg?height=300&width=300",
    statement:
      "You actualy gave me the first KT. Well if I have another week left I would have completed the Splunk Alerts and the Splunk Dashboard.",
    cardStyle: "neon-cyan",
    shape: "rounded-3xl",
    animation: "hover:scale-105",
  },
  {
    id: 17,
    name: "Asmitha Patil",
    role: "Asmitha",
    image: "/placeholder17.jpg?height=300&width=300",
    statement:
      "Thanks for setting up copilot in my system.",
    cardStyle: "gradient-blue",
    shape: "rounded-[2.5rem]",
    animation: "hover:-rotate-2",
  },
  {
    id: 18,
    name: "Arun Kumar",
    role: "Arun",
    image: "/placeholder18.jpg?height=300&width=300",
    statement:
      "We have that common Army and KV background. We actually had very less interaction(1 Day). But it was very fruitful to me",
    cardStyle: "neon-pink",
    shape: "rounded-2xl",
    animation: "hover:rotate-1",
  },
  {
    id: 19,
    name: "Aruna Matre",
    role: "Aruna",
    image: "/placeholder19.jpg?height=300&width=300",
    statement:
      "Thanks for helping me setup the Certs file in my system",
    cardStyle: "gradient-orange",
    shape: "rounded-3xl",
    animation: "hover:scale-110",
  },
  {
    id: 20,
    name: "Bipin Tripathi",
    role: "Bipin",
    image: "/placeholder20.jpg?height=300&width=300",
    statement:
      "Thanks for the small session that you gave me about Product Management. And you actually have a great personality",
    cardStyle: "neon-orange",
    shape: "rounded-[2rem]",
    animation: "hover:-rotate-3",
  },
  {
    id: 21,
    name: "Swanand Kanekar",
    role: "Swanand",
    image: "/placeholder21.jpg?height=300&width=300",
    statement:
      "Thank you for teaching me how to play Uno, and also for understanding that I don't drink when you saw me pouring Mirinda into the glass.",
    cardStyle: "holographic",
    shape: "rounded-2xl",
    animation: "hover:rotate-2",
  },
  {
    id: 22,
    name: "Shobha Ghule Phad",
    role: "Shobha",
    image: "/placeholder22.jpg?height=300&width=300",
    statement:
      "We didn’t have many conversations, but I still remember that you helped me find where our team sits on the 13th floor",
    cardStyle: "gradient-purple",
    shape: "rounded-3xl",
    animation: "hover:scale-105",
  },
  {
    id: 23,
    name: "Abhishek Kulshrestha",
    role: "Abhishek",
    image: "/placeholder23.jpg?height=300&width=300",
    statement:
      "We spent only a short amount of time together, but thank you for trying the salad I recommended on the first day",
    cardStyle: "neon-cyan",
    shape: "rounded-[2.5rem]",
    animation: "hover:-rotate-1",
  }
]

export function TeamGrid() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="team-section" className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`transform transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0 rotate-0 scale-100" : "opacity-0 translate-y-20 rotate-6 scale-90"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <TeamCard member={member} index={index} />
          </div>
        ))}
      </div>
    </div>
  )
}
