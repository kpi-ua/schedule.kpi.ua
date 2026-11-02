interface Props {
  title?: string;
}

export const EmptyCover = ({ title }: Props) => (
  <div className="flex h-full grow flex-col items-center justify-center bg-gray-50">
    <span className="text-3xl font-light text-gray-300">{title || 'Виберіть групу зі списку'}</span>
  </div>
);
