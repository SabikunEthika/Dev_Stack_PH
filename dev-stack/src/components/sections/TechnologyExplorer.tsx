import type { Technology } from '../../types';
import TechnologiesGrid from '../TechnologiesGrid';
import YourStack from '../YourStack';

interface TechnologyExplorerProps {
  selectedStack: Technology[];
  onAdd: (technology: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function TechnologyExplorer({
  selectedStack,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechnologyExplorerProps) {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-btn mb-2">
            Explore the{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-gray-600">
            Pick one technology per category to build your ideal stack
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8">
          <div>
            <TechnologiesGrid selectedStack={selectedStack} onAdd={onAdd} />
          </div>

          <div>
            <YourStack
              stack={selectedStack}
              onRemove={onRemove}
              onRemoveAll={onRemoveAll}
            />
          </div>
        </div>
      </div>
    </section>
  );
}