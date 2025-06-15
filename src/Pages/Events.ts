interface EventData {
  id: string;
  title: string;
  date: string;
  location: string;
  type: "academic" | "social" | "career";
  attendees: string[];
  capacity: number;
  description: string;
}

export const EventsArray: EventData[] = [
  {
    id: "CS-FAIR-2023",
    title: "Tech Career Fair",
    date: "2023-10-15",
    location: "Student Union",
    type: "career",
    description:
      "A chance for students to network with top tech companies and explore job opportunities in the field of technology.",
    attendees: ["mike@campus.edu", "tina@campus.edu"],
    capacity: 100,
  },
  {
    id: "BIO-LAB-2023",
    title: "Biology Lab Tour",
    date: "2023-10-16",
    location: "Science Building",
    type: "academic",
    description:
      "Take a guided tour through the cutting-edge biology labs and learn about ongoing research in biology.",
    attendees: ["john@campus.edu", "sarah@campus.edu"],
    capacity: 30,
  },
  {
    id: "SOCIAL-NIGHT-2023",
    title: "Campus Social Night",
    date: "2023-10-17",
    location: "Campus Lounge",
    type: "social",
    description:
      "Join us for a fun and casual social evening with live music, games, and snacks to meet new people on campus.",
    attendees: ["emily@campus.edu", "lucas@campus.edu"],
    capacity: 200,
  },
  {
    id: "RESUME-WORKSHOP-2023",
    title: "Resume Building Workshop",
    date: "2023-10-18",
    location: "Career Center",
    type: "career",
    description:
      "A hands-on workshop to help you craft a standout resume that will catch the attention of recruiters.",
    attendees: ["david@campus.edu", "kelly@campus.edu"],
    capacity: 50,
  },
  {
    id: "STUDENT-ART-SHOW-2023",
    title: "Student Art Show",
    date: "2023-10-19",
    location: "Arts Building",
    type: "social",
    description:
      "Celebrate creativity with fellow students at the annual Student Art Show, featuring artwork from your peers.",
    attendees: ["anna@campus.edu", "ryan@campus.edu"],
    capacity: 100,
  },
  {
    id: "CS-TALK-2023",
    title: "Artificial Intelligence in Medicine",
    date: "2023-10-20",
    location: "Lecture Hall A",
    type: "academic",
    description:
      "A guest lecture on the latest developments in artificial intelligence and its applications in healthcare and medicine.",
    attendees: ["zane@campus.edu", "alice@campus.edu"],
    capacity: 80,
  },
  {
    id: "RECRUITING-NIGHT-2023",
    title: "Corporate Recruiting Night",
    date: "2023-10-21",
    location: "Student Union",
    type: "career",
    description:
      "Meet with top corporations and learn about internship and full-time job opportunities in a variety of fields.",
    attendees: ["steve@campus.edu", "george@campus.edu"],
    capacity: 150,
  },
  {
    id: "MEDITATION-SESSION-2023",
    title: "Mindfulness Meditation",
    date: "2023-10-22",
    location: "Wellness Center",
    type: "social",
    description:
      "Join us for a peaceful meditation session to reduce stress and improve your mental well-being.",
    attendees: ["claire@campus.edu", "oliver@campus.edu"],
    capacity: 30,
  },
  {
    id: "SENIOR-PANEL-2023",
    title: "Senior Graduation Panel",
    date: "2023-10-23",
    location: "Main Auditorium",
    type: "academic",
    description:
      "A panel discussion featuring seniors who share their experiences, tips, and advice on navigating the final year of college.",
    attendees: ["mike@campus.edu", "julia@campus.edu"],
    capacity: 150,
  },
  {
    id: "GAME-NIGHT-2023",
    title: "Game Night Extravaganza",
    date: "2023-10-24",
    location: "Student Lounge",
    type: "social",
    description:
      "An evening of games, snacks, and fun! Bring your friends and enjoy a night of board games, video games, and more.",
    attendees: ["ben@campus.edu", "lucy@campus.edu"],
    capacity: 100,
  },
];
