import { X } from 'lucide-react';
import type { Technology } from '../types';
import { badgeClassFor, difficultyClassFor } from '../utils/technologyStyles';

interface TechnologyCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: () => void;
  onRemove?: () => void;
  isInStack?: boolean;
}

export default function TechnologyCard({
  tech: technology,
  isAdded,
  onAdd,
  onRemove,
  isInStack = false,
}: TechnologyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center md:items-start text-center md:text-left h-full border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${badgeClassFor(technology.badgeColor)}`}>
          {technology.badge}
        </span>
        {isInStack && onRemove && (
          <button
            onClick={onRemove}
            className="text-red-500 hover:text-red-700 transition"
          >
            <X size={20} />
          </button>
        )}
      </div>

      <img src={technology.icon} alt={technology.name} className="w-10 h-10 mb-4" />

      <h3 className="text-xl font-bold text-dark-btn mb-2">{technology.name}</h3>

      <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
        {technology.category}
      </span>

      <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
        {technology.description}
      </p>

      <div className="flex justify-between items-center w-full mb-6">
        <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${difficultyClassFor(technology.difficulty)}`}>
          {technology.difficulty}
        </span>
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 text-lg">★</span>
          <span className="font-semibold text-gray-900">{technology.rating}</span>
        </div>
      </div>

      <button
        onClick={onAdd}
        disabled={isAdded}
        className={`w-full py-2.5 rounded-lg font-semibold transition ${
          isAdded
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-dark-btn text-white hover:bg-gray-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
}