import { create } from "zustand";
import { User, Post } from "../types/types";

interface userStore {
  users: User[];
  setUser: (users: User[]) => void;
}

interface postStore {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
}

export const useUserStore = create<userStore>((set) => ({
  users: [],
  setUser: (users) => set({ users }),
}));

export const usePostStore = create<postStore>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));
