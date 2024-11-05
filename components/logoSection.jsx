import Marquee from 'react-fast-marquee';

const LogoSection = () => {
    return (
      <Marquee speed={50} gradient={false} className='pb-10'>
        <div className='flex space-x-20'>
          <img src="/images/coinsub.svg" alt="Logo 1" />
          <img src="/images/cube3.svg" alt="Logo 2"  />
          <img src="/images/fractal-id.svg" alt="Logo 3" />
          <img src="/images/movement_labs.svg" alt="Logo 1" />
          {/* Add more logos as needed */}
        </div>
      </Marquee>
    );
  };

  export default LogoSection;