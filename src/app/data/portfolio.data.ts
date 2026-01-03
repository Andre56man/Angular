/**
 * Données exemple pour le portfolio
 * Modifiez ces données pour personnaliser votre portfolio
 */
import {
  Introduction,
  About,
  ServicesSection,
  PortfolioSection,
  ResumeSection,
  TestimonialSection,
  ContactSection,
  BlogSection,
  VideoSection
} from '../models';

export const introductionData: Introduction = {
  welcomeText: "I'm a",
  roles: ["Web Developer", "Graphic Designer"],
  name: "Kevin Miller",
  backgroundImageUrl: "https://via.placeholder.com/1405x937",
  buttonText: "Learn More",
  buttonLink: "#about"
};

export const aboutData: About = {
  title: "Who Am I",
  subtitle: "About Me",
  description: "Get to know me",
  info: {
    fullName: "Kevin Miller",
    age: "32 Years Old",
    experience: "20 years",
    location: "New York, USA",
    email: "kevinmiller@alb.com",
    phone: "+1 xxx-888-7887",
    website: "www.kevinmiller.com",
    description: "Hi! There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    skills: ["Web Development", "UI/UX Design", "Graphic Design"]
  }
};

export const servicesData: ServicesSection = {
  title: "What I Do",
  subtitle: "Services",
  description: "It is a long established fact that a reader will be distracted by the readable content",
  services: [
    {
      icon: "mbri-database",
      title: "Development",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      icon: "mbri-tablet",
      title: "Responsive",
      description: "It is a long established fact that a reader will be distracted by the readable content"
    },
    {
      icon: "mbri-code",
      title: "Clean Code",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ]
};

export const portfolioData: PortfolioSection = {
  title: "My Projects",
  subtitle: "Portfolio",
  description: "There are many variations of passages of Lorem Ipsum.",
  items: [
    {
      id: "1",
      title: "Project Title",
      category: "frontenddevelopment",
      imageUrl: "https://via.placeholder.com/510x600",
      type: "image",
      link: "https://via.placeholder.com/510x600",
      icon: "mbri-photos"
    },
    {
      id: "2",
      title: "Video Project",
      category: "backenddevelopment",
      imageUrl: "https://via.placeholder.com/510x600",
      type: "video",
      link: "https://www.youtube.com/watch?v=oC1m-dTFX6g",
      icon: "mbri-video-play"
    }
  ]
};

export const resumeData: ResumeSection = {
  title: "My Experience",
  subtitle: "Resume",
  description: "If you are going to use a passage of Lorem Ipsum",
  education: [
    {
      title: "Computer Science",
      institution: "University of Boston",
      period: "2010 - 2016",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
    },
    {
      title: "Master Computer Science",
      institution: "University of Boston",
      period: "2016 - 2018",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
    }
  ],
  experience: [
    {
      title: "UI/UX Designer",
      company: "Tech Company",
      period: "2010 - 2016",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
    },
    {
      title: "Web Developer",
      company: "Design Studio",
      period: "2016 - 2018",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
    }
  ],
  skills: [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Angular", level: 80 },
    { name: "React", level: 75 }
  ]
};

export const testimonialData: TestimonialSection = {
  backgroundImageUrl: "https://via.placeholder.com/1920x1080",
  testimonials: [
    {
      id: "1",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tenetur nisi iste, ipsa obcaecati quis laudantium error distinctio excepturi",
      authorName: "Linzi Landry",
      authorRole: "Graphic Designer",
      authorImageUrl: "https://via.placeholder.com/70x70"
    },
    {
      id: "2",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tenetur nisi iste, ipsa obcaecati quis laudantium error distinctio excepturi",
      authorName: "John Doe",
      authorRole: "Web Developer",
      authorImageUrl: "https://via.placeholder.com/70x70"
    }
  ]
};

export const contactData: ContactSection = {
  title: "Get in Touch",
  subtitle: "Contact Me",
  description: "It is a long established fact that a reader will be distracted by the readable content",
  contactInfos: [
    {
      type: "email",
      icon: "mbri-letter",
      label: "Email Us",
      value: "kevinmiller@alb.com",
      link: "mailto:kevinmiller@alb.com"
    },
    {
      type: "phone",
      icon: "mbri-mobile",
      label: "Call",
      value: "+1 xxx-888-7887",
      link: "tel:+1000123456789"
    },
    {
      type: "location",
      icon: "mbri-pin",
      label: "Location",
      value: "New York, USA",
      link: undefined
    }
  ]
};

export const blogData: BlogSection = {
  title: "Latest News",
  subtitle: "Blog",
  description: "Read my latest articles and thoughts",
  posts: [
    {
      id: "1",
      title: "Blog Post Title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://via.placeholder.com/800x600",
      author: "Kevin Miller",
      date: "2024-01-15",
      category: "Web Development",
      tags: ["Angular", "TypeScript"],
      link: "#"
    }
  ]
};

export const videoData: VideoSection = {
  title: "Watch My Work",
  subtitle: "Video",
  description: "Check out my latest video projects",
  videoUrl: "https://www.youtube.com/watch?v=oC1m-dTFX6g",
  thumbnailImageUrl: "https://via.placeholder.com/1920x1080",
  buttonText: "Watch Video"
};


