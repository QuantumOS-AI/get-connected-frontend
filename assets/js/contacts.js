// // Fetch username from login info
// document.addEventListener('DOMContentLoaded', () => {
//     const contactDataStr  = localStorage.getItem('contactInfo');
//     console.log("contacts",contactDataStr )
    
    
//     if (contactDataStr ) {
//       const contactInfo = JSON.parse(contactDataStr );
//       document.getElementById('contact-name').textContent =  contactInfo.data[0].name;
//       document.getElementById('contact-tags').textContent =  contactInfo.data[0].tags[0];
//     //   document.getElementById('job-startdt').textContent = contactInfo.data[0].startDate;
//     //   document.getElementById('job-add').textContent = contactInfo.data[0].address;
//     //   document.getElementById('job-price').textContent = contactInfo.data[0].price;
//     } else {
//       console.warn('No user info found in localStorage');
//       // Optional redirect or fallback
//     }
//   });


// document.addEventListener('DOMContentLoaded', () => {
//     const contactDataStr = localStorage.getItem('contactInfo');
//     console.log("contacts", contactDataStr);
  
//     if (contactDataStr) {
//       const contactInfo = JSON.parse(contactDataStr);
//       const contactList = document.getElementById('contact-list');
  
//       contactInfo.data.forEach((contact, index) => {
//         const contactDiv = document.createElement('div');
//         contactDiv.className = 'contact-card';
  
//         // Only name and tag
//         contactDiv.innerHTML = `
//           <p><strong>Name:</strong> ${contact.name}</p>
//           <p><strong>Tag:</strong> ${contact.tags?.[0] || 'N/A'}</p>
//         `;
  
//         contactList.appendChild(contactDiv);
//       });
//     } else {
//       console.warn('No user info found in localStorage');
//     }
//   });
  

document.addEventListener('DOMContentLoaded', () => {
    const contactDataStr = localStorage.getItem('contactInfo');
    console.log("contacts", contactDataStr);
  
    if (contactDataStr) {
      const contactInfo = JSON.parse(contactDataStr);
      
      const nameList = document.getElementById('contact-name-list');
      const tagList = document.getElementById('contact-tags-list');
      const initialList = document.getElementById('contact-name-initial');
  
      contactInfo.data.forEach((contact) => {
        const nameEl = document.createElement('p');
        nameEl.textContent = contact.name;
        nameList.appendChild(nameEl);
  
        const tagEl = document.createElement('p');
        tagEl.textContent = contact.tags?.[0] || 'N/A';
        tagList.appendChild(tagEl);

        const nameParts = contact.name.trim().split(" ");
        const firstInitial = nameParts[0]?.charAt(0).toUpperCase() || '';
        const lastInitial = nameParts[nameParts.length - 1]?.charAt(0).toUpperCase() || '';
        const initials = firstInitial + lastInitial;
  
        const initialEl = document.createElement('p');
        initialEl.textContent = initials;
        initialList.appendChild(initialEl);
      });
    } else {
      console.warn('No user info found in localStorage');
    }
  });
  