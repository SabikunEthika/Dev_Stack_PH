const badgeClasses: Record<string, string> = {
  orange: 'bg-orange-100 text-orange-700',
  blue: 'bg-blue-100 text-blue-700',
  teal: 'bg-teal-100 text-teal-700',
  green: 'bg-green-100 text-green-700',
  red: 'bg-red-100 text-red-700',
};

const difficultyClasses: Record<string, string> = {
  'Beginner-Friendly': 'bg-green-50 text-green-700',
  Intermediate: 'bg-yellow-50 text-yellow-700',
  Advanced: 'bg-red-50 text-red-700',
};

export function badgeClassFor(color?: string) {
  return badgeClasses[color ?? 'blue'] || 'bg-gray-100 text-gray-700';
}

export function difficultyClassFor(level: string) {
  return difficultyClasses[level] || 'bg-gray-50 text-gray-700';
}