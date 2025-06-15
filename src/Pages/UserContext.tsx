import { createContext, useState, type ReactNode } from "react";

interface UserContextProps {
  events: EventData[];
  addEvent: (eventData: EventData) => void;
  registerEvent: (eventId: string, user: string) => void;
  cancelEvent: (eventId: string) => void;
}

export interface EventData {
  id?: string;
  title?: string;
  StartDate?: string;
  EndDate?: string;
  StartTime?: string;
  EndTime?: string;
  location?: string;
  type?: "academic" | "social" | "career";
  description?: string;
  attendees?: string[];
  capacity?: number;
}

export const UserContext = createContext<UserContextProps>({
  events: [],
  addEvent: () => {},
  registerEvent: () => {},
  cancelEvent: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<EventData[]>([]);

  const addEvent = (eventData: EventData) => {
    setEvents((prevEvents) => [...prevEvents, eventData]);
  };

  const registerEvent = (eventId: string, user: string) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId
          ? {
              ...event,
              attendees: [...(event.attendees || []), user],
            }
          : event
      )
    );
  };

  const cancelEvent = (eventId: string) => {
    setEvents((prevEvents) =>
      prevEvents.filter((event) => event.id !== eventId)
    );
  };

  return (
    <UserContext.Provider
      value={{ events, addEvent, registerEvent, cancelEvent }}
    >
      {children}
    </UserContext.Provider>
  );
};
