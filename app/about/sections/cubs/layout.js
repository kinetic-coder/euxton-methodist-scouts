import Image from 'next/image';
import cubsLogo from '../../../../images/cubs-logo-green.png';

export default function CubsLayout({children}) {
    return (
        <div className="container mx-auto px-4">
            <Image src={cubsLogo} alt="Cubs Logo" className="sectionLogo" />
            {children}
        </div>
    );
}