// SEE: https://nextjs.org/docs/basic-features/layouts#with-typescript
export type NextPageWithTemplate = NextPage & {
  getTemplate?: (page: React.ReactElement) => React.ReactNode;
};
export type AppPropsWithTemplate = AppProps & {
  Component: NextPageWithTemplate;
};
