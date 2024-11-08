export type Invitation = {
  createdAt: Date;
  emailOrPhone: string | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
