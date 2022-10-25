export const getDefaultStaticTitle = (title?: string) => {
    return title ? title : "Unnamed Page";
  };
  
  export const getStaticTitleEnd = () => {
    return process.env.NEXT_PUBLIC_STATIC_TITLE
      ? " — " + process.env.NEXT_PUBLIC_STATIC_TITLE
      : null;
  };