import { ReactComponent as Original } from './svg/original.svg';
import { ReactComponent as OriginalPreview } from './svg/original-preview.svg';
import { ReactComponent as OriginalBlueprint } from './svg/original-blueprint.svg';

import { ReactComponent as Blink } from './svg/blink.svg';
import { ReactComponent as BlinkPreview } from './svg/blink-preview.svg';
import { ReactComponent as BlinkBlueprint } from './svg/blink-blueprint.svg';

import { ReactComponent as Meh } from './svg/meh.svg';
import { ReactComponent as MehPreview } from './svg/meh-preview.svg';
import { ReactComponent as MehBlueprint } from './svg/meh-blueprint.svg';

export const eyesMap = {
  original: Original,
  blink: Blink,
  meh: Meh,
};

export const eyesArray = [
  {
    name: 'Original',
    svg: Original,
    previewSvg: OriginalPreview,
    blueprintSvg: OriginalBlueprint,
  },
  {
    name: 'Blink',
    svg: Blink,
    previewSvg: BlinkPreview,
    blueprintSvg: BlinkBlueprint,
  },
  {
    name: 'Meh',
    svg: Meh,
    previewSvg: MehPreview,
    blueprintSvg: MehBlueprint,
  },
];
