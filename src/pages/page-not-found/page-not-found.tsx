"use client"
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useBreadcrumbs } from '@/hooks/use-breadcrumbs';
import { useEffect } from 'react';

export default function PageNotFound() {
  const navigate = useNavigate();

  const handleGoBack = (event: any) => {
    event.preventDefault();
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  // set page breadcrumbs
  const { updateBreadcrumbs } = useBreadcrumbs()
  useEffect(() => {
    updateBreadcrumbs([
      { label: "Page Not Found" },
    ])
    return () => {
      updateBreadcrumbs([])
    }
  }, [])

  return (
    <main className="flex flex-col gap-12 justify-center items-center">
      Error 404 | Page Not Found
      <Button onClick={handleGoBack} className='cursor-pointer'>
        Go Back
      </Button>
    </main>
  );
}
