import Image from 'next/image';
import scoutsLogo from '../../../../images/scouts-logo-green.png';

export default function ScoutsLayout({children}) {
    return (
        <div className="container mx-auto px-4">
            <Image src={scoutsLogo} alt="Scouts Logo" className="sectionLogo" />
            {children}
        </div>
    );
}