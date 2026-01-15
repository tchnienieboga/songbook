import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Mode = {
    PLAIN: 'plain',
    STARRED: 'starred',
    SELECTED: 'selected'
} as const;

export type StarMode = (typeof Mode)[keyof typeof Mode];

interface StarProps {
    mode: StarMode;
}

const Star = ({ mode }: StarProps) => {
    return <FontAwesomeIcon icon={faStar} className={classNames('sb-star', `sb-star-mode-${mode}`)} />;
};

export default Star;
