import Image from 'next/image';
import beaversLogo from '../../../../images/beavers-logo-multi-colour.png';

export default function BeaversLayout({children}) {
    return (
        <div className="container mx-auto px-4">
            <Image src={beaversLogo} alt="Beavers Logo" className="sectionLogo"/>
            {children}
        </div>
    );
}