import Image from 'next/image';
import squirrelsLogo from '../../../../images/squirrels-primary-logo-red-png-rgb.png';

export default function Squirrels({children}) {
    return (
        <div className="container mx-auto px-4">
            <Image src={squirrelsLogo} alt="Squirrel Logo" className="sectionLogo" />
            {children}
        </div>
    );
}