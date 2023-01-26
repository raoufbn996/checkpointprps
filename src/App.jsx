import React from 'react';
import Address from './Profil/Address';
import Fullname from './Profil/Fullname';
import Profilephoto from './Profil/Profilephoto';

function App() {
  return (
    <div className='mt-12'>
      <div className='flex flex-col items-center'>
     <Profilephoto url="/Profilpic-01.png"/>
     <Fullname name="Benramoul Abderraouf"/>
     <Address address="El-biar algerie"/>
      </div>
    </div>
  );
}

export default App;
