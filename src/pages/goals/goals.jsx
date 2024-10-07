import React, { useState } from 'react';
import Goal_creation from './goal_creation';
import { X } from 'lucide-react';

function Goals() {
  const [showModal, setShowModal] = useState(false);

  const handleToggleDrawer = () => {
    setShowModal(!showModal);
    document.getElementById("my-drawer-4").checked = !showModal;
  };

  return (
    <div className='w-full h-full bg-white'>
      <div className="drawer drawer-end">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          checked={showModal}
          onChange={handleToggleDrawer} // toggles drawer and modal state
        />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className={showModal ? 'drawer-overlay backdrop-blur-md' : 'drawer-overlay'}
          ></label>

          <div className="menu text-base-content p-0 h-full  bg-white border w-[45%] relative ">
            {showModal && (
              <div className='absolute top-3 -left-14 bg-gray-300 border p-1 rounded-lg'>
                <X onClick={handleToggleDrawer} className="size-7 text-gray-700 cursor-pointer" />
              </div>
            )}
            <Goal_creation /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
