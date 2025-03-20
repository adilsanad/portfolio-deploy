import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback, useMemo } from 'react';

const ParticlesBackground = () => {
    const options = useMemo(() => {
        return {};
    }, []);

    const particlesinit = useCallback((engine) => {
        loadSlim(engine);
    })
    return <Particles init={particlesinit} options={options} />;
}

export default ParticlesBackground; 