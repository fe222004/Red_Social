export interface StoryI {
  id: number;
  image: string;
  created_at: string;
  user: {
    id: number;
    username: string;
    userImage: string;
  };
}
