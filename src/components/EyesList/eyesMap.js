import { ReactComponent as Original } from './svg/original.svg';
import { ReactComponent as OriginalPreview } from './svg/original-preview.svg';

import { ReactComponent as Blink } from './svg/blink.svg';
import { ReactComponent as BlinkPreview } from './svg/blink-preview.svg';

import { ReactComponent as Meh } from './svg/meh.svg';
import { ReactComponent as MehPreview } from './svg/meh-preview.svg';

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
  },
  {
    name: 'Blink',
    svg: Blink,
    previewSvg: BlinkPreview,
  },
  {
    name: 'Meh',
    svg: Meh,
    previewSvg: MehPreview,
  },
];
