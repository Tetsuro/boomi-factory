import { ReactComponent as Original } from './svg/original.svg';
import { ReactComponent as OriginalPreview } from './svg/original-preview.svg';
import { ReactComponent as OriginalBlueprint } from './svg/original-blueprint.svg';

import { ReactComponent as Blink } from './svg/blink.svg';
import { ReactComponent as BlinkPreview } from './svg/blink-preview.svg';
import { ReactComponent as BlinkBlueprint } from './svg/blink-blueprint.svg';

import { ReactComponent as Meh } from './svg/meh.svg';
import { ReactComponent as MehPreview } from './svg/meh-preview.svg';
import { ReactComponent as MehBlueprint } from './svg/meh-blueprint.svg';

import { ReactComponent as OldTimey } from './svg/old-timey.svg';
import { ReactComponent as OldTimeyPreview } from './svg/old-timey-preview.svg';
import { ReactComponent as OldTimeyBlueprint } from './svg/old-timey-blueprint.svg';

import { ReactComponent as Hearts } from './svg/hearts.svg';
import { ReactComponent as HeartsPreview } from './svg/hearts-preview.svg';
import { ReactComponent as HeartsBlueprint } from './svg/hearts-blueprint.svg';

import { ReactComponent as Dead } from './svg/dead.svg';
import { ReactComponent as DeadPreview } from './svg/dead-preview.svg';
import { ReactComponent as DeadBlueprint } from './svg/dead-blueprint.svg';

import { ReactComponent as Rage } from './svg/rage.svg';
import { ReactComponent as RagePreview } from './svg/rage-preview.svg';
import { ReactComponent as RageBlueprint } from './svg/rage-blueprint.svg';

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
    name: 'Dead',
    svg: Dead,
    previewSvg: DeadPreview,
    blueprintSvg: DeadBlueprint,
  },
  {
    name: 'Hearts',
    svg: Hearts,
    previewSvg: HeartsPreview,
    blueprintSvg: HeartsBlueprint,
  },
  {
    name: 'Meh',
    svg: Meh,
    previewSvg: MehPreview,
    blueprintSvg: MehBlueprint,
  },
  {
    name: 'Old Timey',
    svg: OldTimey,
    previewSvg: OldTimeyPreview,
    blueprintSvg: OldTimeyBlueprint,
  },
  {
    name: 'Rage',
    svg: Rage,
    previewSvg: RagePreview,
    blueprintSvg: RageBlueprint,
  },
];
