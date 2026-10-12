interface Props {
  title?: string;
}

export const EmptyCover = ({ title }: Props) => (
  <div className="flex flex-col items-center justify-center h-full bg-gray-50 grow">
    <span className="text-3xl font-light text-gray-300">{title || 'Виберіть групу зі списку'}</span>
  </div>
);
