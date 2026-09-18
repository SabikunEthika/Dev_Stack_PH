import type { Technology } from '../types';
import TechnologyCard from './TechnologyCard';
import LoadingSpinner from './ui/LoadingSpinner';
import { useTechnologies } from '../hooks/useTechnologies';

interface TechnologiesGridProps {
  selectedStack: Technology[];
  onAdd: (tech: Technology) => void;
}

export default function TechnologiesGrid({
  selectedStack,
  onAdd,
}: TechnologiesGridProps) {
  const { items: technologies, isLoading } = useTechnologies();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <TechnologyCard
          key={tech.id}
          tech={tech}
          isAdded={selectedStack.some((item) => item.id === tech.id)}
          onAdd={() => onAdd(tech)}
        />
      ))}
    </div>
  );
}