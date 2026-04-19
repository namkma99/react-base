import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/shared/Layout';
import { NotFound } from '@/components/shared/NotFound';
import { HomePage } from '@/pages/HomePage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [{ index: true, element: <HomePage /> }],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
