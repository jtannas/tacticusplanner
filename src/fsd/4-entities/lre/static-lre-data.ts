/* eslint-disable import-x/no-internal-modules */
import aunshiJson from '@/data/lre/1-Aunshi.json';
import luciusJson from '@/data/lre/10-Lucius.json';
import farsightJson from '@/data/lre/11-Farsight.json';
import shadowsunJson from '@/data/lre/2-Shadowsun.json';
import ragnarJson from '@/data/lre/3-Ragnar.json';
import vitruviusJson from '@/data/lre/4-Vitruvius.json';
import kharnJson from '@/data/lre/5-Kharn.json';
import mephistonJson from '@/data/lre/6-Mephiston.json';
import patermineJson from '@/data/lre/7-Patermine.json';
import danteJson from '@/data/lre/8-Dante.json';
import trajannJson from '@/data/lre/9-Trajann.json';
/* eslint-enable import-x/no-internal-modules */

import { LegendaryEventStaticSchema } from './static-data.model';

export const aunshi = LegendaryEventStaticSchema.parse(aunshiJson);
export const dante = LegendaryEventStaticSchema.parse(danteJson);
export const kharn = LegendaryEventStaticSchema.parse(kharnJson);
export const mephiston = LegendaryEventStaticSchema.parse(mephistonJson);
export const patermine = LegendaryEventStaticSchema.parse(patermineJson);
export const ragnar = LegendaryEventStaticSchema.parse(ragnarJson);
export const shadowsun = LegendaryEventStaticSchema.parse(shadowsunJson);
export const trajann = LegendaryEventStaticSchema.parse(trajannJson);
export const vitruvius = LegendaryEventStaticSchema.parse(vitruviusJson);
export const lucius = LegendaryEventStaticSchema.parse(luciusJson);
export const farsight = LegendaryEventStaticSchema.parse(farsightJson);

export const allLegendaryEvents = [
    aunshi,
    shadowsun,
    ragnar,
    vitruvius,
    kharn,
    mephiston,
    patermine,
    dante,
    trajann,
    lucius,
    farsight,
];
