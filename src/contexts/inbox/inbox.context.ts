import React from "react";

export interface InboxInterface {
  contact: {
    firstName: string;
    lastName: string;
    mobile?: {
      mnumber?: any;
    };
  };
  unread: string[];
  lastMessage: {
    message: string;
  };
  created: {
    at: string;
  };
  type: string;
  userId: number;
  block: boolean;
}

const InboxContext = React.createContext<InboxInterface[] | []>([]);

export default InboxContext;

