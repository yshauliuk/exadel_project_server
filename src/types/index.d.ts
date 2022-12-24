export {};

export type fileObject = {
  photos: {
    name: string;
    data: Buffer;
    dateOfLoading: Date;
  };
};

declare global {
  namespace Express {
    interface Request {
      files: fileObject;
    }
  }
}