'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from './ui/button';

type IntroVideoScreenProps = {
    onVideoEnd: () => void;
};

export function IntroVideoScreen({ onVideoEnd }: IntroVideoScreenProps) {
    const isMobile = useIsMobile();
    // The video source will be determined client-side.
    // To prevent a flash of content or hydration errors, we only render the video when `isMobile` is determined.
    const videoSrc = isMobile === undefined ? '' : (isMobile ? '/intro_inicio_movil.mp4' : '/intro_inicio_pc.mp4');

    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center animate-in fade-in-0">
            {videoSrc && (
                <video
                    key={videoSrc} // Ensures the correct video loads if isMobile state changes
                    autoPlay
                    playsInline
                    onEnded={onVideoEnd}
                    className="w-screen h-screen object-contain"
                    muted // Autoplay on many browsers requires the video to be muted
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            )}
            <Button
                onClick={onVideoEnd}
                variant="ghost"
                className="absolute bottom-8 right-8 text-white bg-black/30 hover:bg-black/50 z-10 font-body"
            >
                Saltar Cinemática ➔
            </Button>
        </div>
    );
}
