import LAUGH_OUT_LOUD from './images/1_LAUGH_OUT_LOUD.svg';
import SAD from './images/2_SAD.svg';
import SHUSH from './images/3_SHUSH.svg';
import HAPPY from './images/4_HAPPY.svg';
import KISS from './images/5_KISS.svg';
import LIKE from './images/6_LIKE.svg';
import PARTY from './images/7_PARTY.svg';
import ANGRY from './images/8_ANGRY.svg';
import CRYING from './images/9_CRYING.svg';
import LOVELY from './images/10_LOVELY.svg';
import SCREAM from './images/11_SCREAM.svg';
import TRIUMPH from './images/12_TRIUMPH.svg';
import WINK from './images/13_WINK.svg';
import SHOCKED from './images/14_SHOCKED.svg';
import DISLIKE from './images/15_DISLIKE.svg';
import VICTORY from './images/16_VICTORY.svg';
import HUG from './images/17_HUG.svg';
import FIST_BUMP from './images/18_FIST_BUMP.svg';
import SLEEPING from './images/19_SLEEPING.svg';
import START from './images/20_START.svg';
import SLANG from './images/21_SLANG.svg';
import GRINNING from './images/22_GRINNING.svg';
import THINKING from './images/23_THINKING.svg';
import IN_LOVE from './images/24_IN_LOVE.svg';
import MIND_BLOWING from './images/25_MIND_BLOWING.svg';
import ROLLING_EYE from './images/26_ROLLING_EYE.svg';
import HAPPY_WINK from './images/27_HAPPY_WINK.svg';
import MOUTH_COVERING from './images/28_MOUTH_COVERING.svg';
import FINGERS_CROSSED from './images/29_FINGERS_CROSSED.svg';

import Image from 'next/image';

export enum EEmoji {
    LAUGH_OUT_LOUD,
    SAD,
    SHUSH,
    HAPPY,
    KISS,
    LIKE,
    PARTY,
    ANGRY,
    CRYING,
    LOVELY,
    SCREAM,
    TRIUMPH,
    WINK,
    SHOCKED,
    DISLIKE,
    VICTORY,
    HUG,
    FIST_BUMP,
    SLEEPING,
    START,
    SLANG,
    GRINNING,
    THINKING,
    IN_LOVE,
    MIND_BLOWING,
    ROLLING_EYE,
    HAPPY_WINK,
    MOUTH_COVERING,
    FINGERS_CROSSED,
}

type TEmojiImage = {
    src: string;
    alt: string;
};

const EmojiList: TEmojiImage[] = [
    { src: LAUGH_OUT_LOUD, alt: 'LAUGH OUT LOUD' },
    { src: SAD, alt: 'SAD' },
    { src: SHUSH, alt: 'SHUSH' },
    { src: HAPPY, alt: 'HAPPY' },
    { src: KISS, alt: 'KISS' },
    { src: LIKE, alt: 'LIKE' },
    { src: PARTY, alt: 'PARTY' },
    { src: ANGRY, alt: 'ANGRY' },
    { src: CRYING, alt: 'CRYING' },
    { src: LOVELY, alt: 'LOVELY' },
    { src: SCREAM, alt: 'SCREAM' },
    { src: TRIUMPH, alt: 'TRIUMPH' },
    { src: WINK, alt: 'WINK' },
    { src: SHOCKED, alt: 'SHOCKED' },
    { src: DISLIKE, alt: 'DISLIKE' },
    { src: VICTORY, alt: 'VICTORY' },
    { src: HUG, alt: 'HUG' },
    { src: FIST_BUMP, alt: 'FIST BUMP' },
    { src: SLEEPING, alt: 'SLEEPING' },
    { src: START, alt: 'START' },
    { src: SLANG, alt: 'SLANG' },
    { src: GRINNING, alt: 'GRINNING' },
    { src: THINKING, alt: 'THINKING' },
    { src: IN_LOVE, alt: 'IN LOVE' },
    { src: MIND_BLOWING, alt: 'MIND BLOWING', },
    { src: ROLLING_EYE, alt: 'ROLLING EYE' },
    { src: HAPPY_WINK, alt: 'HAPPY WINK' },
    { src: MOUTH_COVERING, alt: 'MOUTH COVERING' },
    { src: FINGERS_CROSSED, alt: 'FINGERS CROSSED' },
]

interface IEmoji {
    emoji?: EEmoji
    width?: number
    height?: number
    className?: string
}

export const Emoji = ({ emoji = EEmoji.HAPPY, width = 200, height = 200, className }: IEmoji) => {
    const { src, alt } = EmojiList[emoji];
    return <Image src={src} alt={alt} width={width} height={height} className={className} />
}
