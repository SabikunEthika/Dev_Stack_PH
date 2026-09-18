import { useEffect, useState } from 'react';
import technologiesData from '../data/technologies.json';
import type { Technology } from '../types';

export function useTechnologies() {
  const [items, setItems] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchTechnologies = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (isMounted) {
        setItems(technologiesData as Technology[]);
        setIsLoading(false);
      }
    };

    fetchTechnologies();

    return () => {
      isMounted = false;
    };
  }, []);

  return { items, isLoading };
}