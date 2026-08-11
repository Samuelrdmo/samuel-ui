import type { SVGProps } from 'react';
import { ArrowRight } from 'pixelarticons/react/ArrowRight';
import { Article } from 'pixelarticons/react/Article';
import { Blocks } from 'pixelarticons/react/Blocks';
import { BracketsAngle } from 'pixelarticons/react/BracketsAngle';
import { CornerUpRight } from 'pixelarticons/react/CornerUpRight';
import { GitBranch } from 'pixelarticons/react/GitBranch';
import { Grid2x22 } from 'pixelarticons/react/Grid2x22';

/**
 * Same icon language as samuelrdmo.com: pixel art, monochrome, rendered small
 * with crispEdges so the pixel grid stays sharp instead of anti-aliasing into
 * mush. Only the names this site actually uses are mapped.
 */
const ICONS = {
  grid: Grid2x22,
  layers: Blocks,
  workflow: GitBranch,
  code: BracketsAngle,
  docs: Article,
  arrowRight: ArrowRight,
  arrowUpRight: CornerUpRight,
} satisfies Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element>;

export type PixelIconName = keyof typeof ICONS;

type PixelIconProps = {
  name: PixelIconName;
  size?: number;
  className?: string;
};

export function PixelIcon({ name, size = 12, className }: PixelIconProps) {
  const Icon = ICONS[name];

  return (
    <Icon
      width={size}
      height={size}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
    />
  );
}
