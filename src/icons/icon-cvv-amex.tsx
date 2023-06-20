import * as React from 'react';
import {vars} from '../skins/skin-contract.css';

type Props = {
    role?: string;
    size?: number;
    color?: string;
};

const IconCvvAmex: React.FC<Props> = ({role = 'presentation', size = 48, color}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" role={role} style={{flexShrink: 0}}>
            <g fill={color || vars.colors.brand}>
                <path
                    d="M2.571 0H45.43C46.849 0 48 1.075 48 2.4v27.2c0 1.325-1.151 2.4-2.571 2.4H2.57C1.151 32 0 30.925 0 29.6V2.4C0 1.075 1.151 0 2.571 0zm0 1.2c-.71 0-1.285.537-1.285 1.2v27.2c0 .663.575 1.2 1.285 1.2H45.43c.71 0 1.285-.537 1.285-1.2V2.4c0-.663-.575-1.2-1.285-1.2H2.57z"
                    transform="translate(0 8)"
                />
                <path
                    d="M24.286 6.4H42c.473 0 .857.358.857.8v6.4c0 .442-.384.8-.857.8H24.286c-.474 0-.857-.358-.857-.8V7.2c0-.442.383-.8.857-.8zm.268 1.05v5.9h17.178v-5.9H24.554z"
                    transform="translate(0 8)"
                />
                <path
                    d="M26.949 12h.708V8.618h-.706l-.874.602v.659l.83-.572h.042V12zm2.509-2.56l-.015.202h.656c0-.326.225-.541.553-.541.31 0 .53.192.53.464 0 .22-.12.396-.595.86l-1.104 1.08V12h2.44v-.588h-1.481v-.042l.646-.617c.586-.55.786-.867.786-1.235 0-.581-.493-.987-1.198-.987-.658 0-1.13.361-1.218.91zm4.828 1.093h.42c.379 0 .61.183.61.478 0 .288-.245.487-.6.487-.362 0-.604-.18-.625-.466h-.677c.03.638.541 1.055 1.296 1.055.77 0 1.329-.43 1.329-1.022 0-.445-.291-.755-.755-.806v-.043c.377-.077.623-.382.623-.773 0-.532-.499-.912-1.193-.912-.738 0-1.214.403-1.237 1.043h.654c.019-.293.237-.478.565-.478.33 0 .541.174.541.445 0 .277-.218.464-.539.464h-.412v.528zM39.14 12h.675v-.59h.443v-.589h-.443V8.618h-.992l-.542.83c-.33.515-.593.953-.796 1.336v.625h1.655V12zm-1.02-1.195c.387-.701.69-1.175.999-1.636h.037v1.673H38.12v-.037z"
                    transform="translate(0 8)"
                />
            </g>
        </svg>
    );
};

export default IconCvvAmex;
