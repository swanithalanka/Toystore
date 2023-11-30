import React, { useState } from 'react';
import Modal from 'react-modal';

function Account() {
  const [sectionContent, setSectionContent] = useState('');
  const [activeSection, setActiveSection] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
 
  const [editedMobileNumber, setEditedMobileNumber] = useState('');
  const [editedEmail, setEditedEmail] = useState('');

  const handleSectionChange = (e) => {
    setSectionContent(e.target.value);
  };

  const handleSectionClick = (sectionName) => {
    switch (sectionName) {
      case 'Account Overview':
        setSectionContent(
          <>
            <h2 className="text-2xl font-bold">Account Overview</h2>
            <hr className="my-2 border-gray-900" />
            <p>
              Mobile Number: {editedMobileNumber || 'Your mobile number goes here'}{' '}
              
            </p>
            <p>
              Email: {editedEmail || 'Your email goes here'}{' '}
              <button
                className="flex p-1 bg-blue-500 text-white rounded"
                onClick={() => openEditModal('Email')}
              >
                Edit
              </button>
            </p>
            <hr className="my-2 border-gray-900" />
            <h2 className="text-2xl font-bold mb-4">Default Shipping Address</h2>
            
            <p>Shipping address details go here</p>
            <hr className="my-2 border-gray-900" />
            <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
            
            <p>Orders details go here</p>
            <hr className="my-2 border-gray-900" />
            <h2 className="text-2xl font-bold mb-4">Your 4 Items</h2>
            
            <table class="w-96 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class=" px-2 py-3">
                    Order#
                </th>
                <th scope="col" class="px-2  py-3">
                    Date
                </th>
                <th scope="col" class="px-2  py-3">
                    Ship To
                </th>
                <th scope="col" class=" px-2 py-3">
                   Order Total
                </th>
                <th scope="col" class=" px-2 py-3">
                   Admin
                </th>
            </tr>
        </thead>
        <p>No order found</p>
    </table>
          </>
        );
        break;
        case 'Your Orders And Returns':
            setSectionContent(<>
            <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
            <hr className="my-2 border-gray-900" />
            <h2 className="text-2xl font-semi-bold mb-4">Your 0 iteams</h2>
            <div class="relative overflow-x-auto">
    <table class="w-96 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-2 py-3">
                    Order#
                </th>
                <th scope="col" class="px-2 py-3">
                    Date
                </th>
                <th scope="col" class="px-2 py-3">
                    Ship To
                </th>
                <th scope="col" class="px-2 py-3">
                   Order Total
                </th>
                <th scope="col" class="px-2 py-3">
                   Admin
                </th>
            </tr>
        </thead>
        <p>No order found</p>
    </table>
</div>
            </>);
            break;
          case 'Address Book':
            setSectionContent(<>
            <h2 className="text-2xl font-bold mb-4">Your Address</h2>
            <hr className="my-2 border-gray-900" />
            <h2 className="text-2xl font-semi-bold mb-4">Default shipping Address</h2>
            </>);
            break;
          case 'Archive Orders':
            setSectionContent(<>
            <h2 className="text-2xl font-bold mb-4">Your archived Orders</h2>
            <hr className="my-2 border-gray-900" />
            <h2 className="text-2xl font-semi-bold mb-4">Your 0 iteams</h2>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-2 py-3">
                    Product 
                </th>
                <th scope="col" class="px-2 py-3">
                    Product Name
                </th>
                <th scope="col" class="px-2 py-3">
                    Sku
                </th>
                <th scope="col" class="px-2 py-3">
                   Order Date
                </th>
                <th scope="col" class="px-2 py-3">
                   Invoice Number
                </th>
                <th scope="col" class="px-2 py-3">
                   Order Id
                </th>
                <th scope="col" class="px-2 py-3">
                   Ship To
                </th>
                <th scope="col" class="px-2 py-3">
                  Total
                </th>
                <th scope="col" class="px-2 py-3">
                   Status
                </th>
            </tr>
        </thead>
        <p>No orders Found</p>
    </table>
            </>);
            break;
          case 'Sign Out':
            setSectionContent('');
            break;
          default:
            setSectionContent('');
      
    }
    setActiveSection(sectionName);
  };

  const openEditModal = (field) => {
    setEditModalOpen(true);
   
    setEditedMobileNumber(' mobile number');
    setEditedEmail(' email');
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const handleSaveEdit = () => {
    
    setEditedMobileNumber(editedMobileNumber);
    setEditedEmail(editedEmail);
    closeEditModal();
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-yellow-100 p-4 text-black text-center">
      <h5 className="text-3xl font-bold mb-2 mt-12">Your Toystore Account</h5>
        <div
          className={`cursor-pointer p-2  ${
            activeSection === 'Account Overview' ? 'bg-yellow-200' : ''
          }`}
          onClick={() => handleSectionClick('Account Overview')}
        >
          Account Overview
        </div>
        <hr className="my-2 border-gray-900" />
        <div
          className={`cursor-pointer p-2  ${
            activeSection === 'Your Orders And Returns' ? 'bg-yellow-200' : ''
          }`}
          onClick={() => handleSectionClick('Your Orders And Returns')}
        >
          Your Orders And Returns
        </div>
        <hr className="my-2 border-gray-900" />
        <div
          className={`cursor-pointer p-2  ${
            activeSection === 'Address Book' ? 'bg-yellow-200' : ''
          }`}
          onClick={() => handleSectionClick('Address Book')}
        >
          Address Book
        </div>
        <hr className="my-2 border-gray-900" />
        <div
          className={`cursor-pointer p-2  ${
            activeSection === 'Archive' ? 'bg-yellow-200' : ''
          }`}
          onClick={() => handleSectionClick('Archive Orders')}
        >
          Archive Order
        </div>
        <hr className="my-2 border-gray-900" />
        <div
          className={`cursor-pointer p-2 text-red-500 ${
            activeSection === 'SignOUt' ? 'bg-yellow-200' : ''
          }`}
          onClick={() => handleSectionClick('Sign Out')}
        >
          Sign Out
        </div>
       
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-4">
        
        <div className=" p-4">{sectionContent}</div>
      </div>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
        contentLabel=" Modal"
        style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              width: '300px',
              height:'400px',  
              margin: 'auto',
              padding: '20px',
            },
          }}
      >
        <h2 className='font-bold'>Contact Information {activeSection}</h2>
        <label htmlFor="editedMobileNumber">Mobile Number:</label>
        <input
        className='flex  border border-black rounded'
          id="editedMobileNumber"
          type="text"
          value={editedMobileNumber}
          onChange={(e) => setEditedMobileNumber(e.target.value)}
        />
        <label htmlFor="editedEmail">Email:</label>
        <input
        className='flex border border-black rounded'
          id="editedEmail"
          type="text"
          value={editedEmail}
          onChange={(e) => setEditedEmail(e.target.value)}
        />
        <button onClick={handleSaveEdit} className='border rounded mr-2 ml-2 border-r-2 border-b-2 mt-2 '>Submit</button>
        
      </Modal>
    </div>
  );
}

export default Account;
