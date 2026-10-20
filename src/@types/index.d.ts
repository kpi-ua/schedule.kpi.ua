declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.css';

declare module '*.svg?react' {
  import type { FC, SVGProps } from 'react';
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
