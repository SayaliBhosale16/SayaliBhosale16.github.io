interface Achievement {
  text: string;
  link?: string;
}

interface Profile {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
  education: {
    degree: string;
    school: string;
    graduation: string;
    gpa: string;
  };
  certifications: { text: string; link?: string }[];
  achievements: Achievement[];
}

export const profile: Profile = {
  name: "Sayali Sanjeevkumar Bhosale",
  tagline: "Full-Stack Engineer · AI Engineer · 3 YOE",
  bio: "Full-stack Software Engineer shipping TypeScript + Python products at startup velocity. Fluent in AI-accelerated development — not just autocomplete, but agentic end-to-end implementation.",
  email: "sayalibh2212@gmail.com",
  phone: "+1-407-574-1752",
  linkedin: "https://www.linkedin.com/in/bhosale-sayali/",
  github: "https://github.com/SayaliBhosale16/",
  location: "Orlando, Florida",
  education: {
    degree: "M.S. Computer Science",
    school: "University of Central Florida",
    graduation: "May 2024",
    gpa: "3.92/4.0",
  },
  certifications: [
    {
      text: "Microsoft Azure AI Engineer Associate (AI-102)",
      link: "https://learn.microsoft.com/en-us/users/sayalibhosale-4508/credentials/b043a0a45500834b",
    },
    {
      text: "Microsoft Azure AI Fundamentals (AI-900)",
      link: "https://learn.microsoft.com/en-us/users/sayalibhosale-4508/credentials/aa540ad93b4f236b",
    },
    {
      text: "Microsoft Azure Fundamentals (AZ-900)",
      link: "https://learn.microsoft.com/en-us/users/sayalibhosale-4508/credentials/4594c67a9cd03895",
    },
  ],
  achievements: [
    {
      text: "Published: \"Civil Complaints Management System using ML\" — IRJET 2021, cited 10+ times",
      link: "https://drive.google.com/file/d/14l4ctmerwcZVzX738mjtUZwmtXN2x1Vz/view?usp=sharing",
    },
    {
      text: "Keynote Speaker: Vision-Based Recognition Systems using ML — 200+ professionals",
      link: "https://drive.google.com/file/d/14nQniksjBregzNUeS9NhttrUTt7U_FXo/view?usp=sharing",
    },
    { text: "Finalist: Smart India Hackathon 2020 — indoor navigation prototype" },
    { text: "Accenture Team Extra Miler Award 2022 — outstanding technical improvement" },
  ],
};
