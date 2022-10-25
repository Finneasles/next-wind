export * from './md'

export const defaultStaticTitle = (title?: string) => {
    return title ? title : "Unnamed Page";
  };
  
  export const staticTitleEnd = () => {
    return process.env.NEXT_PUBLIC_STATIC_TITLE
      ? " — " + process.env.NEXT_PUBLIC_STATIC_TITLE
      : null;
  };